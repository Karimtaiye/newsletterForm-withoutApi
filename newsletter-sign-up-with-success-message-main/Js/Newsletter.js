const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const Input = document.getElementById('Input')
const SubmitBtn = document.getElementById('Submit_Btn')
const errmsg = document.getElementById('errmsg')
const link = document.getElementById('link')
// const confirmationEmail = document.getElementById('confirmationEmail')

// confirmationEmail.innerHTML = Input.value

Input.addEventListener("change", (e)=>{
    const value = e.target.value
  
})

SubmitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    errmsg.style.display =""
    Input.style.color = "black"
    if (Input.value === ""){
        errmsg.style.display ="flex"
        errmsg.textContent = "input email"
        
    }
    else if(!emailRegex.test(Input.value)){
       setTimeout(() => {
        errmsg.style.display ="flex"
        errmsg.textContent = "invalid email"
        Input.style.border = "1px solid red"
        Input.style.color = "red"
       }, 1000);
    }
    else {
        setTimeout(() => {
            Input.style.border = null
            window.location.href='./PopUp.html'
        }, 1000);
    }
    console.log(Input.value);
})

