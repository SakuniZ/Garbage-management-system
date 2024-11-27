const router = require("express").Router();
const {staffrequest} = require("express");
let StaffRequest = require("../models/staffrequest");


//Create Class..
router.route("/addstaffrequest").post((req,res)=>{

    const staffsize = Number(req.body.staffsize);
    const workarea = req.body.workarea;
    const reqdate =  req.body.reqdate;
    const cnumber =  Number(req.body.cnumber);
    const reqstatus =  req.body.reqstatus;



    const newStaffRequest = new StaffRequest({
        staffsize,
        workarea,
        reqdate,
        cnumber,
        reqstatus

    })

    newStaffRequest.save().then(()=>{
        res.json(" Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Read..
router.route("/allstaffrequest").get((req,res)=>{

    StaffRequest.find().then((staffrequest)=>{
        res.json(staffrequest)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/staffrequestview").get((req,res)=>{

    StaffRequest.find().then((staffrequest)=>{
        res.json(staffrequest)
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
router.route("/deletestaffrequest/:id").delete(async (req, res) => {
    let staffrequestId = req.params.id;

    await StaffRequest.findByIdAndDelete(staffrequestId)
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

router.route("/getstaffrequest/:id").get(async (req, resp) => {
    let result = await StaffRequest.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})  





router.route("/updatestaffrequest/:id").put(async (req, resp) => {
    let result = await StaffRequest.findByIdAndUpdate({_id:req.params.id},{$set: req.body})
    
   resp.send(result)
})  

module.exports = router;