function newPromisePost() {
    fetchData('http://localhost:8080/JavaEEServer-1.0/api/accounts', 'POST', { name: selectName() }, { gamerTag: selectGamerTag() }, { character: selectCharacter() })
        .then((x) => {
            console.log('X', x);
        }).then(() => {
            console.log("Successful");
            alert("You have successfully made your playercard")
        }).catch((reason) => {
            console.log(reason)
        });
}

function selectName() {
    const input = document.getElementById("Name").value;
    return input;
}

function selectGamerTag() {
    const input = document.getElementById("GamerTag").value;
    return input;
}

function selectCharacter() {
    const input = document.getElementById("Character").value;
    return input;
}