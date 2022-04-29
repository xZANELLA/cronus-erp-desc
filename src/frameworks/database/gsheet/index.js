require('dotenv').config()

// Google sheet npm package
const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = {
    connect: async () => {
        // Create a new document
        const doc = new GoogleSpreadsheet(process.env.DB_SHEET_ID);

        // use service account creds
        await doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY
        });

        await doc.loadInfo();

        console.log(doc.title);
    }
}