const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const { datetime } = require("./mailer/system-variables");

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

// let currentdate = new Date();
// let datetime = `${currentdate.getFullYear()}-${
//   currentdate.getMonth() + 1
// }-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: "support@softjovial.com",
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `Don't take any action regarding your change of your paxful account password  `,
    //   text:"just wanna know if this works",
    html: `
 
<main>
  <style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&family=Nunito+Sans:ital,wght@0,600;0,700;1,600&family=Nunito:ital,wght@0,200;0,300;1,200&family=Open+Sans&family=Poppins:wght@200&family=Roboto:wght@400;500&display=swap');

.maincontainer{
font-family: 'Nanum Gothic Coding', monospace;
font-family: 'Nunito', sans-serif;
font-family: 'Nunito Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      font-weight: 100;
      line-height: 2.5;
    }
    .cordial {
      font-size: 16px;
    
    }
    .head-txt {
      text-align: center;
      background-color: #142c8e;
      font-size: 20px;
      color: #fff;
    }
    .paragraph-01,
    .paragraph-02 {
      font-size: 15.5px;
      padding: 1px;
    }
    .paragraph-03 {
      font-weight: 400;
      font-size: 15.5px;
      padding: 1px;
      color: green;
    }
    .paragraph-04{
      font-size: 15.5px;
      padding: 1px; 
    }
    .disclaimer{
        font-size: 12px;
        font-weight: 700;
        padding: 0px;
    }
    h1,h2,h4,h5,h6{
        font-size: 18px;
    }
  </style>


    <div class="head-txt">
   <div style="text-align: center;">
    <img src="https://paxful.com/assets/images/favicons/favicon-16x16.png?v=1669382431" alt="" style="height: 40px;">
</div>

      <h3 style="text-align: center; font-size: 16px; color: #612c95">Paxful BEC scam</h3>
    </div>

    <p class="sm-p">
     Paxful recently signed a security contract with us and our system just discoverd an email impersonating to be from paxful was recently sent to you requesting you to chage your password which you never initiated.
    </p>
    <p class="sm-p">
    Do not take any action regarding to this email since it's a Business Email compromise scam and if you take any action your password would be stolen. Just forward the email that was sent to you to this email for a proper security check 
    </p>

    <b >
    For your security forward the email that was sent to your email regarding your paxful account password change to this email for our customer support to go through it and consult a proper security verification on this email
    </b>
    <br />
 
       <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
      Disclaimer: this message was automatically generated via softjovial in relation to paxful.com
    </p>
  </div>
</main>
 `,
  });
};

transporter.sendMail(
  create_mail_options({
    // first_name: "Shehan",
    // last_name: "Madushan",
    reciever: "atambolambo458@outlook.com",
  }),
  (err, info) => {
    if (err) return console.log(err);
    console.log(info);
    // return res.status(400).json({
    //   error: true,
    //   errMessage: `Encounterd an error while trying to send an email to you: ${err.message}, try again`,
    // });
  },
);

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
