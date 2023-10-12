const db = require('../config/db');

const StationSchema = db.Schema({
    serial_number: String,
    name: { type: String, default: null },
    address: { type: String, default: null },
    id: { type: db.Schema.Types.ObjectId, auto: true }
});

const Station = db.model('Station', StationSchema);
module.exports = Station;