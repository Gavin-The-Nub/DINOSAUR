var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },400);

    let scoreCounter = document.getElementById('counter');
    scoreCounter.innerHTML = Math.floor(counter/100);

    if (scoreCounter >= 20) {
        let scoreCounter = document.getElementById('counter');
        scoreCounter.innerHTML = Math.floor(counter/100);
        
        let Text = document.createElement('div');
        Text.innerHTML = "BETLOG NI HILTON AY KULUBOT";
        Text.style.fontSize = "69px";
        Text.style.marginTop = "30px";

        document.getElementById("hilton2").appendChild(Text)

    }
}


var checkDead = setInterval(function() {
  let scoreCounter = document.getElementById('counter');
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<51 && blockLeft>-20 && characterTop>=131){
        block.style.animation = "none";
        
alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
        scoreCounter.innerHTML = '0';
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
