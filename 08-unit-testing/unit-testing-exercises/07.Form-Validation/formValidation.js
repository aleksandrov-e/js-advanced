function validate() {
    
    const form = document.getElementById('registerForm');

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    const company = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');

    const valid = document.getElementById('valid');
    const submit = document.getElementById('submit');

    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    const passwordRegex = /^\w{5,15}$/;
    const emailRegex = /^[^@]+@[^@]+\..+$/;

    company.addEventListener('change', function () {
        if (company.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });

    submit.addEventListener('click', function (event) {
        event.preventDefault();

        let isValid = true;

        function checkField(field, condition) {
            if (condition) {
                field.style.border = 'none';
            } else {
                field.style.borderColor = 'red';
                isValid = false;
            }
        }

        checkField(username, usernameRegex.test(username.value));
        checkField(email, emailRegex.test(email.value));
        checkField(password, passwordRegex.test(password.value));
        checkField(
            confirmPassword,
            passwordRegex.test(confirmPassword.value) &&
            password.value === confirmPassword.value
        );

        if (company.checked) {
            checkField(
                companyNumber,
                Number.isInteger(Number(companyNumber.value)) &&
                Number(companyNumber.value) >= 1000 &&
                Number(companyNumber.value) <= 9999
            );
        } else {
            companyNumber.style.border = 'none';
        }

        if (isValid) {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }
    });
}


