class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    //create title text
      this.titleText = this.add.text(this.scale.width/2, this.scale.height/2, 'Zenva MMORPG', {fontSize: '64px', fill: '#fff'});
      this.titleText.setOrigin(0.5);

      this.startGameButton = new UiButton(this,
        this.scale.width/2,
        this.scale.height/1.65,
        'button1',
        'button2',
        'Start Game',
        this.startScene.bind(this, 'Game')  );

  }

  startScene(targetScene){
    this.scene.start(targetScene);
  }

}
