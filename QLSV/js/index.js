function submit() {
  // lay thong tin tu form
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var loai = document.getElementById("loaiSV").value;
  var toan = Number(document.getElementById("txtDiemToan").value);
  var van = Number(document.getElementById("txtDiemVan").value);
  // tao object sinh vien

  sv = {
    ma,
    ten,
    loai,
    toan,
    van,
    tinhDTB: function () {
      var dtb = (this.toan + this.van) / 2;
      return dtb;
    },
    xepLoai: function () {
      if (this.tinhDTB() > 5) {
        return "DAU";
      } else {
        return "ROT";
      }
    },
  };

  document.getElementById("spanTenSV").innerHTML = sv.ten;
  document.getElementById("spanMaSV").innerHTML = sv.ma;
  document.getElementById("spanLoaiSV").innerHTML = sv.loai;
  document.getElementById("spanDTB").innerHTML = sv.tinhDTB();
  document.getElementById("spanXepLoai").innerHTML = sv.xepLoai();

  // in ra man hinh
}
