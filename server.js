const express = require('express');
const mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://yudiz:yudiz@cluster0.mjydfiu.mongodb.net/?retryWrites=true&w=majority';
const app = express();
const PORT = 3000;
const routes = require('./routes/user-routes.js');
const ejsRoutes = require('./routes/user-render-routes');

app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
app.set('views', 'seeds');
app.use(express.static('./seeds/'));

app.use('/', ejsRoutes);
app.use('/', routes);
app.use((req, res) => {
    res.render('error-page');
});

mongoose.connect( DB_URL , {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("*** Database connected ***");
    app.listen(PORT, () => {
        console.log(`PORT => ${PORT}`);
    });
})
.catch((err) => {
    console.log('*** Database connection error ***');
    console.log(err);
});
