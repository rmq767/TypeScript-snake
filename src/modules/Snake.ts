class Snake {
    // 蛇
    element:HTMLElement
    // 蛇头
    head:HTMLElement
    // 蛇身
    bodies:HTMLCollection
    
    constructor() {
        // 获取蛇
        this.element = document.getElementById("snake")!
        // 获取蛇头
        this.head = document.querySelector("#snake > div") as HTMLElement
        // 获取蛇身
        this.bodies = this.element.getElementsByTagName("div")
    }

    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    set X(value){
        if (this.X === value) {
            return
        }
        // 判断蛇撞墙
        if (value<0||value>290) {
            throw new Error("蛇撞墙了");
        }

        // 修改x，不让掉头
        if (this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetLeft===value) {
            debugger
            if (value>this.X) {
                value = this.X - 10
            }else{
                value = this.X + 10
            }
        }

        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkSelf()
    }
    set Y(value){
        if (this.Y === value) {
            return
        }
        // 判断蛇撞墙
        if (value<0||value>290) {
            throw new Error("蛇撞墙了");
        }

        // 修改y，不让掉头
        if (this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetTop===value) {
            if (value>this.Y) {
                value = this.Y - 10
            }else{
                value = this.Y + 10
            }
        }

        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkSelf()
    }
    // 增加身长
    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

    // 蛇身移动
    moveBody(){
        for (let i = this.bodies.length-1; i >0; i--) {
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X+'px';
            (this.bodies[i] as HTMLElement).style.top = Y+'px';
        }
    }

    // 检查撞到自己
    checkSelf(){
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = (this.bodies[i] as HTMLElement)
            if (this.X===bd.offsetLeft&&this.Y===bd.offsetTop) {
                throw new Error("撞到自己了");
            }
            
        }
    }
}

export default Snake;