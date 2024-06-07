import React from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';

function Navbar(){

    function handleOpen(){
        document.getElementById("Sidenav").style.width = "250px";
    };

    function handleClose(){
        document.getElementById("Sidenav").style.width = "0px";
    };

    return (
        <div>
            <div className="navbaricon">
                <MenuRoundedIcon onClick={handleOpen}/>
            </div>
            <div id="Sidenav" className="navbarmenu">
                <a className="closebtn" onClick={handleClose}>&times;</a>
                <a href="/#/"><Person2RoundedIcon /> Jane Hopkins</a>
                <a href="/#/FDA"><Person2RoundedIcon /> FDA</a>
                <a href="/#/Bavaria"><Person2RoundedIcon /> Bavaria</a>
            </div>
        </div>
    );
};

export default Navbar;