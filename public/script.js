


window.onload = function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate();
}

//Encapsulation
class FlowFieldEffect {
    #ctx;
    #width;
    #height;
    constructor(ctx , width , height){
        this.#ctx = ctx;
        this.#ctx.strokeStyle = 'white';
        this.#width = width;
        this.#height = height;
        console.log("effect loaded");
    }
    //Private methods
    #draw(x , y) {
        const length =400 ;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(x + length , y + length);
        this.#ctx.stroke();
    }

    //Public Methods
    animate(){
        this.#draw(this.x , this.y);
        this.x += 0.5;
        this.y += 2.5;
        console.log("animating...");
        requestAnimationFrame(this.animate.bind(this));
    }
}

