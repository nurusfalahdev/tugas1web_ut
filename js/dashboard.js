// Dashboard
let userLogin = JSON.parse(localStorage.getItem('userLogin'));
let nama = document.getElementById('nama');
let databarang = document.getElementById('databarang');
if (userLogin && nama) {
    nama.textContent = userLogin.nama;
}

// table bahan ajar
dataBahanAjar.forEach(function (data) {
    databarang.innerHTML += `
    <tr>
        <td>${data.kodeBarang}</td>
        <td>${data.namaBarang}</td>
        <td>${data.jenisBarang}</td>
        <td>${data.edisi}</td>
        <td>${data.stok}</td>
        <td>
            <img src="${data.cover}" width="50">
        </td>
    </tr>
    `;
})

function greeting() {
    const jam = new Date().getHours();
    let salam;

    if (jam >= 5 && jam < 12) {
        salam = "Selamat Pagi";
    } else if (jam >= 12 && jam < 15) {
        salam = "Selamat Siang";
    } else if (jam >= 15 && jam < 18) {
        salam = "Selamat Sore";
    } else {
        salam = "Selamat Malam";
    }
    document.getElementById('greeting').textContent = salam;
}
greeting();


// modal
const modal = document.getElementById('modalStok');
// const form = document.getElementById('formStok');
const table = document.getElementById('tabelStok');
// buka modal
function bukaModal() {
    modal.style.display = 'flex'
}
// tutup modal
function tutupModal() {
    modal.style.display = 'none';
}
// add stok baru
function tambah() {
    const kode = document.getElementById('kodebarang').value.trim();
    const nama = document.getElementById('namabarang').value.trim();
    const jenis = document.getElementById('jenisbarang').value.trim();
    const edisi = document.getElementById('edisibarang').value.trim();
    const stok = document.getElementById('stokbarang').value.trim();

    // Cek data kosong
    if (!kode || !nama || !jenis || !edisi || !stok) {
        Swal.fire('Peringatan', 'Semua data wajib diisi!', 'warning');
        return;
    }

    // Cek kode duplikat
    const kodeAda = dataBahanAjar.some(function (data) {
        return (
            data.kodeBarang != null &&
            String(data.kodeBarang).toLowerCase() === kode.toLowerCase()
        );
    });

    if (kodeAda) {
        Swal.fire('Peringatan', 'Data sudah ada!', 'warning');
        return;
    }

    // Tambah data baru
    dataBahanAjar.push({
        kodeBarang: kode,
        namaBarang: nama,
        jenisBarang: jenis,
        edisi: edisi,
        stok: Number(stok),
        cover: ''
    });

    Swal.fire('Berhasil', 'Data berhasil ditambahkan!', 'success');
    tampilkanBarang();
    tutupModal();
}

function tampilkanBarang() {
    const tabel = document.getElementById('databarang');

    tabel.innerHTML = '';

    dataBahanAjar.forEach(function (data) {
        tabel.innerHTML += `
            <tr>
                <td>${data.kodeBarang}</td>
                <td>${data.namaBarang}</td>
                <td>${data.jenisBarang}</td>
                <td>${data.edisi}</td>
                <td>${data.stok}</td>
                <td>
                    <img src="${data.cover || ''}" width="50">
                </td>
            </tr>
        `;
    });
}

