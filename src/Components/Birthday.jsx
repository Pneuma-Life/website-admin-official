import React from 'react';
import './Styles/Birthday.css'
import profile from '../assets/propic.jpg';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'




function BirthdayPage() {
    return (
        <div className="container">
            <div className="full-headnav">
                <div className="headnav">
                    <div className="title">
                        <h2>Birthdays</h2>
                    </div>
                    <div className="profile">
                        <div className="search">
                            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4.3" stroke="#2B3674" stroke-width="1.4" />
                                <line x1="10.0101" y1="11" x2="8" y2="8.98995" stroke="#2B3674" stroke-width="1.4" stroke-linecap="round" />
                            </svg>
                            <input type="search" placeholder='Search' />

                        </div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.2901 17.29L18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4801 19 19.9201 17.92 19.2901 17.29ZM16.0001 17H8.00005V11C8.00005 8.52 9.51005 6.5 12.0001 6.5C14.4901 6.5 16.0001 8.52 16.0001 11V17ZM12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22Z" fill="#A3AED0" />
                        </svg>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.95703 18C12.733 18 15.2684 16.737 16.9481 14.6675C17.1966 14.3613 16.9256 13.9141 16.5416 13.9872C12.1751 14.8188 8.16522 11.4709 8.16522 7.06303C8.16522 4.52398 9.52444 2.18914 11.7335 0.931992C12.074 0.738211 11.9884 0.221941 11.6015 0.150469C11.059 0.0504468 10.5086 8.21369e-05 9.95703 0C4.98914 0 0.957031 4.02578 0.957031 9C0.957031 13.9679 4.98281 18 9.95703 18Z" fill="#A3AED0" />
                        </svg>
                        <img className='propic' src={profile} alt="" />
                    </div>
                </div>
            </div>
            <div className="birthday">
                <div className="close">
                    <div className="today">
                        <h3>Today</h3>
                        <div className="everyone">
                            <div className="each-person">
                                <img src={image1} alt="" />
                                <div className="person-info">
                                    <div className="name">
                                        <h2>Adeboye Faith </h2>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 22.75H21.875C22.1734 22.75 22.4595 22.8685 22.6705 23.0795C22.8815 23.2905 23 23.5766 23 23.875C23 24.1734 22.8815 24.4595 22.6705 24.6705C22.4595 24.8815 22.1734 25 21.875 25H6.125C5.82663 25 5.54048 24.8815 5.32951 24.6705C5.11853 24.4595 5 24.1734 5 23.875C5 23.5766 5.11853 23.2905 5.32951 23.0795C5.54048 22.8685 5.82663 22.75 6.125 22.75ZM5 17.125L16.25 5.875L19.625 9.25L8.375 20.5H5V17.125ZM17.375 4.75L19.625 2.5L23 5.875L20.7489 8.12613L17.375 4.75Z" fill="#007AFF" />
                                        </svg>
                                    </div>
                                    <h5>19/May/1989</h5>
                                    <h6>33years</h6>
                                    <div className="contact">
                                        <p>Martinzmartins002@gmail.com</p>
                                        <h4>08119758516</h4>
                                    </div>

                                </div>
                            </div>
                            <div className="each-person">
                                <img src={image2} alt="" />
                                <div className="person-info">
                                    <div className="name">
                                        <h2>Adeboye Faith </h2>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 22.75H21.875C22.1734 22.75 22.4595 22.8685 22.6705 23.0795C22.8815 23.2905 23 23.5766 23 23.875C23 24.1734 22.8815 24.4595 22.6705 24.6705C22.4595 24.8815 22.1734 25 21.875 25H6.125C5.82663 25 5.54048 24.8815 5.32951 24.6705C5.11853 24.4595 5 24.1734 5 23.875C5 23.5766 5.11853 23.2905 5.32951 23.0795C5.54048 22.8685 5.82663 22.75 6.125 22.75ZM5 17.125L16.25 5.875L19.625 9.25L8.375 20.5H5V17.125ZM17.375 4.75L19.625 2.5L23 5.875L20.7489 8.12613L17.375 4.75Z" fill="#007AFF" />
                                        </svg>
                                    </div>
                                    <h5>19/May/1989</h5>
                                    <h6>33years</h6>
                                    <div className="contact">
                                        <p>Martinzmartins002@gmail.com</p>
                                        <h4>08119758516</h4>
                                    </div>

                                </div>
                            </div>
                            <div className="each-person">
                                <img src={image3} alt="" />
                                <div className="person-info">
                                    <div className="name">
                                        <h2>Adeboye Faith </h2>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 22.75H21.875C22.1734 22.75 22.4595 22.8685 22.6705 23.0795C22.8815 23.2905 23 23.5766 23 23.875C23 24.1734 22.8815 24.4595 22.6705 24.6705C22.4595 24.8815 22.1734 25 21.875 25H6.125C5.82663 25 5.54048 24.8815 5.32951 24.6705C5.11853 24.4595 5 24.1734 5 23.875C5 23.5766 5.11853 23.2905 5.32951 23.0795C5.54048 22.8685 5.82663 22.75 6.125 22.75ZM5 17.125L16.25 5.875L19.625 9.25L8.375 20.5H5V17.125ZM17.375 4.75L19.625 2.5L23 5.875L20.7489 8.12613L17.375 4.75Z" fill="#007AFF" />
                                        </svg>
                                    </div>
                                    <h5>19/May/1989</h5>
                                    <h6>33years</h6>
                                    <div className="contact">
                                        <p>Martinzmartins002@gmail.com</p>
                                        <h4>08119758516</h4>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="recent-page">
                        <h3>Recent</h3>
                        <div className="recent">
                            <div className="each-person">
                                <img src={image3} alt="" />
                                <div className="person-info">
                                    <div className="name">
                                        <h2>Adeboye Faith </h2>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 22.75H21.875C22.1734 22.75 22.4595 22.8685 22.6705 23.0795C22.8815 23.2905 23 23.5766 23 23.875C23 24.1734 22.8815 24.4595 22.6705 24.6705C22.4595 24.8815 22.1734 25 21.875 25H6.125C5.82663 25 5.54048 24.8815 5.32951 24.6705C5.11853 24.4595 5 24.1734 5 23.875C5 23.5766 5.11853 23.2905 5.32951 23.0795C5.54048 22.8685 5.82663 22.75 6.125 22.75ZM5 17.125L16.25 5.875L19.625 9.25L8.375 20.5H5V17.125ZM17.375 4.75L19.625 2.5L23 5.875L20.7489 8.12613L17.375 4.75Z" fill="#007AFF" />
                                        </svg>
                                    </div>
                                    <h5>19/May/1989</h5>
                                    <h6>33years</h6>
                                    <div className="contact">
                                        <p>Martinzmartins002@gmail.com</p>
                                        <h4>08119758516</h4>
                                    </div>

                                </div>
                            </div>
                            <div className="each-person">
                                <img src={image3} alt="" />
                                <div className="person-info">
                                    <div className="name">
                                        <h2>Adeboye Faith </h2>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 22.75H21.875C22.1734 22.75 22.4595 22.8685 22.6705 23.0795C22.8815 23.2905 23 23.5766 23 23.875C23 24.1734 22.8815 24.4595 22.6705 24.6705C22.4595 24.8815 22.1734 25 21.875 25H6.125C5.82663 25 5.54048 24.8815 5.32951 24.6705C5.11853 24.4595 5 24.1734 5 23.875C5 23.5766 5.11853 23.2905 5.32951 23.0795C5.54048 22.8685 5.82663 22.75 6.125 22.75ZM5 17.125L16.25 5.875L19.625 9.25L8.375 20.5H5V17.125ZM17.375 4.75L19.625 2.5L23 5.875L20.7489 8.12613L17.375 4.75Z" fill="#007AFF" />
                                        </svg>
                                    </div>
                                    <h5>19/May/1989</h5>
                                    <h6>33years</h6>
                                    <div className="contact">
                                        <p>Martinzmartins002@gmail.com</p>
                                        <h4>08119758516</h4>
                                    </div>

                                </div>
                            </div>
                            <div className="each-person">
                                <img src={image3} alt="" />
                                <div className="person-info">
                                    <div className="name">
                                        <h2>Adeboye Faith </h2>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 22.75H21.875C22.1734 22.75 22.4595 22.8685 22.6705 23.0795C22.8815 23.2905 23 23.5766 23 23.875C23 24.1734 22.8815 24.4595 22.6705 24.6705C22.4595 24.8815 22.1734 25 21.875 25H6.125C5.82663 25 5.54048 24.8815 5.32951 24.6705C5.11853 24.4595 5 24.1734 5 23.875C5 23.5766 5.11853 23.2905 5.32951 23.0795C5.54048 22.8685 5.82663 22.75 6.125 22.75ZM5 17.125L16.25 5.875L19.625 9.25L8.375 20.5H5V17.125ZM17.375 4.75L19.625 2.5L23 5.875L20.7489 8.12613L17.375 4.75Z" fill="#007AFF" />
                                        </svg>
                                    </div>
                                    <h5>19/May/1989</h5>
                                    <h6>33years</h6>
                                    <div className="contact">
                                        <p>Martinzmartins002@gmail.com</p>
                                        <h4>08119758516</h4>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="upcoming">
                    <h3>All upcoming</h3>
                    <div className="all-upcoming">
                        <div className="each-person">
                            <img src={image3} alt="" />
                            <div className="person-info">
                                <div className="name">
                                    <h2>Adeboye Faith </h2>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 22.75H21.875C22.1734 22.75 22.4595 22.8685 22.6705 23.0795C22.8815 23.2905 23 23.5766 23 23.875C23 24.1734 22.8815 24.4595 22.6705 24.6705C22.4595 24.8815 22.1734 25 21.875 25H6.125C5.82663 25 5.54048 24.8815 5.32951 24.6705C5.11853 24.4595 5 24.1734 5 23.875C5 23.5766 5.11853 23.2905 5.32951 23.0795C5.54048 22.8685 5.82663 22.75 6.125 22.75ZM5 17.125L16.25 5.875L19.625 9.25L8.375 20.5H5V17.125ZM17.375 4.75L19.625 2.5L23 5.875L20.7489 8.12613L17.375 4.75Z" fill="#007AFF" />
                                    </svg>
                                </div>
                                <h5>19/May/1989</h5>
                                <h6>33years</h6>
                                <div className="contact">
                                    <p>Martinzmartins002@gmail.com</p>
                                    <h4>08119758516</h4>
                                </div>

                            </div>
                        </div>
                        <div className="each-person">
                            <img src={image3} alt="" />
                            <div className="person-info">
                                <div className="name">
                                    <h2>Adeboye Faith </h2>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 22.75H21.875C22.1734 22.75 22.4595 22.8685 22.6705 23.0795C22.8815 23.2905 23 23.5766 23 23.875C23 24.1734 22.8815 24.4595 22.6705 24.6705C22.4595 24.8815 22.1734 25 21.875 25H6.125C5.82663 25 5.54048 24.8815 5.32951 24.6705C5.11853 24.4595 5 24.1734 5 23.875C5 23.5766 5.11853 23.2905 5.32951 23.0795C5.54048 22.8685 5.82663 22.75 6.125 22.75ZM5 17.125L16.25 5.875L19.625 9.25L8.375 20.5H5V17.125ZM17.375 4.75L19.625 2.5L23 5.875L20.7489 8.12613L17.375 4.75Z" fill="#007AFF" />
                                    </svg>
                                </div>
                                <h5>19/May/1989</h5>
                                <h6>33years</h6>
                                <div className="contact">
                                    <p>Martinzmartins002@gmail.com</p>
                                    <h4>08119758516</h4>
                                </div>

                            </div>
                        </div>
                        <div className="each-person">
                            <img src={image3} alt="" />
                            <div className="person-info">
                                <div className="name">
                                    <h2>Adeboye Faith </h2>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 22.75H21.875C22.1734 22.75 22.4595 22.8685 22.6705 23.0795C22.8815 23.2905 23 23.5766 23 23.875C23 24.1734 22.8815 24.4595 22.6705 24.6705C22.4595 24.8815 22.1734 25 21.875 25H6.125C5.82663 25 5.54048 24.8815 5.32951 24.6705C5.11853 24.4595 5 24.1734 5 23.875C5 23.5766 5.11853 23.2905 5.32951 23.0795C5.54048 22.8685 5.82663 22.75 6.125 22.75ZM5 17.125L16.25 5.875L19.625 9.25L8.375 20.5H5V17.125ZM17.375 4.75L19.625 2.5L23 5.875L20.7489 8.12613L17.375 4.75Z" fill="#007AFF" />
                                    </svg>
                                </div>
                                <h5>19/May/1989</h5>
                                <h6>33years</h6>
                                <div className="contact">
                                    <p>Martinzmartins002@gmail.com</p>
                                    <h4>08119758516</h4>
                                </div>

                            </div>
                        </div>
                        <div className="each-person">
                            <img src={image3} alt="" />
                            <div className="person-info">
                                <div className="name">
                                    <h2>Adeboye Faith </h2>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 22.75H21.875C22.1734 22.75 22.4595 22.8685 22.6705 23.0795C22.8815 23.2905 23 23.5766 23 23.875C23 24.1734 22.8815 24.4595 22.6705 24.6705C22.4595 24.8815 22.1734 25 21.875 25H6.125C5.82663 25 5.54048 24.8815 5.32951 24.6705C5.11853 24.4595 5 24.1734 5 23.875C5 23.5766 5.11853 23.2905 5.32951 23.0795C5.54048 22.8685 5.82663 22.75 6.125 22.75ZM5 17.125L16.25 5.875L19.625 9.25L8.375 20.5H5V17.125ZM17.375 4.75L19.625 2.5L23 5.875L20.7489 8.12613L17.375 4.75Z" fill="#007AFF" />
                                    </svg>
                                </div>
                                <h5>19/May/1989</h5>
                                <h6>33years</h6>
                                <div className="contact">
                                    <p>Martinzmartins002@gmail.com</p>
                                    <h4>08119758516</h4>
                                </div>

                            </div>
                        </div>
                        <div className="each-person">
                            <img src={image3} alt="" />
                            <div className="person-info">
                                <div className="name">
                                    <h2>Adeboye Faith </h2>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 22.75H21.875C22.1734 22.75 22.4595 22.8685 22.6705 23.0795C22.8815 23.2905 23 23.5766 23 23.875C23 24.1734 22.8815 24.4595 22.6705 24.6705C22.4595 24.8815 22.1734 25 21.875 25H6.125C5.82663 25 5.54048 24.8815 5.32951 24.6705C5.11853 24.4595 5 24.1734 5 23.875C5 23.5766 5.11853 23.2905 5.32951 23.0795C5.54048 22.8685 5.82663 22.75 6.125 22.75ZM5 17.125L16.25 5.875L19.625 9.25L8.375 20.5H5V17.125ZM17.375 4.75L19.625 2.5L23 5.875L20.7489 8.12613L17.375 4.75Z" fill="#007AFF" />
                                    </svg>
                                </div>
                                <h5>19/May/1989</h5>
                                <h6>33years</h6>
                                <div className="contact">
                                    <p>Martinzmartins002@gmail.com</p>
                                    <h4>08119758516</h4>
                                </div>

                            </div>
                        </div>
                        <div className="each-person">
                            <img src={image3} alt="" />
                            <div className="person-info">
                                <div className="name">
                                    <h2>Adeboye Faith </h2>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 22.75H21.875C22.1734 22.75 22.4595 22.8685 22.6705 23.0795C22.8815 23.2905 23 23.5766 23 23.875C23 24.1734 22.8815 24.4595 22.6705 24.6705C22.4595 24.8815 22.1734 25 21.875 25H6.125C5.82663 25 5.54048 24.8815 5.32951 24.6705C5.11853 24.4595 5 24.1734 5 23.875C5 23.5766 5.11853 23.2905 5.32951 23.0795C5.54048 22.8685 5.82663 22.75 6.125 22.75ZM5 17.125L16.25 5.875L19.625 9.25L8.375 20.5H5V17.125ZM17.375 4.75L19.625 2.5L23 5.875L20.7489 8.12613L17.375 4.75Z" fill="#007AFF" />
                                    </svg>
                                </div>
                                <h5>19/May/1989</h5>
                                <h6>33years</h6>
                                <div className="contact">
                                    <p>Martinzmartins002@gmail.com</p>
                                    <h4>08119758516</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BirthdayPage;
