// const http =  require('http');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');


// app.use((req, res, next) => {
//     console.log("First");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Second");
//     res.send('<h1>Hello World</h1>')
// });

app.use(bodyParser.urlencoded({extended: false}));

// app.use('/add-product', (req, res, next) => {
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
// });

// app.use('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

// app.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use('/', (req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
})


// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);