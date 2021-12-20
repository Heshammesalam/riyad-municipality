let showPass = document.getElementById("show-pass");
let form = document.querySelectorAll("input");
let sub = document.getElementById("submit");

// if value are empty stop sending 

sub.addEventListener("click", function(e){
    if(form[0].value === "" || form[1].value === ""){
        e.preventDefault();
    }
});

/// toggle password 

showPass.addEventListener("click",function(){
    if(this.classList[1] === "fa-eye-slash"){
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
        form[1].type = "text";
    }else{
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
        form[1].type = "password";
    }
})
