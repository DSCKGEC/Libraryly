// function to change icons and style for validation
function toggle_status(id_element, change_to) {
    if (change_to == 0) {
        //correct
        document.querySelector('#' + id_element).style.border =
            '1px solid #5bdb95';
        document.querySelector('#' + id_element + '-correct').className =
            'tooltip-right correct';
        document.querySelector('#' + id_element + '-wrong').className =
            'tooltip-right nothing';
    } else if (change_to == 1) {
        //wrong
        document.querySelector('#' + id_element).style.border = '1px solid red';
        document.querySelector('#' + id_element + '-correct').className =
            'tooltip-right nothing';
        document.querySelector('#' + id_element + '-wrong').className =
            'tooltip-right error';
    } //neutral
    else {
        document.querySelector('#' + id_element).style.border = '0';
        document.querySelector('#' + id_element + '-correct').className =
            'tooltip-right nothing';
        document.querySelector('#' + id_element + '-wrong').className =
            'tooltip-right nothing';
    }
}

function set_tooltip(id_element, text) {
    var a = document.querySelector('#' + id_element);
    a.setAttribute('data-tooltip', text);
}
async function call_ajax(key, value) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = async function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText === '1') {
                toggle_status(key, 1);
                set_tooltip(key + '-wrong', key + ' already registered');
            }
        }
    };
    xhttp.open('GET', '/users/api/' + key + '/' + value, true);
    xhttp.send();
}

function checkname() {
    var name = document.querySelector('#name').value;
    var nameformat = /^[A-Za-z ]+$/;
    if (name != '' && !name.match(/[]\s{1,}/) && name.match(nameformat)) {
        toggle_status('name', 0);
    } else {
        toggle_status('name', 1);
    }
}

function checkpass() {
    var pass = document.querySelector('#password').value;
    const passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (pass.match(passformat)) {
        toggle_status('password', 0);
    } else {
        toggle_status('password', 1);
        set_tooltip(
            'password-wrong',
            'Password should be between 8-15 characters and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'
        );
    }
}

function confirmpassword() {
    var originpass = document.querySelector('#password').value;
    var confirmpass = document.querySelector('#confirmpass').value;
    if (originpass == '') {
        toggle_status('password', 1);
        set_tooltip('password-wrong', 'Please enter a password');
        toggle_status('confirmpass', 1);
    } else {
        set_tooltip(
            'password-wrong',
            'Password should be between 8-15 characters and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'
        );
    }
    if (originpass == confirmpass && confirmpass != '') {
        toggle_status('confirmpass', 0);
    } else {
        toggle_status('confirmpass', 1);
    }
}

async function checkemail() {
    var email = document.querySelector('#email').value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    await call_ajax('email', email);
    if (email.match(mailformat)) {
        toggle_status('email', 0);
    } else {
        toggle_status('email', 1);
        set_tooltip('email-wrong', 'Invalid Email Address');
    }
}

async function checkphone() {
    var phone = document.querySelector('#phone-number').value;
    await call_ajax('phone-number', phone);
    var phoneformat = /^\d{10}$/;
    if (phone.match(phoneformat)) {
        toggle_status('phone-number', 0);
    } else {
        toggle_status('phone-number', 1);
    }
}

function checkgroup() {
    var group = document.querySelector('#group').value;
    if (group == '') {
        toggle_status('group', 1);
    } else {
        toggle_status('group', 0);
    }
}

async function checkusername() {
    var uname = document.querySelector('#username').value;
    await call_ajax('username', uname);
    if (uname != '' && !uname.match(/\s{1,}/)) {
        toggle_status('username', 0);
    } else {
        toggle_status('username', 1);
    }
}
