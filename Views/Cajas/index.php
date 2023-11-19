<?php include "Views/Templates/header.php"; ?>
<div class="card">
  <div class="card-header bg-primary text-white">
    Cajas
  </div>
  <div class="card-body">
  <button class="btn btn-primary mb-2" type="button" onclick="frmCaja();"><i class="fas fa-plus"></i></button>
       <div class="table-responsive">
            <table class="table table-light table-bordered table-hover" id="tblCajas">
                <thead class="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Caja</th>
                        <th>Estado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
<div class="modal fade" id="my_modal" tabindex="-1" aria-labelledby="my_modalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-dark text-white">
                <h5 class="modal-title" id="title"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
                <div class="modal-body">
                    <form method="post" id="frmCaja">
                        <div class="form-floating mb-3">
                            <input type="hidden" id="id" name="id">
                            <input id="caja" class="form-control" type="text" name="caja" placeholder="Nombre Caja *">
                            <label for="caja">Caja</label>
                        </div>
                        <button class="btn btn-primary" type="button" onclick="registrarCa(event);" id="btnAccion">Registrar</button>
                        <button class="btn btn-danger" type="button" data-bs-dismiss="modal">Cancelar</button>
                    </form>
                </div>
        </div>
    </div>
</div>
</div>
</div>
<?php include "Views/Templates/footer.php"; ?>