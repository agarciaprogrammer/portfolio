import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <ReactFullpage
        scrollingSpeed={500}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section"><Hero /></div>
            <div className="section"><About /></div>
            <div className="section"><Projects /></div>
            <div className="section"><Contact /></div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}

export default App; 