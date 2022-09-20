// COMPONENTES / PROPRIEDADES
import { CreateAdBanner } from './components/CreateAdBanner';
import { GameBanner } from './components/GameBanner';
// all functions which started with 'use' be named for 'hooks'
import { useState, useEffect} from 'react'
// import all of which started with Dialog
import * as Dialog from '@radix-ui/react-dialog'
import './styles/main.css';
import logoImg from 'D:/Users/Kelwin/Documents/ASchool/Rocketset/NLW - eSports Week/web/assets/logo-nlw.svg';
import React from 'react';
import { GameController } from 'phosphor-react';
import { Input } from './components/Form/Input';

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

      <Dialog.Root>
        <CreateAdBanner/>
        
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>
              <form className='mt-8 flex flex-col gap-4'>
                {/* */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor="game" className='font-semibold'>Qual o game ?</label>
                  <Input id='game' placeholder='Selecione o game que deseja jogar' />
                <div>

                </div>
                  <label htmlFor="name"> Seu nome ou nickname ?</label>
                  <Input id="name" placeholder='Como te chamam dentro do game ?'/>
                </div>

                <div className='grid grid-col-2 gap-6'>
                  {/* flex-col coloca em baixo */}
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <Input type="number" placeholder='Tudo bem ser ZERO' id="yearsPlaying" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="discord">Qual seu discord ?</label>
                    <Input type="text" placeholder='Usuário#0000' id="discord" />
                  </div>
                </div>

                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                    {/* dias da semana */}  
                    <div className='grid grid-cols-4 gap-2'>
                      <button 
                      title='Segunda'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        S
                        </button>
                      <button 
                      title='Terca'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        T
                        </button>
                      <button 
                      title='Quarta'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        Q
                        </button>
                      <button 
                      title='Quinta'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        Q
                        </button>
                      <button 
                      title='Sexta'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        S
                        </button>
                      <button 
                      title='Sabado'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        S
                        </button>
                      <button 
                      title='Domingo'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        D
                        </button>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor="hourStart">Qual horário do dia ?</label>
                    <div className='grid grid-cols-2 gap-2'>
                      <Input type="time" placeholder='De' id="hourStart" />
                      <Input type="time" placeholder='Até' id="hourEnd" />
                    </div>
                  </div>
                </div>
                {/* BOTÃO FLAG */}
                <div className='mt-2 flex gap-2 text-sm'>
                  <Input type="checkbox" />
                  Costumo me conectar no chat de voz
                
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                  {/** BOTÃO QUE FECHA A JANELA */}
                  <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
                  >
                    Cancelar
                  </Dialog.Close>
                  <button 
                    type='submit'
                    className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                  >
                    <GameController className='w-6 h-6'/>
                    Encontrar duo
                  </button>
                </footer>
              </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
    )
}
export default App
