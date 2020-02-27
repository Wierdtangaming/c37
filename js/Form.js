class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2 - 70, 0);

    this.input.position(displayWidth/2 - 70, displayHeight/2 - 70);
    this.button.position(displayWidth/2 - 40, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      player_count+=1;
      player.index = player_count;
      player.update();
      player.updateCount(player_count);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 40, displayHeight/4);
    });

  }
}
