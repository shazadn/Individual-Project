


function viewPlayerCards() {
    fetchData("playercard", 'GET', null)
        .then((r) => {
            console.log("Successful");
            console.log('PlayerCard', r);
            return JSON.parse(r);
        }).then((data) => {
            return generateRows(data);
        }).catch((reason) => {
            console.log(reason)
        });
}


function generateRows(players) {
    for (let player of players) {
        player.actions = '<a href="update.html?id=' + player.id + '">Update</a><br />';
        console.log(player);
        createTableRow(player);
    }
}

function createTableRow(player) {
    let tableRef = document.getElementById("players-table");
    let row = tableRef.insertRow(-1);

    let index = 0;
    for (let key in player) {
        let cell = row.insertCell(index);
        cell.innerHTML = player[key];
        index++;
    }
}