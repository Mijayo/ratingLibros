function updateTextInput(val) {
    document.getElementById('textInput').value = `${val} estrellas`;
}

function libroAdded() {
    let titulo = document.getElementById("tit").value;
    let valor = document.getElementById("textInput").value;
    if (titulo === "" && valor === "") {
        alert('Campos del libro vacios. \nInserte un libro 😊');
        location.reload();
    } else {
        alert('Libro guardado');
        location.reload();
    }
}

function libroLoaded() {
    let btn = document.getElementById('btnCargar');
}