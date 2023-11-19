let tblUsuarios, tblClientes, tblCajas, tblMedidas, tblCategorias, tblProductos, t_h_c, t_h_v, t_arqueo, myModal;

document.addEventListener("DOMContentLoaded", function(){

    if (document.getElementById('my_modal')) {
        myModal = new bootstrap.Modal(document.getElementById('my_modal'));
    }

    $('#cliente').select2();

    //Inicio de la tabla usuarios.
    tblUsuarios = $('#tblUsuarios').DataTable({
        ajax: {
            url: base_url + "Usuarios/listar",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'usuario'
            },
            {
                'data' : 'nombre'
            },
            {
                'data' : 'caja'
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
             "<'row'<'col-sm-12'tr>>" +
             "<'row'<'col-sm-5'i><'col-sm-7'p>>",
             buttons: [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',
 
                //Aquí es donde generas el botón personalizado
                text: '<span class="badge bg-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte de usuarios',
                filename: 'Reporte de usuarios',
                text: '<span class="badge  bg-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para copiar
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte de usuarios',
                filename: 'Reporte de usuarios',
                text: '<span class="badge  bg-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge bg-dark"><i class="fas fa-print"></i></span>'
            },
            //Botón para cvs
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  bg-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  bg-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
        ]
    });
    //Fin de la tabla usuarios.

    //Inicio de la tabla clientes.
    tblClientes = $('#tblClientes').DataTable({
        ajax: {
            url: base_url + "Clientes/listar",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'dni'
            },
            {
                'data' : 'nombre'
            },
            {
                'data' : 'telefono'
            },
            {
                'data' : 'direccion'
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
             "<'row'<'col-sm-12'tr>>" +
             "<'row'<'col-sm-5'i><'col-sm-7'p>>",
             buttons: [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',
 
                //Aquí es donde generas el botón personalizado
                text: '<span class="badge bg-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte de usuarios',
                filename: 'Reporte de usuarios',
                text: '<span class="badge  bg-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para copiar
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte de usuarios',
                filename: 'Reporte de usuarios',
                text: '<span class="badge  bg-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge bg-dark"><i class="fas fa-print"></i></span>'
            },
            //Botón para cvs
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  bg-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  bg-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
        ]
    });
    //Fin de la tabla clientes.

    //Inicio de la tabla caja.
    tblCajas = $('#tblCajas').DataTable({
        ajax: {
            url: base_url + "Cajas/listar",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'caja'
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
             "<'row'<'col-sm-12'tr>>" +
             "<'row'<'col-sm-5'i><'col-sm-7'p>>",
             buttons: [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',
 
                //Aquí es donde generas el botón personalizado
                text: '<span class="badge bg-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte de usuarios',
                filename: 'Reporte de usuarios',
                text: '<span class="badge  bg-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para copiar
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte de usuarios',
                filename: 'Reporte de usuarios',
                text: '<span class="badge  bg-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge bg-dark"><i class="fas fa-print"></i></span>'
            },
            //Botón para cvs
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  bg-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  bg-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
        ]
    });
    //Fin de la tabla caja.

    //Inicio de la tabla medidas.
    tblMedidas = $('#tblMedidas').DataTable({
        ajax: {
            url: base_url + "Medidas/listar",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'nombre'
            },
            {
                'data' : 'nombre_corto'
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
             "<'row'<'col-sm-12'tr>>" +
             "<'row'<'col-sm-5'i><'col-sm-7'p>>",
             buttons: [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',
 
                //Aquí es donde generas el botón personalizado
                text: '<span class="badge bg-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte de usuarios',
                filename: 'Reporte de usuarios',
                text: '<span class="badge  bg-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para copiar
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte de usuarios',
                filename: 'Reporte de usuarios',
                text: '<span class="badge  bg-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge bg-dark"><i class="fas fa-print"></i></span>'
            },
            //Botón para cvs
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  bg-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  bg-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
        ]
    });
    //Fin de la tabla medidas.

    //Inicio de la tabla categorias.
    tblCategorias = $('#tblCategorias').DataTable({
        ajax: {
            url: base_url + "Categorias/listar",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'nombre'
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
             "<'row'<'col-sm-12'tr>>" +
             "<'row'<'col-sm-5'i><'col-sm-7'p>>",
             buttons: [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',
 
                //Aquí es donde generas el botón personalizado
                text: '<span class="badge bg-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte de usuarios',
                filename: 'Reporte de usuarios',
                text: '<span class="badge  bg-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para copiar
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte de usuarios',
                filename: 'Reporte de usuarios',
                text: '<span class="badge  bg-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge bg-dark"><i class="fas fa-print"></i></span>'
            },
            //Botón para cvs
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  bg-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  bg-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
        ]
    });
    //Fin de la tabla categorias.

    //Inicio de la tabla categorias.
    tblProductos = $('#tblProductos').DataTable({
        ajax: {
            url: base_url + "Productos/listar",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'imagen'
            },
            {
                'data' : 'codigo'
            },
            {
                'data' : 'descripcion'
            },
            {
                'data' : 'precio_venta'
            },
            {
                'data' : 'cantidad'
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
             "<'row'<'col-sm-12'tr>>" +
             "<'row'<'col-sm-5'i><'col-sm-7'p>>",
             buttons: [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',
 
                //Aquí es donde generas el botón personalizado
                text: '<span class="badge bg-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte de usuarios',
                filename: 'Reporte de usuarios',
                text: '<span class="badge  bg-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para copiar
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte de usuarios',
                filename: 'Reporte de usuarios',
                text: '<span class="badge  bg-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge bg-dark"><i class="fas fa-print"></i></span>'
            },
            //Botón para cvs
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  bg-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  bg-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
        ]
    });
    //Fin de la tabla categorias.

    //Inicio de la tabla historial compra.
   t_h_c = $('#t_historial_c').DataTable({
        ajax: {
            url: base_url + "Compras/listar_historial",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'total'
            },
            {
                'data' : 'fecha'
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ]
    });
    //Fin de la tabla historial compra.

    //Inicio de la tabla historial venta.
    t_h_v = $('#t_historial_v').DataTable({
        ajax: {
            url: base_url + "Compras/listar_historial_venta",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'nombre'
            },
            {
                'data' : 'total'
            },
            {
                'data' : 'fecha'
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ]
    });
    //Fin de la tabla historial venta.

    //Inicio de la tabla arqueo.
    t_arqueo = $('#t_arqueo').DataTable({
            ajax: {
                url: base_url + "Cajas/listar_arqueo",
                dataSrc: ''
            },
            columns: [
                {
                    'data' : 'id'
                },
                {
                    'data' : 'monto_inicial'
                },
                {
                    'data' : 'monto_final'
                },
                {
                    'data' : 'fecha_apertura'
                },
                {
                    'data' : 'fecha_cierre'
                },
                {
                    'data' : 'total_ventas'
                },
                {
                    'data' : 'monto_total'
                },
                {
                    'data' : 'estado'
                },
            ],
            language: {
                "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
            },
            dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                 "<'row'<'col-sm-12'tr>>" +
                 "<'row'<'col-sm-5'i><'col-sm-7'p>>",
                 buttons: [{
                    //Botón para Excel
                    extend: 'excelHtml5',
                    footer: true,
                    title: 'Archivo',
                    filename: 'Export_File',
     
                    //Aquí es donde generas el botón personalizado
                    text: '<span class="badge bg-success"><i class="fas fa-file-excel"></i></span>'
                },
                //Botón para PDF
                {
                    extend: 'pdfHtml5',
                    download: 'open',
                    footer: true,
                    title: 'Reporte de usuarios',
                    filename: 'Reporte de usuarios',
                    text: '<span class="badge  bg-danger"><i class="fas fa-file-pdf"></i></span>',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                //Botón para copiar
                {
                    extend: 'copyHtml5',
                    footer: true,
                    title: 'Reporte de usuarios',
                    filename: 'Reporte de usuarios',
                    text: '<span class="badge  bg-primary"><i class="fas fa-copy"></i></span>',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                //Botón para print
                {
                    extend: 'print',
                    footer: true,
                    filename: 'Export_File_print',
                    text: '<span class="badge bg-dark"><i class="fas fa-print"></i></span>'
                },
                //Botón para cvs
                {
                    extend: 'csvHtml5',
                    footer: true,
                    filename: 'Export_File_csv',
                    text: '<span class="badge  bg-success"><i class="fas fa-file-csv"></i></span>'
                },
                {
                    extend: 'colvis',
                    text: '<span class="badge  bg-info"><i class="fas fa-columns"></i></span>',
                    postfixButtons: ['colvisRestore']
                }
            ]
        });
        //Fin de la tabla arqueo.
});


function frmCambiarPass(e) {
    e.preventDefault();
    const actual = document.getElementById('clave_actual').value;
    const nueva = document.getElementById('clave_nueva').value;
    const confirmar = document.getElementById('confirmar_clave').value;
    if (actual == '' || nueva == '' || confirmar == '') {
        alertas('TODOS LOS CAMPOS SON OBLIGATORIOS', 'warning');
        return false;
    }else {
        if (nueva != confirmar) {
            alertas('LAS CONTRASEÑAS NO COINCIDEN', 'warning');
            return false;
        }else{
            const url = base_url + "Usuarios/cambiarPass";
            const frm = document.getElementById("frmCambiarPass");
            const http = new XMLHttpRequest();
            http.open("POST", url, true);
            http.send(new FormData(frm));
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    $("#cambiarPass").modal("hide");
                    alertas(res.msg, res.icono);
                    frm.reset();
                }
            }
        }
    }
}

