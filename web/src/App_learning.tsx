// COMPONENTES / PROPRIEDADES
import './styles.css'

{/* TS DECLARANDO QUE É OBRIGATÓRIO O RECEBIMENTO DO TÍTULO NO BOTÃO*/}
interface ButtonProps {
  title: string;
}

function Button (props: ButtonProps) {
  return (
    <button>
      {/* PARA UTILIZAR VARIÁVEL DENTRO DA FUNÇÃO TS É NECESSÁRIO ABRIR CHAVES '{}' */}
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div> 
    <div><Button title="Send 1"/></div>
    <div><Button title="Send 2"/></div>
    <div><Button title="Send 3"/></div>
    </div>
    )
}
export default App
