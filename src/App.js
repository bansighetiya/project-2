import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookAppointment from './Containers/Appointment/BookAppointment';
import ListAppointment from './Containers/Appointment/ListAppointment';
import Footer from './Components/Header/Footer/Footer';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import Abouts from './Containers/Abouts/Abouts';
import Appointment from './Containers/Appointment/BookAppointment';
import Auth from './Containers/Auth/Auth';
import Contact from './Containers/Contacts/Contacts';
import Departments from './Containers/Departments/Departments';
import Docter from './Containers/Doctar/Docter';
import Home from './Containers/Home/Home';
import Login_Signup from './Containers/Login_Signup/Login_Signup';
import Medicine from './Containers/Medicine/Medicine';
import RefExample from './Containers/RefExample/RefExample';
import ToggleThemecontext from './context/themeContext';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/Store';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react';

function App(props) {
  return (
    <div>
      <>
        <SnackbarProvider maxSnack={3}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <ToggleThemecontext>
                <Header />
                <Switch>
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
                  <Route path={"/BookAppointment"} exact component={BookAppointment} />
                  <Route path={"/ListAppointment"} exact component={ListAppointment} />
                </Switch>
                <Footer />
              </ToggleThemecontext>
            </PersistGate>
          </Provider>
        </SnackbarProvider>
      </>
    </div>
  );
}

export default App;