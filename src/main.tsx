import ReactDOM from 'react-dom/client'
import Calculator from './components/Calculator'
import './index.scss'
import './themes.scss'

(document.querySelector('body') as HTMLElement).classList.add('theme1');
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Calculator  />
)

$(window).on("load", () => {
  $("body").removeClass("preload");
});

let storedNum = 0
let storedOperator: string | null
const setOp = (op: string | null) => {storedOperator = op}
const setNum = (num: number) => {storedNum = num}
export {storedNum, storedOperator, setOp, setNum};