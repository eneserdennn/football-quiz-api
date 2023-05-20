const asyncHandler = require("express-async-handler");
const PremierLeaguePlayer = require("../models/premierLeagueModel");
const LaLigaPlayer = require("../models/laLigaModel");
const Ligue1Player = require("../models/ligue1Model");
const SerieaPlayer = require("../models/serieaModel");
const BundesligaPlayer = require("../models/bundesligaModel");
const SuperLigPlayer = require("../models/superLigModel");
const AllPlayer = require("../models/allPlayersModel");


const getAllPlayers = asyncHandler(async (req, res) => {
  const players = await AllPlayer.find({});
  res.status(200).json(players);
});

const getPlayersFromPremierLeague = asyncHandler(async (req, res) => {
  const players = await PremierLeaguePlayer.find({});
  res.status(200).json(players);
});

const getPlayersFromLaLiga = asyncHandler(async (req, res) => {
  const players = await LaLigaPlayer.find({});
  res.status(200).json(players);
});

const getPlayersFromLigue1 = asyncHandler(async (req, res) => {
  const players = await Ligue1Player.find({});
  res.status(200).json(players);
});

const getPlayersFromSeriea = asyncHandler(async (req, res) => {
  const players = await SerieaPlayer.find({});
  res.status(200).json(players);
});

const getPlayersFromBundesliga = asyncHandler(async (req, res) => {
  const players = await BundesligaPlayer.find({});
  res.status(200).json(players);
});

const getPlayersFromSuperLig = asyncHandler(async (req, res) => {
  const players = await SuperLigPlayer.find({});
  res.status(200).json(players);
});



