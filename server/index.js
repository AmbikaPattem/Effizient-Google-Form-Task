const express = require("express");
var mysql = require('mysql2');
const nodemailer = require("nodemailer");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'sop_db'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // con.query(`CREATE DATABASE IF NOT EXISTS sop_db;`,function(){ 
    var query_create = `CREATE TABLE IF NOT EXISTS sop_generator (
        name VARCHAR(30),email VARCHAR(30),age INT(3),education VARCHAR(20),
        insititute VARCHAR(30),course VARCHAR(30),experience VARCHAR(30),college VARCHAR(30),
        program VARCHAR(30),country VARCHAR(30),goals VARCHAR(30),listening VARCHAR(30),
        reading VARCHAR(30), speaking VARCHAR(30),writing VARCHAR(30),tuition VARCHAR(30),
        pay VARCHAR(30),gic VARCHAR(30),gic_pay VARCHAR(30)
        )`;
    con.query(query_create,function(error){
        if(error){
            console.log(error);
            res.send(error);
        }
        else{
            console.log('Table created');
        }
    })
  // })
  });

const PORT = process.env.PORT || 3001;

const app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });
app.post("/sopGenerator", (req, res) => {
    console.log(req.body.email)
    const body = req.body;
    const insertQuery = `
    INSERT INTO sop_generator (
        name,email,age,education,
        insititute,course,experience,college,
        program,country,goals,listening,
        reading, speaking,writing,tuition,
        pay,gic,gic_pay
    )
        VALUES ('${body.name}','${body.email}','${body.age}','${body.education}','${body.insititute}','${body.course}',
            '${body.experience}','${body.college}','${body.program}','${body.country}','${body.goals}','${body.listening}',
            '${body.reading}','${body.speaking}','${body.writing}','${body.tuition}',
            '${body.pay}','${body.gic}','${body.gic_pay}')
    `;
    con.query(insertQuery,function(error){
        if(error){
            console.log(error);
            // res.send(error);
            res.json({ status:500,message: "Something went wrong!" });
        }
        else{
            console.log('inserted data');
            main(body).catch(console.error);
            res.json({ status:200,message: "Data stored and mail sent successfully!" });
        }
        
        
    })
    // res.json({ message: "Hello from server!" });
    
});
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "ambikapattem@gmail.com",
      pass: "PASSWORD_HERE",
    },
  });
  
// async..await is not allowed in global scope, must use a wrapper
async function main(body) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"ambikapattem@gmail.com', // sender address
      to: body.email, // list of receivers
      subject: "Google Form Created by Ambika", // Subject line
      text: "", // plain text body
      html: `
      <div>
      <h2 style="text-aligin:center">Google Forms</h2>
<span><b>Email:</b> ${body.email}</span><br/>
<span><b>Name:</b> ${body.name}</span><br/>
<span><b>Age:</b> ${body.age}</span><br/>
<span><b>Education:</b> ${body.education}</span><br/>
<span><b>Institute:</b> ${body.insititute}</span><br/>
<span><b>Course:</b> ${body.course}</span><br/>
<span><b>Experience:</b> ${body.experience}</span><br/>
<span><b>College:</b> ${body.college}</span><br/>
<span><b>Program:</b> ${body.program}</span><br/>
<span><b>Country:</b> ${body.country}</span><br/>
<span><b>Future_Goals:</b> ${body.goals}</span><br/>
<span><b>English_listening:</b> ${body.listening}</span><br/>
<span><b>English_reading:</b> ${body.reading}</span><br/>
<span><b>English_speaking:</b> ${body.speaking}</span><br/>
<span><b>English_writing:</b> ${body.writing}</span><br/>
<span><b>Tuition:</b> ${body.tuition}</span><br/>
<span><b>Pay:</b> ${body.pay}</span><br/>
<span><b>GIC:</b> ${body.gic}</span><br/>
<span><b>Gic_pay:</b> ${body.gic_pay}</span><br/></div>`,
    });
    console.log("Message sent: %s", info.messageId);
  }
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});