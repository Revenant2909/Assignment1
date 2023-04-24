import * as React from 'react';
import "./home.css"
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
const API = "http://localhost:8800/api/users/";

const Home = () => {

  //Use State for the avg table since it has different headers.
  const [avgincome, setAvgIncome] = useState([]);

  //Use State for all other tables
  const [users, setUsers] = useState([{}]);

  //Fetch function to Fetch the data from the backend.
  const fetchUsers = async (url) => {
    try {
      const res = await axios.get(url);
      //If the avg income table is being run then setAvgIncome state 
      if (res.data.results != null && res.data.results.length === 10) {
        setAvgIncome(res.data.results);
      }
     // otherwise setUsers
      else {
        setUsers(res.data.myData);
      }
    } catch (error) {
      console.log(error);
    }
  }
 //useEffect to call our function
  useEffect(() => {
    fetchUsers(API);
  }, [])



  return (
    <div className="container">

      {users.length > 1 && <table className='Tablemain'>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone price</th>
          </tr>
        </thead> <tbody>
          {users.map((curr) => {
            const { _id, id, first_name, last_name, email, gender, car, city, income, quote, phone_price } = curr;
            return (
              <tr key={_id} >
                <td>{id}</td>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{email}</td>
                <td>{gender}</td>
                <td>{income}</td>
                <td>{city}</td>
                <td>{car}</td>
                <td>{quote}</td>
                <td>{phone_price}</td>
              </tr>
            ) })}
        </tbody>
      </table>}

      {avgincome.length > 0 && <>
        <h2>Table Displaying (Q:5)the data of top 10 cities which 
        have the highest number of users and their average income.</h2>
        <table className='second'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Total Users</th>
              <th>Average Income</th>
            </tr>
          </thead>
          <tbody>
            {avgincome.map((curr) => {
              const { _id, averageIncome, totalUsers } = curr;
              return (
                <tr key={_id} >
                  <td>{_id}</td>
                  <td>{totalUsers}</td>
                  <td>{averageIncome}</td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </>
      }
    </div>
  )
}

export default Home;
