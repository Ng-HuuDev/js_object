// viet function nhan vao array va render ra table

function renderDSSV(dssv) {
  var contenHtml = "";

  // duyet mang "tr" chua thong tin object sv
  DSSV.forEach(function (sv, index) {
    sv = dssv[index];
    var trString = `<tr>
                          <td> ${sv.ma} </td>
                          <td> ${sv.ten} </td>
                          <td> ${sv.email} </td>
                          <td>${sv.tinhDTB()}</td>
                          <td>
                          <button onclick= xoaSv("${
                            sv.ma
                          }") class="btn btn-success"> Xoa </button>
                          <button onclick= suaSv("${
                            sv.ma
                          }") class="btn btn-success"> Sua </button>
                          </td>
                    </tr>`;
    contenHtml += trString;
  });
  document.getElementById("tbodySinhVien").innerHTML = contenHtml;
}

// viet function hienThiThongTin(sv)

function hienThiThongTin(sv) {
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtPass").value = sv.matKhau;
  document.getElementById("txtDiemToan").value = sv.toan;
  document.getElementById("txtDiemLy").value = sv.ly;
  document.getElementById("txtDiemHoa").value = sv.hoa;
}

// lay thong tin tu form de cap nhat

function layThongTinTuForm() {
  // lay thong tin sv tu form
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var toan = Number(document.getElementById("txtDiemToan").value);
  var ly = Number(document.getElementById("txtDiemLy").value);
  var hoa = Number(document.getElementById("txtDiemHoa").value);
  // tao doi tuong sinh vien
  var sv = new SinhVien(ma, ten, email, matKhau, toan, ly, hoa);

  return sv;
}
