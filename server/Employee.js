const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  marca: String,
  qtdLitro: String,
  garrafa: String,
  foto: String,
});

mongoose.model('employee', EmployeeSchema);
