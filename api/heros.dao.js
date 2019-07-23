// In the Data Access Object (DAO) layer, we can define the function 
// which is directly connected to the database and fetch data and 
// save data from and to the database.

// require the mongoose package and hero.model.js file.
var mongoose = require('mongoose');
var herosSchema = require('./heros.model');

// Here, we define all the function by the use of mongoose.statics. 
// Statics are pretty much the same as methods but allow for defining 
// functions that exist directly on your Model.
herosSchema.statics = {
    create: function(data, cb) {
        var hero = new this(data);
        hero.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
};

// we can register the Schema with mongoose.model
var herosModel = mongoose.model("Heros", herosSchema);

// export the mongoose.model
module.exports = herosModel;