import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json('Home Page!');
});

app.listen(3000, () => {
    console.log(`App is Runing on 3000`);
});