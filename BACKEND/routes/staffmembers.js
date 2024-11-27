const router = require("express").Router();
const { staffmember } = require("express");
let StaffMember = require("../models/staffmember");

//Create Class..
router.route("/addsmember").post((req, res) => {
  const mname = req.body.mname;
  const memail = req.body.memail;
  const mphone = Number(req.body.mphone);
  const mdate = req.body.mdate;
  const maddress = req.body.maddress;
  const mage = Number(req.body.mage);
  const mgender = req.body.mgender;
  const mrole = req.body.mrole;
  const mnic = Number(req.body.mnic);
  const mwdays = req.body.mwdays;
  const msalary = Number(req.body.msalary);

  const newStaffMember = new StaffMember({
    mname,
    memail,
    mphone,
    mdate,
    maddress,
    mage,
    mgender,
    mrole,
    mnic,
    mwdays,
    msalary,
  });

  newStaffMember
    .save()
    .then(() => {
      res.json(" Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Read..
router.route("/allsmember").get((req, res) => {
  StaffMember.find()
    .then((staffmember) => {
      res.json(staffmember);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/staffsalaryreport").get((req, res) => {
  StaffMember.find()
    .then((staffmember) => {
      res.json(staffmember);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/viewstaffsalaryreport").get((req, res) => {
  StaffMember.find()
    .then((staffmember) => {
      res.json(staffmember);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Update Class..
router.route("/update/:id").put(async (req, res) => {
  let classId = req.params.id;
  const {
    mname,
    memail,
    mphone,
    mdate,
    maddress,
    mage,
    mgender,
    mrole,
    mnic,
    mwdays,
    msalaryk,
  } = req.body;

  const updateClass = {
    mname,
    memail,
    mphone,
    mdate,
    maddress,
    mage,
    mgender,
    mrole,
    mnic,
    mwdays,
    msalary,
  };

  const update = await Class.findByIdAndUpdate(classId, updateClass)
    .then(() => {
      res.status(200).send({ status: "Class Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

//Delete Class..
router.route("/deletesmember/:id").delete(async (req, res) => {
  let staffmemberId = req.params.id;

  await StaffMember.findByIdAndDelete(staffmemberId)
    .then(() => {
      res.status(200).send({ status: "Route Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete route", error: err.message });
    });
});

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

router.route("/getsmember/:id").get(async (req, resp) => {
  let result = await StaffMember.findById({ _id: req.params.id });

  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No Record Found." });
  }
});

router.route("/updatesmember/:id").put(async (req, resp) => {
  let result = await StaffMember.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body }
  );

  resp.send(result);
});

module.exports = router;
