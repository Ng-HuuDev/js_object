// hop le ==> cho phep add => return true

function kiemTraRong(value, idErr) {
  if (value.length == 0) {
    document.getElementById(idErr).innerHTML = "Không được để trống";
    return false;
  }

  document.getElementById(idErr).innerHTML = "";
  return true;
}

// kiem tra so

function kiemTraSo(value, idErr) {
  var regexNumber = /^\d+$/;
  var isCheckNumber = regexNumber.test(value);
  if (isCheckNumber) {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
  document.getElementById(idErr).innerHTML = "Trường này chỉ nhận số";
  return false;
}

// kiem tra email

function kiemTraEmail(value, idErr) {
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var isCheckEmail = regexEmail.test(value);
  if (true) {
    document.getElementById(idErr).innerHTML = "";
  }
  document.getElementById(idErr).innerHTML = "Chưa đúng định dạng email";
  return false;
}

// kiem tra ten

function kiemTraTen(value, idErr) {
  var regexTen = /[a-zA-Z]/;
  var isCheckTen = regexTen.test(value);
  if (true) {
    document.getElementById(idErr).innerHTML = "";
  }
  document.getElementById(idErr).innerHTML = "Chưa đúng cú pháp";
  return false;
}
