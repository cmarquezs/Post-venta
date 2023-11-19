<?php
class Usuarios extends Controller{
    public function __construct() {
        session_start();

        parent::__construct();
    }
    public function index()
    {
        if (empty($_SESSION['activo'])) {
            header("location: ".base_url);  
        }
        $data['cajas'] = $this->model->getCajas();
        $this->views->getView($this, "index", $data); 
    }
    public function listar()
    {
        $data = $this->model->getUsuarios();
        for ($i=0; $i < count($data); $i++) { 
            if ($data[$i]['estado'] == 1) {
                $data[$i]['estado'] = '<span class="badge bg-success">Activo</span>'; 
                if ($data[$i]['id'] == 1) {
                    $data[$i]['acciones'] = '<div>
                    <span class="badge bg-primary">Administrador</span>
                <div/>';
                }else {
                    $data[$i]['acciones'] = '<div>
                    <a class="btn btn-dark" href="'.base_url.'Usuarios/permisos/'.$data[$i]['id'].'"><i class="fas fa-key"></i></a>
                    <button class="btn btn-primary" type="button" onclick="btnEditarUser('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger" type="button" onclick="btnEliminarUser('.$data[$i]['id'].');"><i class="fas fa-trash-alt"></i></button>
                    <div/>';
                }
            }else{
                $data[$i]['estado'] = '<span class="badge bg-danger">Inactivo</span>';
                $data[$i]['acciones'] = '<div>
                <button class="btn btn-success" type="button" onclick="btnReingresarUser('.$data[$i]['id'].');"><i class="fas fa-circle"></i></button>
                <div/>';
            }
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function validar()
    { 
        if (empty($_POST['usuario']) || empty($_POST['clave'])) {
            $msg = "Los campos estan vacios";
        }else{
            $usuario = $_POST['usuario'];
            $clave = $_POST['clave'];
            $hash = hash("SHA256", $clave);
            $data = $this->model->getUsuario($usuario, $hash);
            if ($data) {
                $_SESSION['id_usuario'] = $data['id'];
                $_SESSION['usuario'] = $data['usuario'];
                $_SESSION['nombre'] = $data['nombre'];
                $_SESSION['activo'] = true;
                $msg = "ok";
            }else{
                $msg ="Usuario o contraseña incorrecta";
            }
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function registrar()
    {
        $usuario = $_POST['usuario'];
        $nombre = $_POST['nombre'];
        $clave = $_POST['clave'];
        $confirmar = $_POST['confirmar'];
        $caja = $_POST['caja'];
        $id = $_POST['id'];
        $hash = hash("SHA256", $clave);
        if (empty($usuario) || empty($nombre) || empty($caja)) {
            $msg = array('msg' => 'TODOS LOS CAMPOS SON OBLIGATORIOS', 'icono' => 'warning');
        }else{
            if ($id == "") {
                if($clave != $confirmar){
                    $msg = array('msg' => 'LAS CONTRASEÑAS NO COINCIDEN', 'icono' => 'warning');
                }else{
                    $data = $this->model->registrarUsuario($usuario, $nombre, $hash, $caja);
                    if ($data == "ok") {
                        $msg = array('msg' => 'USUARIO REGISTRADO CON EXITO', 'icono' => 'success');
                    }else if($data == "existe"){
                        $msg = array('msg' => 'EL USUARIO YA EXISTE', 'icono' => 'warning');
                    }else{
                        $msg = array('msg' => 'ERROR AL REGISTRAR EL USUARIO', 'icono' => 'error');
                    }
                }
            }else{
                $data = $this->model->modificarUsuario($usuario, $nombre, $caja, $id);
                if ($data == "modificado") {
                    $msg = array('msg' => 'USUARIO MODIFICADO CON EXITO', 'icono' => 'success');
                } else{
                    $msg = array('msg' => 'ERROR AL MODIFICAR EL USUARIO', 'icono' => 'error');
                }
            }
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function editar(int $id)
    {
        $data = $this->model->editarUser($id);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function eliminar(int $id)
    {
        $data = $this->model->accionUser(0, $id);
        if ($data == 1) {
            $msg = array('msg' => 'USUARIO DADO DE BAJA', 'icono' => 'success');
        }else{
            $msg = array('msg' => 'ERROR AL ELIMINAR EL USUARIO', 'icono' => 'error');
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function reingresar(int $id)
    {
        $data = $this->model->accionUser(1, $id);
        if ($data == 1) {
            $msg = array('msg' => 'USUARIO REINGRESADO CON EXITO', 'icono' => 'success');
        } else {
            $msg = array('msg' => 'ERROR AL REINGRESAR EL USUARIO', 'icono' => 'error');
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function cambiarPass()
    {
        $actual = $_POST['clave_actual'];
        $nueva = $_POST['clave_nueva'];
        $confirmar = $_POST['confirmar_clave'];
        if (empty($actual) || empty($nueva) || empty($confirmar)) {
            $mensaje = array('msg' => 'TODOS LOS CAMPOS SON OBLIGATORIOS', 'icono' => 'warning');
        }else {
            if ($nueva != $confirmar) {
                $mensaje = array('msg' => 'LAS CONTRASEÑAS NO COINCIDEN', 'icono' => 'warning');
            }else {
                $id = $_SESSION['id_usuario'];
                $hash = hash("SHA256", $actual);
                $data = $this->model->getPass($hash, $id);
                if (!empty($data)) {
                    $verificar = $this->model->modificarPass(hash("SHA256", $nueva), $id);
                    if ($verificar == 1) {
                        $mensaje = array('msg' => 'CONTRASEÑA MODIFICADA CON EXITO', 'icono' => 'success');
                    }else{
                        $mensaje = array('msg' => 'ERROR AL MODIFICAR LA CONTRASEÑA', 'icono' => 'error');
                    }
                }else {
                    $mensaje = array('msg' => 'LA CONTRASEÑA ACTUAL INCORRECTA', 'icono' => 'warning');
                }
            }
        }
        echo json_encode($mensaje, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function permisos($id)
    {
        if (empty($_SESSION['activo'])) {
            header("location: ".base_url);  
        }
        $data['datos'] = $this->model->getPermisos();
        $permisos = $this->model->getDetallePermisos($id);
        $data['asignados'] = array();
        foreach ($permisos as $permiso) {
            $data['asignados'][$permiso['id_permiso']] = true;
        }
        $data['id_usuario'] = $id;
        $this->views->getView($this, "permisos", $data); 
    }
    public function registrarPermiso()
    {
        $msg = '';
        $id_user = $_POST['id_usuario'];
        $eliminar = $this->model->eliminarPermiso($id_user);
        if ($eliminar == 'ok') {
            foreach ($_POST['permisos'] as $id_permiso) {
               $msg = $this->model->registrarPermisos($id_user, $id_permiso);
            }
            if ($msg == 'ok') {
                $msg = array('msg' => 'PERMISOS ASIGNADOS', 'icono' => 'success');
            } else {
                $msg = array('msg' => 'ERROR AL ASIGNAR LOS PERMISOS', 'icono' => 'error');
            }
            
        } else {
            $msg = array('msg' => 'ERROR AL ELIMINAR LOS PERMISOS ANTERIORES', 'icono' => 'error');
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
    }
    public function salir()
    {
        session_destroy();
        header("location: ".base_url);
    }
}
?>
