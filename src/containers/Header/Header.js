import {Link, useHistory} from 'react-router-dom';

import './Header.scss';

import logo from "../../assets/icons/kino-logo.png";

import {useState, useEffect} from 'react';


const Header = () => {
    let history = useHistory();
    let btn = document.querySelector('.header-search-btn')

    const [searchValue, setSearchValue] = useState('');
    console.log(searchValue);

    useEffect (() => {
        if(searchValue.length !== 0){
            history.push(`/search/${searchValue}`);
        }else{
            history.push(`/`)
        }
    }, [searchValue])
    return(
        <div className="header">
           
           <div className="container">
                <Link to='/' className="header-logo">
                    <img src={logo} className="header-logo" alt="logo" />
                </Link>

                <div className="header-links">
                    <Link to="/movies" className="header-link">Movies</Link>
                    <Link to="/tv-shows" className="header-link">Tv Show</Link>
                </div>

                <form className="header-form">
                    <input type="text" className="header-input" placeholder="Input here" onChange={(e) => setSearchValue(e.target.value)} value={searchValue}  />
                    <button type="submit" onClick={history.push(`/search/${searchValue}`)} className="header-search-btn">Search</button>
                </form>
           </div>

        </div>
    )
}

export default Header;