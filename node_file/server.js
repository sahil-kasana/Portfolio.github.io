const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');



// Middleware to parse JSON request bodies
app.use(express.json()); // Parse JSON body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended :  true }));
app.use(cors());

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "sahilyogi9571@gmail.com",
            pass: "thlh qoqe zres awgx",
        },
    });

    const mailOptions = {
        from: email,
        to: "sahilyogi9571@gmail.com",
        subject: "Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ message: "Failed to send email" });
        } else {
            console.log("Email sent:", info.response);
            res.json({ message: "Email sent successfully" });
        }
    });
});


// Start the server
const port = 3006;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
