function updateTextInput(val) {
    document.getElementById('textInput').value = `${val} estrellas`;
}


// controla si los campos del libro estan vacios o no a la hora de registrarlos
function libroAdded() {

    // variables que guardan el valor de los input
    let titulo = document.getElementById("tit").value;
    let valor = document.getElementById("textInput").value;

    // control de flujo
    if (titulo === "" && valor === "") {
        alert('Campos del libro vacios. \nInserte un libro 😊');
        location.reload();
    } else {
        alert('Libro guardado');
        location.reload();
    }
}