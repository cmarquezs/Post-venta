<?php include "Views/Templates/header.php"; ?>

<div class="card">

  <div class="card-header bg-primary text-white">
    Clientes
  </div>

  <div class="card-body">
  <button class="btn btn-primary mb-2" type="button" onclick="frmCliente();"><i class="fas fa-plus"></i></button>
    <div class="table-responsive">
        <table class="table table-light table-bordered table-hover" id="tblClientes">
            <thead class="thead-dark">
                <tr>
                    <th>Id</th>
                    <th>Dni</th>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Direccion</th>
                    <th>Estado</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
<div class="modal fade" id="my_modal" tabindex="-1" aria-labelledby="Label" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-dark text-white">
                <h5 class="modal-title" id="title"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
                <div class="modal-body">
                    <form method="post" id="frmCliente">
                        <div class="form-floating mb-3">
                            <input type="hidden" id="id" name="id">
                            <input id="dni" class="form-control" type="text" name="dni" placeholder="Documento de Identidad *">
                            <label for="dni">Dni</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Nombre del Cliente *">
                            <label for="nombre">Nombre</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input id="telefono" class="form-control" type="text" name="telefono" placeholder="Telefono *">
                            <label for="telefono">Telefono</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea id="direccion" class="form-control" name="direccion" placeholder="Direccion *" rows="3"></textarea>
                            <label for="direccion">Direccion</label>
                        </div>
                        <button class="btn btn-primary" type="button" onclick="registrarCli(event);" id="btnAccion">Registrar</button>
                        <button class="btn btn-danger" type="button" data-bs-dismiss="modal">Cancelar</button>
                    </form>
                </div>
        </div>
    </div>
</div>
  </div>
</div>



<?php include "Views/Templates/footer.php"; ?>