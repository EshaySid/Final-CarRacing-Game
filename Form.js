class Form {
  constructor() {
    //Text=Element
    //Input=something that can be changed
    this.heading = createElement("h1");
    this.inputBox = createInput("Name:");
    this.button = createButton("Register");
    this.greeting = createElement("h1");
    this.resetButton = createButton("Reset");
  }

  display() {
    this.heading.html("WELCOME TO PRIYANKA'S CAR RACING GAME");
    this.heading.position(displayWidth - 700, displayHeight - 700);
    this.inputBox.position(displayWidth / 2 + 200, displayHeight - 600);
    this.button.position(displayWidth / 2 + 200, displayHeight - 500);
    this.button.mousePressed(() => {
      this.heading.hide();
      this.inputBox.hide();
      this.button.hide();
      player.playername = this.inputBox.value();
      this.greeting.html("WELCOME " + player.playername + " !");
      this.greeting.position(displayWidth / 2, displayHeight / 2);
      playerCount = playerCount + 1;
      player.playerposition = playerCount;
      player.writePlayerCount(playerCount);
      player.createPlayerField();
    });

    this.resetButton.mousePressed(() => {
      game.writeGamestate(0);
      player.writePlayerCount(0);
      var ref = database.ref("allplayers");
      ref.remove();
    });
  }
}
