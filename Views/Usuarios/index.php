<?php include "Views/Templates/header.php"; ?>
<div class="card">
  <div class="card-header bg-primary text-white">
    Usuarios
  </div>
  <div class="card-body">
  <button class="btn btn-primary mb-2" type="button" onclick="frmUsuario();"><i class="fas fa-plus"></i></button>
        <div class="table-responsive">
            <table class="table table-light table-bordered table-hovert" id="tblUsuarios">
                <thead class="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Usuario</th>
                        <th>Nombre</th>
                        <th>Caja</th>
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
                    <form method="post" id="frmUsuario">
                            <div class="form-floating mb-3">
                                <input type="hidden" id="id" name="id">
                                <input id="usuario" class="form-control" type="text" name="usuario" placeholder="Usuario *">
                                <label for="usuario">Usuario</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Nombre *">
                                <label for="nombre">Nombre</label>
                            </div>
                            <div class="row" id="claves">
                                <div class="col-md-6">
                                    <div class="form-floating mb-3">
                                        <input id="clave" class="form-control" type="password" name="clave" placeholder="Contraseña *">
                                        <label for="clave">Contraseña</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating mb-3">
                                        <input id="confirmar" class="form-control" type="password" name="confirmar" placeholder="Confirmar Contraseña *">
                                        <label for="confirmar">Confirmar Contraseña</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-floating mb-3">
                                <select id="caja" class="form-control" name="caja">
                                    <?php foreach ($data['cajas'] as $row) {?>
                                    <option value="<?php echo $row['id']; ?>"><?php echo $row['caja']; ?></option>
                                    <?php } ?>
                                </select>
                                <label for="caja">Caja</label>
                            </div>
                            <button class="btn btn-primary" type="button" onclick="registrarUser(event);" id="btnAccion">Registrar</button>
                            <button class="btn btn-danger" type="button" data-bs-dismiss="modal">Cancelar</button>
                    </form>
                </div>
        </div>
    </div>
</div>
</div>
</div>
<?php include "Views/Templates/footer.php"; ?>