import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useHistory} from 'react-router-dom';

function BookAppointment(props) {

    const history = useHistory();

    let schema = yup.object().shape({
        name: yup.string().required("plese enter name"),
        phone: yup.string().required("plese enter phone"),
        email: yup.string().email("plese enter email"),
        Message: yup.string().email("plese select Message"),
        department: yup.string().email("plese enter department"),
        date: yup.string().email("plese select data"),
    });

    const handleinsert = (values) => {

        let id = Math.floor(Math.random() * 1000);

        let data = {
            id: id,
            ...values
        }

        let LocalData = JSON.parse(localStorage.getItem("apt"));

        if(LocalData === null){
            localStorage.setItem("apt", JSON.stringify([data]));
        }
        else{
            LocalData.push(data);
            localStorage.setItem("apt", JSON.stringify(LocalData));
        }

        history.push("/ListAppointment");

        console.log(LocalData);
    }

        const formikObj = useFormik({
            initialValues: {
                name: '',
                phone : '',
                email: '',
                message : '',
                department : '',
                date : ''
            },

            validationSchema: schema,

            onSubmit: values => {
                handleinsert(values);
            },
        });

        const {handleSubmit, handleChange, handleBlur, touched, errors} = formikObj

        return (
            <main id="main">
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            <h2>Make an Appointment</h2>
                            <div className='row'>
                                <div className='col-6'>
                                    <NavLink to={"/BookAppointment"}>BookAppointment</NavLink>
                                </div>
                                <div className='col-6'>
                                    <NavLink to={"/ListAppointment"}>ListAppointment</NavLink>
                                </div>
                            </div>
                        </div>

                        <Formik values={Formik}>
                            <Form className="php-email-form">
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <input type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            onSubmit={handleSubmit}
                                            onBlur={handleBlur}
                                        />
                                        {errors.name && touched.name ? errors.name : ''}
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="typs"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            onSubmit={handleSubmit}
                                            onChange={handleChange}
                                        />
                                        {errors.email && touched.email ? errors.email : ''}
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="tel"
                                            className="form-control"
                                            name="phone" 
                                            id="phone"
                                            placeholder="Your Phone"
                                            onSubmit={handleSubmit}
                                            onChange={handleChange}
                                        />
                                        {errors.phone && touched.phone ? errors.phone : ''}
                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3">
                                        <input type="date"
                                            name="date"
                                            className="form-control datepicker"
                                            id="date"
                                            placeholder="data"
                                            onSubmit={handleSubmit}
                                            onChange={handleChange}
                                        />
                                        {errors.date && touched.date ? errors.date : ''}
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <select name="department" id="department" className="form-select">
                                            <option value>Select Department</option>
                                            <option value="Department 1">Department 1</option>
                                            <option value="Department 2">Department 2</option>
                                            <option value="Department 3">Department 3</option>
                                        </select>
                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" 
                                    name="message" 
                                    rows={5}
                                    onSubmit={handleSubmit}
                                    onChange={handleChange}
                                    />
                                    {errors.message && touched.message ? errors.message : ''}
                                    <div className="validate" />
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Make an Appointment</button></div>
                            </Form>
                        </Formik>
                    </div>
                </section>
            </main>
        );
    }

export default BookAppointment;