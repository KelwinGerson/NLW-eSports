import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Input } from './Form/Input'
import { Check, GameController } from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios'

interface Game {
    id: String;
    title: String;
}

export function CreateAdModal() {

    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState(false)

    useEffect(() => {
        axios('http://localhost:3333/games').then(res => {
            setGames(res.data)
        })
    }, [])

    async function handleCreateAd(event: FormEvent) {
        event.preventDefault();

        // pegando os dados do form
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        // console.log(data)
        // console.log(weekDays)
        // console.log(useVoiceChannel)
        if (!data.name) {
            return
        }

        try {
            await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: weekDays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel: useVoiceChannel

            })

            console.log("Anúncio criado com sucesso")
        } catch (err) {
            console.log("Erro ao criar anúncio")
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25'>
                <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>
                <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
                    {/* */}
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="game" className='font-semibold'>Qual o game ?</label>
                        <select
                            name='game' id='game'
                            placeholder='Selecione o game que deseja jogar'
                            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none defaultValue"
                        >
                            <option disabled value="">Selecione o game que deseja jogar</option>

                            {/** sempre que utilizar o map é ideal colocar uma key como boas práticas */}
                            {games.map(game => {
                                return (
                                    <option key={game.id} value={game.id}>{game.title}</option>
                                )
                            })}

                        </select>
                        <div>

                        </div>
                        <label htmlFor="name"> Seu nome ou nickname ?</label>
                        <Input name='name' id="name" placeholder='Como te chamam dentro do game ?' />
                    </div>

                    <div className='grid grid-col-2 gap-6'>
                        {/* flex-col coloca em baixo */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                            <Input type="number" placeholder='Tudo bem ser ZERO' name='yearsPlaying' id="yearsPlaying" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="discord">Qual seu discord ?</label>
                            <Input type="text" placeholder='Usuário#0000' name='discord' id="discord" />
                        </div>
                    </div>

                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="weekDays">Quando costuma jogar?</label>
                            {/* dias da semana */}

                            <ToggleGroup.Root
                                type='multiple'
                                className='grid grid-cols-4 gap-2'
                                value={weekDays}
                                onValueChange={setWeekDays}
                            >
                                <ToggleGroup.Item
                                    value="0"
                                    title='Segunda'
                                    // if se apertar o botão muda de cor
                                    className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="1"
                                    title='Terca'
                                    className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    T
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="2"
                                    title='Quarta'
                                    className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="3"
                                    title='Quinta'
                                    className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="4"
                                    title='Sexta'
                                    className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="5"
                                    title='Sabado'
                                    className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="6"
                                    title='Domingo'
                                    className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    D
                                </ToggleGroup.Item>
                            </ToggleGroup.Root>
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <label htmlFor="hourStart">Qual horário do dia ?</label>
                            <div className='grid grid-cols-2 gap-2'>
                                <Input type="time" placeholder='De' name='hourStart' id="hourStart" />
                                <Input type="time" placeholder='Até' name='hourEnd' id="hourEnd" />
                            </div>
                        </div>
                    </div>
                    {/* BOTÃO FLAG */}
                    <label className='mt-2 flex gap-2 text-sm items-center'>
                        <Checkbox.Root
                            className='w-6 h-6 p-1 rounded bg-zinc-900'
                            checked={useVoiceChannel}
                            onCheckedChange={(checked) => {
                                if (checked === true) {
                                    setUseVoiceChannel(true)
                                } else {
                                    setUseVoiceChannel(false)
                                }
                            }
                            }
                        >
                            <Checkbox.Indicator>
                                <Check className='w-4 h-4 text-emerald-400' />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo me conectar no chat de voz

                    </label>

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
                            <GameController className='w-6 h-6' />
                            Encontrar duo
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>

    )
}
