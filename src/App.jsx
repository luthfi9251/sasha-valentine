import { useEffect } from 'react'
import AOS from 'aos';
import Lottie from 'lottie-react'
import PhotoCard from './components/Photo'
import Layout from './components/Layout'
import animationValentine from './lottie/HappyValentine.json'
import animationCartoon from './lottie/Cartoon.json'
import './App.css'
import 'aos/dist/aos.css';

import main from './assets/main-min.jpg'
import src1 from './assets/1-min.jpg'
import src2 from './assets/2-min.jpg'
import src3 from './assets/3-min.jpg'
import src4 from './assets/4-min.jpg'
import src5 from './assets/5-min.jpg'
import src6 from './assets/6-min.jpg'
import src7 from './assets/7-min.jpg'
import icon from './assets/title.png'

const data = [
  {
    src: src1,
    title: "The Bookstore",
    text: "This is the beginning of the story"
  },
  {
    src: src2,
    title: "First hangout",
    text: "The time when my feelings grew more and more obvious"
  },
  {
    src: src3,
    title: "Quality Time",
    text: "I enjoy the time we have when we talk about random things"
  },
  {
    src: src4,
    title: "Kidnapped",
    text: "Actually my mission is to take you out for a walk, not just to pick up my things hehe"
  },
  {
    src: src5,
    title: "The Concert",
    text: "My first concert and it was wonderfull because of you"
  },
  {
    src: src6,
    title: "First Date",
    text: "Finally , I got you babe"
  },
  {
    src: src7,
    title: "Our Latest Date",
    text: "You look so pretty and charming"
  }
]


function App() {

  document.title = "Happy Valentine Sasha!"
  document.querySelector("link[rel='icon']").href = icon
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <Layout center={true} dataAos="fade-up" height="100vh">
        <PhotoCard src = {main} alt="Luthfi and Sasha"/>
        <div className="animationWrapper">
          <Lottie
          animationData = {animationValentine}
          style = {{
            width: '100%',
            position: 'absolute',
            top: "-150px"
          }} 
          />
        </div>
      </Layout>

      <Layout>
        <div className="containerPhoto">
          { 
            data.map((item,i) => {
              let fade = i % 2 === 0 ? "fade-left" : "fade-right";
              return (
                <div className="photoItem" data-aos={fade} data-aos-duration="600" data-aos-offset="300">
                  <PhotoCard width='70%' height="auto" src={item.src} alt={item.title}/>
                  <p className='titlePhoto'>{item.title}</p>
                  <p>{item.text}</p>
                </div>
              )
            })
          }
        </div>
      </Layout>

      <Layout center={false} height="600px">
        <div className='containerText' data-aos="fade-up" data-aos-duration="600">
          <span className='headText'>To : Sasha</span>
          <p>Happy Valentine ububbb😁🥰🥳❣️♥️</p>
          <p>Semoga kamu ga bosen yaa aku bikinin kek ginian terusss🥹 dan jangan bosen sama aku😤😤 Makasi udah jadi orang yang spesial buat aku, bisa ngertiin aku dan nemenin aku teruss😁Makasii ububbb🐣☀️</p>
          <p>Aku minta maaf kalo masih belum bisa menjadi pacar yang baik dan kerenn😀 aku minta maaf juga kalo kadang aku nyebelin wkwk✌️😀masih belum bisa ngertiin ububbb, maaf yaa ububb wangii</p>
          <p>Yh memang aku ga jago ngebuat kata kata😀 tapi yang terpenting I Love You dik😉😉😁😁I love you banya banya banyaaaaaa, sebanyak aspirasi masyarakat yang ga didengar pemerintah 😁😁😁</p>

          <div className='containerAnimation'>
            <Lottie
            animationData = {animationCartoon} 
            />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default App
