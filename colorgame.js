function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var boxes = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var newGame = document.querySelector("#new");
var easy = document.querySelector("#easy");


function start(){
    for (i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor = "rgb("+getRandomInt(255)+", "+getRandomInt(255)+", "+getRandomInt(255)+")";
    }
    h1.textContent = boxes[getRandomInt(6)].style.backgroundColor;
    document.querySelector(".header").style.backgroundColor = "steelblue";

    for (i=0;i<boxes.length;i++){
        boxes[i].addEventListener("click", function(){
            if(event.target.style.backgroundColor==h1.textContent){
                for (i=0;i<boxes.length;i++){
                    boxes[i].style.backgroundColor = h1.textContent;
                }
                document.querySelector(".header").style.backgroundColor = h1.textContent;

            }
            else{
                event.target.style.backgroundColor = "#232323";
            }
        });
    }

}

document.body.addEventListener("load", start());
newGame.addEventListener("click", function(){start()});

easy.addEventListener("click", function(){
    start();
    for(i=3;i<boxes.length;i++){
        boxes[i].style.backgroundColor = "#232323";
    }
    h1.textContent = boxes[getRandomInt(3)].style.backgroundColor;

});