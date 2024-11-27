const router = require("express").Router();
const {staffsalary} = require("express");
let StaffSalary = require("../models/staffsalary");


//Create Class..
router.route("/addssalary").post((req,res)=>{

    const syear = req.body.syear;
    const smonth = req.body.smonth;
    const sweek =  req.body.sweek;
    const samount =  Number(req.body.samount);
    const sstatus =  req.body.sstatus;



    const newStaffSalary = new StaffSalary({
        syear,
        smonth,
        sweek,
        samount,
        sstatus

    })

    newStaffSalary.save().then(()=>{
        res.json(" Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Read..
router.route("/allssalary").get((req,res)=>{

    StaffSalary.find().then((staffsalary)=>{
        res.json(staffsalary)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/salaryreport").get((req,res)=>{

    StaffSalary.find().then((staffsalary)=>{
        res.json(staffsalary)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/table").get((req,res)=>{

    StaffSalary.find().then(()=>{
        res.json(staffsalary)
    }).catch((err)=>{
        console.log(err)
    })
})

//Update Class..
/*router.route("/update/:id").put(async (req, res) => {
    let classId = req.params.id;
    const {classname, grade, date, time, link} = req.body;

    const updateClass = {
        classname,
        grade,
        date,
        time,
        link
    }

    const update = await Class.findByIdAndUpdate(classId, updateClass)
    .then(() => {
    res.status(200).send({status: "Class Updated"})
}).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
})   
}) */

//Delete Class..
router.route("/deletessalary/:id").delete(async (req, res) => {
    let staffsalaryId = req.params.id;

    await StaffSalary.findByIdAndDelete(staffsalaryId)
    .then(() => {
        res.status(200).send({status: "Route Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete route", error: err.message});
    })
})

//Read Class..
/*router.route("/get/:id").get(async (req, res) => {
    let classId = req.params.id;
    const user = await Class.findById(classId)
    .then((user) => {
         res.status(200).send({status: "Class fetched", user: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get class", error: err.message});
    })
})  */

router.route("/getssalary/:id").get(async (req, resp) => {
    let result = await StaffSalary.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})  





router.route("/updatessalary/:id").put(async (req, resp) => {
    let result = await StaffSalary.findByIdAndUpdate({_id:req.params.id},{$set: req.body})
    
   resp.send(result)
})  

module.exports = router;