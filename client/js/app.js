const btn = document.querySelector('#post-form');
const main = document.querySelector('main');

function submitPost(e){
    e.preventDefault();
    const postData = {
        title: e.target.title.value,
        name: e.target.name.value,
        body: e.target.body.value
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch('http://localhost:3000/posts/', options)
        .then(d=>d.json())
        .then(d => window.location.hash = `/posts/${d.id}`)
        .catch(console.warn)
}

btn.addEventListener('submit', submitPost);
window.addEventListener('hashchange', updateContent)

function updateContent(){
    let hash = window.location.hash.substring(8);
    updateMain(hash);
}

function updateMain(hash){
    main.innerHTML = '';
    const title = document.createElement('h1');
    const name = document.createElement('h2');
    const text = document.createElement('p');
    fetch(`http://localhost:3000/posts/${hash}`)
        .then(d=>d.json())
        .then(d => {
            title.textContent = d.title;
            name.textContent = d.name;
            text.textContent = d.body;
        })
    main.appendChild(title);
    main.appendChild(name);
    main.appendChild(text);
}

console.log('what up')


// function getID(){

// }