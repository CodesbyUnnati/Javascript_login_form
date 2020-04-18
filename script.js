function validation() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var message = document.getElementById("message").value;
    var text;
    error_message.style.padding = "10px";

    if (name.length < 5) {
        text = "Please enter a valid name";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(age)) {
        text = "Please Enter a Valid age";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter a Valid Email Id";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(number) || number.length != 10) {
        text = "Please Enter a Valid phone Number";
        error_message.innerHTML = text;
        return false;

    }
    if (message.length <= 10) {
        text = "Please Enter more than 10 characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully")
    return true;
}