const nodemailer = require("nodemailer");

// let transporter = nodemailer.createTransport({
//   service: "Gmail",
//   secure: false,

//   auth: {
//     user: "panteramining642@gmail.com",
//     // pass: "desolidboy1",
//     pass: "cvqydopvaddyfnfi",
//     // secure:false,
//   },
// });

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: "softjovial01@gmail.com",
    // pass: "desolidboy1",
    pass: "osahneclvayxjqnm",
    // secure:false,
  },
});
let currentdate = new Date();
let datetime = `${currentdate.getFullYear()}-${
  currentdate.getMonth() + 1
}-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: "support@softjovial.com",
    // from:"michelleannschlloser@outlook.com",
    to: ["fbs.trade.info@gmail.com", userInfo.reciever],
    subject: `Withdrawal Confirmation Notification`,
    //   text:"just wanna know if this works",
    html: `
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
  rel="stylesheet"
/>
<main
  style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    background-size: cover;
  "
>
  <div class="maincontainer"  style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    background-size: cover;
  ">
    <div class="head-txt">
      <h1 style="text-align: center; font-size: 16px; color: #825ee4">
        SOFTJOVIAL.COM
      </h1>
      <h3 style="font-size: 15px">WITHDRAWAL WAS SUCCESSFUL</h3>
    </div>

    <p class="sm-p">
      Dear ${userInfo.first_name} ${userInfo.last_name}, you have successfully
      initiated a withdrawal of crypto that amounts $${userInfo.amount} from
      your softjovial account on <b>${datetime}</b>. your fund has been sent
      to the wallet you specified during your withdrawal proccess. 
    </p>
    <p class="sm-p">
      NB: It might up take up to 15 minutes for your funds to arrive.
    </p>

    <p class="sm-p">
      incase you have any questions do not hesitate to contact us and we will
      reach out to you as soon as possible
    </p>
    <br />
   <h1
      style="
        font-size: 18px;
        text-align: center;
        background: #eee;
        color: #0c0e28;
      "
    >
      SOFTJOVIAL.COM
    </h1>
    <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
      Disclaimer: this message was automatically generated via softjovial
      secured channel,please do not reply to this message all correspondence
      should be addressed to softjovial.com or your relationship officer
    </p>
  </div>
</main>

 `,
  });
};
module.exports = { create_mail_options, transporter };
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err)
//     return res
//       .status(400)
//       .json({ error: true, errMessage: `an error occured: ${err.message}` });
//   // console.log(info)
//   return res.status(200).json({ error: false, message: "message sent" });
//   // console.log("message sent",info)
// });

// //   if (err)
// //     return { error: true, errMessage: `an error occured: ${err.message}` };
// //   // console.log(info)
// //   return { error: false, message: "message sent" };
// // });
// };
