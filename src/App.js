import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookAppointment from './Components/Appointment/BookAppointment';
import ListAppointment from './Components/Appointment/ListAppointment';
import Footer from './Components/Header/Footer/Footer';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import Abouts from './Containers/Abouts/Abouts';
import Appointment from './Containers/Appointment/Appointment';
import Auth from './Containers/Auth/Auth';
import Contact from './Containers/Contacts/Contacts';
import Contacts from './Containers/Contacts/Contacts';
import Departments from './Containers/Departments/Departments';
import Docter from './Containers/Doctar/Docter';
import Home from './Containers/Home/Home';
import Login_Signup from './Containers/Login_Signup/Login_Signup';
import Medicine from './Containers/Medicine/Medicine';
import RefExample from './Containers/RefExample/RefExample';

function App(props) {
  return (
    <div>
      <>
        <Header />

        <switch>

          <Route path={"/"} exact component={Home} /> 
          <Route path={"/departments"} exact component={Departments} />
          <Route path={"/doctors"} exact component={Docter} />
          <Route path={"/abouts"} exact component={Abouts} />
          <Route path={"/contacts"} exact component={Contact} />
          <Route path={"/auth"} exact component={Auth} />
          <Route path={"/medicine"} exact component={Medicine} />
          <Route path={"/list"} exact component={List} />
          <Route path={"/login_signup"} exact component={Login_Signup} />
          <Route path={"/refexample"} exact component={RefExample} />
          <Route path={"/appointment"} exact component={Appointment} />
          <Route path={"/book_apt"} exact component={BookAppointment} />
          <Route path={"/list_apt"} exact component={ListAppointment} />

        </switch>

        <Footer />
      </>

    </div>
  );
}

export default App;