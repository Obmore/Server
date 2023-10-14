const db = require('../config/db');

const UserSchema = db.Schema({
    created_at: { 
        type: Date, 
        default: Date.now },
    status: { type: String, 
        enum: ['ACTIVE', 'INACTIVE'],
        required: true,
        default: 'ACTIVE' 
    },
    google_id: { 
        type: String, 
        default: null 
    },
    facebook_id: { 
        type: String, 
        default: null 
    },
    apple_id: { 
        type: String, 
        default: null
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    picture: { 
        type: String, 
        default: null 
    },
    family_name: { 
        type: String
    },
    given_name: { 
        type: String
    }
});

const User = db.model('User', UserSchema);
module.exports = User;