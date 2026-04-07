console.log("Script started");

let circle1 = null;
let circle2 = null;

function start() {
    console.log("click");
    console.log(Math.random() * 600);

    let num = getRandomNum();
    createCircle(num);
    createCircle(num);
    num = getRandomNum();
    createCircle(num);
    createCircle(num);
    num = getRandomNum();
    createCircle(num);
    createCircle(num);
    num = getRandomNum();
    createCircle(num);
    createCircle(num);

}

function createCircle(num){
    let circle = document.createElement("div");
    
    circle.innerText = num;
    
    circle.style.backgroundColor = "red";
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.borderRadius = "50%";
    circle.style.textAlign = "center";
    circle.style.alignContent = "center";
    circle.style.color = "white";
    circle.style.fontSize = "30px";
    circle.style.position = "absolute";
    circle.style.left = getRandomX() + "px";
    circle.style.top = getRandomY() + "px";
    
    document.body.appendChild(circle);

    circle.addEventListener("click", handleClick);
}

function getRandomX(){
    let randX = Math.random() * window.innerWidth;
    return randX;
}

function getRandomY(){
    let randY = Math.random() * window.innerHeight;
    return randY;
}

function getRandomNum(){
    let rand = Math.random() * 100;
    rand = Math.floor(rand);
    return rand;
}

function handleClick(event){
    let circle = event.target;

    if (circle1 == null) {
        circle1 = circle;
    }
    else {
        circle2 = circle;
        if (circle1.innerText == circle2.innerText) {
            console.log("match");
            circle1.remove();
            circle2.remove();
            circle1 = null;
            circle2 = null;
        }
    }
}