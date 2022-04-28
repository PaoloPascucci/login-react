import { Routes, Route } from 'react-router-dom';

// PATHS 
import paths from './paths';

// import components 
import LoginBox from '../screens/loginBox/LoginBox';
import Home from '../screens/home/Home';
import Registration from '../screens/registration/Registration';
import NotFound from '../screens/notFound/NotFound';

import "../i18n";




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