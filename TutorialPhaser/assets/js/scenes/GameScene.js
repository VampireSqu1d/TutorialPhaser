class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.scene.launch('Ui');
    this.score = 0;
  }

  createChest(){

    this.chests = this.physics.add.group();

    this.chestPositions = [[100,100], [200,200], [300,300], [400,400]];

    this.masNumberOfChest = 3;

    for(let i = 0; i < this.masNumberOfChest; i += 1){
      this.spawnChest();
    }
  }

  spawnChest(){
    const location = this.chestPositions[Math.floor(Math.random() * this.chestPositions.length)]
    const chest = new Chest(this, location[0], location[1], 'items', 0);
    this.chests.add(chest);
  }

  createWalls(){
    this.wall = this.physics.add.image(500,100, 'button1');
    this.wall.setImmovable();
  }

  createInput(){
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  createPlayer(){
    this.player = new Player(this, 32, 32, 'characters', 0);
  }

  createAudio(){
    this.goldPickupAudio = this.sound.add('goldSound');
  }

  create() {
    this.createAudio();
    this.createChest();
    this.createWalls();
    this.createInput();
    this.createPlayer();
    this.addCollisions();
  }


  addCollisions(){
    this.physics.add.collider(this.player, this.wall);
    this.physics.add.overlap(this.player, this.chests, this.collectChest, null, this);
  }

  update() {
    this.player.update(this.cursors);
  }

  collectChest(player, chest) {
    this.goldPickupAudio.play();

    this.score += chest.coins;

    this.events.emit('updateScore', this.score);
    chest.destroy();

    this.time.delayedCall(1000, this.spawnChest, [], this);
  }

}
