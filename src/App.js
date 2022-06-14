import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './Components/Header/Footer/Footer';
import Header from './Components/Header/Header';
import Abouts from './Containers/Abouts/Abouts';
import Contact from './Containers/Contacts/Contacts';
import Contacts from './Containers/Contacts/Contacts';
import Departments from './Containers/Departments/Departments';
import Docter from './Containers/Doctar/Docter';
import Home from './Containers/Home/Home';

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
        </switch>

        <Footer />
      </>

    </div>
  );
}

export default App;