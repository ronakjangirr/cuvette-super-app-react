import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../register/RegisterFormStyle.css";
import { useNavigate } from 'react-router-dom';

function RegisterForm() {

    let [formValue, setFormValues] = useState({
        name: "",
        userName: "",
        email: "",
        mobile: "",
        checkMe: false
    });

    let navigate = useNavigate();

    let [errorName, setErrorName] = useState('')
    let [errorUserName, setErrorUserName] = useState('')
    let [errorEmail, setErrorEmail] = useState('')
    let [errorMobile, setErrorMobile] = useState('')
    let [errorCheckMe, setErrorCheckMe] = useState()

    function handleChange(e) {
        let { name, value, checked, type } = e.target;  // name= (name, username, email, mobile, checkme) || value= whatever we write data in text field || checked= related to check  || type= (text, email, number, checkbox)
        // debugger
        let newCheck = type == "checked" ? checked : value;

        // setFormValues({...formValue,[e.target.name]:e.target.value})
        setFormValues({ ...formValue, [name]: newCheck })
    }

    function formValidation() {
        // debugger
        let isValid = true;          // Initialize to true

        if (!formValue.checkMe) {
        // Code to execute if 'name' in 'formValue' is falsy (empty, undefined, null, false, 0, etc.)
            setErrorCheckMe("Please check the box");
            isValid = false;
        } else {
        // Code to execute if 'name' in 'formValue' is truthy (contains a value)
            setErrorCheckMe('');
        }

        if (!formValue.name) {
            setErrorName("Please fill the name");
            isValid = false;       // Set isValid to false if validation fails
        } else {
            setErrorName('');
            // return true;
        }

        if (!formValue.userName) {
            setErrorUserName("Please fill the username");
            isValid = false;
        } else {
            setErrorUserName('');
            // return true;
        }

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!formValue.email) {
            setErrorEmail("Please fill the email");
            isValid = false;
        } else if (!emailRegex.test(formValue.email)) {
            setErrorEmail("Please enter valid email");
        }
        else {
            setErrorEmail('');
            // return true;
        }

        if (!formValue.mobile) {
            setErrorMobile("Please fill the mobile");
            isValid = false;
        } else {
            setErrorMobile('');
            // return true;
        }

        return isValid;

// Explanation-
// isValid Flag: The isValid variable is initialized to true. It will be set to false if any validation check fails.
// Check Checkbox (checkMe): Checks whether the 'checkMe' checkbox is checked. If not, it sets an error message and updates isValid to false.
// Check Name Input (name): Validates the 'name' input. If it's empty, an error message is set, and isValid is set to false.
// Return isValid: The function returns the final value of isValid. If isValid is true, it means all validation checks passed, and the form is considered valid.

    }

    function handleSubmit(e) {
        // debugger
        e.preventDefault();
        if (formValidation()) {
            localStorage.setItem('formValueKey', JSON.stringify(formValue));
            console.log("FormValues", formValue);

            navigate('/category');

            setFormValues({
                name: "",
                userName: "",
                email: "",
                mobile: "",
                checkMe: false
            });
        } else {
            console.log("Form is incorrect");
        }


    }
    return (
        <>
            <div className='register-form-body'>

                <div className='main-parent-div'>
                    <div>
                        <h1 className='primary-font mb-1'>SUPER APP</h1>
                        <h4 className='secondary-font'>Create your new account</h4>
                    </div>
                    <div className='form-position mb-3 mt-3'>
                        <div>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className={`mb-3 input-style ${errorName ? 'error-border' : ''}`}>
                                    <Form.Control type="text" placeholder="Name" name='name' value={formValue.name} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                                {<p style={{ color: 'red' }}>{errorName}</p>}


                                <Form.Group className={`mb-3 input-style ${errorUserName ? 'error-border' : ''}`}>
                                    <Form.Control type="text" placeholder="UserName" name='userName' value={formValue.userName} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                                {<p style={{ color: 'red' }}>{errorUserName}</p>}

                                <Form.Group className={`mb-3 input-style ${errorEmail ? 'error-border' : ''}`}>
                                    <Form.Control type="text" placeholder="Email" name='email' value={formValue.email} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                                {<p style={{ color: 'red' }}>{errorEmail}</p>}

                                <Form.Group className={`mb-3 input-style ${errorMobile ? 'error-border' : ''}`}>
                                    <Form.Control type="number" placeholder="Mobile" name='mobile' value={formValue.mobile} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                                {<p style={{ color: 'red' }}>{errorMobile}</p>}

                                <Form.Group className="mb-3 secondary-font-two">
                                    <Form.Check type="checkbox" name='checkMe' checked={formValue.checkMe} label="Share my registration data with Superapp" onChange={(e) => handleChange(e)} />
                                </Form.Group>
                                {<p style={{ color: 'red' }}>{errorCheckMe}</p>}

                                <Button className="button-style" type="submit">
                                    SIGN UP
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className='mb-3 mt-3 padding-one'>
                        <div className="mb-1 secondary-font-two"><p>By clicking on Sign up. you agree to Superapp <span className='secondary-font-three'>Terms and Conditions of Use</span></p></div>

                        <div className="mb-1 secondary-font-two"><p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className='secondary-font-three'>Privacy Policy</span></p></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RegisterForm;