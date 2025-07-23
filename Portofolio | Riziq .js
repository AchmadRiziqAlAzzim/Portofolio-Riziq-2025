const search = document.getElementById("cari");

search.addEventListener("input", function() {
    const katakunci = this.value.toLowerCase();
    const barang = document.querySelectorAll("ul li");

    for (let item of barang) {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(katakunci) ? "" : "none";
    }
});

function tema() {
    const mainbtn = document.getElementById("btn-cb");

    mainbtn.addEventListener("change", function() {
        if (mainbtn.checked) {
            document.getElementById("latar").style.backgroundColor = "#1f1e24"
            document.getElementById("text-1").style.color = "white"
            document.getElementById("text-2").style.color = "white"
            document.getElementById("text-3").style.color = "white"
            document.getElementById("text-4").style.color = "white"
            document.getElementById("text-5").style.color = "white"
            document.getElementById("text-6").style.color = "white"
            document.getElementById("text-7").style.color = "white"
            document.getElementById("text-8").style.backgroundColor = "white"
            document.getElementById("text-9").style.color = "white"
            document.getElementById("text-10").style.color = "white"
        }

        else {
            document.getElementById("latar").style.backgroundColor = "white"
            document.getElementById("text-1").style.color = "#1f1e24"
            document.getElementById("text-2").style.color = "#1f1e24"
            document.getElementById("text-3").style.color = "#1f1e24"
            document.getElementById("text-4").style.color = "#1f1e24"
            document.getElementById("text-5").style.color = "#1f1e24"
            document.getElementById("text-6").style.color = "#1f1e24"
            document.getElementById("text-7").style.color = "#1f1e24"
            document.getElementById("text-8").style.backgroundColor = "#1f1e24"
            document.getElementById("text-9").style.color = "#1f1e24"
            document.getElementById("text-10").style.color = "#1f1e24"
        }
    })
};

function hide() {
    const buttonhide = document.getElementById("btn-cb2");

        if (buttonhide.checked) {
            document.getElementById("icon-6").style.opacity = "0";
            document.getElementById("icon-7").style.opacity = "0";
            document.getElementById("icon-8").style.opacity = "0";
            document.getElementById("icon-9").style.opacity = "0";
            document.getElementById("icon-10").style.opacity = "0";

            document.getElementById("icon10").style.opacity = "0";
            document.getElementById("icon-20").style.opacity = "0";
            document.getElementById("icon-30").style.opacity = "0";
            document.getElementById("icon-40").style.opacity = "0";
            document.getElementById("icon-50").style.opacity = "0";
            document.getElementById("icon-60").style.opacity = "0";
            document.getElementById("icon-70").style.opacity = "0";
            document.getElementById("icon-80").style.opacity = "0";
            document.getElementById("icon-90").style.opacity = "0";
     
            document.getElementById("icon_1").style.opacity = "0";
            document.getElementById("icon_2").style.opacity = "0";
            document.getElementById("icon_3").style.opacity = "0";
            document.getElementById("icon_4").style.opacity = "0";
            document.getElementById("icon_5").style.opacity = "0";
            document.getElementById("icon_6").style.opacity = "0";
            document.getElementById("icon_7").style.opacity = "0";
            document.getElementById("icon_8").style.opacity = "0";
            document.getElementById("icon_9").style.opacity = "0";
            document.getElementById("icon_10").style.opacity = "0";
            document.getElementById("icon_11").style.opacity = "0";
            document.getElementById("icon_14").style.opacity = "0";
            document.getElementById("icon_15").style.opacity = "0";
            document.getElementById("icon_16").style.opacity = "0";
            document.getElementById("icon_22").style.opacity = "0";
            document.getElementById("icon_23").style.opacity = "0";
            document.getElementById("icon_24").style.opacity = "0";
            document.getElementById("icon_25").style.opacity = "0";
            document.getElementById("icon_26").style.opacity = "0";
            document.getElementById("icon_30").style.opacity = "0";
            document.getElementById("icon_31").style.opacity = "0";
            document.getElementById("icon_32").style.opacity = "0";
            document.getElementById("icon_33").style.opacity = "0";
            document.getElementById("icon_34").style.opacity = "0";
            document.getElementById("icon_35").style.opacity = "0";
            document.getElementById("icon_36").style.opacity = "0";
            document.getElementById("icon_37").style.opacity = "0";
            document.getElementById("icon_38").style.opacity = "0";
            document.getElementById("icon_39").style.opacity = "0";
          
         
            document.getElementById("video-1").style.opacity = "0";
            document.getElementById("video-2").style.opacity = "0";
        } else {
            document.getElementById("icon-6").style.opacity = "1";
            document.getElementById("icon-7").style.opacity = "1";
            document.getElementById("icon-8").style.opacity = "1";
            document.getElementById("icon-9").style.opacity = "1";
            document.getElementById("icon-10").style.opacity = "1";

            document.getElementById("icon10").style.opacity = "1";
            document.getElementById("icon-20").style.opacity = "1";
            document.getElementById("icon-30").style.opacity = "1";
            document.getElementById("icon-40").style.opacity = "1";
            document.getElementById("icon-50").style.opacity = "1";
            document.getElementById("icon-60").style.opacity = "1";
            document.getElementById("icon-70").style.opacity = "1";
            document.getElementById("icon-80").style.opacity = "1";
            document.getElementById("icon-90").style.opacity = "1";

            document.getElementById("icon_1").style.opacity = "1";
            document.getElementById("icon_2").style.opacity = "1";
            document.getElementById("icon_3").style.opacity = "1";
            document.getElementById("icon_4").style.opacity = "1";
            document.getElementById("icon_5").style.opacity = "1";
            document.getElementById("icon_6").style.opacity = "1";
            document.getElementById("icon_7").style.opacity = "1";
            document.getElementById("icon_8").style.opacity = "1";
            document.getElementById("icon_9").style.opacity = "1";
            document.getElementById("icon_10").style.opacity = "1";
            document.getElementById("icon_11").style.opacity = "1";
            document.getElementById("icon_14").style.opacity = "1";
            document.getElementById("icon_15").style.opacity = "1";
            document.getElementById("icon_16").style.opacity = "1";
            document.getElementById("icon_22").style.opacity = "1";
            document.getElementById("icon_23").style.opacity = "1";
            document.getElementById("icon_24").style.opacity = "1";
            document.getElementById("icon_25").style.opacity = "1";
            document.getElementById("icon_26").style.opacity = "1";
            document.getElementById("icon_37").style.opacity = "1";

            document.getElementById("video-1").style.opacity = "1";
            document.getElementById("video-2").style.opacity = "1";
        }}

