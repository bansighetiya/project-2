import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

function ListAppointment(props) {
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
                </div>

                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <Button>
                            Button
                        </Button>
                        <Button>
                            Delete
                        </Button>
                    </CardBody>
                </Card>

            </section>
        </main>
    );
}


export default ListAppointment;