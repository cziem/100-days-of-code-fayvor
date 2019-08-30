const nodemailer = require( 'nodemailer' )
const { USER_EMAIL, USER_PASS, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

// Email Verification Service
class EVS {
  async sendMail( email, message, subject ) {
    dev ? await this.mailTester( email, message, subject ) : await this.mailer( email, message, subject )
  }

  async mailTester( email, message, subject ) {
    let transporter = nodemailer.createTransport( {
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: USER_EMAIL,
        pass: USER_PASS
      }
    } )

    // send mail with defined transport object
    let info = await transporter.sendMail( {
      from: `"Trace Toyna 💩" ${USER_EMAIL}`,
      to: email,
      subject: subject,
      html: message
    } );

    console.log( 'info object', info )

    console.log( 'Message sent: %s', info.messageId );
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log( 'Preview URL: %s', nodemailer.getTestMessageUrl( info ) );
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  async mailer( email, message, subject ) {
    let transporter = nodemailer.createTransport( {
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: USER_EMAIL,
        pass: USER_PASS
      }
    } )

    // send mail with defined transport object
    let info = await transporter.sendMail( {
      from: `"Trace Blanc 🖤" ${USER_EMAIL}`,
      to: email,
      subject: subject,
      html: message
    } );

    console.log( 'info object', info )

    console.log( 'Message sent: %s', info.messageId );
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log( 'Preview URL: %s', nodemailer.getTestMessageUrl( info ) );
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
}

module.exports = EVS