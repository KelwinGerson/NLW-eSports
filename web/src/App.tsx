// COMPONENTES / PROPRIEDADES
import { CreateAdBanner } from './components/CreateAdBanner';
import { GameBanner } from './components/GameBanner';
// all functions which started with 'use' be named for 'hooks'
import { useState, useEffect} from 'react'

import './styles/main.css';

import logoImg from 'D:/Users/Kelwin/Documents/ASchool/Rocketset/Nova pasta/web/assets/logo-nlw.svg';
import React from 'react';

// define what the fetch will take in API
interface Game {
  id: String;
  title: String;
  bannerUrl: String;
  _count:{
      ads: number;
  }
}


function App() {

  // estate before action
  // case a state change, all code of app function will be reestarted
  // '<>' parameters of ts which receive interface Game
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    // effect if conditional have something act
    fetch('http://localhost:3333/games')
      .then(res => res.json())
      .then(data => {
        setGames(data)
      })
  }, // conditional - dependency array 
    // if the dependency array is empty, the effect will run once
  []
  )

  return (
    // m-20 → margem
    // mt-20 → margem top
    // mx-auto
    // max-w-[1344px] → máximo de pixes
    // mx-auto → centraliza
    // flex-col → fica um texto em baixo do outro
    // block → pula linha
    // className está estilizando(css) o componente
    <div className='max-w-[1344px], mx-auto flex flex-col items-center m-20'>
      <img src={logoImg} alt="" />
      
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>DUO</span> está aqui!
      </h1> 
      
      <div // method 'map' running inside array and return something
        className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id} 
              title={game.title}  
              bannerUrl={game.bannerUrl} 
              adsCount={game._count.ads}
            />
          )
        })}
      </div>




      <CreateAdBanner/>
    </div>


    )
}
export default App
