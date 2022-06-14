import React from 'react';
import "./Banner.css";

const Banner = () => {
    // const logoSrc = "https://i.ibb.co/c3Z2P9V/MBSTU-Logo.png";
    const logoSrc = "https://i.ibb.co/QMbh6wz/mbstu-logo.png";
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-position py-3">

                    <div className="img-pos">
                        <img src={logoSrc} style={{ width: "150px" }} className="img-fluid" alt="mbstu_logo" />
                    </div>

                    <div className="img-pos pt-5 ps-2">
                        <p className="fs-1 fw-bolder ms-3 text-danger">Mawlana Bhashani <br />Science and Technology University</p>
                    </div>
                </div>

            </div>
        </div>
        // <div className="container">
        //     <div className="row py-3">
        //         <div className="col-lg-1 col-md-1 col-sm-12 border border-sm">
        //             <img src={logoSrc} className="w-75 img-fluid border border-sm" alt="mbstu_logo" />
        //         </div>
        //         <div className="col-lg-11 col-md-11 col-sm-12">
        //             <p className="text-uppercase text-bold">Mawlana Bhashani Science and Technology University</p>
        //         </div>

        //     </div>

        // </div>
    );
};

export default Banner;