// const collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
// const collapseList = collapseElementList.map((collapseEl) => {
//   return new mdb.Collapse(collapseEl, {
//     toggle: false,
//   });
// });

  
// document.addEventListener("DOMContentLoaded", (event) => {
//     // Add an event listener for when the user clicks the submit button to pay
//     document.getElementById("submit").addEventListener("click", (e) => {
//         e.preventDefault();
//         const PBFKey = "FLWPUBK_TEST-7956b56a304b9dca8951319131907c44-X"; // paste in the public key from your dashboard here
//         const txRef = ''+Math.floor((Math.random() * 1000000000) + 1); //Generate a random id for the transaction reference
//         const email = document.getElementById('email').value;
//         const phone = document.getElementById('phone').value;
//         const amount = document.getElementById('amount').value;
        
       

//         // getpaidSetup is Rave's inline script function. it holds the payment data to pass to Rave.
//     getpaidSetup({
//         PBFPubKey: PBFKey,
//         customer_email: email,
//         amount: amount,
//         customer_phone: phone,
//         currency: "NGN",  // Select the currency. leaving it empty defaults to NGN
//         txref: txRef, // Pass your UNIQUE TRANSACTION REFERENCE HERE.
    
//         onclose: function() {},
//         callback: function(response) {
//             flw_ref = response.tx.flwRef;// collect flwRef returned and pass to a server page to complete status check.
//             console.log("This is the response returned after a charge", response);
//             if(response.tx.chargeResponse =='00' || response.tx.chargeResponse == '0') {
//             // redirect to a success page
//             } else {
//             // redirect to a failure page.
//             }
//         }
//       });
//     });
// });

// function makePayment() {
//     FlutterwaveCheckout({
//       public_key: "FLWPUBK_TEST-7956b56a304b9dca8951319131907c44-X",
//       tx_ref: "titanic-48981487343MDI0NzMx",
//       amount: "amount",
//       currency: "NGN",
//       payment_options: "card, mobilemoneyghana, ussd",
//       redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
//       meta: {
//         consumer_id: 23,
//         consumer_mac: "92a3-912ba-1192a",
//       },
//       customer: {
//         email: "rose@unsinkableship.com",
//         phone_number: "08102909304",
//         name: "Rose DeWitt Bukater",
//       },
//       customizations: {
//         title: "Arrow House",
//         description: "Bookings Paymentsss",
//         logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
//       },
//     });
// }