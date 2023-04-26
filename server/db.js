const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://achievematectae:B0AzjEcH5IUWTHep@cluster0.nu2jgni.mongodb.net/test'; 

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
