import { Routes, Route } from 'react-router-dom';

// PATHS 
import paths from './paths';

// import components 
import Login from '../screens/Login';
import Home from '../screens/Home';
import Registration from '../screens/Registration';
import NotFound from '../screens/NotFound';




function Routing() {

  return (

    <Routes>
      <Route path={paths.LOGIN} element={<Login />} />
      <Route path={paths.HOMEPAGE} element={<Home />} />
      <Route path={paths.REGISTRATION} element={<Registration />} />
      <Route path={paths.NOTFOUND} element={<NotFound />} />


    </Routes>
  );
}

export default Routing;