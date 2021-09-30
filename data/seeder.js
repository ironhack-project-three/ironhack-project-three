require('dotenv/config')
require('../config/db')


const Wine = require("../models/Wine.model")
const wineData = require("../data/data.json")


const importWineData = async () => {
    // console.log(mongoose.connections[0].name)
    try{
        await Wine.insertMany(wineData);
        console.log('Data seeded')
        process.exit();
    }catch (err){
        console.log("Line 17 error", err)
    }
}



