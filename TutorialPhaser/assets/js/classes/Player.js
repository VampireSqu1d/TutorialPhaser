class Player extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, key, frame) {
    super(scene, x, y, key, frame);
    this.scene = scene;
    this.velocity = 200;

    //enable physics
    this.scene.physics.world.enable(this)
    //set immovable if another object collides with player
    this.setImmovable(false);
    //scale player
    this.setScale(2);
    //collide with world bounds
    this.setCollideWorldBounds(true);
    //add player to the scenes
    this.scene.add.existing(this);
  }

  update(cursors) {
    this.body.setVelocity(0);

    if (cursors.left.isDown) {
      console.log('left');
      this.body.setVelocityX(-this.velocity);
    } else if (cursors.right.isDown) {
      console.log('right');
      this.body.setVelocityX(this.velocity);
    }

    if (cursors.up.isDown) {
      console.log('up');
      this.body.setVelocityY(-this.velocity);
    } else if (cursors.down.isDown) {
      console.log('down');
      this.body.setVelocityY(this.velocity);
    }

  }


}