//Inicio Usuarios.
function frmUsuario() {
    document.getElementById("title").textContent = "Nuevo Usuario";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("claves").classList.remove("d-none");
    document.getElementById("frmUsuario").reset();
    document.getElementById("id").value = "";
    myModal.show();
}
function registrarUser(e) {
    e.preventDefault();
    const usuario = document.getElementById("usuario");
    const nombre = document.getElementById("nombre");
    const caja = document.getElementById("caja"); 
    if (usuario.value == "" || nombre.value == "" || caja.value == "") {
        alertas('TODOS LOS CAMPOS SON OBLIGATORIOS', 'warning'); 
    }else{
        const url = base_url + "Usuarios/registrar";
        const frm = document.getElementById("frmUsuario");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                myModal.hide();
                alertas(res.msg, res.icono);
                tblUsuarios.ajax.reload();
            }
        }
    }
}
function btnEditarUser(id) {
    document.getElementById("title").textContent = "Actualizar Usuario";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Usuarios/editar/"+id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("usuario").value = res.usuario;
            document.getElementById("nombre").value = res.nombre;
            document.getElementById("caja").value = res.id_caja;
            document.getElementById("claves").classList.add("d-none");
            myModal.show();
        }
    }
}
function btnEliminarUser(id) {
    Swal.fire({
        title: '¿ESTA SEGURO DE ELIMINAR?',
        text: "EL USUARIO NO SE ELIMINARA DE FORMA PERMANENTE, SOLO CAMBIARA EL ESTADO A INACTIVO!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Usuarios/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblUsuarios.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }
        }
    })
}
function btnReingresarUser(id) {
    Swal.fire({
        title: 'ESTA SEGURO DE REINGRESAR?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Usuarios/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblUsuarios.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }
        }
    })
}
//Fin Usuarios.

