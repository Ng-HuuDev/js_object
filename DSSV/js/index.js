// tao mang chua DSSV

var DSSV = [];

// tao function themSv

function themSv() {
  // lay thong tin sv tu form
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var toan = Number(document.getElementById("txtDiemToan").value);
  var ly = Number(document.getElementById("txtDiemLy").value);
  var hoa = Number(document.getElementById("txtDiemHoa").value);
  // tao doi tuong sinh vien

  var sv = {
    ma,
    ten,
    email,
    matKhau,
    toan,
    ly,
    hoa,
    tinhDTB: function () {
      var dtb = (this.toan + this.ly + this.hoa) / 3;
      return dtb;
    },
  };
  // them vao mang DSSV
  DSSV.push(sv);
  // render ra DSSV

  renderDSSV(DSSV);
}
// console.log("🚀 ~ themSv ~ DSSV:", DSSV);
