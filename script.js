window.onload = function() {
    // Lyssna efter händelser
    var clicked = false
    var team_members = document.getElementsByClassName("team-member");
    for (let member of team_members){
        member.addEventListener('mouseenter', function(){
        this.classList.add('hovering');
    })
    member.addEventListener('mouseleave', function(){
        this.classList.remove('hovering');
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
    // Ändra "team-title"
    var text = e.querySelector('#prompt').value;
    e.querySelector('.team-title').innerHTML = text
    console.log("changed")
};

function effectOn(item){
    // Rita en ram runt personen, kanske lite drop shadow?
    //console.log(item);
    //item.style.backgroundColor = "red";

}

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
}