//Inicio Clientes.
function frmCliente() {
    document.getElementById("title").textContent = "Nuevo Cliente";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmCliente").reset();
    document.getElementById("id").value = "";
    myModal.show();
}
function registrarCli(e){
    e.preventDefault();
    const dni = document.getElementById("dni");
    const nombre = document.getElementById("nombre");
    const telefono = document.getElementById("telefono");
    const direccion = document.getElementById("direccion");
    if (dni.value == "" || nombre.value == "" || telefono.value == "" || direccion.value == "") {
        alertas('Todos los campos son obligatorios', 'warning');
    }else{
        const url = base_url + "Clientes/registrar";
        const frm = document.getElementById("frmCliente");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                   myModal.hide();
                   alertas(res.msg, res.icono);
                   tblClientes.ajax.reload();

            }
        }
    }
}
function btnEditarCli(id) {
    document.getElementById("title").textContent = "Actualizar Cliente";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Clientes/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("dni").value = res.dni;
            document.getElementById("nombre").value = res.nombre;
            document.getElementById("telefono").value = res.telefono;
            document.getElementById("direccion").value = res.direccion;
            myModal.show();
        }
    }
}
function btnEliminarCli(id) {
    Swal.fire({
        title: '¿Esta seguro de eliminar?',
        text: "El cliente no se eliminara de forma permanente, solo cambiara el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Clientes/eliminar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    tblClientes.ajax.reload();
                }
            }
        }
    })
}
function btnReingresarCli(id) {
    Swal.fire({
        title: '¿Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Clientes/reingresar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    tblClientes.ajax.reload();
                }
            }
        }
    })
}
//Fin Clientes.

