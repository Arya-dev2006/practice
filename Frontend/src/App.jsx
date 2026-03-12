import React from 'react'
import Nav from './components/Nav'
import Section1 from './components/Section1'
import Card from './components/Card';
import Form from './components/form';
import {Routes , Route } from 'react-router-dom'
import Global from './components/Global';
import Men from './components/Men';
import Women from './components/Women';
const users = [
  {
    name: "Rahul Sharma",
    address: "Delhi, India",
    phone: "9876543210",
    email: "rahul.sharma@email.com"
  },
  {
    name: "Priya Singh",
    address: "Mumbai, India",
    phone: "9123456780",
    email: "priya.singh@email.com"
  },
  {
    name: "Amit Das",
    address: "Kolkata, India",
    phone: "9831123456",
    email: "amit.das@email.com"
  },
  {
    name: "Sneha Gupta",
    address: "Bangalore, India",
    phone: "9988776655",
    email: "sneha.gupta@email.com"
  },
  {
    name: "Arjun Patel",
    address: "Ahmedabad, India",
    phone: "9012345678",
    email: "arjun.patel@email.com"
  },
  {
    name: "Neha Verma",
    address: "Lucknow, India",
    phone: "9098765432",
    email: "neha.verma@email.com"
  },
  {
    name: "Rohan Mehta",
    address: "Pune, India",
    phone: "9345678901",
    email: "rohan.mehta@email.com"
  },
  {
    name: "Anjali Roy",
    address: "Kolkata, India",
    phone: "9800123456",
    email: "anjali.roy@email.com"
  },
  {
    name: "Karan Kapoor",
    address: "Chandigarh, India",
    phone: "9765432109",
    email: "karan.kapoor@email.com"
  },
  {
    name: "Meera Iyer",
    address: "Chennai, India",
    phone: "9955123456",
    email: "meera.iyer@email.com"
  }
];




const App = () => {
  return (
   <>
   <Nav />
   <Section1 />
   <Routes>

    <Route path='/global' element={<Global />}>
      <Route path = '/global/men' element={<Men />}/>
      <Route path = '/global/women' element={<Women/>}/>
     </Route>

   </Routes>
 
   </>
  )
}

export default App
