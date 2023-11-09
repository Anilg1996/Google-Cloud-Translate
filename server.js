const express = require('express');
const translate = require("translate-google")

const app = express();
app.use(express.json());


app.post("/translate", async (req, res) => {
    const { message, to } = req.body 
   const translation =  await translate(message, { from: "auto",to: to })
   return res.status(200).send({status: true, message: "Translate Your Language", data: translation})
})
app.listen(process.env.PORT || 3000,  () => {
    console.log("Server is Running at Port....");
  });