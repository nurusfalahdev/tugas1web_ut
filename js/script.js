let email = document.getElementById('email');
let password = document.getElementById('password');
let cek = document.getElementById('cek');
let btn = document.getElementById('btn');

// lihat password
if (cek) {
    cek.addEventListener('click', function () {
        if (password.type == 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    });
}

// validation form login
function validation() {

    let user = dataPengguna.find(function (data) {
        return data.email == email.value &&
            data.password == password.value;
    });

    if (user) {
        localStorage.setItem('userLogin', JSON.stringify(user));

        Swal.fire({
            title: "Selamat Datang, " + user.nama,
            text: "Login sebagai " + user.role,
            icon: "success"
        }).then(function () {
            window.location.href = 'dashboard.html';
        });

    } else {
        Swal.fire({
            title: "Login Gagal",
            text: "Email atau password salah",
            icon: "error",
            confirmButtonText: "Coba Lagi"
        });
    }
}

function empty() {
    email.value = "";
    password.value = "";
}


