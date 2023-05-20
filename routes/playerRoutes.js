const express = require('express');
const router = express.Router();

const {
  getAllPlayers,
  getPlayersFromPremierLeague,
  getPlayersFromLaLiga,
  getPlayersFromLigue1,
  getPlayersFromSeriea,
  getPlayersFromBundesliga,
  getPlayersFromSuperLig,
  randomPlayer } = require('../controllers/playerController');

router.get("/premierleague", getPlayersFromPremierLeague)
  .get("/laliga", getPlayersFromLaLiga)
  .get("/ligue1", getPlayersFromLigue1)
  .get("/seriea", getPlayersFromSeriea)
  .get("/bundesliga", getPlayersFromBundesliga)
  .get("/superlig", getPlayersFromSuperLig)
  .get("/randomplayer", randomPlayer)
  .get("/", getAllPlayers);

module.exports = router;