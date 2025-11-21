// assets/script/redirect.js
// 🔹 Logika utama untuk redirect semua shortlink

// Gabungkan semua link dari berbagai file (spread operator)
const links = {
  ...(typeof tokoLinks !== "undefined" ? tokoLinks : {}),
  ...(typeof mediaLinks !== "undefined" ? mediaLinks : {}),
  ...(typeof info1Links !== "undefined" ? info1Links : {}),
};

// Folder yang berisi konten asli (tidak di-redirect)
const reservedPaths = ["store", "blog", "assets", "page"];

// Ambil path URL (tanpa / di awal dan akhir)
const path = window.location.pathname.replace(/^\/|\/$/g, "");

console.log("Path:", path);

// 🔀 Proses redirect
if (path === "") {
  // Jika user hanya mengunjungi domain utama
  window.location.href = "https://link.laksanacraft.my.id";
}
else if (links[path]) {
  // Jika path cocok dengan salah satu key di objek link
  window.location.href = links[path];
}
else if (reservedPaths.some(folder => path.startsWith(folder))) {
  // Jika path termasuk folder asli (bukan redirect)
  console.log("Folder asli:", path);
}
else {
  // Jika link tidak ditemukan
  document.title = "Link tidak ditemukan";
  document.body.innerHTML = `
    <div style="font-family: sans-serif; text-align: center; margin-top: 20vh;">
      <h3>❌ Link tidak ditemukan</h3>
      <p>Periksa kembali URL Anda.</p>
      <a href="https://link.laksanacraft.my.id">⬅️ Kembali ke halaman utama</a>
    </div>
  `;
}