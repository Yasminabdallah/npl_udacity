async function formSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value

    if (Client.checkUrl(formText)) {
        let body = {
            url: formText,
        }
        const  data = await Client.fetchData(body);
        document.getElementById('error').innerHTML = '';
        document.getElementById('results').style.display = "";
        document.getElementById('sourceTag').innerHTML = data.score_tag;
        document.getElementById('sub').innerHTML = data.subjectivity;
        document.getElementById('confidence').innerHTML = data.confidence;
        document.getElementById('irony').innerHTML = data.irony;

    } else {
        document.getElementById('results').style.display = "none";
        document.getElementById('error').innerHTML = 'invalid url';
    }
    
}


export { formSubmit }
