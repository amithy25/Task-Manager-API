const sgmail = require('@sendgrid/mail')


sgmail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{
    sgmail.send({
        to: email,
        from: 'amithyred25@gmail.com',
        subject: 'Welcome to the task application.',
        text: `Welcome to the task application, ${name}. let me know how you get along with the application.`,
    })
}

const sendCancelEmail = (email,name)=>{
    sgmail.send({
        to: email,
        from: 'amithyred25@gmail.com',
        subject: 'Sorry to see you go',
        text: `Hi ${name}, you deleted your account. may i please know where we went wrong in serving you? hope you return to us. Thank you.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}