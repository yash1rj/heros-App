// In this file, we create routes of rest api.

var Heros = require('./heros.controller');

module.exports = (router) => {
    router.get('/', (request, response) => {
        response.send("Hero CRUD Api is on the Air");
    });
    router.post("/create", Heros.createHero);
    router.get("/get", Heros.getHeros);
    router.get("/get/:name", Heros.getHero);
    router.put("/update/:id", Heros.updateHero);
    router.delete("/remove/:id", Heros.removeHero);
};