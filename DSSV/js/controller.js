// viet function nhan vao array va render ra table

function renderDSSV(dssv) {
  var contenHtml = "";

  // duyet mang tr chua thong tin object sv
  DSSV.forEach(function (sv, index) {
    sv = dssv[index];
    var trString = `<tr>
                          <td> ${sv.ma} </td>
                          <td> ${sv.ten} </td>
                          <td> ${sv.email} </td>
                          <td>0 </td>
                          <td>
                          <button class="btn btn-success"> Xoa </button>
                          <button class="btn btn-success"> Sua </button>
                          </td>
                    </tr>`;
    contenHtml += trString;
  });
  document.getElementById("tbodySinhVien").innerHTML = contenHtml;
}
