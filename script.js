console.log("JS ACTIVATED")

function alertFunc(){
    alert("Kayıt Başarılı!")
}


function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function saveForm(){
    var tarih = document.getElementById("tarih").value;
    
    var turkce = document.getElementById("net1").value;
    var sosyal = document.getElementById("net2").value;
    var matematik = document.getElementById("net3").value;
    var fen = document.getElementById("net4").value;

    var toplam = parseInt(turkce) + parseInt(sosyal) + parseInt(matematik) + parseInt(fen);

    console.log("Tarih" + tarih)

    console.log("Türkçe Net: " + turkce);
    console.log("Sosyal Net: " + sosyal);
    console.log("Matematik Net: " + matematik);
    console.log("Fen Net: " + fen);

    console.log("Toplam net: " + toplam);


    // save to local storage
    localStorage.setItem("tarih", tarih);
    localStorage.setItem("turkce", turkce);
    localStorage.setItem("sosyal", sosyal);
    localStorage.setItem("matematik", matematik);
    localStorage.setItem("fen", fen);
    localStorage.setItem("toplam net", toplam);


}
