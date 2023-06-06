const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://achievematectae:oH283UBg4eKrVTE8@cluster0.nu2jgni.mongodb.net/original'; 


  module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(mongoURI, connectionParams);
        console.log("Connected to database successfully");
    } catch (error) {
        console.log(error);
        console.log("Could not connect database!");
    }
};
