import React from "react";

class Navbar extends React.Component{
    render(){
        return (
            <nav className="flex justify-between fixed top-0 left-0 right-0 px-10 py-8 text-white bg-transparent">
                <div>
                    <a href="/">Busy</a>
                </div>
                <div className="flex">
                    <a href="/" className="mx-4">About us</a>
                    <a href="/" className="mx-4">Log in</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;