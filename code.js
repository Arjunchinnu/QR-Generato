let imgbox = document.getElementById('imgbox');
let qrimg = document.getElementById('qrimg');
let qrtext = document.getElementById('qrtext');
let btn = document.querySelector(".btn");

function generate(){
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
}

btn.onclick = () => {
    generate();
    qrtext.value = "";

};

btn.onclick = generate;

qrtext.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        generate();
        qrtext.value = "";
    }
});
