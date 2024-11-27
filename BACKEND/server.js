const express = require("express");
const mongoose = require("mongoose");

const CustomerData = require("./customer");
//--------------------------------------------------------------------------------..--------------------end

const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const uuid = require('uuid').v4
const dotenv = require("dotenv")
const app = express();
const stripe = require("stripe")("sk_test_51NqHFfB36akorYVl66XfLD8NSaoMvad28vPp0at2SXWbA6A28DaLvsWZFAlE5dGQJkWtPCyIeub9MZYh12bHvIvL009W00Mftn")
require("dotenv").config();

const PORT = process.env.PORT || 8070;


app.use(cors());
// ---------------------------------------------------------------------------------
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//--------------------------------------------------------------------------------..--------------------end
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
   
    useNewUrlParser: true
    
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb connection success!");
})


const staffsalaryRouter = require("./routes/staffsalaries.js");
const staffmemberRouter = require("./routes/staffmembers.js");
const staffrequestRouter = require("./routes/staffrequests.js");


app.use("/staffsalary",staffsalaryRouter);
app.use("/staffsalary",staffsalaryRouter);
app.use("/staffmember",staffmemberRouter);
app.use("/staffrequest",staffrequestRouter);





//





app.post("/repass",async(req,res)=>{
    try{
        const username=req.body.username
        const check=await CustomerData.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    } catch(error) {
        res.json('fail')
        
    }
})




//----------------------------------------------------------------------------------------------------


app.post('/checkout', async(req,res) => {
    console.log(req.body) 

    let error,status

    try{

      const{product01,token} = req.body

      const customer = await stripe.customers.create({
        email: token.email,
        source:token.id
      })
      const key = uuid()
      const charge = await stripe.charges.create(
        {
          amount: product01.price * quantity001 * 100,
          currency: "lkr",
          customer: customer.id,
          receipt_email: token.email,
          shipping:{
            name:token.card.name,
            address:{
              line1:token.card.address_line1,
              line2:token.card.address_line2,
              city:token.card.address_city,
              country:token.card.address_country,
              postal_code:token.card.address_zip,
            },
          },
        },
        {
          key,
        }
      );

      console.log("Charge:",{charge});
      status = "success";

    }catch(error){
      console.log(error)
      status = "failure";
    }
    res.json({error,status});
  
})



app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
})

