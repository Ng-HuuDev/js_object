// tao mang chua DSSV

var DSSV = [];

// lay du lieu o local storage va in ra man hinh

var dataJson = localStorage.getItem("DSSV_JSON");
if (dataJson !== null) {
  var dataArr = JSON.parse(dataJson);
  DSSV = dataArr.map(function (item) {
    var sv = new SinhVien(
      item.ma,
      item.ten,
      item.email,
      item.matKhau,
      item.toan,
      item.ly,
      item.hoa
    );
    return sv;
  });

  // console.log("🚀 ~ svArr:", svArr);
  renderDSSV(DSSV);
}

// tao function themSv
function themSv() {
  var sv = layThongTinTuForm();

  // kiem tra rong : validate truoc khi them
  // bien idValid  de check xem user nhap vao co hop le khong
  // &: thuc hien tat ca
  // && : thuc hien den khi nao false thi se khong thuc hien nhung thang dang sau nua
  var isValid =
    (kiemTraRong(sv.ma, "spanMaSV") && kiemTraSo(sv.ma, "spanMaSV")) &
    (kiemTraRong(sv.ten, "spanTenSV") && kiemTraTen(sv.ten, "spanTenSV")) &
    (kiemTraRong(sv.email, "spanEmailSV") &&
      kiemTraEmail(sv.email, "spanEmailSV")) &
    kiemTraRong(sv.matKhau, "spanMatKhau");

  // neu hop le,  thi thuc hien them sv vao DSSV va them vao local storage
  // them vao mang DSSV
  if (isValid) {
    DSSV.push(sv);

    // Luu xuong local storage
    var dataJson = JSON.stringify(DSSV);
    localStorage.setItem("DSSV_JSON", dataJson);

    // render ra DSSV
    renderDSSV(DSSV);
  }
}
// console.log("🚀 ~ themSv ~ DSSV:", DSSV);

// xoa SV

function xoaSv(id) {
  // b1:  tim vi tri can xoa=> dung findIndex : tim dc index can xoa
  var index = DSSV.findIndex(function (item) {
    return item.ma == id;
  });
  // console.log("🚀 ~ index ~ index:", index);

  // b2: xoa phan tu cân xóa : sử dụng splice (vi tri, so luong phan tu can xoa)
  DSSV.splice(index, 1);

  // b3: Cap nhat DSSV sau khi xoa
  renderDSSV(DSSV);
}

// JSON.stringtify: chuyen array thanh string
// JSON.parse: chuyen string thanh array

// localStorage.getItem: luu du lieu dang string xuong local storage

// localStorage.setItem: lay du lieu tu local storage

// DIEN GIAI: luc click add( them sv): luu mang DSSV xuong local storage: convert mang => string => luu xuong => localStorage.setItem(key)

// Luc render: lay du lieu tu local storage: localStorage.getItem(key) => convert string => mang => render DSSV

// luu y: khi convert object sang string => khong luu duoc function

// Sua SV

function suaSv(id) {
  // b1:  tim vi tri can sua=> dung findIndex : tim dc index can xoa
  var index = DSSV.findIndex(function (item) {
    return item.ma == id;
  });
  // console.log("🚀 ~ index ~ index:", index);
  var sv = DSSV[index];
  // hien thi noi dung cap nhat
  hienThiThongTin(sv);
  // ngan thong tin hien thi edit ma

  document.getElementById("txtMaSV").disabled = true;
}

// reset
function resetForm() {
  document.getElementById("formQLSV").reset();
  document.getElementById("txtMaSV").disabled = false;
}

// cap nhat sv

function capNhatSV() {
  var sv = layThongTinTuForm();
  var index = DSSV.findIndex(function (item) {
    return item.ma == sv.ma;
  });
  DSSV[index] = sv;
  // cap nhat local storage

  var dataJson = JSON.stringify(DSSV);
  localStorage.setItem("DSSV_JSON", dataJson);
  // render sau khi update data
  renderDSSV(DSSV);
}
