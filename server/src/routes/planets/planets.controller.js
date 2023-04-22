const { getAllPlanets } = require('../../models/planets.model');

async function httpGetALLPlanets(req, res) {
    return res.status(200).json(await getAllPlanets());
}
module.exports = {
    httpGetALLPlanets,
};