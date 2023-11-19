<?php include "Views/Templates/header.php"; ?>

<div class="row">
    <div class="col-xl-3 col-md-6">
        <div class="card bg-primary text-white mb-4">
            <div class="card-body">
            <i class="fas fa-user fa-2x"></i>
                Usuarios
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a class="small text-white stretched-link" href="<?php echo base_url; ?>Usuarios">View Details</a>
                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="card bg-warning text-white mb-4">
            <div class="card-body">
            <i class="fas fa-users fa-2x"></i>
                Clientes
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a class="small text-white stretched-link" href="<?php echo base_url; ?>Clientes">View Details</a>
                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="card bg-success text-white mb-4">
            <div class="card-body">
            <i class="fab fa-product-hunt fa-2x"></i>
                Productos
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a class="small text-white stretched-link" href="<?php echo base_url; ?>Productos">View Details</a>
                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="card bg-danger text-white mb-4">
            <div class="card-body">
            <i class="fas fa-cash-register fa-2x"></i>
                Ventas Por Dias
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a class="small text-white stretched-link" href="<?php echo base_url; ?>Compras/historial_ventas">View Details</a>
                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-xl-3 col-md-6">
        <div class="card text-white mb-4" style="background-color:#ff6961;">
            <div class="card-body">
            <i class="fa fa-tags fa-2x"></i>
                Categorias
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a class="small text-white stretched-link" href="<?php echo base_url; ?>Usuarios">View Details</a>
                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="card text-white mb-4" style="background-color:#5D9B9B;">
            <div class="card-body">
            <i class="fas fa-balance-scale-left fa-2x"></i>
                Medidas
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a class="small text-white stretched-link" href="<?php echo base_url; ?>Clientes">View Details</a>
                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="card text-white mb-4" style="background-color:#FF8C00;">
            <div class="card-body">
            <i class="fas fa-box fa-2x"></i>
                Cajas
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a class="small text-white stretched-link" href="<?php echo base_url; ?>Productos">View Details</a>
                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="card text-white mb-4" style="background-color:#024A86;">
            <div class="card-body">
            <i class="fa fa-shopping-bag fa-2x"></i>
                Compras Por Dias
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a class="small text-white stretched-link" href="<?php echo base_url; ?>Compras/historial_ventas">View Details</a>
                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
            </div>
        </div>
    </div>
</div>

<div class="row mt-3 justify-content-center">
    <div class="col-xl-3">
        <div class="card mb-4">
            <div class="card-header bg-dark text-white">
                <i class="fas fa-chart-area me-1"></i>
                Productos con Stock Minimo
            </div>
            <div class="card-body"><canvas id="stockMinimo" width="100%" height="40"></canvas></div>
        </div>
    </div>
    <div class="col-xl-3">
        <div class="card mb-4">
            <div class="card-header bg-dark text-white">
                <i class="fas fa-chart-bar me-1"></i>
                Productos mas Vendidos
            </div>
            <div class="card-body"><canvas id="ProductosVendidos" width="100%" height="40"></canvas></div>
        </div>
    </div>
</div>´

<div class="col-xl-3 col-md-6">
        <div class="card bg-warning text-white mb-4">
            <div class="card-body">
            <i class="fas fa-users fa-2x"></i>
                Clientes
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a class="small text-white stretched-link" href="<?php echo base_url; ?>Pacientes">View Details</a>
                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
            </div>
        </div>
    </div>

<?php include "Views/Templates/footer.php"; ?>