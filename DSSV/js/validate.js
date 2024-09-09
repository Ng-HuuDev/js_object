// hop le ==> cho phep add => return true

function kiemTraRong(value, idErr) {
  if (value.length == 0) {
    document.getElementById(idErr).innerHTML = "Khong duoc de trong";
    return false;
  }

  document.getElementById(idErr).innerHTML = "";
  return true;
}
