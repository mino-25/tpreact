import {Routes, Route} from 'react-router-dom'
import Create from './components/01-create/create';
import Home from './components/02-home/home';
import Header from './components/00-header/header';
import Nothing from './components/00-header/nothing';
import Put from './components/03-put/put';


function App() {
  return (
    <Routes>

      <Route path="/" element={<Header />}>
        <Route path="/create" element={<Create />}/>
        <Route index element={<Home />}/>
        <Route path="*" element={<Nothing />}/>
        <Route path='/put'element={<Put />}/>
        
      </Route>

    </Routes>

  );
}

export default App;
