// require the mongoose package
var mongoose = require("mongoose");

// In this file, we create a schema of Heros by the use of mongoose.schema.
// Everything in Mongoose starts with a Schema. 
// Each schema maps to a MongoDB collection and defines the shape of the documents 
// within that collection.
var Schema = mongoose.Schema;

// The schema is the organisation of data as a blueprint of how the database is constructed. 
// In this schema, we create a blueprint of Hero which having name and description.

// After that, we define the Schema( structure of document/data) in 
// MongoDB by the use of mongoose.Schema.
var herosSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    description: {
        type: String,
        unique: false,
        required: true
    }
}, {
    timestamps: true
});

// export the schema
module.exports = herosSchema;
