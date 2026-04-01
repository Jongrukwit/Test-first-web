console.log("Hello world");

document.getElementById("M1").textContent = "Niggo";

let username;
let Nametext = document.getElementById("NameInput");
let NameBut = document.getElementById("NameButton")

NameBut.onclick = function() {
    username = Nametext.value;
    document.getElementById("Welcome").textContent = "Welcome " + username + "!";
}