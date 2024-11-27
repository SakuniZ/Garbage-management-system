const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    fullname : {
        type : String,
        required: true
    },
    username : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    repassword : {
        type : String,
        required: true
    }

})

const CustomerData = mongoose.model("CustomerData",customerSchema);
module.exports = CustomerData;