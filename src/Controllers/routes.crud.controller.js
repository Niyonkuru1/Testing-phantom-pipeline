// import pool from "../Database/database";
import { Route } from "../models/index";
import { routeValidation } from "../validations/index";

export const getAllRoutes = async (req, res) => {
  // const routes = await pool.query(
  //   `SELECT origin, destination, description, id FROM public."Routes" ORDER BY id ASC`
  // );
  const routes = await Route.findAndCountAll(); 
  res.status(200).json({
    status: res.__("status0"),
    // results: routes.rowCount,
    routes: routes,
  });
};

export const getOneRoute = async (req, res) => {
  try {
    // const route = await pool.query(
    //   `SELECT origin, destination, description, id FROM public."Routes" WHERE id = $1`,
    //   [req.params.id]
    // );
    const id = req.params.id;

    const route = await Route.findOne({ where: { id } });
    
    return res.status(200).json({
      status: res.__("status1"),
      route: route,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

export const createRoute = async (req, res) => {
  try {
    const { error } = routeValidation(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const { origin, destination, description } = req.body;
    // const route = await pool.query(
    //   `INSERT INTO public."Routes" (origin, destination, description) VALUES ($1, $2, $3) RETURNING origin, destination, description, id`,
    //   [origin, destination, description]
    // );
     const route = await Route.create({
       origin,
       destination,
       description,
     });
    res.status(201).json({
      status: res.__("status2"),
      route: route
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
      message: e.detail,
    });
  }
};

export const updateRoute = async (req, res) => {
  try {
    const { error } = routeValidation(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const id = req.params.id;
    const { origin, destination, description } = req.body;
    // await pool.query(
    //   `SELECT * FROM public."Routes" where id = ${req.params.id} `
    // );
    // const route = await pool.query(
    //   `UPDATE public."Routes" SET origin = $1, destination = $2, description = $3 WHERE id = $4 RETURNING *`,
    //   [origin, destination, description, req.params.id]
    // );
     const route = await Route.findOne({ where: { id } });

     if (!route) {
       return res.status(404).json({
         status: "success",
         message: "No route found with that ID",
       });
     }

     await Routes.update(
       {
         origin,
         destination,
         description,
       },
       { where: { id } }
     );

    res.status(202).json({
      status: res.__("status3"),
      route: route,
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
    });
  }
};

export const deleteRoute = async (req, res) => {
  try {
    // await pool.query(
    //   `SELECT * FROM public."Routes" where id = ${req.params.id} `
    // );
    // const deleted = await pool.query(`DELETE FROM public."Routes" WHERE id = $1`, [
    //   req.params.id,
    // ]);

    // res.status(202).json({
    //   status: res.__("status4"),
    //   message: "Route deleted successfully",
    // });
      const id = req.params.id;
      const route = await Route.findOne({ where: { id } });
      if (!route) {
        return res.status(404).json({
          status: "fail",
          message: "No route with that ID",
        });
      }
      await Routes.destroy({ where: { id } });
      res.status(201).json({
        status: res.__("status4"),
        message: "Assign deleted successfully",
      });
  } catch (e) {
    res.status(404).json({
      status: "fail",
    });
  }
};
