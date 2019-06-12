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