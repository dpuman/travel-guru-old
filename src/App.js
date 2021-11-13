import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useEffect, useState } from 'react';

import { getAuth, signOut } from "firebase/auth";

import Booking from './components/Booking/Booking';
import Search from './components/Search/Search';
import Authentication from './components/Authentication/Authentication';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';




export const LocationContext = createContext()

function App() {
  const [selectedLocation, setSelectedLocation] = useState({
    "id": 1,
    "name": "Cox's Bazar",
    "image": "https://i.ibb.co/6Rx1PCZ/Sajek.png",
    "description": "Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.",
    "hotels": [
      {
        id: 0,
        image: 'https://i.ibb.co/R260GQJ/Rectangle-26.png',
        title: 'Light bright airy stylish apt & safe peaceful stay',
        type: '4 guests  2 bedrooms  2 bed  2 baths ',
        type1: 'Wif Air conditioning Kitchen',
        type2: 'Cancellation fexibility available',
        star: '4.9 (20)',
        dollars: 34
      },
      {
        id: 1,
        image: 'https://i.ibb.co/2KGXjvq/Rectangle-27.png',
        title: 'Apartment in Lost Panorama',
        type: '4 guests  2 bedrooms  2 bed  2 baths ',
        type1: 'Wif Air conditioning Kitchen',
        type2: 'Cancellation fexibility available',
        star: '4.8 (10)',
        dollars: 52
      },
      {
        id: 2,
        image: 'https://i.ibb.co/R260GQJ/Rectangle-26.png',
        title: 'AR Lounge & Pool (r&r + b&b)',
        type: '4 guests  2 bedrooms  2 bed  2 baths ',
        type1: 'Wif Air conditioning Kitchen',
        type2: 'Cancellation fexibility available',
        star: '4.9 (25)',
        dollars: 44
      }
    ]

  });


  const [bookingInfo, setBookingInfo] = useState({});
  const [demoInfo, setDemoInfo] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});
  const [user, setUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      setUser(displayName)

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
    }
  }, [])


  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation, bookingInfo, setBookingInfo, demoInfo, setDemoInfo, loggedInUser, setLoggedInUser, user, setUser }}>
      <div >
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/booking/:id'>
              <Booking></Booking>
            </Route>

            <PrivateRoute path='/search'>
              <Search></Search>
            </PrivateRoute>

            <Route path='/login'>
              <Authentication></Authentication>
            </Route>
            <Route path='*'>
              <h1 >NO Match Found 404 Error</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </LocationContext.Provider>
  );
}

export default App;