function setActive(clicked) {
    document.querySelectorAll(".nav-item").forEach(link => {
        link.classList.remove("active");

        clicked.classList.add("active")
    })
}

function link() {

    const skill_1 = document.getElementById("skill_1");
    skill_1.addEventListener("click", function() {
        window.location.href = "https://www.w3schools.com/html/"
    });



    const skill_2 = document.getElementById("skill_2");
    skill_2.addEventListener("click", function() {
        window.location.href = "https://www.w3schools.com/css/"
    });

    const skill_3 = document.getElementById("skill_3");
    skill_3.addEventListener("click", function() {
        window.location.href = "https://www.w3schools.com/java/"
    });

    const skill_4 = document.getElementById("skill_4");
    skill_4.addEventListener("click", function() {
        window.location.href = "https://www.w3schools.com/cpp/"
    });

    const skill_5 = document.getElementById("skill_5");
    skill_5.addEventListener("click", function() {
        window.location.href = "https://www.tutorialspoint.com/vb.net/index.htm"
    });

    const skill_6 = document.getElementById("skill_6");
    skill_6.addEventListener("click", function() {
        window.location.href = "https://www.w3schools.com/php/"
    });

    const skill_7 = document.getElementById("skill_7");
    skill_7.addEventListener("click", function() {
        window.location.href = "https://www.w3schools.com/js/"
    });

    const skill_8 = document.getElementById("skill_8");
    skill_8.addEventListener("click", function() {
        window.location.href = "https://www.w3schools.com/MySQL/default.asp"
    });

    const skill_9 = document.getElementById("skill_9");
    skill_9.addEventListener("click", function() {
        window.location.href = "https://laravel.com/"
    });

    const skill_10 = document.getElementById("skill_10");
    skill_10.addEventListener("click", function() {
        window.location.href = "https://www.apachefriends.org/"
    });
}

function projek1() {
    const button_1 = document.getElementById("button_1");
    button_1.addEventListener("click", function() {
        window.location.href = "http://127.0.0.1:5500/Portofolio%20Personal%20Info%202025.html#"
    })
}

