const search = document.getElementById("cari");

search.addEventListener("input", function() {
    const katakunci = this.value.toLowerCase();
    const barang = document.querySelectorAll("ul li");

    for (let item of barang) {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(katakunci) ? "" : "none";
    }
});

const btn = document.getElementById("btn-3");

btn.addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:5500/Portofolio%20Riziq%202025.html"
})

        