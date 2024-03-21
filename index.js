let btn = document.getElementById('btn');
let quotes = document.getElementById('quote');
let author = document.getElementById('author');


const fetchData = async () => {
    let api = await fetch('https://type.fit/api/quotes');
    let jsonForm = await api.json();
    btn.addEventListener('click', () => {
        let random = Math.floor(Math.random() * jsonForm.length);
        quotes.textContent = jsonForm[random].text;
        author.textContent = jsonForm[random].author;
    });
    console.log(jsonForm);

}
fetchData();