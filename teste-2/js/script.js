let userPaddle = document.querySelector('.user-paddle')
let compPaddle = document.querySelector('.comp-paddle')
let ball = document.querySelector('.ball')

userPaddle.style.marginLeft = '30px'
userPaddle.style.marginTop = '0px'
compPaddle.style.marginLeft = '1048px'
compPaddle.style.marginTop = '0px'
ball.style.marginLeft = '534px'
ball.style.marginTop = '262px'

let W_Pressed = false
let S_Pressed = false

let ID

let Vx = -1
let Vy = -1
let V = Math.sqrt(Math.sqrt(Math.pow(Vx,2)+Math.pow(Vy,2)))

document.addEventListener('keydown',(e)=>{
    if(e.keyCode=='87'){
        W_Pressed = true
    }
    else if(e.keyCode=='83'){
        S_Pressed = true
    }
})

document.addEventListener('keyup',(e)=>{
    if(e.keyCode=='87'){
        W_Pressed = false
    }
    else if(e.keyCode=='83'){
        S_Pressed = false
    }
})

gameLoop()

function reset(){
    clearInterval(ID)
    Vx = -1
    Vy = -1
    V = Math.sqrt(Math.sqrt(Math.pow(Vx,2)+Math.pow(Vy,2)))
    ball.style.marginLeft = '534px'
    ball.style.marginTop = '262px'
    gameLoop()
}

function gameLoop(){
    setTimeout(() => {
       ID = setInterval(()=>{
            if(marginLeft(ball)<0){
                document.querySelector('.comp-score').innerHTML = Number(document.querySelector('.comp-score').innerHTML)+1
                reset()
                return
            }
            if((marginLeft(ball)+20) > 1088){
                document.querySelector('.user-score').innerHTML = Number(document.querySelector('.user-score').innerHTML)+1
                reset()
                return
            }
            if(marginTop(ball)<0 || (marginTop(ball)+20) > 544){
                Vy = -Vy
            }

            let paddle = (marginLeft(ball)+10<544) ? userPaddle : compPaddle

            if(collisionDetected(paddle)){
                let angle
                let type = (marginLeft(paddle) == 30) ? 'user' : 'comp'
            }

            ball.style.marginLeft = `${marginLeft(ball)+Vx}px`
            ball.style.marginTop = `${marginTop(ball)+Vy}px`

            if(W_Pressed && marginTop(userPaddle)>0){
                userPaddle.style.marginTop = `${marginTop(userPaddle)-2}px`
            }
            else if(S_Pressed && marginTop(userPaddle)<472){
                userPaddle.style.marginTop = `${marginTop(userPaddle)+2}px`
            }
        },5)
    },500);
}

function collisionDetected(paddle){
    ball.top = marginTop(ball)
    ball.bottom = marginTop(ball) + 20
    ball.left = marginLeft(ball)
    ball.right = marginLeft(ball) + 20
    ball.centerX = marginLeft(ball) + 10
    ball.centerY = marginTop(ball) + 10

    paddle.top = marginTop(paddle)
    paddle.bottom = marginTop(paddle) + 72
    paddle.left = marginLeft(paddle)
    paddle.right = marginLeft(paddle) + 10
    paddle.centerX = marginLeft(paddle) + 5
    paddle.centerY = marginTop(paddle) + 36

    return ball.left < paddle.right && ball.top < paddle.bottom && ball.right > paddle.left && ball.bottom > paddle.top
}

function marginTop(elem){
    return Number(elem.style.marginTop.split('p')[0])
}

function marginLeft(elem){
    return Number(elem.style.marginLeft.split('p')[0])
}