function fetchData(url, method, body) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status >= 200 && req.status <= 299) {
                    resolve(req.responseText);
                } else {
                    reject("Unsuccessful");

                }
            }
        };
        req.open(method, "http://localhost:8080/JavaEEServer-1.0/api/" + url);
        req.setRequestHeader("Content-Type", "application/json")
        req.send(JSON.stringify(body));
    });

}