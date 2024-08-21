import Nacionalidades from "../../models/Nacionalidades.js";
import Log from "../../models/Log.js";

const registrarNacionalidad = async (req, res) => {
  const { nom_nacionalidad, id_cliente } = req.body;

  try {
    const existe = await Nacionalidades.findOne({
      where: {
        nom_nacionalidad,
        id_cliente,
      },
    });

    if (existe) {
      const error = new Error("Nacionalidad ya existe");
      return res.status(400).json({ msg: error.message });
    }

    await Nacionalidades.create({
      nom_nacionalidad,
      id_cliente    
    });

    res.status(200).json({ msg: "Nacionalidad Registrado" });
  } catch (error) {
    console.log(error);
  }
};

const eliminarNacionalidad = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;

  try {
    const existe = await Nacionalidades.findByPk(id);

    if (!existe) {
      const error = new Error("Nacionalidad inexistente");
      return res.status(400).json({ msg: error.message });
    }

    await Nacionalidades.destroy({
      where: {
        id: id,
      },
    });

    await Log.create({
      des_log:
        "Nacionalidades  :" +
        usuario.nom_usuario +
        ` elimina el Nacionalidad: ` +
        JSON.stringify(existe),
    });

    res.status(200).json({ msg: "Nacionalidad Eliminada" });
  } catch (error) {
    // Verificar si es un error de restricción de clave foránea
    if (error.name === "SequelizeForeignKeyConstraintError") {
      // El código '23503' es específico de error de FK en PostgreSQL
      res
        .status(409)
        .json({
          msg: "No se puede eliminar el Nacionalidad - relacion existente con otro registro",
        });
    }
    console.error(error);
  }
};

const editarNacionalidad = async (req, res) => {
  const { id } = req.params;
  const { nom_nacionalidad } = req.body;

  try {
    const existe = await Nacionalidades.findByPk(id);

    if (!existe) {
      const error = new Error("Nacionalidad no existe");
      return res.status(400).json({ msg: error.message });
    }

    await Nacionalidades.update(
      {
        nom_nacionalidad     
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ msg: "Nacionalidad Actualizado" });
  } catch (error) {
    console.log(error);
  }
};

const obtenerNacionalidades = async (req, res) => {
  try {
    const { id_cliente } = req.params;
    const nacionalidades = await Nacionalidades.findAll({
      where: { id_cliente },
    });
    return res.status(200).json(nacionalidades);
  } catch (error) {
    console.log(error);
  }
};

export { registrarNacionalidad, eliminarNacionalidad, editarNacionalidad, obtenerNacionalidades };
