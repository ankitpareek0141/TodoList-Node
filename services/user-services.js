const fs = require('fs');
const controller = {};
const Item = require('../models/ItemSchema');

controller.addLatest = async (req, res) => {
    console.log(req.body.id);
}

controller.insertItem = async (req, res) => {
    console.log(req.body);
    let item = new Item({
        name: req.body.itemName,
        Age: req.body.itemAge
    });
    item.save()
    .then((result) => {
        console.log("Item saved successfully...");
        res.redirect('/');
    })
    .catch((err) => {
        console.log("Error saving data...");
    });
}

controller.viewItem = async (req, res) => {
    console.log("Received Id ==>> ",req.params.id);
    Item.findById(req.params.id)
    .then((item) => {
        console.log("Result => ",result);
        res.render('view-item', { item });
    })
    .catch((err) => {
        res.send(err);
    });
};

module.exports = controller;