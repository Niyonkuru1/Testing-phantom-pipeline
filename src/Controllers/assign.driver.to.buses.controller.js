// import pool from "../Database/database";
import { Driver_buse_assign as Assign } from "../../locales/testing-removal-for-just-testing/models/index"
import { assignValidation } from "../validations/index";

export const getAllAssigned = async (req, res) => {
  // const routes = await pool.query(
  //   `SELECT * FROM public."Driver_buse_assigns" ORDER BY id ASC`
  // );
  const assigned = await Assign.findAndCountAll(); 
  res.status(200).json({
    status: res.__("status0"),
    // results: routes.rowCount,
    // assigned: routes.rows,
    assigned: assigned,
  });
};

export const createAssign = async (req, res) => {
  try {
    const { error } = assignValidation(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const { route, driver_name, plate_number } = req.body;
    // const assigned = await pool.query(
    //   `INSERT INTO public."Driver_buse_assigns" (route, driver_name, plate_number) VALUES ($1, $2, $3) RETURNING route,driver_name,plate_number,id`,
    //   [route, driver_name, plate_number]
    // );
    const assigned = await Assign.create({
      route,
      driver_name,
      plate_number
    });
    res.status(201).json({
      status: res.__("status2"),
      route: assigned,
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
      message: e.detail,
    });
  }
};

export const deleteAssigned = async (req, res) => {
    // await pool.query(
    //   `SELECT route,driver_name,plate_number,id FROM public."Driver_buse_assigns" where id = ${req.params.id} `
    // );
    // const deleted = await pool.query(
    //   `DELETE FROM public."Driver_buse_assigns" WHERE id = $1`,
    //   [req.params.id]
    // );

    // res.status(202).json({
    //   status: res.__("status4"),
    //   message: "Route deleted successfully",
    // });
    const id = req.params.id;
    const assign = await Assign.findOne({ where: { id } });
    if (!assign) {
      return res.status(404).json({
        status: 'fail',
        message: 'No assign with that ID',
      });
    }
    await Assign.destroy({ where: { id } });
    res.status(201).json({
      status: res.__("status4"),
      message: 'Assign deleted successfully',
    });
};
