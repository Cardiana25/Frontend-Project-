// script sederhana buatan mahasiswa

// -- variabel global buat nyimpen points --
let userPoints = 0;
let userRank = "Newbie";

// ambil elemen-elemen dari DOM yang mau diubah
const pointDisplayNav = document.getElementById('nav-point-display');
const pointDisplayBig = document.getElementById('total-points');
const rankDisplay = document.getElementById('rank-name');
const progressFill = document.getElementById('progress-fill');
const navMenu = document.getElementById('navMenu');
const hamburgerBtn = document.getElementById('hamburgerBtn');

// -- fungsi buat toggle menu di mobile (hamburger) --
hamburgerBtn.addEventListener('click', () => {
    // toggle class 'active' di ul nav-links
    navMenu.classList.toggle('active');
});

// -- fungsi scroll smooth (opsional biar enak) --
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// -- fungsi utama: simulasi top up & gamifikasi --
function simulasiTopUp(gameName) {
    // ceritanya user konfirmasi dlu
    let yakin = confirm(`Mau Top Up buat game ${gameName}? (Simulasi)`);

    if (yakin) {
        // tambah points random antara 10 sampe 30 biar seru
        let dapetPoint = Math.floor(Math.random() * 20) + 10; 
        userPoints += dapetPoint;

        // panggil fungsi update tampilan
        updateUI();

        alert(`Sukses! Kamu dapet ${dapetPoint} Points dari topup ${gameName}.`);
    }
}

// -- fungsi buat update tampilan points & rank di DOM --
function updateUI() {
    // update angka di navbar dan di section points
    pointDisplayNav.innerText = userPoints;
    pointDisplayBig.innerText = userPoints;

    // logika sederhana buat naik rank
    // 0-100: Newbie, 100-300: Elite, >300: Sultan
    let percentage = 0;

    if (userPoints < 100) {
        userRank = "Newbie";
        // itung persentase bar (per 100)
        percentage = (userPoints / 100) * 100;
    } else if (userPoints >= 100 && userPoints < 300) {
        userRank = "Elite Gamer";
        // reset persentase buat level ini
        percentage = ((userPoints - 100) / 200) * 100;
        rankDisplay.style.color = "silver"; // ganti warna teks rank
    } else {
        userRank = "Sultan";
        percentage = 100;
        rankDisplay.style.color = "gold";
    }

    // update teks rank
    rankDisplay.innerText = userRank;

    // update lebar progress bar css
    progressFill.style.width = percentage + "%";
}