import { Route, Routes } from "react-router-dom";
import Blog from "./Routes/blog";
import Dashboard from "./Routes/dashboard";
import Events from "./Routes/events";
import Give from "./Routes/give";
import LiveStream from "./Routes/livestream";
import Store from "./Routes/store";
import Birthdays from "./Routes/birthdays";
import NewsLetter from "./Routes/newsletter";
import Login from "./Routes/Login"
import Signup from "./Routes/signup"


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Dashboard />} />
        <Route path="/store" element={<Store />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<Events />} />
        <Route path="/livestream" element={<LiveStream />}  />
        <Route path="/give" element={<Give />} />
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/birthday" element={<Birthdays />} />
      </Routes>
    </>
  );
}

export default App;
