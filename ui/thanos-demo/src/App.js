import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cutlet from './components/Cutlet';
import {cutletArray} from './utilities/CutletText'
import './App.css'
import Body from './components/Body';
function App() {
  console.log(cutletArray)
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div style={{display:'flex'}}>
      {
        cutletArray.map((item,index) => {
          return <Cutlet key={index} image={item.image} text={item.text} imageName={item.imageName} />
        })
      }
      </div>
      <Body />
    </div>
  );
}

export default App;
