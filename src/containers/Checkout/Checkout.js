import React, { Component } from "react";
import { Route ,Redirect} from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummery/CheckoutSummery";
import ContactData from "./ContactData/ContactData";
import {connect } from 'react-redux'

class Checkout extends Component {
 
//  componentWillMount(){
//    this.props.onInitPurchase()
//  }


  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace("./checkout/contact-data");
  };

  render() {
    let summary =<Redirect to ="/"/>
    
    if (this.props.ings){
      const purchasesRedirect=this.props.purchased ?<Redirect to ="/" />:null
      summary =(
        <div>
          {purchasesRedirect}
        <CheckoutSummary
        ingredients={this.props.ings}
        checkOutCancelled={this.checkoutCancelledHandler}
        checkOutContinued={this.checkoutContinuedHandler}
      />
      <Route
      path={this.props.match.path + "/contact-data"}
     component={ContactData}/>
     </div>
     );

    }
    return summary
  }
}
const mapStateToProps = state=>{
  return {
    ings: state.burgerBuilder.ingredients,
    purchased : state.order.purchased
  }
}



export default  connect(mapStateToProps)(Checkout);
