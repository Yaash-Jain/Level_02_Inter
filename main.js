var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["employeename"] = document.getElementById("employeename").value;
  formData["companyname"] = document.getElementById("companyname").value;
  formData["position"] = document.getElementById("position").value;
  formData["salary"] = document.getElementById("salary").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.employeename;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.companyname;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.position;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.PRN;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("employeename").value = selectedRow.cells[0].innerHTML;
  document.getElementById("companyname").value = selectedRow.cells[1].innerHTML;
  document.getElementById("position").value = selectedRow.cells[2].innerHTML;
  document.getElementById("salary").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.employeename;
  selectedRow.cells[1].innerHTML = formData.companyname;
  selectedRow.cells[2].innerHTML = formData.position;
  selectedRow.cells[3].innerHTML = formData.salary;
}

function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
  document.getElementById("employeename").value = "";
  document.getElementById("companyname").value = "";
  document.getElementById("position").value = "";
  document.getElementById("salary").value = "";
  selectedRow = null;
}