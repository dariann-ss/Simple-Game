console.log("Script started");

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
    circle.style.top = 
    
    document.body.appendChild(circle);
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