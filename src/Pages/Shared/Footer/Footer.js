import React from 'react';
import './Footer.css';

const Footer = () => {

    // footer icon style 
    const iconStyle = {
        fontSize: "30px",
        color: "white"
    }



    // <FontAwesomeIcon icon="fa-solid fa-hand-back-point-right" />


    return (
        <div className="footer-bg">
            <div className="container">
                <div className="row m-0 py-3 px-2">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row mt-4">
                            <div className="col-sm-12 col-md-6 col-lg-2 my-2">
                                <h5 className="text-warning">The University</h5>
                                <ul className="list-unstyled mt-3" style={{ fontSize: "14px" }}>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> About MBSTU</a></li>
                                    <li className="mb-3"><a href=''><i className="fas fa-hand-point-right me-2" /> Admin Bodies</a></li>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> Regent board</a></li>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> Office & section</a></li>
                                    <li><a href="#"><i className="fas fa-hand-point-right me-2" /> Exam Result</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-2 my-2">
                                <h5 className="text-warning">Academic</h5>
                                <ul className="list-unstyled mt-3" style={{ fontSize: "14px" }}>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> Departments</a></li>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> Undergraduate Program</a></li>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> Postgraduate Program</a></li>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> Academic Council</a></li>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> Academic Calendar</a></li>
                                </ul>

                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-2 my-2">
                                <h5 className="text-warning">Useful LInk</h5>
                                <ul className="list-unstyled mt-3" style={{ fontSize: "14px" }}>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> Admission</a></li>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> Payment SYstem</a></li>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> Notice Board</a></li>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> FAQ</a></li>

                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-2 my-2">
                                <h5 className="text-warning">Campus</h5>
                                <ul className="list-unstyled mt-3" style={{ fontSize: "14px" }}>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> Library</a></li>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> Medical</a></li>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> Clubs</a></li>
                                    <li className="mb-3"><a href=""><i className="fas fa-hand-point-right me-2" /> Transport</a></li>

                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-2 my-2">
                                <h5 className="text-warning">Contact</h5>
                                <ul className="list-unstyled text-white mt-3" style={{ fontSize: "14px" }}>
                                    <li>Mawlana Bhashani Science and Technology University (MBSTU), Bangladesh <br /> <br /></li>
                                    <li><i className="fas fa-phone me-1" /> +88-01315-213553</li><br />
                                    <li><i className="fas fa-envelope me-1" /> cse@mbstu.ac.bd</li>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-2 my-2">
                                <h5 className="text-warning">Follow Us On</h5>
                                <div className="mt-4">
                                    <a href="https://www.facebook.com"><i style={iconStyle} className="fab fa-facebook-square me-3"></i></a>
                                    <a href="https://www.twitter.com"><i style={iconStyle} className="fab fa-twitter-square me-3"></i></a>
                                    <a href="https://www.youtube.com"><i style={iconStyle} className="fab fa-youtube-square me-3"></i></a>
                                    <a href="https://www.instagram.com"><i style={iconStyle} className="fab fa-instagram-square me-3"></i></a>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* copyright  */}
                    <p className="mt-5 text-center text-white m-0 fs-5">
                        &copy; 2022 - 2027 | All Rights Reserved by <span style={{ color: "red" }}> CSE MBSTU</span>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Footer;
/*import React from 'react';

const Footer = () => {
    return (

        <div>
            <div class="footer-top-area section pt-100 pb-0 pb-xl-4">
                <div class="container">
                    <div class="row">

                        <div class="footer-widget col-lg-3 col-md-6 col-12 mb-50">
                            <a class="footer-logo" href="index.html"><img src="img/logo/footer.png" alt="Image" /></a>
                            <p>There are many variations of passg of Lorem Ipsum available, but thmajority have suffered altem, </p>
                            <div class="footer-social">
                                <a target="_blank" rel="noopener" href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
                                <a target="_blank" rel="noopener" href="https://www.rss.com/"><i class="fa fa-rss"></i></a>
                                <a target="_blank" rel="noopener" href="https://www.plus.google.com/"><i class="fa fa-google-plus"></i></a>
                                <a target="_blank" rel="noopener" href="https://www.pinterest.com/"><i class="fa fa-pinterest"></i></a>
                                <a target="_blank" rel="noopener" href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>

                        <div class="footer-widget col-lg-3 col-md-6 col-12 mb-50">
                            <h3>GET IN TOUCH</h3>
                            <ul>
                                <li><i class="fa fa-phone"></i> <span>+88 018 785 4589</span></li>
                                <li><i class="fa fa-envelope"></i> <span>devitems@email.com</span></li>
                                <li><i class="fa fa-globe"></i> <span>www.devitems.com</span></li>
                                <li><i class="fa fa-map-marker"></i> <span>ur address goes here,street.</span></li>
                            </ul>
                        </div>

                        <div class="footer-widget col-lg-3 col-md-6 col-12 mb-50">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><a href="about.html">Teachers &amp; Staff</a></li>
                                <li><a href="courses.html">Our Courses</a></li>
                                <li><a href="courses.html">Courses Categories</a></li>
                                <li><a href="contact.html">Support</a></li>
                                <li><a href="contact.html">Terms &amp; Conditions</a></li>
                                <li><a href="contact.html">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div class="footer-widget col-lg-3 col-md-6 col-sm-8 col-12 mb-50">
                            <h3>Instagram</h3>
                            <div class="instagram-widget">
                                <div><a target="_blank" rel="noopener" href="https://www.instagram.com/"><img src="img/instagram/1.jpg" alt="Image" /></a></div>
                                <div><a target="_blank" rel="noopener" href="https://www.instagram.com/"><img src="img/instagram/2.jpg" alt="Image" /></a></div>
                                <div><a target="_blank" rel="noopener" href="https://www.instagram.com/"><img src="img/instagram/3.jpg" alt="Image" /></a></div>
                                <div><a target="_blank" rel="noopener" href="https://www.instagram.com/"><img src="img/instagram/4.jpg" alt="Image" /></a></div>
                                <div><a target="_blank" rel="noopener" href="https://www.instagram.com/"><img src="img/instagram/5.jpg" alt="Image" /></a></div>
                                <div><a target="_blank" rel="noopener" href="https://www.instagram.com/"><img src="img/instagram/6.jpg" alt="Image" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Footer;*/