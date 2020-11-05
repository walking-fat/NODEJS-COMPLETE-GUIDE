const express = require('express');
const { reset } = require('nodemon');

const app = express();

// app.use((req, res, next) => {
//     console.log("FIRST");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("SECOND");
//     res.send("<h1>Q2</h1>")
// });

app.use('/users', (req, res, next) => {
    console.log("USERS");
    res.send('<h1>Hello Users!</h1>')
});

app.use('/', (req, res, next) => {
    console.log("DEFAULT");
    res.send("<h1>DEFAULT</h1>")
})

app.listen(3000);