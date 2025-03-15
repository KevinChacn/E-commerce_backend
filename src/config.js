const config = {
    SECRET: 'university-api',
    DATA_FILE: './data/db.json',
    USER_FIELDS: [
        'id',
        'studentId',
        'firstName',
        'lastName',
        'email',
        'career',
        'semester',
        'status'
    ]
};

module.exports = config;