//Inicio Cajas.
function frmCaja() {
    document.getElementById("title").textContent = "Nueva Caja";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmCaja").reset();
    document.getElementById("id").value = "";
    myModal.show();
}
function registrarCa(e){
    e.preventDefault();
    const caja = document.getElementById("caja");
    if (caja.value == "") {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios.',
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Cajas/registrar";
        const frm = document.getElementById("frmCaja");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Caja registrada con exito.',
                        showConfirmButton: false,
                        timer: 3000
                   })
                   frm.reset();
                   myModal.hide();
                   tblCajas.ajax.reload();
                }else if (res == "modificado") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Caja modificada con exito.',
                        showConfirmButton: false,
                        timer: 3000
                   })
                   myModal.hide();
                   tblCajas.ajax.reload();
                }else{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
            }
        }
    }
}
function btnEditarCa(id) {
    document.getElementById("title").innerHTML = "Actualizar Caja";
    document.getElementById("btnAccion").innerHTML = "Modificar";
    const url = base_url + "Cajas/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("caja").value = res.caja;
            myModal.show();
        }
    }
}
function btnEliminarCa(id) {
    Swal.fire({
        title: '¿Esta seguro de eliminar?',
        text: "La caja no se eliminara de forma permanente, solo cambiara el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Cajas/eliminar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblCajas.ajax.reload();
                    if(res == "ok"){
                        Swal.fire(
                            'Mensaje',
                            'Caja eliminada con exito',
                            'success'
                        )
                    }else{
                        Swal.fire(
                            'Mensaje',
                            'Caja eliminada con exito',
                            'success'
                        )
                        tblCajas.ajax.reload();
                    }  
                }
            }
        }
    })
}
function btnReingresarCa(id) {
    Swal.fire({
        title: '¿Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Cajas/reingresar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if(res == "ok"){
                        Swal.fire(
                            'Mensaje',
                            'Caja reingresada con exito',
                            'success'
                        )
                    }else{
                        Swal.fire(
                            'Mensaje',
                            'Caja reingresada con exito',
                            'success'
                        )
                        tblCajas.ajax.reload();
                    }  
                }
            }
        }
    })
}
//Fin Cajas.

//Inicio Medidas.
function frmMedida() {
    document.getElementById("title").textContent = "Nueva Medida";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmMedida").reset();
    document.getElementById("id").value = "";
    myModal.show();
}
function registrarMedi(e){
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const nombre_corto = document.getElementById("nombre_corto");
    if (nombre.value == "" || nombre_corto.value == "") {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios.',
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Medidas/registrar";
        const frm = document.getElementById("frmMedida");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Medida registrada con exito.',
                        showConfirmButton: false,
                        timer: 3000
                   })
                   frm.reset();
                   myModal.hide();
                   tblMedidas.ajax.reload();
                }else if (res == "modificado") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Medida modificada con exito.',
                        showConfirmButton: false,
                        timer: 3000
                   })
                   myModal.hide();
                   tblMedidas.ajax.reload();
                }else{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
            }
        }
    }
}
function btnEditarMedi(id) {
    document.getElementById("title").textContent = "Actualizar Medidas";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Medidas/editar/"+id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("nombre").value = res.nombre;
            document.getElementById("nombre_corto").value = res.nombre_corto;
            myModal.show();
        }
    }
}
function btnEliminarMedi(id) {
    Swal.fire({
        title: '¿Esta seguro de eliminar?',
        text: "La medida no se eliminara de forma permanente, solo cambiara el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Medidas/eliminar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblMedidas.ajax.reload();
                    if(res == "ok"){
                        Swal.fire(
                            'Mensaje',
                            'Medida eliminada con exito',
                            'success'
                        )
                    }else{
                        Swal.fire(
                            'Mensaje',
                            'Medida eliminada con exito',
                            'success'
                        )
                        tblMedidas.ajax.reload();
                    }  
                }
            }
        }
    })
}
function btnReingresarMedi(id) {
    Swal.fire({
        title: '¿Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Medidas/reingresar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if(res == "ok"){
                        Swal.fire(
                            'Mensaje',
                            'Medida reingresada con exito',
                            'success'
                        )
                    }else{
                        Swal.fire(
                            'Mensaje',
                            'Medida reingresada con exito',
                            'success'
                        )
                        tblMedidas.ajax.reload();
                    }  
                }
            }
        }
    })
}
//Fin Medidas.

