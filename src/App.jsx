import { useEffect } from 'react'
import AOS from 'aos';
import Lottie from 'react-lottie'
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
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing."
  },
  {
    src: src2,
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing."
  },
  {
    src: src3,
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing."
  },
  {
    src: src4,
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing."
  },
  {
    src: src5,
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing."
  },
  {
    src: src6,
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing."
  },
  {
    src: src7,
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing."
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
        <Lottie 
        options={{
          loop: true,
          autoplay: true,
          animationData: animationValentine,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        }}
          height={100}
          width={400}
        />
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquid fugiat enim quos, mollitia eum itaque nisi exercitationem. Vel repellat obcaecati minima nihil reiciendis libero maxime ratione aut nobis in.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquid fugiat enim quos, mollitia eum itaque nisi exercitationem. Vel repellat obcaecati minima nihil reiciendis libero maxime ratione aut nobis in.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquid fugiat enim quos, mollitia eum itaque nisi exercitationem. Vel repellat obcaecati minima nihil reiciendis libero maxime ratione aut nobis in.</p>

          <div className='containerAnimation'>
            <Lottie 
            options={{
              loop: true,
              autoplay: true,
              animationData: animationCartoon,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default App
