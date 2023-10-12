import "./index.css"
import { Route, Routes } from 'react-router-dom';
import { Home } from './Routes/Home';
import { ViewContent } from './Routes/ViewContent';
import { Login } from './Routes/Login';
import { ResultsSearch } from './Routes/ResultsSearch';
import { SearchProvider } from './Contexts/SearchContext';

function App() {

  return (
    <div className="bg-colorFund"> 
    <SearchProvider>
      <Routes>
        <Route path= "/" element={<Home />}/>
        <Route path='/view/:slug' element={<ViewContent />} />
        <Route path='/login/' element={<Login/>}/>
        <Route path='/search/' element={<ResultsSearch />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </SearchProvider>
        
    </div>
  );
}

export default App;