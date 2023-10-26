import "./index.css"
import { Route, Routes } from 'react-router-dom';
import { Home } from './Routes/Home';
import { ViewContent } from './Routes/ViewContent';
import { Login } from './Routes/Login';
import { ResultsSearch } from './Routes/ResultsSearch';
import { Providers } from "./utils/Providers";
import { Menu } from "./components/Menu";
import { Favorites } from "./Routes/Favorites";

function App() {

  return (
    <div className="bg-colorFund overflow-hidden"> 
    <Providers>
      <Menu />
      <Routes>
        <Route path= "/" element={<Home />}/>
          <Route path='/view/:slug/:saveordelete' element={<ViewContent />} />
          <Route path='/login/' element={<Login/>}/>
          <Route path='/search/' element={<ResultsSearch />} />
          <Route path='/favorites/' element={<Favorites />} />
          <Route path='*' element={<Home />} />
        </Routes>
    </Providers>

        
    </div>
  );
}

export default App;