function count1() {
    let hitung = 0;
    const display = document.getElementById("count");

    const interval = setInterval(() => {
        if (hitung < 729) {
            hitung++;
            display.innerText = hitung;
        } else {
            clearInterval(interval)
        }
    })

    window.addEventListener("scroll", function() {
        if (window.scrollY < 100) {
            pauseInterval()
        } else {
            startInterval()
        }
    })
}

count1()

function count2() {
    let hitung2 = 0;
    const display2 = document.getElementById("hitungan");

    const interval2 = setInterval(() => {
        if (hitung2 < 1024) {
            hitung2++;
            display2.innerText = hitung2;
        } else {
            clearInterval(interval2)
        }
    })
}

count2()

function count3() {
     let hitung3 = 0;
    const display3 = document.getElementById("perhitungan");

    const interval3 = setInterval(() => {
        if (hitung3 < 125) {
            hitung3++;
            display3.innerText = hitung3;
        } else {
            clearInterval(interval3)
        }
    })
}

count3()


function kirim() {
    const isiNama = document.getElementById("Name_Value").value.trim()
    const isiEmail = document.getElementById("Email_Value").value.trim()
    const isiPesan = document.getElementById("Message").value.trim()

    if (isiPesan !== "" && isiNama !== "" && isiEmail !== "") {
        const isi = document.getElementById("value_2");

        const inti = document.createElement("div");
        inti.className = "bubble";
        inti.innerHTML = `<i class="fa-solid fa-user" id="icon_13"></i> <a class="value-isi">${isiPesan}</a> <h4 class="value-email">${isiEmail}</h4> <p class="Name">${isiNama}</p>`;

        isi.appendChild(inti);
    } else {
        alert("Isi Dulu Formnya Bang!")
    }
}

function kirim2() {
    const isiNama = document.getElementById("Name_Value").value.trim()
    const isiEmail = document.getElementById("Email_Value").value.trim()
    const isiPesan = document.getElementById("Message").value.trim()

    if (isiPesan !== "" && isiNama !== "" && isiEmail !== "") {
        const isi = document.getElementById("value_2");

        const inti = document.createElement("div");
        inti.className = "bubble";
        inti.innerHTML = `<i class="fa-solid fa-user-secret" id="icon_13"></i> <a class="value-isi">${isiPesan}</a> <h4 class="value-email">${"Tidak Ada"}</h4> <p class="Name">${"Tidak Ada"}</p>`;

        isi.appendChild(inti);
    } else {
        alert("Isi Dulu Formnya Bang!")
    }
}

function option() {
    const op_1 = document.getElementById("op-1");
    const op_2 = document.getElementById("op-2");

    if (op_1.checked) {
        op_2.checked = false;
        op_2.checked = true;

    } 
}

// const search2 = document.getElementById("input-1");
//     window.addEventListener("scroll", function() {
//         if (window.scrollY >= 100) {
//             search2.style.opacity = "0"
//         } else {
//             search2.style.opacity = "1"
//         }
//     });

function kirim3() {

    const isiAI = document.getElementById("input-1").value.toLowerCase();
    let jawab = ""

    if (isiAI.includes("hallo") || 
          isiAI.includes("hai") || 
          isiAI.includes("halo") || 
          isiAI.includes("apa Kabar") ||
          isiAI.includes("apaKabar") || 
          isiAI.includes("mulai") ||
          isiAI.includes("allo") ||
          isiAI.includes("oi") ||
          isiAI.includes("uy") ||
          isiAI.includes("bos") ||
          isiAI.includes("gan") ||
          isiAI.includes("woi")) {
        jawab = `${isiAI}, "Ada Yang Bisa Saya Bantu ? 😁"`
    } 
    
    else if (isiAI.includes("adanih") || 
               isiAI.includes("ada") || 
               isiAI.includes("iya") ||
               isiAI.includes("iy") ||
               isiAI.includes("ya")) {
                jawab = `${"Mau Di Bantu Apa Nih 🤗"}`
                
    }  else if (isiAI.includes("siapa") && isiAI.includes("riziq")){
        jawab = "Achmad Riziq Al Azzim Adalah Sebuah Anak Berumur 16 Tahun Yang Tinggal Di Kota Samarinda"

    } else if (isiAI.includes("lahir") || isiAI.includes("tahun") || isiAI.includes("berapa")) {
        jawab = "Riziq Lahir Pada Tanggal 1 Desember 2008 🤗"

    } else if (isiAI.includes("riziq") ||
     isiAI.includes("tinggal") || 
     isiAI.includes("dimana") ||
     isiAI.includes("jalan") ||
     isiAI.includes("alamat")) {
        jawab = "Riziq Tinggal Di Jl Antasari Gg 12 😎"

    } else if (isiAI.includes("saudara") ||
     isiAI.includes("riziq") || 
     isiAI.includes("ada") ||
     isiAI.includes("punya") ||
     isiAI.includes("berapa")) {
        jawab = "riziq 2 bersaudara"
     }
    
    else if (isiAI.includes("goblok") ||
     isiAI.includes("tolol") || 
     isiAI.includes("gimanasih") ||
      isiAI.includes("kamu")) {
        jawab = "Maaf Kalau Buat Kamu Marah 😞"
    }

    else if (isiAI.includes("Dimana") &&
    isiAI.includes("Domisili") &&
    isiAI.includes("Riziq")) {

        jawab = "Riziq Berdomisili Di Kota Samarinda, Jln Antasari Gg 12"
    }

  else {
        jawab = "Maaf Data Kami Belum Update 😂"
    }

   

    const a = document.createElement("a")
    a.className = "AI-Speaking"
    a.innerHTML = `${jawab}`

    document.getElementById("AI-Selection").appendChild(a)
    
    // const p = document.createElement("p")
    // p.className = "User_AI";
    // p.innerHTML = `${isiAI}`;

    document.getElementById("User-Selection").innerHTML = `<p class="User_AI">${isiAI}<i class="fa-solid fa-user" id="icon_20"></i></p>`

    //  document.getElementById("value-AI").appendChild("User-Selection")
}

