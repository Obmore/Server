const db = require('../config/db');

const ScooterSchema = db.Schema({
    id: { type: db.Schema.Types.ObjectId, auto: true },
    station_id: { type: db.Schema.Types.ObjectId, ref: 'Station' },
    tag_id: {type: String}
});

const Scooter = db.model('Scooter', ScooterSchema);
module.exports = Scooter;