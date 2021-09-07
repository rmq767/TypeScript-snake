// 食物对象
class Food {
    element:HTMLElement

    constructor() {
        this.element = document.getElementById("food")!
    }
    // x坐标
    get X(){
        return this.element.offsetLeft
    }
    // y坐标
    get Y(){
        return this.element.offsetTop
    }
    // 改变位置
    change(){
        // 随机位置
        // 最小0，最大290
        // 蛇移动一次10
        let X = Math.round(Math.random()*29)*10//0-290,整10
        let Y = Math.round(Math.random()*29)*10//0-290,整10
        this.element.style.left = X+"px"
        this.element.style.top = Y+"px"
    }
}

export default Food;