import Spline from '@splinetool/react-spline';
import styled from 'styled-components'

import logo from './images/logo.svg'
import iconLaptop from './images/icon-laptop.svg'
import iconTwitter from './images/icon-twitter.svg'
import iconYoutube from './images/icon-youtube.svg'


export default function App() {
  return (
    <Wrapper>
      <Spline className='spline' scene="https://prod.spline.design/9t8y27M7UUwl2VqJ/scene.splinecode" />
      <Content>
        <Menu>
          <li><img src={logo} alt='logo'/></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">Download</a></li>
          <li><a href="/">App</a></li>
          <li><a href="/">Login</a></li>
          <li><a href="/">Get Started</a></li>
        </Menu>
        <h1>Collaborate with people</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab totam saepe architecto officia, harum accusantium ipsum alias. Ullam, quidem natus.</p>
        <button>
          <img src={iconLaptop} alt='Download'/> Download for Mac
          </button>
      </Content>
      <Social>
        <div></div>
          <img src={iconYoutube} alt="Youtube" />
          <img src={iconTwitter} alt="Twitter" />
        
      </Social>
    </Wrapper>
    
  );
}

const Wrapper = styled.div`
  font-family: 'Spline Sans', sans-serif;
  font-size: 16px;
  color: white;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;

  .spline{
    position: absolute;
    margin:0;
    top: 0;
    right: 0;
    transform-origin: top;
    @media(max-width: 4000px){
      transform: scale(1.1) translateX(250px) translateY(-130px);
    }
    @media(max-width: 1024px){
      transform: scale(0.8) translateX(200px);
    }
    @media(max-width: 800px){
      transform: scale(0.7) translateX(90px);
    }
    @media(max-width: 600px){
      transform: scale(0.5) translateX(-100px) ;
      right: auto;
      left: 50%;
      margin-left: -400px;
      
    }
    @media (max-width: 375px){
      transform: scale(0.45) translateX(-50px);
    }
  }
` 
const Content = styled.div`
  position: absolute;
  top: 30px;
  left: 80px;
  display: flex;
  flex-direction: column;
  gap:80px;
  
  
  @media(max-width: 1024px){
    gap: 40px;
  }
  h1{
    margin: 0;
    max-width: 500px;
    font-weight: bold;
    font-size: 70px;
    @media(max-width: 1024px){
      font-size: 60px;
      max-width: 400px;
      
    }
    @media(max-width: 800px){
      font-size: 40px;
      max-width: 300px;
    }
    @media(max-width: 600px){
      padding-top: 250px;
    }

  }
  button{
    background: rgba(0,0,0,0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255,255,255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    transition: 1s;
    :hover{
      border: 1px solid rgba(255,255,255,0.8);
      transform: translateY(-3px);
    }
  }
  p{
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }
  h1,p, button{
    margin: 0c30px 0 100px;
  }
`
const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 0;
  padding: 0;

  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: white;
    padding: 8px 20px;
    border: 1px solid rgba(255,255,255,0);
    border-radius: 14px;
    transition: 1s;

    :hover{
      border: 1px solid rgba(255, 255, 255, 0.2)
    }
  }
  @media(max-width: 800px){
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5){
      display: none;
    }
  }
`
const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  div{
    width: 1px;
    height: 500px;
    background: linear-gradient(180deg, #08B6F9 0%, #6C56EF 33.57%, #1306DD 65.86%, #AA0EB2 100%);
  }
  @media(max-width: 1024px){
    display: none;
  }
`