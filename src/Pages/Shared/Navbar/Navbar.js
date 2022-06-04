import React from 'react';

const Navbar = () => {

    return (
        <div>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>

        // <div className="container" style={{ height: "auto", backgroundColor: "#243A73" }}>
        //     <nav class="navbar navbar-expand-lg navbar-dark">
        //         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>

        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul class="navbar-nav justify-content-center">
        //                 <li class="nav-item active">
        //                     <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Link</a>
        //                 </li>
        //                 <li class="nav-item dropdown">
        //                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                         Dropdown
        //                     </a>
        //                     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        //                         <a class="dropdown-item" href="#">Action</a>
        //                         <a class="dropdown-item" href="#">Another action</a>
        //                         <div class="dropdown-divider"></div>
        //                         <a class="dropdown-item" href="#">Something else here</a>
        //                     </div>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link disabled" href="#">Disabled</a>
        //                 </li>
        //             </ul>

        //         </div>
        //     </nav>
        // </div>
    );
};

export default Navbar;