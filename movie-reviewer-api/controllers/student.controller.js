const studentService = require("../services/student.service");

function createStudent(req, res) {
  const { email, name } = req.query;
  const newStudent = studentService.createStudent(email, name);
  res.send({ newStudent });
}

function getAllStudents(req, res) {
  const students = studentService.getAllStudents();
  res.send({ students });
}

module.exports = {
  createStudent,
  getAllStudents,
};
