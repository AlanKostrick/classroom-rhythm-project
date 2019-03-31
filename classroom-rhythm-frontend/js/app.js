import TwoBeats from './components/TwoBeats'
import ThreeBeats from './components/ThreeBeats'
import FourBeats from './components/FourBeats'
import SixBeats from './components/SixBeats'
import Home from './components/Home'
import events from './utils/events/event-actions'
import './css/styles.css'

main()

function main(){
    navHome()
    navTwoBeats()
    navThreeBeats()
    navFourBeats()
    navSixBeats()
}

function navHome(){
    const homeSelection = document.querySelector('.nav__home');
    events.on(homeSelection, 'click', ()=>{
        getAppContext().innerHTML =  Home(); 
    })
}

function navTwoBeats(){
    const twoBeatsSelection = document.querySelector('.nav__twoBeats');
    events.on(twoBeatsSelection, 'click', ()=>{
        getAppContext().innerHTML =  TwoBeats(); 
    })
}

function navThreeBeats(){
    const threeBeatsSelection = document.querySelector('.nav__threeBeats');
    events.on(threeBeatsSelection, 'click', ()=>{
        getAppContext().innerHTML =  ThreeBeats(); 
    })
}

function navFourBeats(){
    const fourBeatsSelection = document.querySelector('.nav__fourBeats');
    events.on(fourBeatsSelection, 'click', ()=>{
        getAppContext().innerHTML =  FourBeats(); 
    })
}
function navSixBeats(){
    const sixBeatsSelection = document.querySelector('.nav__sixBeats');
    events.on(sixBeatsSelection, 'click', ()=>{
        getAppContext().innerHTML =  SixBeats(); 
    })
}


function getAppContext(){
    return document.querySelector("#app");
}

