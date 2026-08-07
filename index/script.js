let date = document.getElementById("year")
date.innerHTML = new Date().getFullYear();

function validateForm(){
    let phone = document.getElementById("Phone").value
    let mess = document.getElementById("errormessage")

     mess.style.color = "red"

    if (phone.length!==11){
          mess.innerHTML = "phone number must be 11 digit"
          return false;
    }

    else{
        alert("thank you")
    }
}
