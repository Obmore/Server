const db = require('../config/db');

const UserSchema = db.Schema({
    created_at: { type: Date, default: Date.now },
    status: { type: String, enum: ['ACTIVE', 'INACTIVE'] },
    google_id: { type: String, default: null },
    facebook_id: { type: String, default: null },
    apple_id: { type: String, default: null },
    email: { type: String},
    picture: { type: String, default: null },
    id: { type: db.Schema.Types.ObjectId, auto: true },
    family_name: { type: String},
    given_name: { type: String}
});

const User = db.model('User', UserSchema);
module.exports = User;