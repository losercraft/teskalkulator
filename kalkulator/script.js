let layar = "";

function tambahAngka(angka) {
  layar += angka;
  document.getElementById("display").value = layar;
}

function hitung() {
  try {
    layar = eval(layar);
    document.getElementById("display").value = layar;
  } catch (e) {
    document.getElementById("display").value = "Error";
  }
}

function hapus() {
  layar = "";
  document.getElementById("display").value = "";
}

function hapusSatu() {
  layar = layar.slice(0, -1);
  document.getElementById("display").value = layar;
}

function tampilkan(jenis) {
  document.getElementById("menuUtama").style.display = "none";
  document.getElementById("kalkulatorBiasa").style.display = "none";
  document.getElementById("kalkulatorLingkaran").style.display = "none";


  if (jenis === 'biasa') {
      document.getElementById("kalkulatorBiasa").style.display = "block"; }
  if (jenis === 'lingkaran') {
      document.getElementById("kalkulatorLingkaran").style.display = "block";
  }
}

function kembaliKeMenu() {
  document.getElementById("kalkulatorBiasa").style.display = "none";
  document.getElementById("kalkulatorLingkaran").style.display = "none";
  document.getElementById("menuUtama").style.display = "flex";
  hapus();
}
function hitungLingkaran() {
    let r = Number(document.getElementById("jari2").value);
    let operasi = document.querySelector('input[name="opsiLingkaran"]:checked').value;
  
    let hasil;
  
    if (operasi === "luas") {
      hasil = Math.PI * r * r;
    } else if (operasi === "keliling") {
      hasil = 2 * Math.PI * r;
    }
  
    document.getElementById("hasilLingkaran").innerText = "Hasil: " + hasil.toFixed(2);
  }
  