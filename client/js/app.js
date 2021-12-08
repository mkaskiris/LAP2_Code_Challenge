const btn = document.querySelector('#post-form');

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
        redirect:  'follow',
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch('http://localhost:3000/posts/', options)
        //.then(d=>d.json())
        .then(window.location.href = 'www.google.com')
        .catch(console.warn)
        // .then(getID)
        // .then(window.location.replace(''))
}

btn.addEventListener('submit', submitPost);

console.log('what up')


// function getID(){

// }