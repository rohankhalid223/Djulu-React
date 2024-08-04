import './App.css';
import './styles/global.scss'; // Import the global styles  
import Header from './components/header'
import Banner from './components/banner'
import HowItWorks from './components/howItWorks'
import WhatIs from './components/whatIs'
import GetInTouch from './components//getInTouch'
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <HowItWorks />
      <WhatIs />
      <GetInTouch />
    </div>
  );
}

  export default App;
