class Game {
  constructor() {}

  readGamestate() {
    var gamestateRef = database.ref("gamestate");
    gamestateRef.on("value", function (data) {
      gamestate = data.val();
    });
  }

  writeGamestate(a) {
    database.ref("/").update({
      gamestate: a,
    });
  }

  startGame() {
    form.heading.hide();
    form.button.hide();
    form.inputBox.hide();
    form.greeting.hide();
    player.readAllplayers();
    player.readCarsAtTheEnd();
    var i = 0;
    //h=horizontal
    var h = 450;
    image(trackImg, 0, -displayHeight * 8, displayWidth, displayHeight * 9);
    for (var plr in allplayers) {
      carArray[i].x = h;
      carArray[i].y = displayHeight - allplayers[plr].distance;
      textSize(25);
      stroke("black");
      text(allplayers[plr].name,carArray[i].x-30,carArray[i].y-100);
      if (i + 1 == player.playerposition) {
        camera.position.x = displayWidth / 2;
        camera.position.y = carArray[i].y;
      }
      i = i + 1;
      h = h + 340;
    }

    if (keyIsDown(UP_ARROW)) {
      player.playerdistance = player.playerdistance + 20;
      player.createPlayerField();
    }

    if (player.playerdistance >= 6200) {
      var a = carsAtTheEnd + 1;
      player.playerRank = a;
      player.writeCarsAtTheEnd(a);
      gamestate = 2;
    }

    drawSprites();
  }

  showRank() {
    alert(player.playername+" Got a rank of " + player.playerRank);
  }
}
