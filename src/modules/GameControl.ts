
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
class GameControl {

    food:Food;
    scorePanel:ScorePanel;
    snake:Snake;
    
    // 方向
    direction:string = "Right"

    // 结束标志
    isLive = true

    constructor() {
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.snake = new Snake()
        this.init()
    }

    // 初始化
    init(){
        document.addEventListener('keydown',this.keyDownHandler.bind(this))
        this.run()
    }

    keyDownHandler(event:KeyboardEvent){
        this.direction = event.key
    }

    run(){
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10
                break;
            case "ArrowDown":
            case "Down":
                Y += 10
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10
                break;
            case "ArrowRight":
            case "Right":
                X += 10
                break;
        }

        // 检查蛇是否迟到食物
        this.checkEat(X,Y)

        // 对蛇出界进行处理
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (error:any) {
            alert(error.message)
            this.isLive = false
        }

        this.isLive && setTimeout(this.run.bind(this), 300-(this.scorePanel.level-1)*30);
    }

    checkEat(X:number,Y:number){
        if (this.food.X===X&&this.food.Y===Y) {
            this.food.change()
            this.snake.addBody()
            this.scorePanel.addScore()
        }
    }
}

export default GameControl