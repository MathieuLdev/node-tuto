const nodemailer = require("nodemailer");
const sendEmail = async (req, res) => {
	const testAccount = await nodemailer.createTestAccount();

   const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'verner.torphy54@ethereal.email',
          pass: 'ThwfXC8yP2SM8tVwWT'
      }
  });

  const info = await transporter.sendMail({
     from:'"Mathieu" <nemoimba3@gmail.com>',
     to: 'bar@exmaple.com',
     subject: 'Hello',
     html: '<h2>Sending emails with Node.js</h2>'
  })

	res.json(info);
};

module.exports = sendEmail;
