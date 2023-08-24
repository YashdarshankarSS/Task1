// function validate(){
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const emailerror = document.getElementById('emailerror');
//     const passworderror = document.getElementById('passworderror');

    
//     emailerror.style.display = "none";
//     passworderror.style.display = "none";


//     if(email != 'yash@gmail.com'){
//         emailerror.style.display = "block";
//         emailerror.innerHTML = "Please enter valid email"
//     }

//     if(email == ""){
//         emailerror.style.display = "block";
//         emailerror.innerHTML = "Please don't leave email value blank"
//     }    
    
//     if(password != 'Yash@1001'){
//         passworderror.style.display = "block";
//         passworderror.innerHTML = "Please enter valid password"
//     }
//     if(password == ""){
//         emailerror.style.display = "block";
//         passworderror.innerHTML = "Please don't leave password value blank"
//     }

//     if(email ==='yash@gmail.com' && password==='Yash@1001'){
//         window.location.href = '/success.html';
//     }
    
// }

function validate(event){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let emailvalid = /\S+@\S+\.\S+/.test(email);
    let passwordvalid = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]){8,}.*$/.test(password);
    

    const emailerror = document.getElementById('emailerror');
    const passworderror = document.getElementById('passworderror');
    
    emailerror.style.display = "none"
    passworderror.style.display = "none"

    if(!emailvalid){
        emailerror.style.display = "block"
        event.preventDefault();
    }

    if(!passwordvalid){
        if(password.length < 8){
            passworderror.style.display = "block";
            event.preventDefault();
        }
    }
    if(emailvalid && passwordvalid && (password.length > 7)){
        window.location.href = '/success.html';
    }
    
}



// document.querySelector('form').addEventListener('submit',function(event){
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     let emailvalid = /\S+@\S+\.\S+/.test(email)
//     let passwordvalid = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).*$/.test(password)
    

//     const emailerror = document.getElementById('emailerror')
//     const passworderror = document.getElementById('passworderror')
    
//     emailerror.style.display = "none"
//     passworderror.style.display = "none"
//     if(!emailvalid){
//         emailerror.style.display = "block"
//         event.preventDefault();
//     }

//     if(!passwordvalid){
//         if(password.length < 8){
//             passworderror.style.display = "block";
//             event.preventDefault();
//         }
//     }
//     if(emailvalid && passwordvalid && password.length > 7){
//         // alert("successs");
//         console.log(26,window.location)
//         // window.location.href = '/success.html';
//     }
// });