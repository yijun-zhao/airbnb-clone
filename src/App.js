import React from 'react'

import './style.css';
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Card from "./components/Card"

import data from './data'

function App() {

  const cards = data.map(card => {
    return (
        <Card
            img={card.coverImg}
            rating={card.stats.rating}
            reviewCount={card.stats.reviewCount}
            location={card.location}
            title={card.title}
            price={card.price}
            openSpots={card.openSpots}
        />
    )
  })

  return (
    <div className="App">
      <Navbar />
        <Hero />
        <div>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    </div>
  );
}

export default App;
