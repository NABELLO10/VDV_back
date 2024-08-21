import generarID from "../../helpers/generarID.js";
import emailRegistro from "../../helpers/emailRegistro.js";

import Usuarios from "../../models/Usuarios.js";
import Perfiles from "../../models/Perfiles.js";
import Clientes from "../../models/Clientes.js";


const registrar = async (req, res) => {
  const {
    nombre,
    id_cliente,
    email,
    id_perfil,
    est_activo,
    user_add,
    password,
  } = req.body;

  try {
    const existeUsuario = await Usuarios.findOne({
      raw: true,
      where: {
        email: email,
        id_cliente: id_cliente,
      },
    });

    if (existeUsuario) {
      const error = new Error("Usuario ya Existe para la empresa seleccionada");
      return res.status(400).json({ msg: error.message });
    }

    const nuevoUsuario = await Usuarios.create({
      nom_usuario: nombre,
      password: password ? password : generarID(),
      email: email,
      id_cliente: id_cliente,
      id_perfil: id_perfil,
      token: generarID(),
      est_activo: est_activo,
      user_add: user_add,
    });

    emailRegistro({
      nombre,
      email,
      token: nuevoUsuario.token,
    });

    //  res.json(nuevoUsuario)
    res
      .status(200)
      .json({
        msg: "Usuario Registrado, se ha enviado un correo con instrucciones para el ingreso al sistema",
      });
  } catch (error) {
    console.log(error);
  }
};

const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, id_cliente, email, id_perfil, est_activo } = req.body;

  try {
    const usuarioExiste = await Usuarios.findByPk(id);

    if (!usuarioExiste) {
      const error = new Error("ID de usuario inexistente");
      return res.status(400).json({ msg: error.message });
    }

    await Usuarios.update(
      {
        nom_usuario: nombre,
        id_cliente,
        email,
        id_perfil,
        est_activo,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.status(200).json({ msg: "Usuario actualizado" });
  } catch (error) {
    console.log(error);
  }
};

const eliminarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuarioExiste = await Usuarios.findByPk(id);

    if (!usuarioExiste) {
      const error = new Error("ID de usuario inexistente");
      return res.status(400).json({ msg: error.message });
    }

    await Usuarios.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json({ msg: "Usuario Eliminado" });
  } catch (error) {
    // Verificar si es un error de restricción de clave foránea
    if (error.name === "SequelizeForeignKeyConstraintError") {
      // El código '23503' es específico de error de FK en PostgreSQL
      res
        .status(409)
        .json({
          msg: "No se puede eliminar el usuario - relacion existente con otro registro",
        });
    }
    console.error(error);
  }
};

const listarUsuarios = async (req, res) => {
  try {
    const { id_cliente } = req.params;
    const usuariosRegistrados = await Usuarios.findAll({
      where: { id_cliente },
      order: [["id", "desc"]],
      include: [{ model: Perfiles }, { model: Clientes }],
    });

    return res.status(200).json(usuariosRegistrados);
  } catch (error) {
    console.log(error);
  }
};

export { registrar, listarUsuarios, actualizarUsuario, eliminarUsuario };
