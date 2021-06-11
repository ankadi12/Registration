function checkpwdpat(){
    var pwd=document.getElementById("pwd").value;
    var pattern=/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*_])[\w!@#$%^&*]{6,}$/;
    if(pattern.test(pwd)==false){
        document.getElementById("wpwd").style.display="inline-block";
        document.getElementById("pwd").value="";
    }
    else{
        document.getElementById("wpwd").style.display="none";
    }
}

function reg(){
    if(document.getElementById("uname").value==""||document.getElementById("email").value==""||document.getElementById("pwd").value==""){
        document.getElementById("success").style.display="none";
    }
    else{
        document.getElementById("success").style.display="inline-block";
    }
}