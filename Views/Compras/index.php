<?php include "Views/Templates/header.php"; ?>
<div class="card">
    <div class="card-header bg-primary text-white">
        <h4>Nueva Compra</h4>
    </div>
    <div class="card-body">
        <form id="frmCompra">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-floating mb-3">
                        <input type="hidden" id="id" name="id">
                        <input id="codigo" class="form-control" type="text" name="codigo" placeholder="Codigo de Barras" onkeyup="buscarCodigo(event)">
                        <label for="codigo"><i class="fas fa-barcode"></i> Codigo de Barras:</label>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="form-floating mb-3">
                        <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Descripcion del Productos" disabled>
                        <label for="nombre"><i class="fas fa-edit"></i> Descripcion:</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-floating mb-3">
                        <input id="cantidad" class="form-control" type="number" name="cantidad" onkeyup="calcularPrecio(event)" disabled>
                        <label for="cantidad"><i class="fas fa-archive"></i> Cantidad:</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-floating mb-3">
                        <input id="precio" class="form-control" type="text" name="precio" placeholder="Precio Compra" disabled>
                        <label for="precio"><i class="fas fa-dollar-sign"></i> Precio:</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-floating mb-3">
                        <input id="sub_total" class="form-control" type="text" name="sub_total" placeholder="Sub Total" disabled>
                        <label for="sub_total"><i class="fas fa-clipboard"></i> Sub Total:</label>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
<br>
<table class="table table-light table-bordered table-hover">
    <thead class="thead-dark">
        <tr>
            <th>Id</th>
            <th>Descripcion</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Sub Total</th>
            <th></th>
        </tr>
    </thead>
    <tbody id="tblDetalle">
    </tbody>
</table>
<div class="row">
    <div class="col-md-4 ml-auto">
            <div class="form-floating mb-3">
                <input id="total" class="form-control" type="text" name="total" placeholder="Total" disabled>
                <label for="total" class="font-weight-bold">Total</label>
                <button class="btn btn-primary mt-2 btn-block" type="button" onclick="procesar(1)">Generar Compras</button>
            </div>
    </div>
</div>
<?php include "Views/Templates/footer.php"; ?>