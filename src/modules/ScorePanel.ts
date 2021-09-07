// 记分牌对象
class ScorePanel {
    // 分数、等级
    score = 0;
    level = 1;

    // 获取dom
    scoreEle:HTMLElement
    levelEle:HTMLElement

    // 最高等级、每级分数
    maxLevel:number
    upScore:number

    constructor(maxLevel=10,upScore=10) {
        this.scoreEle = document.getElementById("score")!
        this.levelEle = document.getElementById("level")!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 分数增加
    addScore(){
        this.scoreEle.innerHTML = ++this.score + ''
        if (this.score%this.upScore === 0) {
            this.levelUp()
        }
    }
    // 等级提升
    levelUp(){
        if (this.level<this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}

export default ScorePanel;