const randomPlayer = asyncHandler(async (req, res) => {
  // takimlari cek
  const teams = await AllPlayer.find({}).distinct("team");

  const tictacktoe = [
    ['', 'team2', 'team3', 'team4'],
    ['team1', 'players1', 'players2', 'players3'],
    ['team5', 'players4', 'players5', 'players6'],
    ['team6', 'players7', 'players8', 'players9']
  ]

  let club1, club2, club3, club4, club5, club6, club7, club8, club9;

  club1 = teams[Math.floor(Math.random() * teams.length)];


  const player1 = await AllPlayer.find({
    $or: [
      { "transfer_history.old_club": club1, "transfer_history.new_club": club1 },
    ]
  })

  const randomPlayerNumber = Math.floor(Math.random() * player1.length);
  // find old clubs of player1 from transfer_history (old_club and new_club)
  const oldClubFromPlayer1 = player1[randomPlayerNumber].transfer_history.map((item) => {
    return item.old_club;
  });
  // remove duplicates from oldClubFromPlayer1
  const oldClubFromPlayer1WithoutDuplicates = [...new Set(oldClubFromPlayer1)];

  // select random club from oldClubFromPlayer1WithoutDuplicates
  club2 = oldClubFromPlayer1WithoutDuplicates[Math.floor(Math.random() * oldClubFromPlayer1WithoutDuplicates.length)];
  // club1 and club2 cannot be the same
  while (club1 === club2) {
    club2 = oldClubFromPlayer1WithoutDuplicates[Math.floor(Math.random() * oldClubFromPlayer1WithoutDuplicates.length)];
  }

  const player2 = await AllPlayer.find({
    $or: [
      { "transfer_history.old_club": club1, "transfer_history.new_club": club1 },
    ]
  })

  const randomPlayerNumber2 = Math.floor(Math.random() * player2.length);
  // find old clubs of player2 from transfer_history (old_club and new_club)
  const oldClubFromPlayer2 = player2[randomPlayerNumber2].transfer_history.map((item) => {
    return item.old_club;
  });

  // remove duplicates from oldClubFromPlayer2
  const oldClubFromPlayer2WithoutDuplicates = [...new Set(oldClubFromPlayer2)];

  // select random club from oldClubFromPlayer2WithoutDuplicates
  club3 = oldClubFromPlayer2WithoutDuplicates[Math.floor(Math.random() * oldClubFromPlayer2WithoutDuplicates.length)];
  // club1, club2 and club3 cannot be the same
  while (club1 === club3 || club2 === club3) {
    club3 = oldClubFromPlayer2WithoutDuplicates[Math.floor(Math.random() * oldClubFromPlayer2WithoutDuplicates.length)];
  }

  const player3 = await AllPlayer.find({
    $or: [
      { "transfer_history.old_club": club1, "transfer_history.new_club": club1 },
    ]
  })

  const randomPlayerNumber3 = Math.floor(Math.random() * player3.length);
  // find old clubs of player3 from transfer_history (old_club and new_club)

  const oldClubFromPlayer3 = player3[randomPlayerNumber3].transfer_history.map((item) => {
    return item.old_club;
  });

  // remove duplicates from oldClubFromPlayer3
  const oldClubFromPlayer3WithoutDuplicates = [...new Set(oldClubFromPlayer3)];

  // select random club from oldClubFromPlayer3WithoutDuplicates
  club4 = oldClubFromPlayer3WithoutDuplicates[Math.floor(Math.random() * oldClubFromPlayer3WithoutDuplicates.length)];
  // club1, club2, club3 and club4 cannot be the same
  while (club1 === club4 || club2 === club4 || club3 === club4) {
    club4 = oldClubFromPlayer3WithoutDuplicates[Math.floor(Math.random() * oldClubFromPlayer3WithoutDuplicates.length)];
  }

  // Club2 ile baglantili olan tum oyuncular
  const club2Relations = await AllPlayer.find({
    $or: [
      { "transfer_history.old_club": club2, "transfer_history.new_club": club2 },
    ]
  });

  // club2Relations icindeki tum eski kulupler veya yeni kulupler duplicate olmadan
  const club2RelationsClubs = club2Relations.map((item) => {
    return item.transfer_history.map((item) => {
      return item.old_club;
    });
  });

  // club2RelationsClubs icindeki tum eski kulupler veya yeni kulupler duplicate olmadan
  const club2RelationsClubsWithoutDuplicates = [...new Set(club2RelationsClubs.flat())];

  const club3Relations = await AllPlayer.find({
    $or: [
      { "transfer_history.old_club": club3, "transfer_history.new_club": club3 },
    ]
  });

  // club3Relations icindeki tum eski kulupler veya yeni kulupler duplicate olmadan
  const club3RelationsClubs = club3Relations.map((item) => {
    return item.transfer_history.map((item) => {
      return item.old_club;
    });
  });

  // club3RelationsClubs icindeki tum eski kulupler veya yeni kulupler duplicate olmadan
  const club3RelationsClubsWithoutDuplicates = [...new Set(club3RelationsClubs.flat())];

  const club4Relations = await AllPlayer.find({
    $or: [
      { "transfer_history.old_club": club4, "transfer_history.new_club": club4 },
    ]
  });

  // club4Relations icindeki tum eski kulupler veya yeni kulupler duplicate olmadan
  const club4RelationsClubs = club4Relations.map((item) => {
    return item.transfer_history.map((item) => {
      return item.old_club;
    });
  });

  // club4RelationsClubs icindeki tum eski kulupler veya yeni kulupler duplicate olmadan
  const club4RelationsClubsWithoutDuplicates = [...new Set(club4RelationsClubs.flat())];

  // club2RelationsClubsWithoutDuplicates, club3RelationsClubsWithoutDuplicates ve club4RelationsClubsWithoutDuplicates icindeki ortak kulupler
  let commonClubs = club2RelationsClubsWithoutDuplicates.filter((item) => {
    return club3RelationsClubsWithoutDuplicates.includes(item) && club4RelationsClubsWithoutDuplicates.includes(item);
  });

  // commonClubs icindeki club1, club2, club3 ve club4 kuluplerini cikar
  commonClubs = commonClubs.filter((item) => {
    return item !== club1 && item !== club2 && item !== club3 && item !== club4;
  });

  club5 = commonClubs[Math.floor(Math.random() * commonClubs.length)];

  // commonClubs icinden club5'e esit olan kulupleri cikar
  commonClubs = commonClubs.filter((item) => {
    return item !== club5;
  });

  club6 = commonClubs[Math.floor(Math.random() * commonClubs.length)];

  const player4 = await AllPlayer.find({
    $or: [
      { "transfer_history.old_club": club5, "transfer_history.new_club": club2 },
      { "transfer_history.old_club": club2, "transfer_history.new_club": club5 },
    ]
  })

  const player5 = await AllPlayer.find({
    $or: [
      { "transfer_history.old_club": club5, "transfer_history.new_club": club3 },
      { "transfer_history.old_club": club3, "transfer_history.new_club": club5 },
    ]
  })

  const player6 = await AllPlayer.find({
    $or: [
      { "transfer_history.old_club": club5, "transfer_history.new_club": club4 },
      { "transfer_history.old_club": club4, "transfer_history.new_club": club5 },
    ]
  })

  const player7 = await AllPlayer.find({
    $or: [
      { "transfer_history.old_club": club6, "transfer_history.new_club": club2 },
      { "transfer_history.old_club": club2, "transfer_history.new_club": club6 },
    ]
  })

  const player8 = await AllPlayer.find({
    $or: [
      { "transfer_history.old_club": club6, "transfer_history.new_club": club3 },
      { "transfer_history.old_club": club3, "transfer_history.new_club": club6 },
    ]
  })

  const player9 = await AllPlayer.find({
    $or: [
      { "transfer_history.old_club": club6, "transfer_history.new_club": club4 },
      { "transfer_history.old_club": club4, "transfer_history.new_club": club6 },
    ]
  })




  res.status(200).json({
    player1,
    player2,
    player3,
    player4,
    player5,
    player6,
    player7,
    player8,
    player9,
    club1,
    club2,
    club3,
    club4,
    club5,
    club6
  });
});


module.exports = {
  getAllPlayers,
  getPlayersFromPremierLeague,
  getPlayersFromLaLiga,
  getPlayersFromLigue1,
  getPlayersFromSeriea,
  getPlayersFromBundesliga,
  getPlayersFromSuperLig,
  randomPlayer
};