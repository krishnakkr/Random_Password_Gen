const passwordBox = document.getElementById("password");
const length = 15;
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
function createPassword() {
    let password = "";
    password += charset[Math.floor(Math.random() * charset.length)];
    while (length > password.length) {
        password += charset[Math.floor(Math.random() * charset.length)];
    }
    passwordBox.value = password;
}
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}