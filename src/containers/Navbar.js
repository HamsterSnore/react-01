import React from "react";

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false
        }
    }
    render(){
        let token = localStorage.getItem("token");
        let isAuthenticated = token?.length > 0;
        return (
            <nav className="w-full flex justify-between self-start px-10 py-8 text-white bg-transparent ">
                <div>
                    <a href="/">Busy</a>
                </div>
                <div className="flex">
                    <a href="/dashboard" className="mx-4">Dashboard</a>
                    <a href="/about-us" className="mx-4">About us</a>
                    {!isAuthenticated &&
                    <a href="/log-in" className="ml-4">Log in</a>}
                    {isAuthenticated &&
                    <a href="/profile" className="ml-4">Profile</a>}
                </div>
            </nav>
        )
    }
}

export default Navbar;