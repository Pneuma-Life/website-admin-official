import React, { Fragment, useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./Styles/MainDash.css";
import {
  map,
  Monthly,
  daily,
  download,
  presentyearly,
  Lastyearly,
  Subscribers,
} from "./visitData";
import profile from "../assets/propic.jpg";
import { MdBarChart, MdDateRange, MdArrowDropDown } from "react-icons/md";
import { BsDot} from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  AreaChart,
  Area,
  Tooltip,
  PieChart,
  Pie,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import axios from '../api/index';


function MainDash() {
  const [reach, setReach] = useState(Subscribers);
  const [value, onChange] = useState(new Date());
  const [letters, setLetters] = useState([]);


  useEffect(() => {

    axios.get('newsletter')
    .then(response => {
        setLetters(response.data.query)
    })
    .catch(err => console.log(err))
}, [])

  return (
    <div className="container">
      <div className="full-headnav">
        <div className="headnav">
          <div className="title">
            <h2>Main Dashboard</h2>
          </div>
          <div className="profile">
            <div className="search">
              <svg
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="5"
                  cy="5"
                  r="4.3"
                  stroke="#2B3674"
                  stroke-width="1.4"
                />
                <line
                  x1="10.0101"
                  y1="11"
                  x2="8"
                  y2="8.98995"
                  stroke="#2B3674"
                  stroke-width="1.4"
                  stroke-linecap="round"
                />
              </svg>
              <input type="search" placeholder="Search" />
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2901 17.29L18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4801 19 19.9201 17.92 19.2901 17.29ZM16.0001 17H8.00005V11C8.00005 8.52 9.51005 6.5 12.0001 6.5C14.4901 6.5 16.0001 8.52 16.0001 11V17ZM12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22Z"
                fill="#A3AED0"
              />
            </svg>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.95703 18C12.733 18 15.2684 16.737 16.9481 14.6675C17.1966 14.3613 16.9256 13.9141 16.5416 13.9872C12.1751 14.8188 8.16522 11.4709 8.16522 7.06303C8.16522 4.52398 9.52444 2.18914 11.7335 0.931992C12.074 0.738211 11.9884 0.221941 11.6015 0.150469C11.059 0.0504468 10.5086 8.21369e-05 9.95703 0C4.98914 0 0.957031 4.02578 0.957031 9C0.957031 13.9679 4.98281 18 9.95703 18Z"
                fill="#A3AED0"
              />
            </svg>
            <img className="propic" src={profile} alt="" />
          </div>
        </div>
      </div>

      <div className="dasboard">
        <div className="visit">
          <div className="daily-visit">
            <div className="daily-text">
              <h5>Daily Visit</h5>
              <MdBarChart />
            </div>
            <div className="mon-visit">
              <ResponsiveContainer width="100%" height="70%">
                <BarChart data={daily} style={{ borderRadius: "20px" }}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="songDiscovered" stackId="a" fill="#A09DE1" />
                  <Bar
                    radius={[7, 7, 0, 0]}
                    dataKey="songListened"
                    stackId="a"
                    fill="#D1D2F1 "
                  />
                  <Bar
                    radius={[7, 7, 0, 0]}
                    dataKey="songListened"
                    stackId="#8884D8"
                    fill="#8884D8 "
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="monthly-visit">
            <div className="daily-text">
              <h5>Monthly Visit</h5>
              <MdBarChart />
            </div>
            <div className="mon-visit">
              <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={map}>
                  <defs>
                    <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="30%" stopColor="#8884d8" stopOpacity={0.4} />
                      <stop
                        offset="75%"
                        stopColor="#ff9bff81"
                        stopOpacity={0.3}
                      />
                      <stop offset="95%" stopColor="#ffffff" stopOpacity={0.2} />
                    </linearGradient>
                  </defs>
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="view"
                    stroke="#8884d8"
                    strokeWidth={3}
                    strokeOpacity={1}
                    fill="url(#colorView)"
                  />
                  <Area
                    type="monotone"
                    dataKey="viewer"
                    stroke="#2FCB7C"
                    strokeWidth={3}
                    strokeOpacity={1}
                    fill="url(#colorView)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="row-two">
          <div className="download">
            <div className="daily-text">
              <h5>Number of downloads</h5>
              <div>
                <p>12 - may 2021 </p>
                <MdDateRange />
              </div>
            </div>
            <ResponsiveContainer width="100%" height="70%">
              <BarChart data={download}>
                <CartesianGrid strokeDasharray="3 3" />
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <YAxis />
                <XAxis dataKey="name" axisLine={true} tickLine={true} />
                <Tooltip />
                <Bar
                  radius={[7, 7, 0, 0]}
                  dataKey="downloads"
                  fill="url(#colorUv)"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="piechart">
            <div className="daily-text">
              <h5>Yearly Visit</h5>
              <div>
                <p>year </p>
                <MdArrowDropDown />
              </div>
            </div>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart width={730} height={250}>
                <Pie
                  data={presentyearly}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  fill="#8884d8"
                />
                <Pie
                  data={Lastyearly}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#82ca9d"
                  label
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="details">
              <div className="lastyear">
                <BsDot />
                <h6>Last year</h6>
              </div>
              <div className="presentyear">
                <BsDot />
                <h6>This year</h6>
              </div>
            </div>
          </div>
          <div className="tasks">
            <div className="task-head">
              <div>
                <input type="checkbox" name="" id="" checked />
                <h5>Tasks</h5>
              </div>
              <BiDotsHorizontalRounded />
            </div>
            <div className="task-not-done">
              <div>
                <input type="checkbox" name="" id="" />
                <h5>More cells</h5>
              </div>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4ZM8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6ZM8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12Z"
                  fill="#B0BBD5"
                />
              </svg>
            </div>
            <div className="task-done">
              <div>
                <input type="checkbox" name="" id="" checked />
                <h5>Faith Builder</h5>
              </div>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4ZM8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6ZM8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12Z"
                  fill="#B0BBD5"
                />
              </svg>
            </div>
            <div className="task-done">
              <div>
                <input type="checkbox" name="" id="" checked />
                <h5>3 days fasting</h5>
              </div>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4ZM8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6ZM8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12Z"
                  fill="#B0BBD5"
                />
              </svg>
            </div>
            <div className="task-not-done">
              <div>
                <input type="checkbox" name="" id="" />
                <h5>4 days prayer</h5>
              </div>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4ZM8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6ZM8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12Z"
                  fill="#B0BBD5"
                />
              </svg>
            </div>
            <div className="task-done">
              <div>
                <input type="checkbox" name="" id="" checked />
                <h5>Teaching of the holy ghost</h5>
              </div>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4ZM8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6ZM8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12Z"
                  fill="#B0BBD5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="row-three">
          <div className="subscibers">
            <h2>Newsletter Subscribers</h2>
            <table>
              <thead>
                <tr>
                  {/* <th>Name</th> */}
                  <th>Email</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {letters.map((reachers) => (
                  <Fragment key={reachers._id}>
                    <tr>
                      {/* <td>{reachers.Name}</td> */}
                      <td className="email">{reachers.email}</td>
                      <td>{reachers.createdAt}</td>
                      <td>{reachers.createdAt}</td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="calender">
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDash;
