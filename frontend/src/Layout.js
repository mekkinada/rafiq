import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginComponent from './components/Login/LoginComponent';
import Register from './components/Register/Register';
import HomeScreen from './screens/Home/HomeScreen';

import RegisterStudent from './components/Register/RegisterStudent';
import LoginStudent from './components/Login/LoginStudent';
import Student from './screens/Student/StudentScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';
import DashboardScreen from './screens/Dashboard/DashboardScreen';
import AdminProfileScreen from './screens/Dashboard/ProfileScreen';

import Etablissement from './components/Etablissement/Etablissement';
import Acit1  from './components/Activities/Acit1';
import Acit2  from './components/Activities/Acit2';
import A7  from './components/Activities/A7';

import Acit3  from './components/Activities/Acit3';

import Activities from './components/Activities/Activities';
import Services from './components/Services/Services';
import UserListScreen from './screens/Dashboard/UserListScreen';
import UserEditScreen from './screens/UserEdit/UserEditScreen';

import Partners from './components/Partner/Partner';

import Testimonials from './components/Testimonials/Testimonials';



const Layout = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/login" component={LoginComponent} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/loginstudent" component={LoginStudent} />
                    <Route exact path="/registerstudent" component={RegisterStudent} />
                    <Route exact path="/etablissement" component={Etablissement}/>
                    <Route exact path="/activities" component={Activities}/>

                    <Route exact path="/acit1" component={Acit1}/>
                    <Route exact path="/acit2" component={Acit2}/>
                    <Route exact path="/acit3" component={Acit3}/>
                    <Route exact path="/a7" component={A7}/>

                    <Route exact path="/partners" component={Partners}/>
                    <Route exact path="/testimonials" component={Testimonials}/>
                    <Route exact path="/profile" component={ProfileScreen} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/student" component={Student} />
                    <Route exact path="/admin/userList" component={UserListScreen} />
                    <Route exact path="/admin/dashboard" component={DashboardScreen} />
                    <Route exact path="/admin/profile" component={AdminProfileScreen} />
                   
                    <Route exact path="/admin/user/:id/edit" component={UserEditScreen} />
               

                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default Layout
