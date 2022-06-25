import React from "react";

class Navbar extends React.Component{
    render(){
        return (
            <nav className="flex justify-between self-start px-10 py-8 text-white bg-transparent">
                <div>
                    <a href="/">Busy</a>
                </div>
                <div className="flex">
                    <a href="/dashboard" className="mx-4">Dashboard</a>
                    <a href="/about-us" className="mx-4">About us</a>
                    <a href="/" className="mx-4">Log in</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;