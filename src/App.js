import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    
    <Navbar title="DEMO" contact="Contact Us"/>
    <div className="container my-3">
      <TextForm heading="Enter your text to Analyze"/>
    </div>
   
    </>
  );
}

export default App;
