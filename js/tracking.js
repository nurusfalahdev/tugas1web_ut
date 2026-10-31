function cariDO() {
    const nomorDO = document.getElementById('nomorDO').value.trim();
    const hasiltracking = document.getElementById('hasilTracking');
    const data = dataTracking[nomorDO];

    if (nomorDO == '') {
        Swal.fire({
            icon: "warning",
            title: "Nomor DO kosong",
            text: "Silakan masukkan nomor Delivery Order."
        });
        return;
    }

    if (!data) {
        hasiltracking.style.display = "none";

        Swal.fire({
            icon: "error",
            title: "Data tidak ditemukan",
            text: "Nomor Delivery Order tidak ditemukan."
        });
        kosong();

        return;
    } else {
        document.getElementById('status').textContent = data.status;
        document.getElementById('nama').textContent = data.nama;
        document.getElementById('nomor').textContent = data.nomorDO;
        document.getElementById('ekspedisi').textContent = data.ekspedisi;
        document.getElementById('tanggalkirim').textContent = data.tanggalKirim;
        document.getElementById('paket').textContent = data.paket;
        document.getElementById('total').textContent = data.total;

        hasiltracking.style.display = "block";
        tampilkan(data);
        kosong();
    }

}

function tampilkan(data) {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    data.perjalanan.forEach(function (item) {
        timeline.innerHTML += `
            <div class = "mb-3 p-3 border rounded">
                <strong>${item.keterangan}</strong>
                    <br>
                <small class="text-muted">${item.waktu}</small>
            </div>
        `;
    });

}

function kosong() {
    document.getElementById("nomorDO").value = "";
}



