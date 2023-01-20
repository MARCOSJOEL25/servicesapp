import React from "react";
import "../App.css";

export function Register({setmodelUserLoginVar}) {

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

export function Login() {
  return (
    <div className="Login">
      <div>
        <h2>Login</h2>
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

      <input type="submit" />
    </div>
  );
}
