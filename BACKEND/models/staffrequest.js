const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const staffrequestSchema = new Schema({

    staffsize : {
        type : Number,
        required: true
    },
    workarea : {
        type : String,
        required: true
    },
    reqdate : {
        type : String,
        required: true
    },
    cnumber : {
        type : Number,
        required: true
    },
    reqstatus : {
        type : String,
        required: true
    }

})

const StaffRequest = mongoose.model("StaffRequest",staffrequestSchema);
module.exports = StaffRequest;