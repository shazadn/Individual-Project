function fetchData(url, method, body) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status >= 200 && req.status <= 299) {
                    resolve(req);
                } else {
                    reject("Unsuccessful");

                }
            }
        };
        req.open(method, url);
        req.setRequestHeader("Content-Type", "application/json")
        req.send(JSON.stringify(body));
    });

}

function login() {
    fetchData('http://localhost:8080/JavaEEServer-1.0/api/accounts', 'GET').then((req) => {
        return JSON.parse(req.responseText);
    }).then((x) => {
        console.log('X', x);
        return userInList(x, selectText());
    }).then((user) => {
        console.log(user ? "Successful" : "Oops ");
        sessionStorage.setItem('user', user.name);
        generateTable(user.name);
    }).catch((reason) => {
        console.log('reason:', reason);
    });
}

/**
 * Checks if a user exists in a list of users.
 * @param {*} users Array of users.
 * @param {*} name Name to search for.
 * @returns User if found, false if not.
 */
function userInList(users, name) {
    for (let user of users) {
        if (user.name === name) {
            window.location = "results.html";
            return user;

        }
    }
    return false;
}


function newPromiseGet() {
    fetchData('http://localhost:8080/JavaEEServer-1.0/api/accounts', 'GET').then((req) => {
        return JSON.parse(req.responseText);
    }).then((x) => {
        console.log('X', x);
    }).then(() => {
        console.log("Successful");
    }).then(() => {
        sessionStorage.setItem(selectText());
    }).then(() => {
        window.location = "results.html";
    }).catch((reason) => {
        console.log('reason:', reason);
    });
}

function newPromisePost() {
    fetchData('http://localhost:8080/JavaEEServer-1.0/api/accounts', 'POST', { name: selectText() })
        .then((x) => {
            console.log('X', x);
        }).then(() => {
            console.log("Successful");
            alert("You have successfully registered")
        }).catch((reason) => {
            console.log(reason)
        });
}

function newPromisePut() {
    fetchData('http://localhost:8080/JavaEEServer-1.0/api/accounts', 'PUT')
        .then((x) => {
            console.log('X', x);
        }).then(() => {
            console.log("Successful");
        }).catch((reason) => {
            console.log(reason)
        });
}

function newPromiseDelete() {
    fetchData('http://localhost:8080/JavaEEServer-1.0/api/accounts', 'DELETE')
        .then((x) => {
            console.log('X', x);
        }).then(() => {
            console.log("Successful");
        }).catch((reason) => {
            console.log(reason)
        });
}

function selectText() {
    const input = document.getElementById("Username").value;
    return input;
}

function checkUser() {
    const check = newPromiseGet2();
    console.log(check);
}

function addTable(name) {
    let tableName = document.getElementById("Username");
    let addRow = tableName.insertRow(-1);
    let count = 0;
    for (let key in name) {
        let data = addRow.insertCell(count);
        let text = document.createTextNode(name[key]);
        data.appendChild(text);
        count++;
    }
}

function generateTable(members) {
    return new Promise((resolve, reject) => {
        for (let user of members) {
            addTable(user);
        } resolve();
    })
}