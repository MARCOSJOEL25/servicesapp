import React,{useState} from "react";
import "../App.css";

export function Register() {

  return (
    <div className="Register">
      <div>
        <h2>Register</h2>
      </div>

      
      <label for="lname">Email</label>
      <input 
        type="text" 
        id="lname" 
        name="lastname" 
        placeholder="Email.."
        />

      <label for="fname">Pasword</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Pasword.."
      />

      <label for="country">Country</label>
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>

      <input type="submit" value="Submit" />
    </div>
  );
}

export function Login({setSignVar}) {

  var user = [{
    Email : "marcos",
    Password: "123456",
  }]

  const modelLogin = {
    Email : "",
    Password: "",
  }

  const [contacto, setContacto] = useState(modelLogin)


  const IsLogin = ()=>{
    var confirm = user.some(x=> x.Email === contacto.Email && x.Password === contacto.Password)
    confirm ? setSignVar("") : setSignVar('Login');
  }

  const SetUpdate = (e)=> {
    console.log(e.target.name + " : " + e.target.value)

    setContacto({
      ...contacto,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div className="Login">
      <div>
        <h2>Login</h2>
      </div>

      <label for="lname">Email</label>
      <input 
        type="text" 
        id="lname" 
        name="Email" 
        placeholder="Email.." 
        onChange={(e) =>  SetUpdate(e) }
        value={contacto.Email}
        />

      <label for="fname">Pasword</label>
      <input
        type="text"
        id="fname"
        name="Password"
        placeholder="Pasword.."
        onChange={(e) => SetUpdate(e) }
        value={contacto.Password}
      />

      <input type="submit" onClick={()=> IsLogin()}/>
    </div>
  );
}
