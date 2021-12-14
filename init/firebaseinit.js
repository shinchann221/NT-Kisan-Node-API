const admin = require('firebase-admin');
const authApp = admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});
module.exports = authApp;