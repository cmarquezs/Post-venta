<?php include "Views/Templates/header.php"; ?>
<div class="card">
  <div class="card-header bg-primary text-white">
    Medidas
  </div>
  <div class="card-body">
  <button class="btn btn-primary mb-2" type="button" onclick="frmMedida();"><i class="fas fa-plus"></i></button>
        <div class="table-responsive">
            <table class="table table-light table-bordered table-hover" id="tblMedidas">
                <thead class="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Nombre Corto</th>
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
            <form method="post" id="frmMedida">
                    <div class="form-floating mb-3">
                    <input type="hidden" id="id" name="id">
                        <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Nombre Medida *">
                        <label for="nombre">Nombre</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input id="nombre_corto" class="form-control" type="text" name="nombre_corto" placeholder="Nombre Categoria *">
                        <label for="nombre_corto">Nombre Corto</label>
                    </div>
                    <button class="btn btn-primary" type="button" onclick="registrarMedi(event);" id="btnAccion">Registrar</button>
                    <button class="btn btn-danger" type="button" data-bs-dismiss="modal">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</div>
  </div>
</div>
<?php include "Views/Templates/footer.php"; ?>