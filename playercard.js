

let userName;
let tag;
let char;

let profile = {
    name: userName,
    gamerTag: tag,
    character: char
}
const setName = (name) => { userName = name.value; console.log(userName); };
const setGamerTag = (gamerTag) => { tag = gamerTag.value; console.log(tag) };   
const setCharacter = (character) => { char = character.value; console.log(char) };          

function newPlayer() {
    //userData = JSON.stringify(profile);
    userData = profile;
    fetchData("accounts", 'POST', userData)
        .then((x) => {
            console.log('X', x);
            console.log("Successful");
            goIndex();
        }).catch((reason) => {
            console.log(reason)
        });
}

function goHome()
{
    window.location = "home.html";
}





// { name: userName }, { gamerTag: selectGamerTag() }, { character: selectCharacter() }

// function selectName() {
//     const input = document.getElementById("Name").value;
//     return input;
// }

// function selectGamerTag() {
//     const input = document.getElementById("GamerTag").value;
//     return input;
// }

// function selectCharacter() {
//     const input = document.getElementById("Character").value;
//     return input;
// }