const mongoose = require('mongoose');

const Product = require('index.html');

const products = [

    {
        name: "vishal",
        
    }
]

// seeding function
async function seedDB(){
    await Product.insertMany(products);
    console.log("Data seeded successfully")
}

module.exports = seedDB;
