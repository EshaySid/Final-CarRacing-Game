class Player {
  constructor() {
    this.playername = null;
    this.playerdistance = 0;
    this.playerposition = null;
    this.playerRank=null;
  }

  readPlayerCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", function (data) {
      playerCount = data.val();
    });
  }

  writePlayerCount(a) {
    database.ref("/").update({
      playerCount: a,
    });
  }

  createPlayerField() {
    var f = "allplayers/player" + this.playerposition;
    database.ref(f).set({
      name: this.playername,
      distance: this.playerdistance,
    });
  }

  readAllplayers() {
    var allplayerRef = database.ref("allplayers");
    allplayerRef.on("value", function (data) {
      allplayers = data.val();
    });
  }

  readCarsAtTheEnd() {
    var carsRef = database.ref("CarsAtTheEnd");
    carsRef.on("value", function (data) {
      carsAtTheEnd = data.val();
    });
  }

  writeCarsAtTheEnd(a) {
    database.ref("/").update({
      CarsAtTheEnd: a,
    });
  }
}
