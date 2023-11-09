const express = require('express');
const translate = require("translate-google")

const app = express();
app.use(express.json());


app.post("/translate", async (req, res) => {
    try {
    const { message, to } = req.body 
   const translation =  await translate(message, { from: "auto", to: to })
   return res.status(200).send({status: true, message: "Translate Your Language", data: translation});
   
    } catch(err){
        console.log(error);
        return res.status(500).send({ status: false, error: error.message });
    }
})
app.listen(process.env.PORT || 3000,  () => {
    console.log("Server is Running at Port....");
  });