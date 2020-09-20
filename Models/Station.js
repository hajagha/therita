const mongoose = require('mongoose')

const StationSchema = new mongoose.Schema({
    stationName : {
        type : String,
        required : true
    },
    title : {
        type : String ,
        required : true
    },
    Vidoes : [],
    texts : [] ,
})
const Station = mongoose.model('Station' , StationSchema)

module.exports = Station