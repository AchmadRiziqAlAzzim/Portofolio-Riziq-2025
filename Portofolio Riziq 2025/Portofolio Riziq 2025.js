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
    const tema = document.getElementById("btn-cb");
    const tema2 = document.getElementById("section3");

    const bg = document.getElementById("latar");
    const bg1 = document.getElementById("latar2");
    const bg2 = document.getElementById("latar4");
    const bg3 = document.getElementById("latar5");
    const bg4 = document.getElementById("latar6");
    const bg5 = document.getElementById("latar7");
    const bg6 = document.getElementById("latar8");
    const bg7 = document.getElementById("latar9");
    const bg9 = document.getElementById("latar10");
    const bg11 = document.getElementById("latar12");
    const bg12 = document.getElementById("latar13");
    const bg8 = document.getElementById("section4");

    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");
    const text3 = document.getElementById("text3");

    const text4 = document.getElementById("text4");
    const text5 = document.getElementById("text5");
    const text6 = document.getElementById("text6");
    const text7 = document.getElementById("text7");
    const text8 = document.getElementById("text8");
    const text9 = document.getElementById("text9");
    const text10 = document.getElementById("text10");
    const text11 = document.getElementById("text11");

    const icon1 = document.getElementById("icon1");
    const icon2 = document.getElementById("icon2");
    const icon3 = document.getElementById("icon3");
    const icon4 = document.getElementById("icon4");

    const button3 = document.getElementById("button-3");
    const button4 = document.getElementById("button-4");
    const button5 = document.getElementById("button-5");
    const button6 = document.getElementById("button-6");
    const button7 = document.getElementById("button-7");
    const button8 = document.getElementById("button-8");


    if (tema.checked) {
        bg.style.backgroundColor = "  #061327"
        bg1.style.backgroundColor = " #061327"
        bg2.style.backgroundColor = " #1e2530"
        bg3.style.backgroundColor = " #1e2530"
        bg4.style.backgroundColor = " #1e2530"
        bg5.style.backgroundColor = " #1e2530"
        bg6.style.borderColor = "rgb(255, 255, 255)"
        bg7.style.backgroundColor = " #1e2530"
        bg8.style.backgroundColor = " #061327"
        bg9.style.backgroundColor = "  #1e2530"
        bg11.style.backgroundColor = "   #1e2530"
        bg12.style.backgroundColor = "   #1e2530"
        tema2.style.backgroundColor =" #061327"

        text1.style.color = "rgb(255, 255, 255)"
        text2.style.color = "rgb(255, 255, 255)"
        text3.style.color = "rgb(255, 255, 255)"


        text5.style.color = " #061327"
        text6.style.color = " #061327"
        text7.style.color = " #061327"
        text8.style.color = " #061327"
        text9.style.color = "rgb(255, 255, 255)"
        text10.style.color = "rgb(255, 255, 255)"
        text11.style.color = "rgb(255, 255, 255)"

        icon1.style.color = "rgb(255, 255, 255)"
        icon2.style.color = "rgb(255, 255, 255)"
        icon3.style.color = "rgb(255, 255, 255)"
        icon4.style.color = "rgb(255, 255, 255)"
        
        button3.style.borderColor = "rgb(255, 255, 255)"
        button4.style.borderColor = "rgb(255, 255, 255)"
        button5.style.borderColor = "rgb(255, 255, 255)"
        button6.style.borderColor = "rgb(255, 255, 255)"
        button7.style.borderColor = "rgb(255, 255, 255)"
        button8.style.borderColor = "rgb(255, 255, 255)"

    }
    
    else {
        bg.style.backgroundColor = "rgb(255, 255, 255)"
        bg1.style.backgroundColor = " rgb(255, 255, 255)"
        bg2.style.backgroundColor = " #061327"
        bg3.style.backgroundColor = "rgb(255, 255, 255)"
        bg4.style.backgroundColor = " #061327"
        bg5.style.backgroundColor = " #061327"
        bg6.style.borderColor = " #061327"
        bg7.style.backgroundColor = " #061327"
        bg8.style.backgroundColor = "rgb(255, 255, 255)"
        bg9.style.backgroundColor = "  #061327"
        bg11.style.backgroundColor = " #061327"
        bg12.style.backgroundColor = "   #061327"
        tema2.style.backgroundColor = "rgb(255, 255, 255)"

        text1.style.color = " #061327"
        text2.style.color = " #061327"
        text3.style.color = " #061327"

        text5.style.color = " rgb(255, 255, 255)"
        text6.style.color = " rgb(255, 255, 255)"
        text7.style.color = " rgb(255, 255, 255)"
        text8.style.color = " rgb(255, 255, 255)"
        text9.style.color = " #061327"
        text10.style.color = " #061327"
        text11.style.color = " #061327"

        icon1.style.color = " #061327"
        icon2.style.color = " #061327"
        icon3.style.color = " #061327"
        icon4.style.color = " #061327"

        button3.style.borderColor = " #061327"
        button4.style.borderColor = " #061327"
        button5.style.borderColor = " #061327"
        button6.style.borderColor = " #061327"
        button7.style.borderColor = " #061327"
        button8.style.borderColor = " #061327"
    }
};


    const item = document.getElementById("item1");

    item.addEventListener('click', function skill1() {
        window.location.href = "https://www.w3schools.com/html/default.asp"
    })

    const item2 = document.getElementById("item2");

    item2.addEventListener('click', function skill2() {
        window.location.href = "https://www.w3schools.com/css/default.asp"
    })

    const item3 = document.getElementById("item3");

    item3.addEventListener('click', function skill3() {
        window.location.href = "https://www.w3schools.com/cpp/default.asp"
    })

    const item4 = document.getElementById("item4");

    item4.addEventListener('click', function skill4() {
        window.location.href = "https://www.w3schools.com/java/default.asp"
    })

    const item5 = document.getElementById("item5");

    item5.addEventListener('click', function skill5() {
        window.location.href = "https://www.w3schools.com/php/default.asp"
    })

    const item6 = document.getElementById("item6");

    item6.addEventListener('click', function skill6() {
        window.location.href = "https://www.tutorialspoint.com/vb.net/index.htm"
    })

    const item7 = document.getElementById("item7");

    item7.addEventListener('click', function skill7() {
        window.location.href = "https://www.tutorialspoint.com/vb.net/index.htm"
    })

    const item8 = document.getElementById("item8");

    item8.addEventListener('click', function skill8() {
        window.location.href = "https://www.w3schools.com/MySQL/default.asp"
    })

    const button9 = document.getElementById("button-9");

    button9.addEventListener('click', function() {
        window.location.href = "http://127.0.0.1:5500/Portofolio%20Personal%20Info%202025.html#"
    });

    // const button1 = document.getElementById("button-3");
    // const button2 = document.getElementById("button-4");
    // const button3 = document.getElementById("button-5");
    // const button4 = document.getElementById("button-6");
    // const button5 = document.getElementById("button-8");
    // const button6 = document.getElementById("button-7");

    // button1.addEventListener("change", function() {
    //     button2.checked = false; 
    //     button3.checked = false;
    //     button4.checked = false; 
    //     button5.checked = false;
    //     button6.checked = false;
    // })

    // button2.addEventListener("change", function() {
    //     button1.checked = false;
    //     button3.checked = false;
    //     button4.checked = false;
    //     button5.checked = false;
    //     button6.checked = false;
    // })

    // button3.addEventListener("change", function() {
    //     button2.checked = false;
    //     button1.checked = false;
    //     button4.checked = false;
    //     button5.checked = false;
    //     button6.checked = false;
    // })

    // button4.addEventListener("change", function() {
    //     button2.checked = false;
    //     button1.checked = false;
    //     button3.checked = false;
    //     button5.checked = false;
    //     button6.checked = false;
    // })

    // button5.addEventListener("change", function() {
    //     button2.checked = false;
    //     button1.checked = false;
    //     button3.checked = false;
    //     button4.checked = false;
    //     button6.checked = false;
    // })

    // button6.addEventListener("change", function() {
    //     button2.checked = false;
    //     button1.checked = false;
    //     button3.checked = false;
    //     button4.checked = false;
    //     button5.checked = false;
    // })

    let hitung = 0
    const count = document.getElementById("count");

    const interval = setInterval(() => {
        if (hitung < 724) {
            hitung++;
            count.textContent = hitung;
        } else {
            clearInterval(interval)
        } 1000});

    let value = 0;
    const hitungan = document.getElementById("hitungan");

    const duration = setInterval(() => {
        if (value < 1274) {
            value++;
            hitungan.textContent = value;
        } else {
            clearInterval(duration);
        }
    })

    let prediksi = 0;
    const perhitungan = document.getElementById("perhitungan");

    const waktu = setInterval(() => {
        if (prediksi < 170) {
            prediksi++;
            perhitungan.textContent = prediksi;
        } else {
            clearInterval(waktu);
        }
    })

        const btn_cb2 = document.getElementById("btn-cb2");

        btn_cb2.addEventListener("change", function() {
            if (btn_cb2.checked) {
                alert("berhasil");
                document.getElementById("gambar11").style.display = "none";
                document.getElementById("gambar22").style.display = "none";
                document.getElementById("gambar33").style.display = "none";
                document.getElementById("gambar44").style.display = "none";
                document.getElementById("gambar55").style.display = "none";
                document.getElementById("gambar66").style.display = "none";
                document.getElementById("gambar77").style.display = "none";
                document.getElementById("gambar88").style.display = "none";
                document.getElementById("gambar99").style.display = "none";
                document.getElementById("video1").style.display = "none";
   
                

            } else {
                document.getElementById("gambar11").style.display = "block";
                document.getElementById("gambar22").style.display = "block";
                document.getElementById("gambar33").style.display = "block";
                document.getElementById("gambar44").style.display = "block";
                document.getElementById("gambar55").style.display = "block";
                document.getElementById("gambar66").style.display = "block";
                document.getElementById("gambar77").style.display = "block";
                document.getElementById("gambar88").style.display = "block";
                document.getElementById("gambar99").style.display = "block";
            }
        });

        const btnvalue = document.getElementById("btn-cb3");

        const animation1 = document.getElementById("text3");
        const animasi1 = document.getElementById("animasi1");
        const animasi2 = document.getElementById("animasi2");
        const animasi3 = document.getElementById("animasi3");
        const animasi4 = document.getElementById("animasi4");
        const animasi5 = document.getElementById("animasi5");
        const animasi6 = document.getElementById("animasi6");
        const animasi7 = document.getElementById("animasi7");
        
        const animasi8 = document.getElementById("animasi8");
        const animasi9 = document.getElementById("animasi9");
        const animasi10 = document.getElementById("animasi10");
        const animasi11 = document.getElementById("animasi11");
        const animasi12 = document.getElementById("animasi12");
        const animasi13 = document.getElementById("animasi13");
        const animasi14 = document.getElementById("animasi14");

        const animasi15 = document.getElementById("k1");
        const animasi16 = document.getElementById("k2");
        const animasi17 = document.getElementById("k3");
        const animasi18 = document.getElementById("k4");
        const animasi19 = document.getElementById("k5");
        const animasi20 = document.getElementById("k6");

        const animasi21 = document.getElementById("button56");


        btnvalue.addEventListener("change", function() {
            if (btnvalue.checked) {
                animation1.style.animationPlayState = "paused"
                animasi1.style.animationPlayState = "paused"
                animasi2.style.animationPlayState = "paused"
                animasi3.style.animationPlayState = "paused"
                animasi4.style.animationPlayState = "paused"
                animasi5.style.animationPlayState = "paused"
                animasi6.style.animationPlayState = "paused"
                animasi7.style.animationPlayState = "paused"

                animasi8.style.animationPlayState = "paused"
                animasi9.style.animationPlayState = "paused"
                animasi10.style.animationPlayState = "paused"
                animasi11.style.animationPlayState = "paused"
                animasi12.style.animationPlayState = "paused"
                animasi13.style.animationPlayState = "paused"
                animasi14.style.animationPlayState = "paused"

                animasi15.style.animationPlayState = "paused"
                animasi16.style.animationPlayState = "paused"
                animasi17.style.animationPlayState = "paused"
                animasi18.style.animationPlayState = "paused"
                animasi19.style.animationPlayState = "paused"
                animasi20.style.animationPlayState = "paused"
                
                animasi21.style.animationPlayState = "paused"
            } else {
                animation1.style.animationPlayState = "running"
                animasi1.style.animationPlayState = "running"
                animasi2.style.animationPlayState = "running"
                animasi3.style.animationPlayState = "running"
                animasi4.style.animationPlayState = "running"
                animasi5.style.animationPlayState = "running"
                animasi6.style.animationPlayState = "running"
                animasi7.style.animationPlayState = "running"

                animasi8.style.animationPlayState = "running"
                animasi9.style.animationPlayState = "running"
                animasi10.style.animationPlayState = "running"
                animasi11.style.animationPlayState = "running"
                animasi12.style.animationPlayState = "running"
                animasi13.style.animationPlayState = "running"
                animasi14.style.animationPlayState = "running"

                animasi15.style.animationPlayState = "running"
                animasi16.style.animationPlayState = "running"
                animasi17.style.animationPlayState = "running"
                animasi18.style.animationPlayState = "running"
                animasi19.style.animationPlayState = "running"
                animasi20.style.animationPlayState = "running"
            }
        })

        function ubah(warna) {
            const button78 = document.getElementById("btn-cb");
            const bg = document.getElementById("bg");

            button78.addEventListener("change", function() {
                switch (warna) {
                    case biru: {
                        bg.style.backgroundColor = "red"
                    }
                }
            })
        }

        let tampilan= 0;
        const timer = document.getElementById("timer");

        const durasi = setInterval(() => {
            if (tampilan < 100) {
                tampilan++
                timer.textContent = tampilan
            } else {
                tampilan = 0
            }
        }, 49.5)

        const button90 = document.getElementById("button-90");

        button90.addEventListener("click", function() {
            window.location.href = "http://127.0.0.1:5500/Portofolio%20Personal%20Info%202025.html#";
        })

        const bgtb = document.getElementById("button-7");
        const bgop = document.getElementById("bgop");

        bgtb.addEventListener("change", function() {
            if (bgtb.checked) {
                bgop.style.opacity = '1'
            } else (
                bgop.style.opacity = '0'
            )
        })

        
       
// function ubah() {

//     const jam = new Date().getHours();
//     const bg = document.getElementById("latar");

//     if ( jam > 6 && jam <= 15 ) {
//         bg.style.backgroundColor = "rgb(0, 119, 255)"
//     } else if ( jam >= 15 && jam < 18 ) {
//         bg.style.backgroundColor = " #FF4500"
//     } else if ( jam > 18 && jam <= 24) {
//         bg.style.backgroundColor = " #191970"
//     } else if ( jam >= 1 && jam <= 5 ) {
//         bg.style.backgroundColor = " #191970"
// }}

// ubah()

// setInterval(ubah, 1000)
