var Heros = require("./heros.dao");

exports.createHero = (req, res, next) => {
    var hero = {
        name: req.body.name,
        description: req.body.description
    };

    Heros.create(hero, (err, hero) => {
        if(err) {
            res.json({
                error: err
            });
        }
        res.json({
            message: "Hero created successfully",
            hero: hero
        });
    });
};

exports.getHeros = (req, res, next) => {
    Heros.get({}, (err, heros) => {
        if(err) {
            res.json({
                error: err
            });
        }
        res.json({
            message: `All heros fetched successfully`,
            heros: heros
        });
    });
};

exports.getHero = function(req, res, next) {
    Heros.getByName({name: req.params.name}, function(err, hero) {
        if(err) {
            res.json({
                error: err
            });
        }
        res.json({
            message: `Hero -> ${req.params.name} fetched successfully`,
            hero: hero
        });
    });
};

exports.updateHero = (req, res, next) => {
    var hero = {
        name: req.body.name,
        description: req.body.description
    };

    Heros.update({_id: req.params.id}, hero, (err, hero) => {
        if(err) {
            res.json({
                error : err
            });
        }
        res.json({
            message: `Hero -> ${hero.name} updated successfully`
        });
    });
};

exports.removeHero = (req, res, next) => {
    Heros.delete({_id: req.params.id}, (err, hero) => {
        if(err) {
            res.json({
                error : err
            });
        }
        res.json({
            message: `Hero -> ${hero.name} deleted successfully`
        });
    });
};