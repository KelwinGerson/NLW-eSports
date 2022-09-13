// COMPONENTES / PROPRIEDADES
import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css';

import logoImg from 'D:/Users/Kelwin/Documents/ASchool/Rocketset/Nova pasta/web/assets/logo-nlw.svg';

function App() {
  return (
    // m-20 → margem
    // mt-20 → margem top
    // mx-auto
    // max-w-[1344px] → máximo de pixes
    // mx-auto → centraliza
    // flex-col → fica um texto em baixo do outro
    // block → pula linha

    // className está estilizando o componente
    <div className='max-w-[1344px], mx-auto flex flex-col items-center m-20'>
      <img src={logoImg} alt="" />
      
      <h1 className='text-6xl text-white font-black mt-16'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>DUO</span> está aqui!
      </h1> 
      
      <div className='grid grid-cols-6 gap-6 mt-20'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game 1.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'> League of legends</strong>
            <span className='text-zinc-300 text-sm block'> 4 anúncios</span>
          </div>
        
        </a>
        <a href="" className='relative'>
          <img src="/game 2.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>CS</strong>
            <span className='text-zinc-300 text-sm block'> 4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/game 3.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'> 4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/game 4.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>WWC</strong>
            <span className='text-zinc-300 text-sm block'> 4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/game 5.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'> 4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/game 6.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex</strong>
            <span className='text-zinc-300 text-sm block'> 4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2a2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Don't find your DUO ?</strong>
            <span className='text-zinc-400 block'>Post here to find new players!</span>
          </div>
            <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>→ Click here for find ←
            <MagnifyingGlassPlus size={24}/>
            </button>
        </div>

      </div>

    </div>
    )
}
export default App
