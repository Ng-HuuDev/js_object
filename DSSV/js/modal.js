// tao lop doi tuong

function SinhVien(_ma, _ten, _email, _matKhau, _toan, _ly, _hoa) {
  this.ma = _ma;
  this.ten = _ten;
  this.email = _email;
  this.matKhau = _matKhau;
  this.toan = _toan;
  this.ly = _ly;
  this.hoa = _hoa;
  this.tinhDTB = function () {
    return (dtb = (this.toan + this.hoa + this.ly) / 3);
  };
}

// map : convert array object khong co method tinhDTB -> array object co method tinhDTB
