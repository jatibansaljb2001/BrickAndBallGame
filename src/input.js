export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", () => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;

        case 39:
          paddle.moveRight();
          break;

        case 27:
          game.tooglePause();
          break;

        case 32:
          game.start();
      }
    });

    document.addEventListener("keyup", () => {
      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;

        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    });
  }
}