const button1 = document.getElementById("button-3");
const button2 = document.getElementById("button-4");
const button3 = document.getElementById("button-5");
const button4 = document.getElementById("button-6");
const button5 = document.getElementById("button-8");
const button6 = document.getElementById("button-7");

 button1.addEventListener("change", function() {
        button2.checked = false; 
        button3.checked = false;
        button4.checked = false; 
        button5.checked = false;
        button6.checked = false;
    })

button2.addEventListener("change", function() {
        button1.checked = false;
        button3.checked = false;
        button4.checked = false;
        button5.checked = false;
        button6.checked = false;
    })

    button3.addEventListener("change", function() {
        button2.checked = false;
        button1.checked = false;
        button4.checked = false;
        button5.checked = false;
        button6.checked = false;
    })

    button4.addEventListener("change", function() {
        button2.checked = false;
        button1.checked = false;
        button3.checked = false;
        button5.checked = false;
        button6.checked = false;
    })

    button6.addEventListener("change", function() {
        button2.checked = false;
        button1.checked = false;
        button3.checked = false;
        button4.checked = false;
        button5.checked = false;
    })

    function cari_2() {
        const cari_2 = document.getElementById("cari_2");

        cari_2.addEventListener("input", function() {
            const keyword = this.value.toLowerCase();
            const brg = document.querySelectorAll("ul li");

            for (let ulg of brg) {
                const text = ulg.textContent.toLowerCase();
                ulg.style.display = text.includes(keyword) ? "" : "none";
            }
        })
    }

const bgnav = document.getElementById("bg-nav");
let lastY = 0;

window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        // bgnav.style.top = "-100px"
        // document.getElementById("latar4").style.top= "-100rem"
        // document.getElementById("latar4").style.transition= "0.3s ease"
    }

    else if (window.scrollY > 50) {
        bgnav.style.width = "1030px"
        bgnav.style.backgroundColor = "white"
        bgnav.style.boxShadow = "0px 3px 0px rgba(0,0,0,0.8)"
        bgnav.style.border = "solid 3px black"
        document.getElementById("icon-80").style.opacity = "0"
        document.getElementById("icon-80").style.transition = "0.3s"
        document.getElementById("logo_Main").style.position = "fixed"
        document.getElementById("logo_Main").style.left = "14rem"
        document.getElementById("logo_Main").style.transition = "0.3s ease"

        document.getElementById("latar4").style.left = "-13rem"
        document.getElementById("latar4").style.transition = "0.3s ease"

    } 

    else {
        document.getElementById("latar4").style.top= "-0.8rem"
        bgnav.style.boxShadow = "0px 0px 0px #1f1e24"
        bgnav.style.border = "solid 0px black"
        document.getElementById("icon-80").style.opacity = "1"
        document.getElementById("logo_Main").style.left = "11rem"
        document.getElementById("logo_Main").style.transition = "0.3s ease"
        document.getElementById("latar4").style.left = "-7rem"
        document.getElementById("latar4").style.transition = "0.3s ease"
    }
})
