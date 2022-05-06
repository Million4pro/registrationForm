import { useState } from 'react';
import './App.css';
import FormInput from "./components/FormInput"

const App = () => {
  const[values, setValues] = useState({
    firstName:"",
    lastName:"",
    npi:"",
    businessAddress:"",
    telephoneNumber:"",    
    email:""    
  });

  const inputs = [
    {
      id:1,
      name:"firstName",
      type:"text",
      placeholder:"First Name",
      errorMessage:"First Name shoud be more than 3 characters and alphabet!",
      label:"First Name",
      pattern:"^[A-Za-z]+$",
      required:true
    },
    {
      id:2,
      name:"lastName",
      type:"text",
      placeholder:"Last Name",
      errorMessage:"Last Name shoud be more than 3 characters and alphabet!",
      label:"Last Name",
      pattern:"^[A-Za-z]+$",
      required:true
    },
    {
      id:3,
      name:"npi",
      type:"text",
      placeholder:"NPI",
      errorMessage:"NPI Should be 10 digit number!",
      label:"NPI",
      pattern:"^[0-9]{10}$",
      required:true
    },
    {
      id:4,
      name:"businessAddress",
      type:"text",
      placeholder:"Business Address",
      errorMessage:"Invalid Business Address!",
      label:"Business Address",
      pattern:"^[#.0-9a-zA-Z\\s,-]+$",
      required:true
    },
    {
      id:5,
      name:"telephoneNumber",
      type:"text",
      placeholder:"Telephone Number",
      errorMessage:"Telephone Number should be 10 digit",
      label:"Telephone Number",
      pattern:"^[0-9]{10}$",
      required:true
    },
    {
      id:6,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"Email should be a valid email address",
      label:"Email",
      required:true
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]:e.target.value});
  };

  console.log(values)

  return <div className="app">
        <form onSubmit={handleSubmit}>
        <h1>Register</h1>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          ))}
          <button>Submit</button>
        </form>
      </div>
};

export default App;
