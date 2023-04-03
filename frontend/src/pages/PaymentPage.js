import React from 'react'

const PaymentPage = () => {
  return (
      <div className='paymentContainer' style={{ backgroundColor: "#b3e3e0" , height: "100vh"  , width: "100vw", display: "flex" , alignItems: "center" , justifyContent:"Center"}}>
          <div className='payment-wrapper'>
              <h1 style = {{fontWeight:"bold" ,fontSize:"35px"}}>Your Payment is Successful </h1>
          </div>
    </div>
  )
}

export default PaymentPage