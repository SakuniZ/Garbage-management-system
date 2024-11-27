const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const staffsalarySchema = new Schema({

    syear : {
        type : String,
        required: true
    },
    smonth : {
        type : String,
        required: true
    },
    sweek : {
        type : String,
        required: true
    },
    samount : {
        type : Number,
        required: true
    },
    sstatus : {
        type : String,
        required: true
    }

})

const StaffSalary = mongoose.model("StaffSalary",staffsalarySchema);
module.exports = StaffSalary;