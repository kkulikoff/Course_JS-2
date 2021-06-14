function validate_form() {
    let reName = /^[a-zа-яё]+$/gi;
    let reEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
    let rePhone = /^\+\d{1}\(\d{3}\)\s?\d{3}\-\d{4}$/;
    let reMessage = /[a-zа-яё0-9]/;
    let name = document.getElementsByName('name')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let phone = document.getElementsByName('phone')[0].value;
    let message = document.getElementsByName('msg')[0].value;

    if(reName.test(name) === false) {
        document.getElementById('name').style.border = '1px solid red';
        document.getElementById('p_name').style.display = 'inline-block';
    }
    if(reEmail.test(email) === false) {
        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('p_email').style.display = 'inline-block';
    }
    if(rePhone.test(phone) === false) {
        document.getElementById('phone').style.border = '1px solid red';
        document.getElementById('p_phone').style.display = 'inline-block';
    }
    if(reMessage.test(message) === false) {
        document.getElementById('msg').style.border = '1px solid red';
    }
}
document.getElementById('send').addEventListener("click", validate_form);