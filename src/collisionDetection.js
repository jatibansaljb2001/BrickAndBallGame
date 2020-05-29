export function detectCollision(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.size.y;
  let topOfBall = ball.position.y;

  let topOfGameObject = gameObject.position.y;
  let bottomOfGameObject = gameObject.position.y + gameObject.height;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;

  if (
    bottomOfBall >= topOfGameObject &&
    topOfBall <= bottomOfGameObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size.x <= rightSideOfObject
  ) {
    return true;
  } else {
    return false;
  }
}
