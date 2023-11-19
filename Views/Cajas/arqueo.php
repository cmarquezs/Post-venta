<?php include "Views/Templates/header.php"; ?>
<div class="card">
  <div class="card-header bg-primary text-white">
    Arqueo Cajas
  </div>
  <div class="card-body">
  <button class="btn btn-primary mb-2" type="button" onclick="arqueoCaja();"><i class="fas fa-plus"></i></button>
<button class="btn btn-warning mb-2" type="button" onclick="cerrarCaja();">Cerrar Caja</i></button>
    <div class="table-responsive">
        <table class="table table-light" id="t_arqueo">
            <thead class="thead-dark">
                <tr>
                    <th>Id</th>
                    <th>Monto_inicial</th>
                    <th>Monto_final</th>
                    <th>Fecha_apertura</th>
                    <th>Fecha_cierre</th>
                    <th>Total ventas</th>
                    <th>Monto Total</th>
                    <th>Estado</th>
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
                    <form method="post" id="frmAbrirCaja" onsubmit="abrirArqueo(event);">
                        <div class="form-floating mb-3">
                            <input type="hidden" id="id" name="id">
                            <input id="monto_inicial" class="form-control" type="text" name="monto_inicial" placeholder="Monto Inicial *" required>
                            <label for="monto_inicial">Monto Inicial</label>
                        </div>
                        <div id="ocultar_campos">
                            <div class="form-floating mb-3">
                                <input id="monto_final" class="form-control" type="text" disabled>
                                <label for="monto_final">Monto Final</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input id="total_ventas" class="form-control" type="text" disabled>
                                <label for="total_ventas">Total Ventas</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input id="monto_general" class="form-control" type="text" disabled>
                                <label for="monto_general">Monto Total</label>
                            </div>
                        </div>
                        <button class="btn btn-primary" type="submit" id="btnAccion">Abrir</button>
                        <button class="btn btn-danger" type="button" data-bs-dismiss="modal">Cancelar</button>
                    </form>
                </div>
        </div>
    </div>
</div>
</div>
</div>
<?php include "Views/Templates/footer.php"; ?>