import React from 'react-dom';
import {Link, useNavigate} from 'react-router-dom';

const Navbar=()=>{
    const auth= localStorage.getItem('user');
    const Navigate=useNavigate();
    const logout =()=>{
        localStorage.clear();
        Navigate('/signup');
    }
    return(
        <div>
            <img src="assests/images/logo.png" alt="logo" className='logo' />
            { auth? <ul className='nav-ul'>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Update Products</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link onClick={logout} to='/signup'>Logout ({JSON.parse(auth).name})</Link></li>
                </ul>
                    : 
                    <ul className='nav-ul nav-right'>
                    <li><Link to='/signup'>Sign Up</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    </ul>
                }
        </div>
    )
}

export default Navbar;