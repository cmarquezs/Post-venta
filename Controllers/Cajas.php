<?php
class Cajas extends Controller{
    public function __construct() {
        session_start();
        if (empty($_SESSION['activo'])) {
            header("location: ".base_url);  
        }
        parent::__construct();
    }
    public function index()
    {
        $this->views->getView($this, "index"); 
    }
    public function arqueo()
    {
        $this->views->getView($this, "arqueo"); 
    }
    public function listar()
    {
        $data = $this->model->getCajas('caja');
        for ($i=0; $i < count($data); $i++) { 
            if ($data[$i]['estado'] == 1) {
                $data[$i]['estado'] = '<span class="badge bg-success">Activo</span>';
                $data[$i]['acciones'] = '<div>
                <button class="btn btn-primary" type="button" onclick="btnEditarCa('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger" type="button" onclick="btnEliminarCa('.$data[$i]['id'].');"><i class="fas fa-trash-alt"></i></button>
                <div/>';
                
                
            }else{
                $data[$i]['estado'] = '<span class="badge bg-danger">Inactivo</span>';
                $data[$i]['acciones'] = '<div>
                <button class="btn btn-success" type="button" onclick="btnReingresarCa('.$data[$i]['id'].');"><i class="fas fa-circle"></i></button>
                <div/>';
            }
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function listar_arqueo()
    {
        $data = $this->model->getCajas('cierre_caja');
        for ($i=0; $i < count($data); $i++) { 
            if ($data[$i]['estado'] == 1) {
                $data[$i]['estado'] = '<span class="badge bg-success">Abierta</span>';
                $data[$i]['acciones'] = '<div>
                <button class="btn btn-primary" type="button" onclick="btnEditarCa('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger" type="button" onclick="btnEliminarCa('.$data[$i]['id'].');"><i class="fas fa-trash-alt"></i></button>
                <div/>';
            }else{
                $data[$i]['estado'] = '<span class="badge bg-danger">Cerrada</span>';
                $data[$i]['acciones'] = '<div>
                <button class="btn btn-success" type="button" onclick="btnReingresarCa('.$data[$i]['id'].');"><i class="fas fa-circle"></i></button>
                <div/>';
            }
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    } 
    public function registrar()
    {
        $caja = $_POST['caja'];
        $id = $_POST['id'];
        if (empty($caja)) {
            $msg = "Todos los campos son obligatorios";
        }else{
            if ($id == "") {
                    $data = $this->model->registrarCaja($caja);
                    if ($data == "ok") {
                        $msg = "si";
                    }else if($data == "existe"){
                        $msg = "La caja ya existe";
                    }else{
                        $msg = "Error al registrar la caja";
                    }
            }else{
                $data = $this->model->modificarCaja($caja, $id);
                if ($data == "modificado") {
                    $msg = "modificado";
                } else{
                    $msg = "Error al modificar la caja";
                }
            }
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function abrirArqueo()
    {
        $monto_inicial = $_POST['monto_inicial'];
        $fecha_apertura = date('Y-m-d');
        $id_usuario = $_SESSION['id_usuario'];
        $id = $_POST['id'];
        if (empty($monto_inicial)) {
            $msg = array('msg' => 'TODOS LOS CAMPOS SON OBLIGATORIOS', 'icono' => 'warning');
        }else{
            if ($id == '') {
                $data = $this->model->registrarArqueo($id_usuario, $monto_inicial, $fecha_apertura);
                if ($data == "ok") {
                    $msg = array('msg' => 'CAJA ABIERTA CON EXITO', 'icono' => 'success');
                }else if($data == "existe"){
                    $msg = array('msg' => 'LA CAJA YA ESTA ABIERTA', 'icono' => 'warning');
                }else{
                    $msg = array('msg' => 'ERROR AL ABRIR LA CAJA', 'icono' => 'error');
                }
            }else {
                $monto_final = $this->model->getVentas($id_usuario);
                $total_ventas = $this->model->getTotalVentas($id_usuario);
                $inicial = $this->model->getMontoInicial($id_usuario);
                $general = $monto_final['total'] + $inicial['monto_inicial']; 
                $data = $this->model->actualizarArqueo($monto_final['total'], $fecha_apertura, $total_ventas['total'], $general, $inicial['id']);
                if ($data == "ok") {
                    $this->model->actualizarApertura($id_usuario);
                    $msg = array('msg' => 'CAJA CERRADA CON EXITO', 'icono' => 'success');
                }else{
                    $msg = array('msg' => 'ERROR AL CERRAR LA CAJA', 'icono' => 'error');
                }
            }
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function editar(int $id)
    {
        $data = $this->model->editarCa($id);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function eliminar(int $id)
    {
        $data = $this->model->accionCa(0, $id);
        if ($data == 1) {
            $msg = "ok";
        }else{
            $msg = "Error al eliminar la caja";
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function reingresar(int $id)
    {
        $data = $this->model->accionCa(1, $id);
        if ($data == 1) {
            $msg = "ok";
        }else{
            $msg = "Error al reingresar la caja";
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function getVentas()
    {
        $id_usuario = $_SESSION['id_usuario'];
        $data['monto_total'] = $this->model->getVentas($id_usuario);
        $data['total_ventas'] = $this->model->getTotalVentas($id_usuario);
        $data['inicial'] = $this->model->getMontoInicial($id_usuario);
        $data['monto_general'] = $data['monto_total']['total'] + $data['inicial'] ['monto_inicial'];
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
}
?>
