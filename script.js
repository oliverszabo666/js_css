function _load() {

    let myObjects = [
        {
            tag: "h1",
            content: "Olivér"
        },
        {
            tag: "p",
            content: "Front-end developer"
        }
    ];

    /*
    for (let i = 0; i < myObjects.length; i++) {
        
    }
    */
    function returnHTML(object) {
        return `<${object.tag}> ${object.content} </${object.tag}>`
    }

    let rootE = document.getElementById("root");

    for(o of myObjects) {
        rootE.insertAdjacentHTML("beforeend", returnHTML(o));
    }

    rootE.addEventListener("click", function () {
        rootE.classList.toggle("clicked");
    });
}
window.addEventListener("load", _load);