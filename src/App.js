import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from 'react-router-dom';

import {
  Home,
  Movies,
  SingleMovies,
  SingleTvShow,
  TvShow,
  Latest,
  TopRated,
  Upcoming,
  ActorId,
  Search
} from './pages';

import Header from "./containers/Header";

import "./assets/styles/main.scss";

function App() {
  return (
   <div className="">
     <Router>
       <Header/>
       <Switch>
         <Route exact path ="/" component={Home}/>
         <Route exact path ="/movies" component={Movies}/>
         <Route exact path ="/tv-shows" component={TvShow}/>
         <Route exact path ="/latest" component={Latest}/>
         <Route exact path ="/toprated" component={TopRated}/>
         <Route exact path ="/upcoming" component={Upcoming}/>
         <Route exact path ="/movie/:id" component={SingleMovies}/>
         <Route exact path ="/person/:id" component={ActorId}/>
         <Route exact path ="/tv-show/:id" component={SingleTvShow}/>
         <Route exact path ="/search/:searchQuery" component={Search}/>
       </Switch>
     </Router>
   </div>
  );
}

export default App;
