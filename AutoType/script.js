const text = 'Hello My Self Ullas 😉....Lets Roll What\'s Holding You Back?'

let index = 0;
function writetext() {
    document.body.innerText = text.slice(0, index);

    index++;
    if (index > text.length) {
        index = 0;
    }
}
setInterval(writetext, 100);