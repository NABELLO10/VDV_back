import FichaPersonal from "../../models/FichaPersonal.js";
import Ciudades from "../../models/Ciudades.js";
import EstadoCivil from "../../models/EstadoCivil.js";
import Cargos from "../../models/Cargos.js";
import Sedes from "../../models/Sedes.js";


const registrarPersonal = async (req, res) => {
  const { nom_usuario } = req.usuario;
  const {
    rut,
    nom_personal,
    ape_paterno,
    ape_materno,
    fec_nacimiento,
    email,
    id_ciudad,
    direccion,
    id_estado_civil,
    id_nacionalidad,
    fono1,
    fono2,
    id_cargo,
    nom_profesion,
    fec_primera_vez,
    fec_incorporacion,
    est_miembro,
    est_activo,
    id_sede
  } = req.body;

  try {
    const existe = await FichaPersonal.findOne({
      where: {
        rut,
        id_sede,
      },
    });

    if (existe) {
      const error = new Error("Persona ya existe");
      return res.status(400).json({ msg: error.message });
    }

    await FichaPersonal.create({
      rut,
      nom_personal,
      ape_paterno,
      ape_materno,
      fec_nacimiento,
      email,
      id_ciudad,
      direccion,
      id_estado_civil,
      id_nacionalidad,
      fono1,
      fono2,
      id_cargo,
      nom_profesion,
      fec_primera_vez,
      fec_incorporacion,
      est_miembro,
      est_activo,
      id_sede,
      user_add: nom_usuario,
    });

    res.status(200).json({ msg: "Persona Registrada" });
  } catch (error) {
    console.log(error);
  }
};

const editarPersonal = async (req, res) => {    
  const { nom_usuario } = req.usuario;
  const { id } = req.params;
  const {
    rut,
    nom_personal,
    ape_paterno,
    ape_materno,
    fec_nacimiento,
    email,
    id_ciudad,
    direccion,
    id_estado_civil,
    id_nacionalidad,
    fono1,
    fono2,
    id_cargo,
    nom_profesion,
    fec_primera_vez,
    fec_incorporacion,
    est_miembro,
    est_activo,
    id_sede
  } = req.body;

  try {
    const existe = await FichaPersonal.findByPk(id);

    if (!existe) {
      const error = new Error("Persona no existe");
      return res.status(400).json({ msg: error.message });
    }

    await FichaPersonal.update(
      {
        rut,
        nom_personal,
        ape_paterno,
        ape_materno,
        fec_nacimiento,
        email,
        id_ciudad,
        direccion,
        id_estado_civil,
        id_nacionalidad,
        fono1,
        fono2,
        id_cargo,
        nom_profesion,
        fec_primera_vez,
        fec_incorporacion,
        est_miembro,
        est_activo,
        id_sede,
        user_edit : nom_usuario
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.status(200).json({ msg: "Persona Actualizado" });
  } catch (error) {
    console.log(error);
  }
};

const eliminarPersonal = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;
  
    try {
      const existe = await FichaPersonal.findByPk(id);
  
      if (!existe) {
        const error = new Error("Persona inexistente");
        return res.status(400).json({ msg: error.message });
      }
  
      await FichaPersonal.destroy({
        where: {
          id: id,
        },
      });
  
      await Log.create({
        des_log:
          "Ficha Personal  :" +
          usuario.nom_usuario +
          ` elimina la persona: ` +
          JSON.stringify(existe),
      });
  
      res.status(200).json({ msg: "Persona Eliminada" });
    } catch (error) {
      // Verificar si es un error de restricción de clave foránea
      if (error.name === "SequelizeForeignKeyConstraintError") {
        // El código '23503' es específico de error de FK en PostgreSQL
        res
          .status(409)
          .json({
            msg: "No se puede eliminar la persona - relacion existente con otro registro",
          });
      }
      console.error(error);
    }
  };


const obtenerPersonas = async (req, res) => {
  try {
    const { id_sede } = req.params;
    const fichaPersonal = await FichaPersonal.findAll({
      where: { id_sede },
      include: [
        { model: Ciudades },
        { model: EstadoCivil },  
        { model: Cargos },     
        { model: Sedes },
  
      ],
    });
    return res.status(200).json(fichaPersonal);
  } catch (error) {
    console.log(error);
  }
};


export {
  registrarPersonal,
  editarPersonal,  
  eliminarPersonal,
  obtenerPersonas
};
