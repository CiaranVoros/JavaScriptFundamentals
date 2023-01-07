import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "thank you for submitting the form";
        }
        else {
            return "welcome, please submit the form";
        }
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("first name is required");
            console.log("none")
        }
        else if(e.target.value.length < 3) {
            setFirstNameError("first name must be more than three characters");
            console.log("less than 3")
        }
        else {
            setFirstNameError("");
            console.log("fine")
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("last name is required");
            console.log("none")
        }
        else if(e.target.value.length < 3) {
            setLastNameError("last name must be more than three characters");
            console.log("less than 3")
        }
        else {
            setLastNameError("");
            console.log("fine")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("email is required");
            console.log("none")
        }
        else if(e.target.value.length < 3) {
            setEmailError("email must be more than three characters");
            console.log("less than 3")
        }
        else {
            setEmailError("");
            console.log("fine")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("password is required");
            console.log("none")
        }
        else if(e.target.value.length < 3) {
            setPasswordError("password must be more than three characters");
            console.log("less than 3")
        }
        else {
            setPasswordError("");
            console.log("fine")
        }
    }

    return (
        <div>
            <form onSubmit={createUser}>
                <h3>{formMessage()}</h3>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName}/>
                    {
                        firstNameError ?
                        <p>{firstNameError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastName} value={lastName} />
                    {
                        lastNameError ?
                        <p>{lastNameError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={handleEmail} value={email} />
                    {
                        emailError ?
                        <p>{emailError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={handlePassword} value={password} />
                    {
                        passwordError ?
                        <p>{passwordError}</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h4>form data</h4>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{email}</p>
                <p>{password}</p>
            </div>
        </div>
    );
};

export default UserForm;