//Inicio Categorias.
function frmCategoria() {
    document.getElementById("title").textContent = "Nueva Categoria";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmCategoria").reset();
    document.getElementById("id").value = "";
    myModal.show();

}
function registrarCate(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    if (nombre.value == "") {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios.',
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Categorias/registrar";
        const frm = document.getElementById("frmCategoria");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Categoria registrada con exito.',
                        showConfirmButton: false,
                        timer: 3000
                   })
                   frm.reset();
                   myModal.hide();
                    tblCategorias.ajax.reload();
                }else if (res == "modificado") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Categoria registrada con exito.',
                        showConfirmButton: false,
                        timer: 3000
                   })
                   myModal.hide();
                   tblCategorias.ajax.reload();
                }else{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
            }
        }
    }
}
function btnEditarCate(id) {
    document.getElementById("title").textContent = "Actualizar Categorias";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Categorias/editar/"+id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("nombre").value = res.nombre;
            myModal.show();
        }
    }
}
function btnEliminarCate(id) {
    Swal.fire({
        title: '¿Esta seguro de eliminar?',
        text: "La categoria no se eliminara de forma permanente, solo cambiara el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Categorias/eliminar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblCategorias.ajax.reload();
                    if(res == "ok"){
                        Swal.fire(
                            'Mensaje',
                            'Categoria eliminada con exito',
                            'success'
                        )
                    }else{
                        Swal.fire(
                            'Mensaje',
                            'Categoria eliminada con exito',
                            'success'
                        )
                        tblCategorias.ajax.reload();
                    }  
                }
            }
        }
    })
}
function btnReingresarCate(id) {
    Swal.fire({
        title: '¿Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Categorias/reingresar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if(res == "ok"){
                        Swal.fire(
                            'Mensaje',
                            'Categoria reingresada con exito',
                            'success'
                        )
                    }else{
                        Swal.fire(
                            'Mensaje',
                            'Categoria reingresada con exito',
                            'success'
                        )
                        tblCategorias.ajax.reload();
                    }  
                }
            }
        }
    })
}
//Fin Categorias.

