async function fetchData(bodyRequest) {
    let data = {};
    data = await fetch("http://localhost:8081/fetch", {
        method: "POST",
        body: JSON.stringify(bodyRequest),
        headers: { "Content-Type": "application/json" },
        credentials: 'same-origin',
    }).then(res => {
            return res.json()
    }).then(function(data) {
        return data;
    })

    return data;
}


export { fetchData }
