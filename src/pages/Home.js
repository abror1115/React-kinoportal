import {Link} from 'react-router-dom';

import './pages.scss';

const Home = () => {
    return(
       <>
         <div className='home container'><h1>Home pages</h1>
            <div  className="list">
                <Link to="/movies" className="pages-link">Popular</Link>
                <Link to="/latest" className="pages-link">Latest</Link>
                <Link to="/toprated" className="pages-link">Top-rated</Link>
                <Link to="/upcoming" className="pages-link">Upcoming</Link>
            </div>
         </div>
       </>
    )
}

export default Home;