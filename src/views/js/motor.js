function updateTextInput(val) {
    document.getElementById('textInput').value = `${val} estrellas`;
}

document.querySelector(".carga").addEventListener("load", cargarJSON());

function cargarJSON() {
    fetch("./json/libros.json")
        .then(function(res) {
            console.log(res);
            return res.json();
        })
        .then(function(libros) {
            let html = "";

            html += `
      
      <table class="table">
      <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Nombre</th>
        <th scope="col">Valoración</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      
      `;

            libros.libros.forEach(function(element) {
                html += `

    <tr>

      <td>${element.nombre}</td>
      <td>${element.valoracion}</td>
      <td class=""><img width="20" height="236" class="img-fluid m-sm-n1" src="img/estrella.png"></td>
    </tr>
 
        `;
            });

            html += `  </tbody>
      </table>`;

            document.querySelector(".carga").innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        });
}