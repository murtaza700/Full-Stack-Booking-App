require('dotenv').config();
const app = require('./src/app');
const db = require('./src/db/db');
const PORT = process.env.PORT;

db();

app.listen(PORT, () => {
    console.log(`App is Runing on http://localhost:${PORT} ✅`);
});