document.addEventListener("DOMContentLoaded", function () {
    function hitungLuas() {
      var alas = parseFloat(document.getElementById("input-alas").value);
      var tinggi = parseFloat(document.getElementById("input-tinggi").value);
  
      if (!isNaN(alas) && !isNaN(tinggi)) {
        var luas = 0.5 * alas * tinggi;
        document.getElementById("input-luas").value = luas.toFixed(2);
      } else {
        alert("Masukkan nilai yang valid untuk alas dan tinggi");
      }
    }
  
    function hitungKeliling() {
      var sisiA = parseFloat(document.getElementById("input-sisiA").value);
      var sisiB = parseFloat(document.getElementById("input-sisiB").value);
      var sisiC = parseFloat(document.getElementById("input-sisiC").value);
  
      if (!isNaN(sisiA) && !isNaN(sisiB) && !isNaN(sisiC)) {
        var keliling = sisiA + sisiB + sisiC;
        document.getElementById("input-keliling").value = keliling.toFixed(2);
      } else {
        alert("Masukkan nilai yang valid untuk sisi A, sisi B, dan sisi C");
      }
    }
  
    function resetFields() {
      document.getElementById("input-alas").value = "";
      document.getElementById("input-tinggi").value = "";
      document.getElementById("input-luas").value = "";
      document.getElementById("input-sisiA").value = "";
      document.getElementById("input-sisiB").value = "";
      document.getElementById("input-sisiC").value = "";
      document.getElementById("input-keliling").value = "";
    }
  
    document.querySelector("#luas button").addEventListener("click", hitungLuas);
  
    document.querySelector("#keliling button").addEventListener("click", hitungKeliling);
  
    document.querySelectorAll(".buttons button:nth-child(2)").forEach(function (button) {
      button.addEventListener("click", resetFields);
    });
  });
  