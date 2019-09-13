// JavaScript source code
function validate() {
    var check = true;
    if (document.form1.text1.value == "") {
        document.getElementById("not").innerHTML = "*";
        document.getElementById("not").style.color = "red";
        check = false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.form1.text1.value)) {
        document.getElementById("not").style.color = "red";
        document.getElementById("not").innerHTML = "string only";
        check = false;
    }
    var word = document.form1.text2.value;
    if (word.split(" ").length > 1) {
        document.getElementById("not2").innerHTML = "word";
        check = false;
    }
    if (document.form1.text2.value == "") {
        document.getElementById("not2").innerHTML = "*";
        document.getElementById("not2").style.color = "red";
        check = false;
    }
    var password1 = document.form1.pass1.value;
    if (!/^[A-Z]*$/g.test(password1) && !/^[0-9]*$/g.test(password1) && !/^[a-z]*$/g.test(password1) && password1.length == 8) {
        document.getElementById("not3").innerHTML = "^-^";
    }else
        check = false;
    if (document.form1.pass1.value != document.form1.pass2.value) {
        document.getElementById("not4").innerHTML = "not match";
        check = false;
    } else
        document.getElementById("not4").innerHTML = "^-^";
    if (check == true)
        location.replace("https://www.w3schools.com");
}
function gend() {
    var gen = document.getElementById("sel").value;
    if (gen == "famale")
        document.getElementById("img").src = "../Content/image/famale.png";
    else if (gen == "male")
        document.getElementById("img").src = "../Content/image/male.png";


}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#img').attr('src', e.target.result)
                .width(150)
                .height(150);

        };
        reader.readAsDataURL(input.files[0]);
    }
}
function right() {
    var chk = document.form1.example1.checked;
    if (chk == true)
        document.getElementById('sub').disabled = false;
    else
        document.getElementById('sub').disabled = true;

}
function city() {
    var ct = document.form1.city2.value;
    if (ct == "مصر") {
        document.getElementById("egypt").style.display = "block";
        document.getElementById("egypt2").style.display = "none";
    } if (ct == "تونس") {
        document.getElementById("egypt2").style.display = "block";
        document.getElementById("egypt").style.display = "none";

    }

}
function ValidateUSPhoneNumber(phoneNumber) {
    var regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
    var phone = phoneNumber.match(regExp);
    if (phone) {
        alert('yes');
        return true;
    }
    alert('no');
    return false;
}

