import express from 'express';

let cookieParser = require('cookie-parser')

const app = express();

app.use(cookieParser);

let argSize = process.argv.slice(2).length;
let port  = process.argv.slice(2)[argSize - 1] || 3000;

app.listen(port, () => {
    console.log("App started on port " + port);
})
