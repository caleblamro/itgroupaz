import reactLogo from './assets/react.svg';
import Card from './Components/Card/Card';
import Button from './Components/Button/Button';
import IconContainer from './Components/IconContainer/IconContainer';
import './App.css';
import Divider from './Components/Divider';
import Navigation from './Sections/Navigation/Navigation';
import SalesContent from './Sections/Sales/SalesContent';
import Footer from './Sections/Footer/Footer';
var done = false;
function scroll(){
  const app = document.getElementById('app');
  const img = document.getElementById('image');
  if(!done && app.scrollTop > 150){
    img.style.transform = 'rotate(180deg)';

    img.style.top = "0";
    img.style.right = "0";
    img.style.marginTop = "-190px";
    img.style.marginRight = "-120px";
    img.style.borderRadius = "15px";
    setTimeout(() => {
      img.style.opacity = "0";
      img.style.marginRight = "-240px";
      img.style.marginTop = "-310px";
    }, 500);
    document.getElementById("target").style.backgroundColor = "#51b5ff";
    done = true;
  }
}
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
function App() {
  return (
    <div id="app" className="app">
      <div id="image" className='image-container'>
      </div>
      <Navigation />
      <div className="padding">
        <div className="welcome">
          <div className="welcome-head">
            <div className='xlarge'>
              Shifting
            </div>
            <div className='xlarge'>
              Perspectives
            </div>
          </div>
          <p className="welcome-statement small">
            ITGroup has been providing outstanding, reliable technology services to our valuable clientele for over two decades
          </p>
          <Button id="learn-button" onClick={() => console.log()} text="Learn more" className="learn-more"/>
        </div>
        <SalesContent />
      </div>
      <Footer />
    </div>
  )
}

export default App;
