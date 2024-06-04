let signUp = document.getElementById('signUp');
let signIn = document.getElementById('signIn');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');


signIn.onclick = function() {
    nameInput.style.height="0px";
    title.innerHTML = "Login";
    nameInput.classList.toggle('hidden');
    signUp.classList.add("disable");
   signIn.classList.remove("disable");
}

signUp.onclick = function() {
    nameInput.style.height= "60px";
    title.innerHTML = "Registro";
    nameInput.classList.toggle('hidden');
    signUp.classList.remove("disable");
   signIn.classList.add("disable");
}