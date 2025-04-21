

for(var i=0;i<document.querySelectorAll(".note").length;i++){
    document.querySelectorAll(".note")[i].addEventListener("click",function (){
        
        var note = this.querySelector(".bottom").innerText;
       
        
        switchStatement(note);
        animateButton(note);
    });
    
}
document.addEventListener("keydown",function(event){
    switchStatement(event.key);
    animateButton(event.key);
})

function switchStatement( note){
    switch (note) {
        case "1":
            var c4=new Audio("./sounds/c4.wav");
            c4.play();
            break;
        case "2":
            var d4=new Audio("./sounds/d4.wav");
            d4.play();
            break;
        case "3":
            var e4=new Audio("./sounds/e4.wav");
            e4.play();
            break;
        case "4":
            var f4=new Audio("./sounds/f4.wav");
            f4.play();
            break;
        case "5":
            var g4=new Audio("./sounds/g4.wav");
            g4.play();
            break;
        case "6":
            var a4=new Audio("./sounds/a4.wav");
            a4.play();
            break;
        case "7":
            var b4=new Audio("./sounds/b4.wav");
            b4.play();
            break;
        case "8":
            var c5=new Audio("./sounds/c5.wav");
            c5.play();
            break;
        case "9":
            var d5=new Audio("./sounds/d5.wav");
            d5.play();
            break;
        case "0":
            var e5=new Audio("./sounds/e5.wav");
            e5.play();
            break;
        default:
            break;
    }
}

function animateButton(currentKey) {
    // Tüm butonları al
    var buttons = document.querySelectorAll(".note");

    // Her bir butonu kontrol et
    for (var i = 0; i < buttons.length; i++) {
        var bottomText = buttons[i].querySelector(".bottom").innerText;

        if (bottomText === currentKey) {
            buttons[i].classList.add("pressed");
            setTimeout(function(button){
                button.classList.remove("pressed");
            }, 300, buttons[i]); // setTimeout içine doğrudan butonu gönderiyoruz
            break;
        }
    }
}