import { errors, Formik, Form, useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';


function Login_Signup(props) {
    const [user, setUser] = useState('login');
    const [reset, setReset] = useState(false)

    let schemaObj, initval;

    if (user === "login") {
        schemaObj = {
            email: yup.string().email("Please enter your email id").required("Please enter a valid email id"),
            password: yup.string().required("Please enter your password"),
        }
        initval = {
            email: '',
            password: '',
        }
    } else if (user === "Signup") {
        schemaObj = {
            name: yup.string().required("please enter your name."),
            email: yup.string().email("Please enter your email id").required("Please enter a valid email id"),
            password: yup.string().required("Please enter your password"),
        }
        initval = {
            name: '',
            email: '',
            password: ''
        }
    } else if (reset == "true") {
        schemaObj = {
            email: yup.string().email("Please enter your email id").required("Please enter a valid email id"),
        }
        initval = {
            email: ''
        }
    }

    let schema = yup.object().shape(schemaObj);

    const formik = useFormik({
        initialValues: initval,
        validationSchema: schema,

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, errors, handleSubmit, touched, handleBlur } = formik

    return (
        <center>
            <section>
                <div className="container">
                    <div className="section-title">
                        {reset === "true" ?
                            <h2>Forget Password</h2>
                            :
                            user === "Login" ?
                                <h2>Login</h2>
                                :
                                <h2>Signup</h2>
                        }
                    </div>
                    <Formik values={Formik}>
                        <Form action method="post" role="form" className="php-email-form">
                            {
                                reset === "true" ?
                                    null :
                                    user === "Login" ?
                                        null
                                        :
                                        <div className="col-md-4 form-group">
                                            <input onChange={handleChange} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate"></div>
                                            <p>{errors.name && touched.name ? errors.name: ''}</p>
                                        </div>
                            }
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                            </div>
                            {
                                reset === "true" ?
                                    null :
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="Email" className="form-control" name="Email" id="Email" placeholder="Your Email" data-rule="minlen:4" data-msg="Please enter valid Email" />
                                        <div className="validate" />
                                        <p>{errors.email && touched.email ? errors.email: ''}</p>
                                    </div>
                            }
                            {
                                reset === "true" ?
                                    null
                                    :
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                            <input onChange={handleChange} onBlur={handleBlur} type="password" name="password" className="form-control" id="password" placeholder="Your password" data-rule="minlen:4" data-msg="Please enter a password" />
                                        <div className="text-center"><button className='s-btn' type="submit">Login</button></div>
                                        <br></br>
                                        <div className="validate" />
                                        <p>{errors.password && touched.password ? errors.password: ''}</p>
                                    </div>
                            }
                            {
                                user === "Login" ?
                                    <div className="text-center">
                                        <br>
                                        </br>
                                        <span>Already have an Account
                                            <a className="signup" onSubmit={handleSubmit} onClick={() => { setReset('false'); setUser("SignUp") }} type="submit">Signup</a>
                                        </span>
                                    </div>
                                    :
                                    <div className="text-center">
                                        <br>
                                        </br>
                                        <span>Create a New Account ?</span>
                                        <a className="Login" onClick={() => { setReset('false'); setUser("Login") }} type="sumbit">Login</a>
                                    </div>
                            }
                            <br></br>
                            <div className="text-center">
                                <a type="submit" className="KELVINSubmit" onClick={() => setReset('true')}>Forget Password</a></div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </center>
    );
}


export default Login_Signup;