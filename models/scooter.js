const db = require('../config/db');

const ScooterSchema = db.Schema({
    station_id: { 
        type: db.Schema.Types.ObjectId, 
        ref: 'Station' 
    },
    tag_id: {
        type: String,
        maxlength: 10,
        required: true
    }
});

const Scooter = db.model('Scooter', ScooterSchema);
module.exports = Scooter;