//Inicio Producto.
function frmProducto() {
    document.getElementById("title").textContent = "Nuevo Producto";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmProducto").reset();
    document.getElementById("id").value = "";
    myModal.show();
    deleteImg();
}
function registrarPro(e) {
    e.preventDefault();
    const codigo = document.getElementById("codigo");
    const nombre = document.getElementById("nombre");
    const precio_compra = document.getElementById("precio_compra");
    const precio_venta = document.getElementById("precio_venta");
    const id_medida = document.getElementById("medida"); 
    const id_cat = document.getElementById("categoria"); 
    if (codigo.value == "" || nombre.value == "" || precio_compra == "" || precio_venta == "") {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios.',
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Productos/registrar";
        const frm = document.getElementById("frmProducto");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                const res = JSON.parse(this.responseText);
                if (res == "si") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Producto registrado con exito.',
                        showConfirmButton: false,
                        timer: 3000
                   })
                   frm.reset();
                   myModal.hide();
                   tblProductos.ajax.reload();
                }else if (res == "modificado") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Producto modificado con exito.',
                        showConfirmButton: false,
                        timer: 3000
                   })
                   myModal.hide();
                   tblProductos.ajax.reload();
                }else{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
            }
        }
    }
}
function btnEditarPro(id) {
    document.getElementById("title").textContent = "Actualizar Producto";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Productos/editar/"+id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("codigo").value = res.codigo;
            document.getElementById("nombre").value = res.descripcion;
            document.getElementById("precio_compra").value = res.precio_compra;
            document.getElementById("precio_venta").value = res.precio_venta;
            document.getElementById("medida").value = res.id_medida;
            document.getElementById("categoria").value = res.id_categoria;
            document.getElementById("img-preview").src = base_url + 'Assets/img/'+ res.foto;
            document.getElementById("icon-cerrar").innerHTML = `
            <button class="btn btn-danger" onclick="deleteImg()"><i class="fas fa-times"></i></button>`; 
            document.getElementById("icon-image").classList.add("d-none");
            document.getElementById("foto_actual").value = res.foto;
            myModal.show();
        }
    }
}
function btnEliminarPro(id) {
    Swal.fire({
        title: '¿Esta seguro de eliminar?',
        text: "El producto no se eliminara de forma permanente, solo cambiara el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Productos/eliminar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblProductos.ajax.reload();
                    if(res == "ok"){
                        Swal.fire(
                            'Mensaje',
                            'Producto eliminado con exito',
                            'success'
                        )
                    }else{
                        Swal.fire(
                            'Mensaje',
                            'Producto eliminado con exito',
                            'success'
                        )
                        tblProductos.ajax.reload();
                    }  
                }
            }
        }
    })
}
function btnReingresarPro(id) {
    Swal.fire({
        title: '¿Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Productos/reingresar/"+id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if(res == "ok"){
                        Swal.fire(
                            'Mensaje',
                            'Producto reingresado con exito',
                            'success'
                        )
                    }else{
                        Swal.fire(
                            'Mensaje',
                            'Producto reingresado con exito',
                            'success'
                        )
                        tblProductos.ajax.reload();
                    }  
                }
            }
        }
    })
}
// Imagen Producto.
function preview(e) {
    const url = e.target.files[0];
    const urlTmp = URL.createObjectURL(url);
    document.getElementById("img-preview").src = urlTmp;
    document.getElementById("icon-image").classList.add("d-none");
    document.getElementById("icon-cerrar").innerHTML = `
    <button class="btn btn-danger" onclick="deleteImg()"><i class="fas fa-times"></i></button>
    ${url['name']}`; 
}

function deleteImg(e) {
    document.getElementById("icon-cerrar").innerHTML = '';
    document.getElementById("icon-image").classList.remove("d-none");
    document.getElementById("img-preview").src = '';
    document.getElementById("imagen").value = '';
    document.getElementById("foto_actual").value = '';
}
//Fin Producto.

function buscarCodigo(e) {
    e.preventDefault();
    const cod = document.getElementById("codigo").value;
    if (cod != '') {
        if (e.which == 13) {
            const url = base_url + "Compras/buscarCodigo/" + cod;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if (res) {
                        document.getElementById("nombre").value = res.descripcion;
                        document.getElementById("precio").value = res.precio_compra;
                        document.getElementById("id").value = res.id;
                        document.getElementById("cantidad").removeAttribute('disabled');
                        document.getElementById("cantidad").focus();
                    } else {
                       alertas('EL PRODUCTO NO EXISTE', 'warning');
                       document.getElementById("codigo").value = '';
                       document.getElementById("codigo").focus();
                    }
                }
            }
        }
    }else{
        alertas('INGRESE EL CODIGO', 'warning');
    }
}
function buscarCodigoVenta(e) {
    e.preventDefault();
    const cod = document.getElementById("codigo").value;
    if (cod != '') {
        if (e.which == 13) {
            const url = base_url + "Compras/buscarCodigo/" + cod;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    if (res) {
                        document.getElementById("nombre").value = res.descripcion;
                        document.getElementById("precio").value = res.precio_venta;
                        document.getElementById("id").value = res.id;
                        document.getElementById("cantidad").removeAttribute('disabled');
                        document.getElementById("cantidad").focus();
                    } else {
                       alertas('EL PRODUCTO NO EXISTE', 'warning');
                       document.getElementById("codigo").value = '';
                       document.getElementById("codigo").focus();
                    }
                }
            }
        }
    }else{
        alertas('INGRESE EL CODIGO', 'warning');
    }
}
function calcularPrecio(e) {
    e.preventDefault();
    const cant = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;
    document.getElementById("sub_total").value = precio * cant;
    if (e.which == 13) {
        if (cant > 0) {
            const url = base_url + "Compras/ingresar";
            const frm = document.getElementById("frmCompra");
            const http = new XMLHttpRequest();
            http.open("POST", url, true);
            http.send(new FormData(frm));
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    frm.reset();
                    cargarDetalle();
                    document.getElementById('cantidad').setAttribute('disabled', 'disabled');
                    document.getElementById('codigo').focus();
                }
            }
        }
    }
}
function calcularPrecioVenta(e) {
    e.preventDefault();
    const cant = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;
    document.getElementById("sub_total").value = precio * cant;
    if (e.which == 13) {
        if (cant > 0) {
            const url = base_url + "Compras/ingresarVenta";
            const frm = document.getElementById("frmVenta");
            const http = new XMLHttpRequest();
            http.open("POST", url, true);
            http.send(new FormData(frm));
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    frm.reset();
                    cargarDetalleVenta();
                    document.getElementById('cantidad').setAttribute('disabled', 'disabled');
                    document.getElementById('codigo').focus();
                }
            }
        }
    }
}


