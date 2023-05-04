const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://kanhavsukhwal:Eq84prTQ3m4dN2lc@cluster1.qxudhuk.mongodb.net/test'; 


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
