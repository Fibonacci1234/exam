function validate() {
    let u = document.getElementById("username").value;
    let p1 = document.getElementById("password").value;
      
    if(u== "admin") {
        return false;
    }
    if (u== "") {
        alert("Vui lòng nhập tên!")
        return false
    }

    if(p1 == "") {
        alert("Vui lòng nhập mật khẩu!");
        return false;
    }
    if (p1 === 123456){
        return false
    }
    
      
    alert("Xin hãy điền đúng thông tin!")
      
    return true;
    }