import Game from "./Game";
import Paddle from "./Paddle";
import Ball from "./Ball";

import lol from "../images/lol.jpg";
import konglong from "../images/konglong.png";

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.querySelector('#canvas')
  const game = new Game(canvas)
  const paddle = new Paddle(lol)
  const ball = new Ball(konglong)
  // 根据按键注册actions
  game.registerAction('ArrowUp', () => {
    paddle.moveY(-paddle.speed)
  })
  game.registerAction('ArrowRight', () => {
    paddle.moveX(paddle.speed)
  })
  game.registerAction('ArrowDown', () => {
    paddle.moveY(paddle.speed)
  })
  game.registerAction('ArrowLeft', () => {
    paddle.moveX(-paddle.speed)
  })
  game.registerAction(' ', () => {
    ball.fire()
  })
  game.draw = () => {
    game.drawImage(paddle)
    game.drawImage(ball)
  }
  game.update = () => {
    ball.move()
    if (paddle.collide(ball)) {
      ball.restorationPaddle(paddle)
      ball.veerX()
      ball.veerY()
    }
  }
})




