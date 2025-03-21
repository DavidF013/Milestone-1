const express = require('express')
const app = express()

const nodemailer = require("nodemailer")

const PORT = process.env.PORT || 5000;
  
    
//Middleware 
app.use(express.static('Milestone_1'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/Milestone-1/contact.html')
}) 


app.post('/', (req, res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user:'testemail730702@gmail.com',
            pass: 'Password#1234'
        }
    })
  
 const mailOptions = {
    from: req.body.email,
    to: 'testemail730702@gmail.com',
    subject: `Message from ${req.body.email}: ${req.body.sebject}`,
    text: req.body.message 
 } 

 transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
        console.log(error);
    } else{
        console.log('Email sent: ' + info.response);
        res.send('success')
    }
})
  
})
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
}) 


  
