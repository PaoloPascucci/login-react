import { Routes, Route } from 'react-router-dom';

// PATHS 
import paths from './paths';

// import components 
import LoginBox from '../screens/LoginBox';
import Home from '../screens/Home';
import Registration from '../screens/Registration';
import NotFound from '../screens/NotFound';




function Routing() {

  return (

    <Routes>
      <Route path={paths.LOGINBOX} element={<LoginBox />} />
      <Route path={paths.HOMEPAGE} element={<Home />} />
      <Route path={paths.REGISTRATION} element={<Registration />} />
      <Route path={paths.NOTFOUND} element={<NotFound />} />


    </Routes>
  );
}

export default Routing;