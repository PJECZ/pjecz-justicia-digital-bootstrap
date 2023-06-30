//
// Consultas Peritos
//
// Cargar previemante
// - consultas-api-url.js
// - consultas-distritos.js
//
document.addEventListener("DOMContentLoaded", function() {
  // Definir URL sin parámetros
  const actualUrl = window.location.href.split("?")[0];

  // Definir elementos del DOM
  const peritosFormCard = document.getElementById("peritosFormCard");
  const peritosFormSpinner = document.getElementById("peritosFormSpinner");
  const peritosForm = document.getElementById("peritosForm");
  const peritosTableCard = document.getElementById("peritosTableCard");
  const peritosTableTitle = document.getElementById("peritosTableTitle");
  const peritosTableSpinner = document.getElementById("peritosTableSpinner");
  const peritosTable = document.getElementById("peritosTable");
  const nombreInput = document.getElementById("nombreInput");
  const consultarButton = document.getElementById("consultarButton");
  const regresarButton = document.getElementById("regresarButton");
  
  // Consultar los peritos para llenar la tabla
  function consultarPeritos(nombre, distritoClave) {
    peritosTableSpinner.style.display = "block";
    if (nombre == null) {
      nombre = "";
    }
    if (distritoClave == null) {
      distritoClave = "";
    }
    peritosTableTitle.innerHTML = "Con nombre " + nombre + " con clave del distrtito " + distritoClave;;
    $("#peritosTable").DataTable({
      lengthChange: false,
      ordering: false,
      searching: false,
      scrollX: true,
      serverSide: true,
      ajax: {
        url: apiUrl + "/peritos/datatable",
        headers: { "X-Api-Key": apiKey },
        type: "GET",
        data: {
          nombre: nombre,
          distrito_clave:distritoClave,
        },
        dataType: "json",
      },
      columns: [
        { data: "perito_tipo_nombre", width: "20%" },
        { data: "nombre", width: "20%" },
        { data: "domicilio", width: "20%" },
        { data: "telefono_fijo", width: "10%" },
        { data: "telefono_celular", width: "10%" },
        { data: "email", width: "20%" },
      ],
      language: {
        lengthMenu: "Mostrar _MENU_",
        search: "Filtrar:",
        zeroRecords: "No hay registros.",
        info: "Página _PAGE_ de _PAGES_",
        infoEmpty: "No hay registros",
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        oPaginate: {
          sFirst: "Primero",
          sLast: "Último",
          sNext: "Siguiente",
          sPrevious: "Anterior",
        },
      },
    });
    peritosTableSpinner.style.display = "none";
  }

  // Recargar la pagina esta página sin parámetros
  function recargarSinParametros() {
    window.location.href = actualUrl;
  }

  // Recargar la pagina con los parametros del formulario
  function recargarConParametros() {
    const actualUrl = window.location.href.split("?")[0];
    const elNombre = nombreInput.value;
    const elDistrito = distritoSelect.value;
    window.location.href = actualUrl + "?distrito_clave=" + elDistrito + "&nombre=" + elNombre;
  }

  //
  // Proceso inicial
  //

  // Obtener los parametros de la URL
  const urlParams = new URLSearchParams(window.location.search);
  var nombre = urlParams.get("nombre");
  var distrito_clave = urlParams.get("distrito_clave");

  // Si se recibio el nombre
  if (nombre != null) {
    // Mostrar el card con la tabla DataTable
    peritosFormCard.style.display = "none";
    peritosTableCard.style.display = "block";
    consultarPeritos(nombre, distrito_clave);
  } else {
    // Mostrar el card con el formulario para consultar
    peritosFormCard.style.display = "block";
    peritosFormSpinner.style.display = "none";
    peritosForm.style.display = "block";
    consultarButton.addEventListener("click", (thisEvent) => {
      recargarConParametros();
    });
  }
  // Realizar evento click para regresar y limpiar url
  regresarButton.addEventListener("click", (thisEvent) => {
    regresarConsulta();
  });
});
