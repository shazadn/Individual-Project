

function viewPlayerCards(){
        fetchData("playercard", 'GET', null)
        .then((x) => {
            console.log('X', x);
            console.log("Successful");
            console.log(profile);
        }).catch((reason) => {
            console.log(reason)
        });
}

