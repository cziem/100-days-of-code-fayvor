const { NODE_ENV, MAILGUN_API_KEY, MAILGUN_DOMAIN, SENDGRID_API_KEY, SENDGRID_USER } = process.env
const dev = NODE_ENV || 'development'
const mailgun = require( 'mailgun-js' )
const mg = mailgun( { apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN } )
const sgMail = require( '@sendgrid/mail' );
sgMail.setApiKey( SENDGRID_API_KEY );


// Email Verification Service
class EVS {
  async sendMail( email, message, subject ) {
    dev ? await this.mailTester( email, message, subject ) : await this.mailer( email, message, subject )
  }

  async mailTester( email, message, subject ) {
    const msg = {
      from: `Trace Cool, Program Lead <${SENDGRID_USER}>`,
      to: email,
      subject: subject,
      html: message
    };

    const data = await sgMail.send( msg )

    console.log( JSON.stringify( data.response ) )

    // const data = {
    //   from: 'George Favour, Program Lead <me@samples.mailgun.org>',
    //   to: email,
    //   subject: subject,
    //   html: message
    // };

    // console.log( 'data', data );

    // // const body = await mg.messages().send( data );
    // // console.log( 'body', body );

    // mg.messages().send( data, function ( error, body ) {
    //   if ( error ) {
    //     console.log( error )
    //   }
    //   console.log( 'body', body );
    // } );
  }

  async mailer( email, message, subject ) {
    const data = {
      from: 'George Favour, Program Lead <dev@writr.com>',
      to: email,
      subject: subject,
      html: message
    };

    mg.messages().send( data, function ( error, body ) {
      if ( error ) {
        console.log( error )
      }
      console.log( body );
    } );
  }
}

module.exports = EVS