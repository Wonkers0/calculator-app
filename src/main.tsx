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

let calcResult = 0;
export default calcResult;