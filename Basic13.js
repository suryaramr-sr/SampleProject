//Error handling
function login(username, password){
    try{
        if(username==="" ||password===""){
            console.log("username and password cannot be empty");
        }
        else if(username==="admin" && password==="admin123"){
            console.log("login successful");            
        }
        else{
            console.log("invalid username or password");
        }
    }
    catch(error){
        console.log("unexpected error");
        console.log(error.message);
    }
    finally{
        console.log("login process completed");
    }
}
login("admin123", "admin12334");
