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
    <div class="full-box page-header">
	<h3 class="text-left">
		<i class="fas fa-clipboard-list fa-fw"></i> &nbsp; LISTA DE PACIENTES
	</h3>
	<p class="text-justify">
	</p>
</div>

<div class="container-fluid">
	<ul class="full-box list-unstyled page-nav-tabs">
		<li>
			<a href="<?php echo SERVERURL; ?>patientRegist/"><i class="fas fa-plus fa-fw"></i> &nbsp; AGREGAR PACIENTE</a>
		</li>
		<li>
			<a class="active" href="<?php echo SERVERURL; ?>patientList/"><i class="fas fa-clipboard-list fa-fw"></i> &nbsp; LISTA DE PACIENTE</a>
		</li>
		<li>
			<a href="#"><i class="fas fa-search fa-fw"></i> &nbsp; BUSCAR PACIENTE</a>
		</li>
	</ul>
</div>
<?php
// URL de la API
$url = "http://localhost:8080/fhir/Patient";

// Realiza una solicitud GET a la API
$response = file_get_contents($url);

// Verifica si se pudo realizar la solicitud
if ($response === false) {
    die('No se pudo acceder a la API.');
}

// Decodifica la respuesta JSON
$data = json_decode($response, true);

// Verifica si la decodificación fue exitosa
if ($data === null) {
    die('Error al decodificar la respuesta JSON.');
}

// Verifica si la respuesta contiene datos de pacientes
if (isset($data['entry'])) {
  
    echo '<div class="table-responsive">';
    echo '<table class="table table-dark table-sm">';
    echo '<thead>';
    echo '<tr>';
    echo '<th>ID</th>';
    echo '<th>Identificacion</th>';
    echo '<th>Apellidos</th>';
    echo '<th>Nombres</th>';
    echo '<th>Estado</th>';
    echo '<th>Direccion</th>';
    echo '<th>Ciudad</th>';
    echo '<th>Fecha de nacimiento</th>';
    echo '<th>Eliminar</th>';
    echo '<th>Actualizar</th>';
    echo '</tr>';
    echo '</thead>';
    echo '<tbody>';

    foreach ($data['entry'] as $entry) {
        $patient = $entry['resource'];
        echo '<tr>';
        echo '<td>' . $patient['id'] . '</td>';
        foreach ($patient['address'] as $address) {
          if (isset($address['postalCode'])) {
            echo '<td>' . $address['postalCode'] . '</td>';
        } else {
            echo '';
        }
       
        // Name
        foreach ($patient['name'] as $name) {
            echo '<td>' . $name['family'] . '</td>';
            echo '<td>' . implode(', ', $name['given']) . '</td>';
        }

        // Address
          echo '<td>' . $address['state'] . '</td>';
            echo '<td>' . implode(', ', $address['line']) . '</td>';
            echo '<td>' . $address['city'] . '</td>';
        }

        echo '<td>' . $patient['birthDate'] . '</td>';
        echo '<td><a href="eliminar_paciente.php?id=' . $patient['id'] . '" class="far fa-trash-alt"></a>
        </td>';
        echo '<td><a href="actualizar_paciente.php" class="fas fa-sync-alt" data-toggle="modal" data-target="#editarPacienteModal" data-id="' . $patient['id'] . '"></a></td>';
        echo '</tr>';
    }

    echo '</tbody>';
    echo '</table>';
    echo '</div>';
} else {
    echo 'No se encontraron datos de pacientes en la respuesta.';
}
?>
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