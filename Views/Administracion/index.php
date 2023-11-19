<?php include "Views/Templates/header.php"; ?>
<div class="card">
    <div class="card-header bg-primary text-white">
        Datos de la Empresa
    </div>
    <div class="card-body">
        <form id="frmEmpresa">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-floating mb-3">
                        <input id="id" class="form-control" type="hidden" name="id" value="<?php echo $data['id']?>">
                        <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Nombre *" value="<?php echo $data['nombre']?>">
                        <label for="nombre">Nombre:</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating mb-3">
                        <input id="ruc" class="form-control" type="text" name="ruc" placeholder="Ruc *" value="<?php echo $data['ruc']?>">
                        <label for="ruc">Ruc:</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating mb-3">
                        <input id="telefono" class="form-control" type="text" name="telefono" placeholder="Telefono *" value="<?php echo $data['telefono']?>"> 
                        <label for="telefono">Telefono:</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating mb-3">
                        <input id="direccion" class="form-control" type="text" name="direccion" placeholder="Direccion *" value="<?php echo $data['direccion']?>">
                        <label for="direccion">Direccion:</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating mb-3">
                        <textarea id="mensaje" class="form-control" name="mensaje" rows="3" placeholder="Mensaje *"><?php echo $data['mensaje']?></textarea>
                        <label for="mensaje">Mensaje:</label>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" type="button" onclick="modificarEmpresa()">Modificar</button>
        </form>
    </div>
</div>

<?php include "Views/Templates/footer.php"; ?>