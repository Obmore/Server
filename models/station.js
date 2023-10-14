const db = require('../config/db');

const StationSchema = db.Schema({
    serial_number: {
        type: String,
        maxlength: 16,
        required: true
    },
    name: { 
        type: String, 
        maxlength: 100,
        default: null 
    },
    address: { 
        type: String,
        maxlength: 100,
        default: null
    }
});

const Station = db.model('Station', StationSchema);
module.exports = Station;   