import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Coverpage from'./components/Coverpage';
import Aboutus from './components/Aboutus';
import Events from './components/Events'

function App() {
  return (
    <>
        <Router>
        
            <Routes>
               
                <Route path="/" element={
                        
                    <div>
                            <Navbar/>
                            <Coverpage/>
                            <Aboutus/>
                            <Events/>
                
                    </div>
                } />
               

               

            </Routes>
            
        </Router>
        </>
  );
}

export default App;