if (document.getElementById('tblDetalle')) {
    cargarDetalle();
}

if (document.getElementById('tblDetalleVenta')) {
    cargarDetalleVenta();
}

function cargarDetalle() {
    const url = base_url + "Compras/listar/detalle";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            let html = '';
            res.detalle.forEach(row => {
                html += `<tr>
                <td>${row['id']}</td>
                <td>${row['descripcion']}</td>
                <td>${row['cantidad']}</td>
                <td>${row['precio']}</td>
                <td>${row['sub_total']}</td>
                <td>
                <button class="btn btn-danger" type="button" onclick="deleteDetalle(${row['id']}, 1)">
                <i class="fas fa-trash-alt"></i></button>
                </td>
                </tr>`;
            });
            document.getElementById("tblDetalle").innerHTML = html;
            document.getElementById("total").value = res.total_pagar.total;
        }
    }
}
function cargarDetalleVenta() {
    const url = base_url + "Compras/listar/detalle_temp";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            let html = '';
            res.detalle.forEach(row => {
                html += `<tr>
                <td>${row['id']}</td>
                <td>${row['descripcion']}</td>
                <td>${row['cantidad']}</td>
                <td><input class="form-control" placeholder="Descuento" type="text" onkeyup="calcularDescuento(event, ${row['id']})"></td>
                <td>${row['descuento']}</td>
                <td>${row['precio']}</td>
                <td>${row['sub_total']}</td>
                <td>
                <button class="btn btn-danger" type="button" onclick="deleteDetalle(${row['id']}, 2)">
                <i class="fas fa-trash-alt"></i></button>
                </td>
                </tr>`;
            });
            document.getElementById("tblDetalleVenta").innerHTML = html;
            document.getElementById("total").value = res.total_pagar.total;
        }
    }
}



function calcularDescuento(e, id) {
    e.preventDefault();
    if (e.target.value == '') {
        alertas('INGRESE EL DESCUENTO', 'warning');
    }else{
        if (e.which == 13) {
            const url = base_url + "Compras/calcularDescuento/" + id + "/" + e.target.value;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    cargarDetalleVenta();
                }
            }
        }
    }
}
function deleteDetalle(id, accion) {
    let url;
    if (accion == 1) {
        url = base_url + "Compras/delete/" + id;
    }else{
        url = base_url + "Compras/deleteVenta/" + id;
    }
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            alertas(res.msg, res.icono);
            if (accion == 1) {
                cargarDetalle();
            }else{
                cargarDetalleVenta();
            }
        }
    }
}

