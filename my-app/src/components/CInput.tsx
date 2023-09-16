import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";



// let require = [
//   { required : "password is required",}
// ] 
// let sucessed = [
//  {suceed : "your password has been submited sucessfully"}
// ]



function CInput() {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordButtonClick = () => {
    if(password == ""){
      alert("password is required")
    }else{
      console.log(password);
      alert("your password has been submited sucessfully")
    setPassword("")
    }
  };

  return (
    <div>
      <TextField
        className="m-2"
        id="outlined-basic"
        label="Enter your password"
        variant="outlined"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button className="m-2" onClick={handlePasswordButtonClick} variant="outlined">
       click on button <br/> Add password
      </Button>
    </div>
  );
}

export default CInput;