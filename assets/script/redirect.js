// assets/script/redirect.js

// Gabungkan semua link dari berbagai file (spread operator)
const links = {
  ...(typeof tokoLinks !== "undefined" ? tokoLinks : {}),
  ...(typeof mediaLinks !== "undefined" ? mediaLinks : {})
};

// Folder yang berisi konten asli (tidak di-redirect)
const reservedPaths = ["store", "blog", "assets"];

// Ambil path URL
const path = window.location.pathname.replace(/^\/|\/$/g, "");

console.log("Path:", path);

if (path === "") {
  window.location.href = "https://link.laksanacraft.my.id";
} 
else if (links[path]) {
  window.location.href = links[path];
} 
else if (reservedPaths.some(folder => path.startsWith(folder))) {
  console.log("Folder asli:", path);
} 
else {
  document.title = "Link tidak ditemukan";
  document.body.innerHTML = `
    <div style="font-family: sans-serif; text-align: center; margin-top: 20vh;">
      <h3>❌ Link tidak ditemukan</h3>
      <p>Periksa kembali URL Anda.</p>
      <a href="https://link.laksanacraft.my.id">⬅️ Kembali ke halaman utama</a>
    </div>
  `;
}