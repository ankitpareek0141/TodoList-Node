const renderController = {};
const Item = require('../models/ItemSchema');

renderController.renderHome = async (req, res) => {
    Item.find()
    .then((result) => {
        console.log("=> Data fetch successfully");
        res.render('index', {items: result});
    })
    .catch((err)=>{
        console.log("Error fetching data => ",err);
    });
}

renderController.renderAddItem = async (req, res) => {
    res.render('add-item');
}

// not working
renderController.renderViewItem = async (req, res) => {
    console.log("Received Id ==>> ",req.params.id);
    await Item.findById(req.params.id)
    .then((result) => {
        console.log("Result => ",result);
        res.render('view-item', { item: result });
    })
    .catch((err) => {
        res.send(err);
    });
};

module.exports = renderController;