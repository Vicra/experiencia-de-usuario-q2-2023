const StudentModel = require("../mongo/Student.model");

async function createStudent(email, name) {
  const student = new StudentModel({
    name,
    email,
  });
  const savedStudent = await student.save();
  return savedStudent;
}

async function getAllStudents() {
  const students = await StudentModel.find();
  return students;
}

module.exports = {
  createStudent,
  getAllStudents,
};
