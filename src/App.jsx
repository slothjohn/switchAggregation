import React from 'react';
import CardsList from './components/Card';
import './App.css';
import image1 from '../images/gateronInkV2.png';
import image2 from '../images/durockT1.png'
import image3 from '../images/turqTealios.png'
import image4 from '../images/zilentV2.png'
import image5 from '../images/kailhBoxJade.png'
import image6 from '../images/zealioV2.png'
import image7 from '../images/tangerine.png'
import image8 from '../images/koala.png'
import image9 from '../images/holyPandas.png'
import image10 from '../images/cherryRed.png'


const App = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Gateron Ink V2 Black',
      description: 'Linear, Bottom out: 70g',
      imageUrl: image1,
    },
    {
      id: 2,
      title: 'Durock T1',
      description: 'Tactile, Bottom Out: 67g',
      imageUrl: image2,
    },
    {
      id: 3,
      title: 'Turquoise Tealios',
      description: 'Linear, Bottom Out: 63.5 g or 65g',
      imageUrl: image3,
    },
    {
      id: 4,
      title: 'Zilent V2',
      description: 'Tactile, Bottom out: 62g, 65g, 67g and 78g',
      imageUrl: image4,
    },
    {
      id: 5,
      title: 'Kailh Box Jade',
      description: 'Clicky, Bottom out: 60g',
      imageUrl: image5,
    },
    {
      id: 6,
      title: 'Zealio V2',
      description: 'Tactile, Bottom out: 62g, 65g, 67g and 78g',
      imageUrl: image6,
    },
    {
      id: 7,
      title: 'Tangerine',
      description: 'Linear, Bottom Out: 62g or 67g',
      imageUrl: image7,
    },
    {
      id: 8,
      title: 'Koala',
      description: 'Tactile, Bottom out: 62g',
      imageUrl: image8,
    },
    {
      id: 9,
      title: 'Holy Pandas',
      description: 'Tactile, Bottom out: 67g',
      imageUrl: image9,
    },
    {
      id: 10,
      title: 'Cherry MX Red',
      description: 'Linear, Operating force: 45g',
      imageUrl: image10,
    }
  ];

  return (
    <div className="app">
      <h1>Mechanical Keyboard Switches</h1>
      <CardsList cardsData={cardsData} />
    </div>
  );
};

export default App;