class Chest extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, key, frame) {
    super(scene, x, y, key, frame);
    this.scene = scene;
    this.coins = 20;

    //enable physics
    this.scene.physics.world.enable(this)
    //add player to the scenes
    this.scene.add.existing(this);
  }

}
