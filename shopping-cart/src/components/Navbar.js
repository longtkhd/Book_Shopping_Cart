import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (

        < nav className = "navbar navbar-expand-lg bg-danger sticky-top" >
            <div className="container">
                
                <Link to="/" className="navbar-brand text-white  ">Shopping</Link>

                <ul className="navbar-nav p-2">
                    <li className ="pr-4 "><Link className="text-white"to="/">Shop</Link></li>
                    <li><Link className="text-white pr-4" to="/cart">My cart</Link></li>
                    <li className="border border-light"><Link className="text-white" to="/cart"><i className="fa fa-shopping-cart "></i> Giỏ Hàng</Link></li>
                   
                </ul>
            </div>
        </nav>


    )
}

export default Navbar;