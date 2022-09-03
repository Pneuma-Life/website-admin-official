import React, { useState, useEffect } from "react";
import "./Styles/MainDash.css";
import { FaTimes } from "react-icons/fa";
import profile from "../assets/propic.jpg";
import growth from "../assets/growth.png";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import "./Styles/Blog.css";
import redlogo from "../assets/red-logo.png";

import axios from '../api/index';
import LoadingSpinner from '../Components/Loader/LoadingSpinner'
import Alert from '@mui/material/Alert';

function BlogPage() {
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [fetchblogs, setFetchblogs] = useState([])
  const [id, setId] = useState('');
  const [blogs, setBlogs] = useState({
    title: '',
    author: '',
    body: '',
});

const handleImage = (e) => {
  let image = e.target.files[0];
  setImage(image);
  //console.log(image);
}

const handleSubmit = async (e) => {
  e.preventDefault();
  setSuccessMsg('');
  setErrorMsg('');
  setLoading(true);

  try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append('title', blogs.title);
      formData.append('author', blogs.author);
      formData.append('body', blogs.body);

      const response = await axios.post(
          'blog',
          formData
        ,
          {
              headers: { "Content-Type": "multipart/form-data"},
          }
      )
      setBlogs({
          title: '',
          author: '',
          body: '',
      });
      setSuccessMsg('Blog uploaded successfully');
      setLoading(false);
  } catch(err) {
      if (!err?.response) {
          setErrorMsg("No Server Response");
          setLoading(false);
        } else {
          setErrorMsg(" Unable to upload Blog");
          setLoading(false);
        }
    
  }
}

  const handleShowForm = () => {
    setShowForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };
  const handleDelete = () => {
    try{

    } catch(err){
      if (!err?.response) {
        setErrorMsg("No Server Response");
        setLoading(false);
      } else {
        setErrorMsg("Unable to delete blog");
        setLoading(false);
      }
    }
  };
  const handleCloseDeletePopUp = () => {
    setPopUp(false);
  };

  useEffect(() => {
    axios.get('blog').then(res => {       
        setFetchblogs(res.data.query);
        setId(res.data.query[0]._id);
        console.log(id);
    }).catch(err => console.log(err))
}, [])

  return (
    <div>
      {showForm ? (
        <div className="event-full2">
          <div className="cancel-head">
            <FaTimes className="cancel-icon" onClick={handleCloseForm} />
          </div>
          <div className="container2">
            <form action="">
              <div className="form-head">
                <img src={redlogo} alt="" />
                <h1>Add Blog</h1>
              </div>
              { errorMsg ? 
                      <Alert severity="error" variant="outlined">
                        {errorMsg}
                      </Alert> 
                      : null 
                    }
                    { successMsg ?
                        <Alert severity="success" variant="outlined" >
                         {successMsg}
                       </Alert>
                      : null
                     }
              <div className="form-group">
                <label htmlFor="">Title</label>
                <input type="text"  
                value={blogs.title}
                onChange={(e) => setBlogs({...blogs, title: e.target.value})}/>
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input type="text"  
                value={blogs.author}
                onChange={(e) => setBlogs({...blogs, author: e.target.value})}/>
              </div>
              <div className="form-type">
                <label htmlFor=""> Blog Body </label>
                <textarea 
                name="" id="" cols="30" rows="10"
                value={blogs.body}
                onChange={(e) => setBlogs({...blogs, body: e.target.value})}></textarea>
              </div>
              <div className="choose-file">
                <input type="file" onChange={handleImage} />
              </div>
              <div className="changes">
                <button 
                className="edit-button" 
                onClick={handleSubmit}
                disabled={loading}>
                  Upload   {loading && <LoadingSpinner /> }
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
      {popUp ? (
        <div className="pop-up">
          <FaTimes onClick={handleCloseDeletePopUp} />

          <div className="pop-up-form">
            <div className="pop-up-info">
              <h5>Click Confirm to Delete</h5>
              <button onClick={handleCloseDeletePopUp}>Confirm</button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="container">
        <div className="full-headnav">
          <div className="headnav">
            <div className="title">
              <h2>Blog</h2>
              <AiOutlinePlus onClick={handleShowForm} />
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
                <input type="text" placeholder="Search" />
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
        <div className="blog-welcome">
          <div className="blog-books">
            {fetchblogs.map((fetchblogs) => (
            <div 
            className="part"
            key={fetchblogs._id}
            >
              <img src={fetchblogs.photo} alt="blog" />
              <h5>{fetchblogs.title}</h5>
              <p>{fetchblogs.body}</p>
              <div>
                <BiEditAlt className="edit" />
                <RiDeleteBinLine
                  onClick={handleDelete}
                  className="delete"
                />
              </div>
            </div>
            ))}
            {/* <div className="part">
              <img src={growth} alt="" />
              <h5>planted (Part 1)</h5>
              <p>The realities in the Spirit are not physical..</p>
              <div>
                <BiEditAlt className="edit" />
                <RiDeleteBinLine className="delete" />
              </div>
            </div> */}
            {/* <div className="part">
              <img src={growth} alt="" />
              <h5>planted (Part 1)</h5>
              <p>The realities in the Spirit are not physical..</p>
              <div>
                <BiEditAlt className="edit" />
                <RiDeleteBinLine className="delete" />
              </div>
            </div> */}
            {/* <div className="part">
              <img src={growth} alt="" />
              <h5>planted (Part 1)</h5>
              <p>The realities in the Spirit are not physical..</p>
              <div>
                <BiEditAlt className="edit" />
                <RiDeleteBinLine className="delete" />
              </div>
            </div> */}
            {/* <div className="part">
              <img src={growth} alt="" />
              <h5>planted (Part 1)</h5>
              <p>The realities in the Spirit are not physical..</p>
              <div>
                <BiEditAlt className="edit" />
                <RiDeleteBinLine className="delete" />
              </div>
            </div> */}
            {/* <div className="part">
              <img src={growth} alt="" />
              <h5>planted (Part 1)</h5>
              <p>The realities in the Spirit are not physical..</p>
              <div>
                <BiEditAlt className="edit" />
                <RiDeleteBinLine className="delete" />
              </div>
            </div> */}
            {/* <div className="part">
              <img src={growth} alt="" />
              <h5>planted (Part 1)</h5>
              <p>The realities in the Spirit are not physical..</p>
              <div>
                <BiEditAlt className="edit" />
                <RiDeleteBinLine className="delete" />
              </div>
            </div> */}
            {/* <div className="part">
              <img src={growth} alt="" />
              <h5>planted (Part 1)</h5>
              <p>The realities in the Spirit are not physical..</p>
              <div>
                <BiEditAlt className="edit" />
                <RiDeleteBinLine className="delete" />
              </div>
            </div>
            <div className="part">
              <img src={growth} alt="" />
              <h5>planted (Part 1)</h5>
              <p>The realities in the Spirit are not physical..</p>
              <div>
                <BiEditAlt className="edit" />
                <RiDeleteBinLine className="delete" />
              </div>
            </div>
            <div className="part">
              <img src={growth} alt="" />
              <h5>planted (Part 1)</h5>
              <p>The realities in the Spirit are not physical..</p>
              <div>
                <BiEditAlt className="edit" />
                <RiDeleteBinLine className="delete" />
              </div>
            </div>
            <div className="part">
              <img src={growth} alt="" />
              <h5>planted (Part 1)</h5>
              <p>The realities in the Spirit are not physical..</p>
              <div>
                <BiEditAlt className="edit" />
                <RiDeleteBinLine className="delete" />
              </div>
            </div>
            <div className="part">
              <img src={growth} alt="" />
              <h5>planted (Part 1)</h5>
              <p>The realities in the Spirit are not physical..</p>
              <div>
                <BiEditAlt className="edit" />
                <RiDeleteBinLine className="delete" />
              </div>
            </div>
            <div className="part">
              <img src={growth} alt="" />
              <h5>planted (Part 1)</h5>
              <p>The realities in the Spirit are not physical..</p>
              <div>
                <BiEditAlt className="edit" />
                <RiDeleteBinLine className="delete" />
              </div>
            </div> */}
            {/* <div className="part">
              <img src={growth} alt="" />
              <h5>planted (Part 1)</h5>
              <p>The realities in the Spirit are not physical..</p>
              <div>
                <BiEditAlt className="edit" />
                <RiDeleteBinLine className="delete" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