function procesar(accion) {
    Swal.fire({
        title: '¿Esta seguro de realizar la accion?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            let url;
            if (accion == 1) {
                url = base_url + "Compras/registrarCompra"; 
            }else{
                const id_cliente = document.getElementById('cliente').value;
                url = base_url + "Compras/registrarVenta/" + id_cliente;
            }
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    console.log(this.responseText);
                    if(res.msg == "ok"){
                        alertas(res.msg, res.icono);
                        let ruta;
                        if (accion == 1) {
                            ruta = base_url + 'Compras/generarPdf/' + res.id_compra;
                        }else{
                            ruta = base_url + 'Compras/generarPdfVenta/' + res.id_venta;
                        }
                        window.open(ruta);
                        setTimeout(() => {
                            window.location.reload();
                        }, 300);
                    }else{
                        alertas(res.msg, res.icono);
                    }  
                }
            }
        }
    }) 
}



function modificarEmpresa() {
    const frm = document.getElementById('frmEmpresa');
    const url = base_url + "Administracion/modificar";
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(frm));
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            if (res == 'ok') {
                alert('Modificado');
            }
 
        }
    }
}
function alertas(mensaje, icono) {
    Swal.fire({
        icon: icono,
        title: mensaje,
        showConfirmButton: false,
        timer: 3000
    })
}
if (document.getElementById('stockMinimo')) {
    reporteStock();
    productosVendidos();
}
function reporteStock() {
    const url = base_url + "Administracion/reporteStock";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            let nombre = [];
            let cantidad = [];
            for (let i = 0; i < res.length; i++) {
                nombre.push(res[i]['descripcion']);
                cantidad.push(res[i]['cantidad']);
                
            }
            var ctx = document.getElementById("stockMinimo");
            var myPieChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: nombre,
                    datasets: [{
                        data: cantidad,
                        backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
                    }],
                },
            });
        }
    }
}
function productosVendidos() {
    const url = base_url + "Administracion/productosVendidos";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            let nombre = [];
            let cantidad = [];
            for (let i = 0; i < res.length; i++) {
                nombre.push(res[i]['descripcion']);
                cantidad.push(res[i]['total']);
                
            }
            var ctx = document.getElementById("ProductosVendidos");
            var myPieChart = new Chart(ctx, {
              type: 'doughnut',
              data: {
                labels: nombre,
                datasets: [{
                  data: cantidad,
                  backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
                }],
              },
            });
        }
    }
}
function btnAnularC(id) {
    Swal.fire({
        title: '¿ESTA SEGURO DE ANULAR LA COMPRA?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Compras/anularCompra/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    t_h_c.ajax.reload();
                }
            }
        }
    }) 
}
function btnAnularV(id) {
    Swal.fire({
        title: '¿ESTA SEGURO DE ANULAR LA VENTA?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Compras/anularVenta/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    t_h_v.ajax.reload();
                }
            }
        }
    }) 
}
function arqueoCaja(e) {
    document.getElementById('ocultar_campos').classList.add('d-none');
    document.getElementById('monto_inicial').value = '';
    document.getElementById('btnAccion').textContent = 'Abrir Caja';
    myModal.show();
}
function abrirArqueo(e) {
    e.preventDefault();
    const monto_inicial = document.getElementById('monto_inicial').value;
    if (monto_inicial == '') {
        alertas('INGRESE EL MONTO INICIAL', 'warning');
    }else{
        const frm = document.getElementById('frmAbrirCaja');
        const url = base_url + "Cajas/abrirArqueo";
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
                t_arqueo.ajax.reload();
                myModal.hide();
            }
        }
    }
}
function cerrarCaja() {
    const url = base_url + "Cajas/getVentas";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById('monto_final').value = res.monto_total.total;
            document.getElementById('total_ventas').value = res.total_ventas.total;
            document.getElementById('monto_inicial').value = res.inicial.monto_inicial;
            document.getElementById('monto_general').value = res.monto_general;
            document.getElementById('id').value = res.inicial.id;
            document.getElementById('ocultar_campos').classList.remove('d-none');
            document.getElementById('btnAccion').textContent = 'Cerrar Caja';
            myModal.show();
        }
    }
}

function registrarPermisos(e) {
    e.preventDefault();
    const url = base_url + "Usuarios/registrarPermiso";
    const frm = document.getElementById('formulario');
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(frm));
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            if (res != '') {
                alertas(res.msg, res.icono);
            } else {
                alertas('ERROR NO IDENTIFICADO', 'error');
            }
        }
    }
}