import { detectCollision } from "/src/collisionDetection";

export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.size = { x: 16, y: 20 };
    this.reset();
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );
  }

  reset() {
    this.position = { x: 10, y: 400 };
    this.speed = { x: 4, y: -2 };
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    // collision of ball on left and right.
    if (this.position.x + this.size.x > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    // collision of ball on top .
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
    //collison on bottom
    if (this.position.y + this.size.y > this.gameHeight) {
      this.game.lives--;
      this.reset();
    }
    // chech for the collision of ball on paddle.
    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size.y;
    }
  }
}
