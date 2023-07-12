const data = {}

data.employees = require('../model/employees.json');

const getAllEmployees = (req, res) => {
  res.json(data.employees)
}

const createNewEmployee = (req, res) => { //refer to those parameters as req.body.parametername
  res.json({
    "firstname":req.body.firstname, // how2 get params from post req and hand em back
    "lastname":req.body.lastname
  })
}

const updateEmployee = (req, res) => {
  res.json({
    "firstname":req.body.firstname, 
    "lastname":req.body.lastname
  })
}

const deleteEmployee = (req, res) => {
  res.json({ "id": req.body.id })
}

const getEmployee = (req, res) => {
  res.json({ "id": req.params.id})
}

module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee
}