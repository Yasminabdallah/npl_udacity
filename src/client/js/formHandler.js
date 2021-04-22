function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value

    if (Client.checkUrl(formText)) {
        let body = {
            url: formText,
        }

        fetch("http://localhost:8081/fetch", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" },
            credentials: 'same-origin',
        }).then(res => {
            return res.json()
        })
        .then(function(data) {
            document.getElementById('error').innerHTML = '';
            document.getElementById('sourceTag').innerHTML = data.score_tag;
            document.getElementById('sub').innerHTML = data.subjectivity;
            document.getElementById('confidence').innerHTML = data.confidence;
            document.getElementById('irony').innerHTML = data.irony;
        });

    } else {
        document.getElementById('error').innerHTML = 'invalid url';
    }
    
}


export { handleSubmit }
