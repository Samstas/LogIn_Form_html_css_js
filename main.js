const signUpBtn = document.getElementById ('signUpBtn')
const signInBtn = document.getElementById ('signInBtn')
const nameField = document.getElementById ('nameField')
const title = document.getElementById ('title')

signInBtn.onclick = function () {
    nameField.style.maxHeight = '0'
    title.innerHTML = 'Sign In'
    signUpBtn.classList.add ('disable')
    signInBtn.classList.remove ('disable')
}

signUpBtn.onclick = function () {
    nameField.style.maxHeight = '60px'
    title.innerHTML = 'Sign Up'
    signUpBtn.classList.remove ('disable')
    signInBtn.classList.add ('disable')
}