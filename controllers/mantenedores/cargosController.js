import Cargos from "../../models/Cargos.js";
import Log from "../../models/Log.js";


const registrarCargo = async (req, res) => {
  const { nombre, id_sede, est_activo } = req.body;

  try {
    const existe = await Cargos.findOne({
      where: {
        nombre,
        id_sede,
      },
    });

    if (existe) {
      const error = new Error("Cargo ya existe");
      return res.status(400).json({ msg: error.message });
    }

    await Cargos.create({
      nombre,
      id_sede,
      est_activo,
    });

    res.status(200).json({ msg: "Cargo Registrado" });
  } catch (error) {
    console.log(error);
  }
};

const eliminarCargo = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;

  try {
    const existe = await Cargos.findByPk(id);

    if (!existe) {
      const error = new Error("Cargo inexistente");
      return res.status(400).json({ msg: error.message });
    }

    await Cargos.destroy({
      where: {
        id: id,
      },
    });

    await Log.create({
      des_log:
        "Cargos  :" +
        usuario.nom_usuario +
        ` elimina el cargo: ` +
        JSON.stringify(existe),
    });

    res.status(200).json({ msg: "Cargo Eliminada" });
  } catch (error) {
    // Verificar si es un error de restricción de clave foránea
    if (error.name === "SequelizeForeignKeyConstraintError") {
      // El código '23503' es específico de error de FK en PostgreSQL
      res
        .status(409)
        .json({
          msg: "No se puede eliminar el cargo - relacion existente con otro registro",
        });
    }
    console.error(error);
  }
};

const editarCargo = async (req, res) => {
  const { id } = req.params;
  const { nombre, est_activo } = req.body;

  try {
    const existe = await Cargos.findByPk(id);

    if (!existe) {
      const error = new Error("Cargo no existe");
      return res.status(400).json({ msg: error.message });
    }

    await Cargos.update(
      {
        nombre,
        est_activo,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ msg: "Cargo Actualizado" });
  } catch (error) {
    console.log(error);
  }
};

const obtenerCargos = async (req, res) => {
  try {
    const { id_sede } = req.params;
    const cargos = await Cargos.findAll({
      where: { id_sede },
    });
    return res.status(200).json(cargos);
  } catch (error) {
    console.log(error);
  }
};

export { registrarCargo, eliminarCargo, editarCargo, obtenerCargos };
