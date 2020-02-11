function updateTextInput(val) {
    document.getElementById('textInput').value = `${val} estrellas`;
}

function libroAdded() {
    let titulo = document.getElementById("tit").value;
    let valor = document.getElementById("textInput").value;
    if (titulo === "" && valor === "") {
        alert('Campos del libro vacios. \nInserte un libro 😊');
    } else {
        alert('Libro guardado');
    }

}