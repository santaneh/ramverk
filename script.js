window.onload = function() {
    var clicked = false
    var team_members = document.getElementsByClassName("team-member");
    for (let member of team_members){
        member.addEventListener('mouseenter', function(){
        effectOn(this)
    })
    member.addEventListener('mouseleave', function(){
        effectOff(this)
    });
    member.addEventListener('click', function(event){
        console.log(this)
        if (clicked == false){
        this.innerHTML += '<div id ="promptcointainer"><input type="text" id="prompt" placeholder = "Type Role"></input> <button id="btn">Change</button></div>';
        clicked = true
        }
        else if(event.target.id != "prompt" && event.target.id !="btn" && event.target.id !="promptcontainer"){ 
        if (clicked == true){
            console.log(event)
            this.querySelector('#prompt').remove();
            this.querySelector('#btn').remove();
            clicked = false
        }
        }   
        if (event.target.id == "btn"){
            console.log("works");
            editTitle(this); 
            this.querySelector('#prompt').remove();
            this.querySelector('#btn').remove();
            clicked = false
        } 
    });
}
};
var editTitle = function(e) {
    var text = e.querySelector('#prompt').value;
    e.querySelector('.team-title').innerHTML = text
    console.log("changed")
};

function effectOn(e){
    //e.classList.add('hovering');
    //visste inte om annvändning av classList var "cheating" i coding challenge så gör så här i stället 
    e.style.boxShadow = "7px 7px 5px #ccc";
    e.style.border = "2px solid black";
    e.style.borderRadius = "10px";

}

function effectOff(e){
    //e.classList.remove('hovering');
    //visste inte om annvändning av classList var "cheating" coding challenge så gör så här i stället
    e.style.boxShadow = "";
    e.style.border = "";
    e.style.borderRadius = "";
}
