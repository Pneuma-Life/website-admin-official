import React from 'react';
import BlogForm from '../Components/BlogForm';
import NewsLetterPage from '../Components/NewsLetter';
import SideNav from '../Components/SideNav';

const NewsLetter = () => {
  return (
    <div>
      <SideNav />
      <NewsLetterPage />
      {/* <BlogForm /> */}
    </div>
  );
}

export default NewsLetter;
