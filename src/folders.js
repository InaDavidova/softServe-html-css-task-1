document.querySelector('main').addEventListener('click', onClick);

function onClick(e) {
    if(e.target.tagName == "BUTTON"){
        const id = e.target.parentElement.id;
        console.log(id);
    }
}