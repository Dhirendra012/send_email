const nodemailer = require('nodemailer');

const sendEmail = async ( req , res ) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'tate.hilpert54@ethereal.email',
            pass: 'tQnhKMT1ZRAhR95GXm'
        }
    });

    let info = await transporter.sendMail({
        from: '"Coding Addict" <codingaddict@gmail.com>',
        to: 'bar@example.com',
        subject: 'Hello',
        html: '<h2>Sending Emails with Node.js<h2>'
    });

    res.json(info);
}

module.exports = sendEmail;