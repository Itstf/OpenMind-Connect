import '../styles/animate.css';
import '../styles/tailwind.css';
import '../styles/style.css';
import '../styles/chatbot.css';
// import '../assets/js/main';
// import '../assets/js/menuscroll';
// import '../assets/js/wowmin';

import { useState } from 'react'
import { Link } from 'react-router-dom';
import Chatbot from '../components/ChatBot';

import {
  ChatIcon
} from '@heroicons/react/outline';

import logoOpenMind2 from '../assets/logo/openMind2.png';
import logoOpenMind1 from '../assets/logo/openMind1.png';
import tec1 from '../assets/tec1.jpg';
import aboutimg1 from '../assets/about-image1.svg';
import react from '../assets/react.png';
import tailwindwhite from '../assets/tailwindwhite.png';
import firebasewhite from '../assets/firebasewhite.png';
import menezes from '../assets/menezes.jpg';
import favarelli from '../assets/favarelli.jpg';
import nonato from '../assets/nonato.jpg';
import js from '../assets/js.png';
import djangowhite from '../assets/djangowhite.png';
import mysql from '../assets/mysql.png';
import footershape3 from '../assets/footer/shape-3.svg';
import chat from '../assets/chat.png';
import graphic from '../assets/graphic1.png'
import gif from '../assets/teste.gif'
import chatbotgif from '../assets/chatbot.gif'

export const OpenMind = () => {
  // logica: FAZER MUDAR O STYLE DA CLASSE PARA A DIV DO CHATBOT FECHAR E ABRIR
  const [visible, setVisible] = useState("button-box-fechar")
  const [pressed, setPressed] = useState(false)

  const setMenuVisible = () => {
    pressed ? setVisible("button-box-fechar") : setVisible("button-box")
    setPressed(!pressed)
  }
  return (
    <>
      {/* NAVBAR  */}
      <div
        className='ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent'
      >
        <div className='container'>
          <div className='relative -mx-4 flex items-center justify-between'>
            <div className='w-60 px-4'>
              <Link to='/openMindconnect' className='navbar-logo block'> <img src={logoOpenMind2} alt='' className='header-logo hover:scale-110 duration-200 ease-in-out' /> </Link>
            </div>
            <div className='flex w-full items-center justify-between px-4'>
              <div>
                <button
                  id='navbarToggler'
                  className='absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden'
                >
                  <span
                    className='relative my-[6px] block h-[2px] w-[30px] bg-white'
                  ></span>
                  <span
                    className='relative my-[6px] block h-[2px] w-[30px] bg-white'
                  ></span>
                  <span
                    className='relative my-[6px] block h-[2px] w-[30px] bg-white'
                  ></span>
                </button>
                <nav
                  id='navbarCollapse'
                  className='absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6'
                >
                  <ul className='blcok lg:flex'>
                    <li className='group relative'>
                      <a
                        href='#home'
                        className='ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70'
                      >
                        Home
                      </a>
                    </li>
                    <li className='group relative'>
                      <a
                        href='#about'
                        className='ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12'
                      >
                        Cliente
                      </a>
                    </li>
                    <li className='group relative'>
                      <a
                        href='#pricing'
                        className='ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12'
                      >
                        Pensar
                      </a>
                    </li>
                    <li className='group relative'>
                      <a
                        href='#team'
                        className='ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12'
                      >
                        Time
                      </a>
                    </li>
                    <li className='group relative'>
                      <a
                        href='#contact'
                        className='ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12'
                      >
                        Contato
                      </a>
                    </li>
                    <li className='submenu-item group relative'>
                      <a
                        href='javascript:void(0)'
                        className='relative mx-8 flex py-2 text-base text-dark after:absolute after:right-1 after:top-1/2 after:mt-[-2px] after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-current group-hover:text-primary lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:after:right-0 lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12'
                      >
                        P??ginas
                      </a>
                      <div
                        className='submenu relative top-full left-0 hidden w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full'
                      >
                        <Link to='/blog' className='block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary'> OpenMind Connect Blog </Link>
                        {/* <Link to='/SignUp' className='block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary'> Sign Up Page </Link>
                        <Link to='/SignIn' className='block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary'> Sign In Page </Link> */}
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <div className='hidden justify-end pr-16 sm:flex lg:pr-0'>
                <Link to='/SignIn' className='loginBtn py-3 px-7 text-base font-medium text-white hover:opacity-70'> Sign In</Link>
                <Link to='/SignUp' className='signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark'> Sign Up </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* HOME  */}
      <div id='home' className='relative overflow-hidden bg-black pt-[120px] md:pt-[130px] lg:pt-[160px]'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap items-center'>
            <div className='w-full px-4'>
              <div
                className='hero-content wow fadeInUp mx-auto max-w-[780px] text-center'
                data-wow-delay='.2s'
              >
                <h1
                  className='light underline decoration-wavy text-white mb-8 text-3xl font-bold sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug' data-text="OpenMind Connect"
                >
                  OpenMind Connect
                </h1>
                <p className='effect mx-auto mb-10 max-w-[600px] text-base text-white sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed'>
                  Uma empresa de tecnologia focada em ajudar seus projetos a crescer, fornecendo solu????es e ferramentas inovadoras para suas opera????es e aumentar sua efici??ncia.
                  <br />
                  Nos dedicamos a promover uma abordagem de mente aberta e colaborativa para o crescimento e sucesso dos neg??cios, ao mesmo tempo em que fornecemos a conectividade e os recursos necess??rios para te ajudar no sucesso!
                </p>
                <div className='wow fadeInUp text-center' data-wow-delay='.3s'>
                </div>
              </div>
            </div>
            <div className='w-full px-4'>
              <div
                className='wow fadeInUp relative z-10 mx-auto max-w-[845px]'
                data-wow-delay='.25s'
              >
                <div className='mt-16'>
                  {/* <img
                    src={gif}
                    alt='hero'
                    className='mx-auto max-w-full rounded-t-xl rounded-tr-xl hover:scale-110 duration-200 ease-in-out'
                  /> */}
                </div>
                <div className='absolute bottom-0 -left-9 z-[-1]'>
                  <svg
                    width='134'
                    height='106'
                    viewBox='0 0 134 106'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {/* <circle
                      cx='1.66667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 1.66667 104)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 16.3333 104)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 31 104)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 45.6667 104)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 60.3333 104)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 88.6667 104)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 117.667 104)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 74.6667 104)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 103 104)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 132 104)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 1.66667 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 16.3333 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 31 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 45.6667 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 60.3333 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 88.6667 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 117.667 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 74.6667 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 103 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 132 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='74.6673'
                      r='1.66667'
                      transform='rotate(-90 1.66667 74.6673)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 1.66667 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 16.3333 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 16.3333 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 31 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 31 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 45.6667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 45.6667 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 60.3333 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 60.3333 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 88.6667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 88.6667 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 117.667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 117.667 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 74.6667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 74.6667 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 103 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 103 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 132 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 132 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 1.66667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 1.66667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 16.3333 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 16.3333 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 31 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 31 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 45.6667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 45.6667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 60.3333 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 60.3333 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 88.6667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 88.6667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 117.667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 117.667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 74.6667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 74.6667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 103 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 103 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 132 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 132 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 1.66667 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 1.66667 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 16.3333 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 16.3333 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 31 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 31 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 45.6667 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 45.6667 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 60.3333 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 60.3333 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 88.6667 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 88.6667 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 117.667 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 117.667 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 74.6667 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 74.6667 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 103 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 103 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 132 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 132 1.66707)'
                      fill='white'
                    />
                  </svg>
                </div>
                <div className='absolute -top-6 -right-6 z-[-1]'>
                  <svg
                    width='134'
                    height='106'
                    viewBox='0 0 134 106'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='1.66667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 1.66667 104)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 16.3333 104)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 31 104)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 45.6667 104)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 60.3333 104)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 88.6667 104)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 117.667 104)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 74.6667 104)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 103 104)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 132 104)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 1.66667 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 16.3333 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 31 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 45.6667 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 60.3333 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 88.6667 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 117.667 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 74.6667 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 103 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 132 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='74.6673'
                      r='1.66667'
                      transform='rotate(-90 1.66667 74.6673)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 1.66667 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 16.3333 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 16.3333 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 31 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 31 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 45.6667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 45.6667 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 60.3333 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 60.3333 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 88.6667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 88.6667 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 117.667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 117.667 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 74.6667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 74.6667 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 103 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 103 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 132 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 132 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 1.66667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 1.66667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 16.3333 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 16.3333 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 31 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 31 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 45.6667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 45.6667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 60.3333 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 60.3333 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 88.6667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 88.6667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 117.667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 117.667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 74.6667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 74.6667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 103 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 103 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 132 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 132 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 1.66667 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 1.66667 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 16.3333 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 16.3333 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 31 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 31 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 45.6667 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 45.6667 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 60.3333 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 60.3333 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 88.6667 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 88.6667 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 117.667 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 117.667 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 74.6667 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 74.6667 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 103 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 103 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 132 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 132 1.66707)'
                      fill='white'
                    /> */}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES  */}
      <section className='section bg2 pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] bg-white'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mb-12 max-w-[620px] lg:mb-20'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  Servi??os
                </span>
                <h2
                  className='mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-dark sm:text-4xl md:text-[42px]'
                >
                  Oferecemos
                </h2>
                <p
                  className='text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed'
                >
                  Uma gama de servi??os destinados a melhorar a comunica????o, aumentar a visibilidade do cliente, automatizar processos e otimizar o desempenho de empresas para que elas possam crescer e alcan??ar novos patamares.
                </p>
              </div>
            </div>
          </div>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4 md:w-1/2 lg:w-1/4'>
              <div className='wow fadeInUp group mb-12 bg-white' data-wow-delay='.1s'>
                <div
                  className='relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary'
                >
                  <span
                    className='absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45'
                  ></span>
                  <svg
                    width='35'
                    height='35'
                    viewBox='0 0 52 52'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M44.9313 11.7H38.9188C40.5438 10.9687 41.7626 9.99374 42.2501 8.69374C42.9001 6.98749 42.2501 5.19999 40.3001 3.33124C38.1876 1.29999 35.9938 0.568738 33.8001 1.13749C29.9813 2.11249 27.4626 7.06874 26.2438 9.99374C25.1063 7.06874 22.5876 2.11249 18.6876 1.13749C16.4938 0.568738 14.3001 1.29999 12.1876 3.33124C10.2376 5.19999 9.5876 6.98749 10.2376 8.69374C10.7251 9.99374 12.0251 10.9687 13.5688 11.7H7.06885C5.0376 11.7 3.4126 13.325 3.4126 15.3562V21.5312C3.4126 23.5625 5.0376 25.1875 7.06885 25.1875H7.71885V46.2312C7.71885 48.8312 9.83135 51.025 12.5126 51.025H40.1376C42.7376 51.025 44.9313 48.9125 44.9313 46.2312V25.1875C46.9626 25.1875 48.5876 23.5625 48.5876 21.5312V15.3562C48.5063 13.325 46.8813 11.7 44.9313 11.7ZM34.5313 3.98124C34.7751 3.89999 35.0188 3.89999 35.1813 3.89999C36.1563 3.89999 37.2126 4.38749 38.2688 5.52499C38.7563 6.01249 39.8126 7.06874 39.5688 7.79999C39.0001 9.34374 33.9626 10.6437 28.9251 11.05C30.0626 8.36874 32.1751 4.54999 34.5313 3.98124ZM13.0001 7.71874C12.7563 6.98749 13.8126 5.93124 14.3001 5.44374C15.4376 4.38749 16.4126 3.81874 17.3876 3.81874C17.6313 3.81874 17.8751 3.81874 18.0376 3.89999C20.4751 4.54999 22.5063 8.28749 23.6438 10.9687C18.6063 10.5625 13.5688 9.26249 13.0001 7.71874ZM42.0063 46.2312C42.0063 47.2875 41.1126 48.1812 40.0563 48.1812H12.4313C11.3751 48.1812 10.4813 47.2875 10.4813 46.2312V25.1875H41.9251V46.2312H42.0063ZM45.6626 21.5312C45.6626 22.0187 45.3376 22.3437 44.8501 22.3437H7.06885C6.6626 22.3437 6.25635 22.0187 6.25635 21.5312V15.3562C6.25635 14.95 6.6626 14.5437 7.06885 14.5437H44.8501C45.2563 14.5437 45.6626 14.8687 45.6626 15.3562V21.5312Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <h4 className='mb-3 text-xl font-bold text-dark'>
                  Perfil ??nico
                </h4>
                <p className='mb-8 text-body-color lg:mb-11'>
                  Montamos um perfil para sua empresa de acordo com suas ideias e expectativas.
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/4'>
              <div
                className='wow fadeInUp group mb-12 bg-white'
                data-wow-delay='.15s'
              >
                <div
                  className='relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary'
                >
                  <span
                    className='absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45'
                  ></span>
                  <svg
                    width='35'
                    height='35'
                    viewBox='0 0 52 52'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M49.8062 23.3187L43.875 17.3875C43.3063 16.8187 42.4125 16.8187 41.8438 17.3875C41.275 17.9562 41.275 18.85 41.8438 19.4187L46.9625 24.6187H27.4625V4.87498L32.5812 10.075C33.15 10.6437 34.0437 10.6437 34.6125 10.075C35.1812 9.50623 35.1812 8.61248 34.6125 8.04373L28.6812 2.11248C27.95 1.38123 26.975 0.974976 26 0.974976C24.9438 0.974976 24.05 1.38123 23.3188 2.11248L17.3875 8.04373C16.8187 8.61248 16.8187 9.50623 17.3875 10.075C17.6312 10.3187 18.0375 10.4812 18.3625 10.4812C18.6875 10.4812 19.0937 10.3187 19.3375 10.075L24.6187 4.87498V24.5375H4.95625L10.075 19.3375C10.6437 18.7687 10.6437 17.875 10.075 17.3062C9.50625 16.7375 8.6125 16.7375 8.04375 17.3062L2.1125 23.2375C0.65 24.7 0.65 27.1375 2.1125 28.6L8.04375 34.5312C8.2875 34.775 8.69375 34.9375 9.01875 34.9375C9.34375 34.9375 9.75 34.775 9.99375 34.5312C10.5625 33.9625 10.5625 33.0687 9.99375 32.5L4.79375 27.3H24.4563V47.125L19.2563 41.925C18.6875 41.3562 17.7938 41.3562 17.225 41.925C16.6563 42.4937 16.6563 43.3875 17.225 43.9562L23.1562 49.8875C23.8875 50.6187 24.8625 51.025 25.8375 51.025C26.8937 51.025 27.7875 50.6187 28.5187 49.8875L34.45 43.9562C35.0188 43.3875 35.0188 42.4937 34.45 41.925C33.8813 41.3562 32.9875 41.3562 32.4188 41.925L27.4625 47.125V27.3812H47.0438L41.8438 32.5812C41.275 33.15 41.275 34.0437 41.8438 34.6125C42.0875 34.8562 42.4938 35.0187 42.8188 35.0187C43.1438 35.0187 43.55 34.8562 43.7938 34.6125L49.725 28.6812C51.2688 27.2187 51.2687 24.7812 49.8062 23.3187Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <h4 className='mb-3 text-xl font-bold text-dark'>
                  Software
                </h4>
                <p className='mb-8 text-body-color lg:mb-11'>
                  Fornecemos servi??os de software empresarial e aplica????o web.
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/4'>
              <div className='wow fadeInUp group mb-12 bg-white' data-wow-delay='.2s'>
                <div
                  className='relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary'
                >
                  <span
                    className='absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45'
                  ></span>
                  <svg
                    width='35'
                    height='35'
                    viewBox='0 0 35 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.7734 14.3281H3.82813C2.07813 14.3281 0.65625 12.9062 0.65625 11.1562V4.21094C0.65625 2.46094 2.07813 1.03906 3.82813 1.03906H10.7734C12.5234 1.03906 13.9453 2.46094 13.9453 4.21094V11.1562C13.9453 12.9062 12.5234 14.3281 10.7734 14.3281ZM3.82813 2.95312C3.17188 2.95312 2.57031 3.5 2.57031 4.21094V11.1562C2.57031 11.8125 3.11719 12.4141 3.82813 12.4141H10.7734C11.4297 12.4141 12.0313 11.8672 12.0313 11.1562V4.21094C12.0313 3.55469 11.4844 2.95312 10.7734 2.95312H3.82813Z'
                      fill='white'
                    />
                    <path
                      d='M31.1719 14.3281H24.2266C22.4766 14.3281 21.0547 12.9062 21.0547 11.1562V4.21094C21.0547 2.46094 22.4766 1.03906 24.2266 1.03906H31.1719C32.9219 1.03906 34.3438 2.46094 34.3438 4.21094V11.1562C34.3438 12.9062 32.9219 14.3281 31.1719 14.3281ZM24.2266 2.95312C23.5703 2.95312 22.9688 3.5 22.9688 4.21094V11.1562C22.9688 11.8125 23.5156 12.4141 24.2266 12.4141H31.1719C31.8281 12.4141 32.4297 11.8672 32.4297 11.1562V4.21094C32.4297 3.55469 31.8828 2.95312 31.1719 2.95312H24.2266Z'
                      fill='white'
                    />
                    <path
                      d='M10.7734 33.9609H3.82813C2.07813 33.9609 0.65625 32.5391 0.65625 30.7891V23.8438C0.65625 22.0938 2.07813 20.6719 3.82813 20.6719H10.7734C12.5234 20.6719 13.9453 22.0938 13.9453 23.8438V30.7891C13.9453 32.5391 12.5234 33.9609 10.7734 33.9609ZM3.82813 22.5859C3.17188 22.5859 2.57031 23.1328 2.57031 23.8438V30.7891C2.57031 31.4453 3.11719 32.0469 3.82813 32.0469H10.7734C11.4297 32.0469 12.0313 31.5 12.0313 30.7891V23.8438C12.0313 23.1875 11.4844 22.5859 10.7734 22.5859H3.82813Z'
                      fill='white'
                    />
                    <path
                      d='M31.1719 33.9609H24.2266C22.4766 33.9609 21.0547 32.5391 21.0547 30.7891V23.8438C21.0547 22.0938 22.4766 20.6719 24.2266 20.6719H31.1719C32.9219 20.6719 34.3438 22.0938 34.3438 23.8438V30.7891C34.3438 32.5391 32.9219 33.9609 31.1719 33.9609ZM24.2266 22.5859C23.5703 22.5859 22.9688 23.1328 22.9688 23.8438V30.7891C22.9688 31.4453 23.5156 32.0469 24.2266 32.0469H31.1719C31.8281 32.0469 32.4297 31.5 32.4297 30.7891V23.8438C32.4297 23.1875 31.8828 22.5859 31.1719 22.5859H24.2266Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <h4 className='mb-3 text-xl font-bold text-dark'>
                  Visibilidade
                </h4>
                <p className='mb-8 text-body-color lg:mb-11'>
                  Um servi??o para alavancar seus clientes e dar visibilidade ao seu perfil.
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/4'>
              <div
                className='wow fadeInUp group mb-12 bg-white'
                data-wow-delay='.25s'
              >
                <div
                  className='relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary'
                >
                  <span
                    className='absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45'
                  ></span>
                  <svg
                    width='35'
                    height='35'
                    viewBox='0 0 35 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M29.5312 21.6562L28.6563 21.1641L29.6953 20.5625C30.7344 19.9062 31.3359 18.8125 31.2812 17.6094C31.2266 16.4063 30.625 15.3125 29.5312 14.7109L27.8906 13.7813L29.6406 12.6875C30.6797 12.0313 31.2812 10.9375 31.2266 9.73438C31.1719 8.53125 30.5703 7.4375 29.4766 6.83594L19.25 1.09375C18.2109 0.492187 16.9531 0.546875 15.9141 1.09375L5.41406 7.21875C4.375 7.82031 3.71875 8.91406 3.71875 10.1172C3.71875 11.3203 4.375 12.4141 5.41406 13.0156L7.10938 14L5.41406 14.9844C4.375 15.5859 3.71875 16.6797 3.71875 17.8828C3.71875 19.0859 4.32031 20.1797 5.41406 20.7812L6.39844 21.3281L5.46875 21.875C4.42969 22.4766 3.77344 23.5703 3.77344 24.7734C3.77344 25.9766 4.375 27.0703 5.46875 27.6719L15.9141 33.6875C16.4609 34.0156 17.0078 34.125 17.6094 34.125C18.2109 34.125 18.8125 33.9609 19.3594 33.6328L29.6953 27.2891C30.7344 26.6328 31.3359 25.5391 31.2812 24.3359C31.2266 23.2969 30.625 22.2031 29.5312 21.6562ZM5.63281 10.1172C5.63281 9.57031 5.90625 9.13281 6.34375 8.85938L16.8438 2.78906C17.0625 2.67969 17.3359 2.57031 17.5547 2.57031C17.7734 2.57031 18.0469 2.625 18.2656 2.73437L28.5469 8.47656C28.9844 8.75 29.2578 9.1875 29.3125 9.73438C29.3125 10.2812 29.0391 10.7188 28.6016 10.9922L18.3203 17.3906C17.8828 17.6641 17.2812 17.6641 16.8438 17.3906L6.39844 11.375C5.90625 11.1562 5.63281 10.6641 5.63281 10.1172ZM5.63281 17.9375C5.63281 17.3906 5.90625 16.9531 6.34375 16.6797L9.02344 15.1484L15.8594 19.0859C16.4062 19.4141 16.9531 19.5234 17.5547 19.5234C18.1562 19.5234 18.7578 19.3594 19.3047 19.0312L26.0312 14.875L28.6016 16.2969C29.0391 16.5703 29.3125 17.0078 29.3672 17.5547C29.3672 18.1016 29.0938 18.5391 28.6563 18.8125L18.3203 25.2656C17.8828 25.5391 17.2812 25.5391 16.8438 25.2656L6.39844 19.25C5.90625 18.9766 5.63281 18.4844 5.63281 17.9375ZM28.6563 25.8125L18.3203 32.2109C17.8828 32.4844 17.2812 32.4844 16.8438 32.2109L6.39844 26.1953C5.96094 25.9219 5.6875 25.4844 5.6875 24.9375C5.6875 24.3906 5.96094 23.9531 6.39844 23.6797L8.3125 22.5859L15.8594 26.9609C16.4062 27.2891 16.9531 27.3984 17.5547 27.3984C18.1562 27.3984 18.7578 27.2344 19.3047 26.9062L26.7969 22.2578L28.6563 23.2969C29.0938 23.5703 29.3672 24.0078 29.4219 24.5547C29.3672 25.0469 29.0938 25.5391 28.6563 25.8125Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <h4 className='mb-3 text-xl font-bold text-dark'>
                  Suporte
                </h4>
                <p className='mb-8 text-body-color lg:mb-11'>
                  Temos suporte para nossos servi??os, treinamento ao cliente e atendimento direto.
                </p>
              </div>
            </div>
          </div>
          <div className={visible}>
            <Chatbot />
            <div className='flex items-center content-center justify-center sm:flex-col'>
              <img src={chatbotgif} alt="" className='h-96' />
            </div>
          </div>
          <button class='button-chat-button duration-200 ease-in-out' onClick={() => setMenuVisible()}>
            <ChatIcon className='w-11 text-green-600 hover:scale-110 duration-200 ease-in-out hover:text-green-400' />
          </button>
        </div>
      </section>

      {/* NOTA  */}
      <section
        id='about'
        className='bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]'
      >
        <div className='container'>
          <div className='wow fadeInUp bg-white rounded-xl ' data-wow-delay='.2s'>
            <div className='-mx-4 flex flex-wrap'>
              <div className='w-full px-4'>
                <div
                  className='items-center justify-between overflow-hidden lg:flex'
                >
                  <div
                    className='w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]'
                  >
                    <span
                      className='mb-5 inline-block bg-primary py-2 px-5 text-sm font-medium text-white'
                    >
                      Nota ao cliente
                    </span>
                    <h2
                      className='mb-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 sm:text-4xl sm:leading-snug 2xl:text-[40px]'
                    >
                      OpenMind Connect
                    </h2>
                    <p className='mb-9 text-base leading-relaxed text-body-color'>
                      A empresa possui uma equipe de desenvolvedores web,
                      designers e criadores de conte??do experientes que trabalham juntos para criar
                      sites de acordo com suas expectativas.
                      Os clientes da OpenMind Connect podem construir confian??a com a empresa
                      que demonstra seu compromisso com a transpar??ncia e responsabilidade.
                    </p>
                    <p className='mb-9 text-base leading-relaxed text-body-color'>
                      Entendemos a import??ncia da divulga????o para empresas que vendem produtos
                      ou servi??os online, para ajudar seus clientes a aproveitar as divulga????es
                      de seus produtos, a OpenMind Connect trabalha em estreita colabora????o com
                      seus clientes para entender suas necessidades e requisitos espec??ficos.
                    </p>
                    <p className='mb-9 text-base leading-relaxed text-body-color'>
                      A equipe de criadores de conte??do da empresa trabalha para criar suas
                      divulga????es, concisas e informativas que atendam a todos os requisitos legais
                      e sejam f??ceis de entender pelos clientes.

                      A OpenMind Connect tamb??m garante que as divulga????es sejam exibidas com
                      destaque em seu pr??prio site redirecionando a p??gina do cliente.
                      A empresa utiliza diversas t??cnicas para chamar a aten????o para as divulga????es
                      dos produtos.
                    </p>
                  </div>
                  <div className='text-center'>
                    <div className='relative z-10 inline-block'>
                      <img
                        src={graphic}
                        alt='image'
                        className='mx-auto lg:ml-auto'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREENCHER  */}
      <section
        id='pricing'
        className='relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]'
      >
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  ??
                </span>
                <h2
                  className='mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 sm:text-4xl md:text-[40px]'
                >
                  Titulo
                </h2>
                <p
                  className='text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed'
                >
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap items-center justify-center'>
            <div className='w-full md:w-1/2 lg:w-1/3'>
              <div
                className='wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12'
                data-wow-delay='.15s
              '
              >
                <span
                  className='mb-2 block text-base font-medium uppercase text-dark'
                >
                  Titulo
                </span>
                <div className='mb-10'>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                </div>
                <span
                  className='absolute left-0 bottom-0 z-[-1] block h-14 w-14 rounded-tr-full bg-primary'
                >
                </span>
              </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3'>
              <div
                className='wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12'
                data-wow-delay='.15s
              '
              >
                <span
                  className='mb-2 block text-base font-medium uppercase text-dark'
                >
                  Titulo
                </span>
                <div className='mb-10'>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                </div>
                <span
                  className='absolute right-0 top-0 z-[-1] block h-14 w-14 rounded-bl-full bg-secondary'
                >
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ  */}
      <section
        className='relative z-20 overflow-hidden bg-[#f3f4ff] pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]'
      >
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  FAQ
                </span>
                <h2
                  className='mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]'
                >
                  Alguma pergunta?
                </h2>
                <p
                  className='text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed'
                >
                  Aqui est??o algumas perguntas que recebemos frequentemente j?? respondidas para voc??.
                </p>
              </div>
            </div>
          </div>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4 lg:w-1/2'>
              <div
                className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                data-wow-delay='.1s
              '
              >
                <button className='faq-btn flex w-full items-center text-left cursor-default'>
                  <div
                    className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'
                  >
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      className='icon fill-current'
                    >
                      <path
                        d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                        fill='#10fc02'
                        stroke='#10fc02'
                      />
                    </svg>
                  </div>
                  <div className='w-full'>
                    <details>
                      <summary className='text-base font-semibold text-black sm:text-lg cursor-pointer hover:text-green-500 duration-300 ease-in-out'>
                        A OpenMind Connect oferece treinamento e suporte para solu????es software?
                      </summary>
                      <p className='py-3 text-base leading-relaxed text-body-color'>
                        Oferecemos treinamento e suporte para solu????es de software para ajud??-los a aprender a manusear de maneira eficaz e eficiente. Tamb??m fornecemos suporte t??cnico cont??nuo para garantir que o software esteja funcionando corretamente e ajudamos a resolver quaisquer problemas que possam surgir.
                      </p>
                    </details>
                  </div>
                </button>
                {/* <div className='faq-content hidden pl-[62px]'>
                  <p className='py-3 text-base leading-relaxed text-body-color'>
                    Colocar resposta
                  </p>
                </div> */}
              </div>
              <div
                className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                data-wow-delay='.15s
              '
              >
                <button className='faq-btn flex w-full items-center text-left cursor-default'>
                  <div
                    className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'
                  >
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      className='icon fill-current'
                    >
                      <path
                        d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                        fill='#10fc02'
                        stroke='#10fc02'
                      />
                    </svg>
                  </div>
                  <div className='w-full'>
                    <details>
                      <summary className='text-base font-semibold text-black sm:text-lg cursor-pointer hover:text-green-500 duration-300 ease-in-out'>
                        E quanto a lei LGPD?
                      </summary>
                      <p className='py-3 text-base leading-relaxed text-body-color'>
                        Seguimos as diretrizes estabelecidas pela Lei Geral de Prote????o de Dados (LGPD), adotamos medidas t??cnicas e organizacionais adequadas para garantir a prote????o dos dados pessoais.
                      </p>
                    </details>
                  </div>
                </button>
                {/* <div className='faq-content hidden pl-[62px]'>
                  <p className='py-3 text-base leading-relaxed text-body-color'>
                    Colocar resposta
                  </p>
                </div> */}
              </div>
              <div
                className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                data-wow-delay='.2s
              '
              >
                <button className='faq-btn flex w-full items-center text-left cursor-default'>
                  <div
                    className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'
                  >
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      className='icon fill-current'
                    >
                      <path
                        d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                        fill='#10fc02'
                        stroke='#10fc02'
                      />
                    </svg>
                  </div>
                  <div className='w-full'>
                    <details>
                      <summary className='text-base font-semibold text-black sm:text-lg cursor-pointer hover:text-green-500 duration-300 ease-in-out'>
                        Vou ter minhas expectativas alcan??adas?
                      </summary>
                      <p className='py-3 text-base leading-relaxed text-body-color'>
                        A OpenMind Connect garante que suas expectativas sejam alcan??adas, para isso, seguimos algumas boas pr??ticas, tais como a de compreender as necessidades do cliente, comunica????o clara sobre o processo a ser feito, estabelecimento de metas, entre outras.
                      </p>
                    </details>
                  </div>
                </button>
                {/* <div className='faq-content hidden pl-[62px]'>
                  <p className='py-3 text-base leading-relaxed text-body-color'>
                    Colocar resposta
                  </p>
                </div> */}
              </div>
            </div>
            <div className='w-full px-4 lg:w-1/2'>
              <div
                className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                data-wow-delay='.1s
              '
              >
                <button className='faq-btn flex w-full items-center text-left cursor-default'>
                  <div
                    className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'
                  >
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      className='icon fill-current'
                    >
                      <path
                        d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                        fill='#10fc02'
                        stroke='#10fc02'
                      />
                    </svg>
                  </div>
                  <div className='w-full'>
                    <details>
                      <summary className='text-base font-semibold text-black sm:text-lg cursor-pointer hover:text-green-500 duration-300 ease-in-out'>
                        Como a OpenMind Connect se mant??m atualizada com as ??ltimas tend??ncias tecnol??gicas?
                      </summary>
                      <p className='py-3 text-base leading-relaxed text-body-color'>
                        Investimos em pesquisas e desenvolvimento para desenvolver novas tecnologias e aprimorar as existentes, mantendo-se dentro do mercado de trabalho junto com profissionais qualificados para gerenciar e implementar tecnologias de ponta.
                      </p>
                    </details>
                  </div>
                </button>
                {/* <div className='faq-content hidden pl-[62px]'>
                  <p className='py-3 text-base leading-relaxed text-body-color'>
                    Colocar resposta
                  </p>
                </div> */}
              </div>
              <div
                className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                data-wow-delay='.15s
              '
              >
                <button className='faq-btn flex w-full items-center text-left cursor-default'>
                  <div
                    className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'
                  >
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      className='icon fill-current'
                    >
                      <path
                        d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                        fill='#10fc02'
                        stroke='#10fc02'
                      />
                    </svg>
                  </div>
                  <div className='w-full'>
                    <details>
                      <summary className='text-base font-semibold text-black sm:text-lg cursor-pointer hover:text-green-500 duration-300 ease-in-out'>
                        Quais setores a OpenMind Connect atende?
                      </summary>
                      <p className='py-3 text-base leading-relaxed text-body-color'>
                        Colocar resposta
                      </p>
                    </details>
                  </div>
                </button>
                {/* <div className='faq-content hidden pl-[62px]'>
                  <p className='py-3 text-base leading-relaxed text-body-color'>
                    Colocar resposta
                  </p>
                </div> */}
              </div>
              <div
                className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                data-wow-delay='.2s
              '
              >
                <button className='faq-btn flex w-full items-center text-left cursor-default'>
                  <div
                    className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'
                  >
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      className='icon fill-current'
                    >
                      <path
                        d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                        fill='#10fc02'
                        stroke='#10fc02'
                      />
                    </svg>
                  </div>
                  <div className='w-full'>
                    <details>
                      <summary className='text-base font-semibold text-black sm:text-lg cursor-pointer hover:text-green-500 duration-300 ease-in-out'>
                        A OpenMind Connect ?? confi??vel?
                      </summary>
                      <p className='py-3 text-base leading-relaxed text-body-color'>

                        Demonstramos capacidade de cumprir com nossas obriga????es e promessas aos clientes, somos uma empresa de total transpar??ncia e mente aberta para uma comunica????o de maneira clara e oferecemos um trabalho de total qualidade!
                      </p>
                    </details>
                  </div>
                </button>
                {/* <div className='faq-content hidden pl-[62px]'>
                  <p className='py-3 text-base leading-relaxed text-body-color'>
                    Colocar resposta
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 right-0 z-[-1]'>
          <svg
            width='1440'
            height='886'
            viewBox='0 0 1440 886'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              opacity='0.5'
              d='M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z'
              fill='url(#paint0_linear)'
            />
            <defs>
              <linearGradient
                id='paint0_linear'
                x1='1308.65'
                y1='1142.58'
                x2='602.827'
                y2='-418.681'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#10fc02' stop-opacity='0.36' />
                <stop offset='1' stop-color='#F5F2FD' stop-opacity='0' />
                <stop offset='1' stop-color='#F5F2FD' stop-opacity='0.096144' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* FEEDBACKS  */}
      <section id='testimonials' className='pt-20 md:pt-[120px]'>
        <div className='container px-4'>
          <div className='flex flex-wrap'>
            <div className='mx-4 w-full'>
              <div className='mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  Feedbacks
                </span>
                <h2
                  className='mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-white sm:text-4xl md:text-[42px]'
                >
                  O que nossos clientes dizem sobre n??s
                </h2>
                <p
                  className='text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed'
                >
                  O essencial para a nossa forma de trabalhar ?? o nosso foco na constru????o de rela????es fortes com os nossos clientes.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div
                className='ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial'
                data-wow-delay='.1s
              '
              >
                <div className='ud-testimonial-ratings mb-3 flex items-center'>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                </div>
                <div className='ud-testimonial-content mb-6'>
                  <p className='text-base tracking-wide text-body-color'>
                    ???Eles s??o uma parte vital do nosso neg??cio ?? medida que muitas vezes precisamos de seus conhecimentos.
                  </p>
                </div>
                <div className='ud-testimonial-info flex items-center'>
                  <div
                    className='ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full'
                  >
                    <img
                      src={logoOpenMind1}
                      alt='author'
                    />
                  </div>
                  <div className='ud-testimonial-meta'>
                    <h4 className='text-sm font-semibold'>Sabo Mathias</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div
                className='ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial'
                data-wow-delay='.15s
              '
              >
                <div className='ud-testimonial-ratings mb-3 flex items-center'>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                </div>
                <div className='ud-testimonial-content mb-6'>
                  <p className='text-base tracking-wide text-body-color'>
                    ???A performance do nosso site melhorou em 1000%, realmente est?? percept??vel o bom trabalho da empresa.
                  </p>
                </div>
                <div className='ud-testimonial-info flex items-center'>
                  <div
                    className='ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full'
                  >
                    <img
                      src={logoOpenMind1}
                      alt='author'
                    />
                  </div>
                  <div className='ud-testimonial-meta'>
                    <h4 className='text-sm font-semibold'>Mateus German</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div
                className='ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial'
                data-wow-delay='.2s
              '
              >
                <div className='ud-testimonial-ratings mb-3 flex items-center'>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                </div>
                <div className='ud-testimonial-content mb-6'>
                  <p className='text-base tracking-wide text-body-color'>
                    ???A qualidade do servi??o ??, de forma geral, realmente superior.
                    Continuem garantindo este n??vel de excel??ncia, ?? um diferencial.
                  </p>
                </div>
                <div className='ud-testimonial-info flex items-center'>
                  <div
                    className='ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full'
                  >
                    <img
                      src={logoOpenMind1}
                      alt='author'
                    />
                  </div>
                  <div className='ud-testimonial-meta'>
                    <h4 className='text-sm font-semibold'>William Souza</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className='mx-4 w-full'>
              <div className='wow fadeInUp' data-wow-delay='.2s'>
                <div className='ud-title mb-8'>
                  <h6
                    className='relative inline-flex items-center text-xs font-normal text-white'
                  >
                    Algumas tecnologias que usamos
                    <span className='ml-4 inline-block h-[1px] w-8 bg-[#d0d1d3]'>
                    </span>
                  </h6>
                </div>
                <div className='ud-brands-logo flex flex-wrap items-center'>
                  <div className='ud-single-logo mr-10 mb-5 max-w-[140px]'>
                    <a
                      href=''
                      target='_blank'
                      rel='nofollow noopner'
                    >
                      <img
                        src={react}
                        alt=''
                        className='grayscale duration-300 hover:filter-none'
                      />
                    </a>
                  </div>
                  <div className='ud-single-logo mr-10 mb-5 max-w-[140px]'>
                    <a
                      href=''
                      target='_blank'
                      rel='nofollow noopner'
                    >
                      <img
                        src={tailwindwhite}
                        alt=''
                        className='grayscale duration-300 hover:filter-none'
                      />
                    </a>
                  </div>
                  <div className='ud-single-logo mr-10 mb-5 max-w-[140px]'>
                    <a
                      href=''
                      target='_blank'
                      rel='nofollow noopner'
                    >
                      <img
                        src={firebasewhite}
                        alt=''
                        className='grayscale duration-300 hover:filter-none'
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPERS  */}
      <section id='team' className='pt-20 pb-10 lg:pt-[120px] lg:pb-20'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[620px] text-center'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  CEO
                </span>
                <h2
                  className='mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]'
                >
                  Time
                </h2>
                <p
                  className='text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed'
                >
                  Equipe de Desenvolvedores e Fundadores da OpenMind Connect.
                </p>
              </div>
            </div>
          </div>
          <div className='-mx-4 flex flex-wrap justify-center'>
            <div className='w-full px-4 sm:w-1/2 lg:w-1/4'>
              <div className='wow fadeInUp mb-10' data-wow-delay='.15s'>
                <div
                  className='h-170px] relative z-10 mx-auto mb-6 w-[170px] rounded-full'
                >
                  <img
                    src={menezes}
                    alt='image'
                    className='w-full rounded-full hover:scale-110 duration-200 ease-in-out'
                  />
                  <span className='absolute top-0 left-0 z-[-1]'>
                    <svg
                      width='71'
                      height='82'
                      viewBox='0 0 71 82'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='1.29337'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 1.29337 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 12.6747 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 24.0575 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 35.4379 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 46.8197 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 68.807 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9443'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 57.9443 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 1.29337 69.3249)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 12.6747 69.3249)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 24.0575 69.3249)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 35.4379 69.3249)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 46.8197 69.325)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 68.807 69.325)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9433'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 57.9433 69.325)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 1.29337 57.9433)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 1.29337 24.0568)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 12.6747 57.9433)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 12.6747 24.0568)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 24.0575 57.9433)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 24.0575 24.0568)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 35.4379 57.9433)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 35.4379 24.0568)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 46.8197 57.9431)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 46.8197 24.0567)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 68.807 57.9431)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 68.807 24.0567)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9433'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 57.9433 57.9431)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9443'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 57.9443 24.0567)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 1.29337 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 1.29337 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 12.6747 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 12.6747 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 24.0575 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 24.0575 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 35.4379 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 35.4379 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 46.8197 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 46.8197 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 68.807 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 68.807 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9433'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 57.9433 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9443'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 57.9443 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 1.29337 35.1798)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='1.2933'
                        r='1.29337'
                        transform='rotate(-90 1.29337 1.2933)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 12.6747 35.1798)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='1.2933'
                        r='1.29337'
                        transform='rotate(-90 12.6747 1.2933)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 24.0575 35.1798)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='1.29336'
                        r='1.29337'
                        transform='rotate(-90 24.0575 1.29336)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 35.4379 35.1798)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='1.29336'
                        r='1.29337'
                        transform='rotate(-90 35.4379 1.29336)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 46.8197 35.18)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 46.8197 1.29354)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 68.807 35.18)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 68.807 1.29354)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9443'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 57.9443 35.18)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9443'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 57.9443 1.29354)'
                        fill='#10fc02'
                      />
                    </svg>
                  </span>
                  <span className='absolute right-0 bottom-0'>
                    <svg
                      width='22'
                      height='22'
                      viewBox='0 0 22 22'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z'
                        stroke='#13C296'
                      />
                    </svg>
                  </span>
                </div>
                <div className='text-center'>
                  <h4 className='mb-2 text-lg font-medium text-dark'>Luiz Felipe</h4>
                  <p className='mb-5 text-sm font-medium text-body-color'>
                    Gerente de Pesquisa e Desenvolvimento
                  </p>
                  <div className='flex items-center justify-center'>
                    <a
                      href='javascript:void(0)'
                      className='mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-primary'
                    >
                      <svg
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        className='fill-current'
                      >
                        <path
                          d='M16.7821 0.947388H1.84847C1.14272 0.947388 0.578125 1.49747 0.578125 2.18508V16.7623C0.578125 17.4224 1.14272 18 1.84847 18H16.7257C17.4314 18 17.996 17.4499 17.996 16.7623V2.15757C18.0525 1.49747 17.4879 0.947388 16.7821 0.947388ZM5.7442 15.4421H3.17528V7.32837H5.7442V15.4421ZM4.44563 6.2007C3.59873 6.2007 2.94944 5.5406 2.94944 4.74297C2.94944 3.94535 3.62696 3.28525 4.44563 3.28525C5.26429 3.28525 5.94181 3.94535 5.94181 4.74297C5.94181 5.5406 5.32075 6.2007 4.44563 6.2007ZM15.4835 15.4421H12.9146V11.509C12.9146 10.5739 12.8864 9.33618 11.5596 9.33618C10.2045 9.33618 10.0069 10.3813 10.0069 11.4265V15.4421H7.438V7.32837H9.95046V8.45605H9.9787C10.3457 7.79594 11.1644 7.13584 12.4347 7.13584C15.0601 7.13584 15.54 8.7861 15.54 11.0414V15.4421H15.4835Z'
                        />
                      </svg>
                    </a>
                    <a
                      href='javascript:void(0)'
                      className='mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-primary'
                    >
                      <svg
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        className='fill-current'
                      >
                        <path
                          d='M8.90245 12.1939C10.7363 12.1939 12.2229 10.7073 12.2229 8.87352C12.2229 7.0397 10.7363 5.5531 8.90245 5.5531C7.06863 5.5531 5.58203 7.0397 5.58203 8.87352C5.58203 10.7073 7.06863 12.1939 8.90245 12.1939Z'
                        />
                        <path
                          d='M12.5088 0H5.23824C2.34719 0 0 2.34719 0 5.23824V12.4516C0 15.3999 2.34719 17.7471 5.23824 17.7471H12.4516C15.3999 17.7471 17.7471 15.3999 17.7471 12.5088V5.23824C17.7471 2.34719 15.3999 0 12.5088 0ZM8.90215 13.2244C6.46909 13.2244 4.55126 11.2493 4.55126 8.87353C4.55126 6.49771 6.49771 4.52264 8.90215 4.52264C11.278 4.52264 13.2244 6.49771 13.2244 8.87353C13.2244 11.2493 11.3066 13.2244 8.90215 13.2244ZM14.9133 4.92338C14.627 5.23824 14.1976 5.40999 13.711 5.40999C13.2817 5.40999 12.8523 5.23824 12.5088 4.92338C12.1939 4.60851 12.0222 4.20777 12.0222 3.72116C12.0222 3.23454 12.1939 2.86243 12.5088 2.51894C12.8237 2.17545 13.2244 2.0037 13.711 2.0037C14.1404 2.0037 14.5984 2.17545 14.9133 2.49031C15.1995 2.86243 15.3999 3.29179 15.3999 3.74978C15.3712 4.20777 15.1995 4.60851 14.9133 4.92338Z'
                        />
                        <path
                          d='M13.7397 3.03418C13.3676 3.03418 13.0527 3.34905 13.0527 3.72116C13.0527 4.09328 13.3676 4.40815 13.7397 4.40815C14.1118 4.40815 14.4267 4.09328 14.4267 3.72116C14.4267 3.34905 14.1405 3.03418 13.7397 3.03418Z'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full px-4 sm:w-1/2 lg:w-1/4'>
              <div className='wow fadeInUp mb-10' data-wow-delay='.2s'>
                <div
                  className='h-170px] relative z-10 mx-auto mb-6 w-[170px] rounded-full'
                >
                  <img
                    src={favarelli}
                    alt='image'
                    className='w-full rounded-full hover:scale-110 duration-200 ease-in-out'
                  />
                  <span className='absolute top-0 left-0 z-[-1]'>
                    <svg
                      width='71'
                      height='82'
                      viewBox='0 0 71 82'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='1.29337'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 1.29337 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 12.6747 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 24.0575 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 35.4379 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 46.8197 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 68.807 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9443'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 57.9443 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 1.29337 69.3249)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 12.6747 69.3249)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 24.0575 69.3249)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 35.4379 69.3249)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 46.8197 69.325)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 68.807 69.325)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9433'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 57.9433 69.325)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 1.29337 57.9433)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 1.29337 24.0568)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 12.6747 57.9433)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 12.6747 24.0568)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 24.0575 57.9433)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 24.0575 24.0568)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 35.4379 57.9433)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 35.4379 24.0568)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 46.8197 57.9431)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 46.8197 24.0567)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 68.807 57.9431)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 68.807 24.0567)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9433'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 57.9433 57.9431)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9443'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 57.9443 24.0567)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 1.29337 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 1.29337 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 12.6747 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 12.6747 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 24.0575 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 24.0575 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 35.4379 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 35.4379 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 46.8197 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 46.8197 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 68.807 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 68.807 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9433'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 57.9433 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9443'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 57.9443 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 1.29337 35.1798)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='1.2933'
                        r='1.29337'
                        transform='rotate(-90 1.29337 1.2933)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 12.6747 35.1798)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='1.2933'
                        r='1.29337'
                        transform='rotate(-90 12.6747 1.2933)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 24.0575 35.1798)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='1.29336'
                        r='1.29337'
                        transform='rotate(-90 24.0575 1.29336)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 35.4379 35.1798)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='1.29336'
                        r='1.29337'
                        transform='rotate(-90 35.4379 1.29336)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 46.8197 35.18)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 46.8197 1.29354)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 68.807 35.18)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 68.807 1.29354)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9443'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 57.9443 35.18)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9443'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 57.9443 1.29354)'
                        fill='#10fc02'
                      />
                    </svg>
                  </span>
                  <span className='absolute right-0 bottom-0'>
                    <svg
                      width='22'
                      height='22'
                      viewBox='0 0 22 22'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z'
                        stroke='#13C296'
                      />
                    </svg>
                  </span>
                </div>
                <div className='text-center'>
                  <h4 className='mb-2 text-lg font-medium text-dark'>
                    Thaiza Favarelli
                  </h4>
                  <p className='mb-5 text-sm font-medium text-body-color'>
                    Developer FullStack
                  </p>
                  <div className='flex items-center justify-center'>
                    <a
                      href='javascript:void(0)'
                      className='mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-primary'
                    >
                      <svg
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        className='fill-current'
                      >
                        <path
                          d='M16.7821 0.947388H1.84847C1.14272 0.947388 0.578125 1.49747 0.578125 2.18508V16.7623C0.578125 17.4224 1.14272 18 1.84847 18H16.7257C17.4314 18 17.996 17.4499 17.996 16.7623V2.15757C18.0525 1.49747 17.4879 0.947388 16.7821 0.947388ZM5.7442 15.4421H3.17528V7.32837H5.7442V15.4421ZM4.44563 6.2007C3.59873 6.2007 2.94944 5.5406 2.94944 4.74297C2.94944 3.94535 3.62696 3.28525 4.44563 3.28525C5.26429 3.28525 5.94181 3.94535 5.94181 4.74297C5.94181 5.5406 5.32075 6.2007 4.44563 6.2007ZM15.4835 15.4421H12.9146V11.509C12.9146 10.5739 12.8864 9.33618 11.5596 9.33618C10.2045 9.33618 10.0069 10.3813 10.0069 11.4265V15.4421H7.438V7.32837H9.95046V8.45605H9.9787C10.3457 7.79594 11.1644 7.13584 12.4347 7.13584C15.0601 7.13584 15.54 8.7861 15.54 11.0414V15.4421H15.4835Z'
                        />
                      </svg>
                    </a>
                    <a
                      href='javascript:void(0)'
                      className='mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-primary'
                    >
                      <svg
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        className='fill-current'
                      >
                        <path
                          d='M8.90245 12.1939C10.7363 12.1939 12.2229 10.7073 12.2229 8.87352C12.2229 7.0397 10.7363 5.5531 8.90245 5.5531C7.06863 5.5531 5.58203 7.0397 5.58203 8.87352C5.58203 10.7073 7.06863 12.1939 8.90245 12.1939Z'
                        />
                        <path
                          d='M12.5088 0H5.23824C2.34719 0 0 2.34719 0 5.23824V12.4516C0 15.3999 2.34719 17.7471 5.23824 17.7471H12.4516C15.3999 17.7471 17.7471 15.3999 17.7471 12.5088V5.23824C17.7471 2.34719 15.3999 0 12.5088 0ZM8.90215 13.2244C6.46909 13.2244 4.55126 11.2493 4.55126 8.87353C4.55126 6.49771 6.49771 4.52264 8.90215 4.52264C11.278 4.52264 13.2244 6.49771 13.2244 8.87353C13.2244 11.2493 11.3066 13.2244 8.90215 13.2244ZM14.9133 4.92338C14.627 5.23824 14.1976 5.40999 13.711 5.40999C13.2817 5.40999 12.8523 5.23824 12.5088 4.92338C12.1939 4.60851 12.0222 4.20777 12.0222 3.72116C12.0222 3.23454 12.1939 2.86243 12.5088 2.51894C12.8237 2.17545 13.2244 2.0037 13.711 2.0037C14.1404 2.0037 14.5984 2.17545 14.9133 2.49031C15.1995 2.86243 15.3999 3.29179 15.3999 3.74978C15.3712 4.20777 15.1995 4.60851 14.9133 4.92338Z'
                        />
                        <path
                          d='M13.7397 3.03418C13.3676 3.03418 13.0527 3.34905 13.0527 3.72116C13.0527 4.09328 13.3676 4.40815 13.7397 4.40815C14.1118 4.40815 14.4267 4.09328 14.4267 3.72116C14.4267 3.34905 14.1405 3.03418 13.7397 3.03418Z'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full px-4 sm:w-1/2 lg:w-1/4'>
              <div className='wow fadeInUp mb-10' data-wow-delay='.25s'>
                <div
                  className='h-170px] relative z-10 mx-auto mb-6 w-[170px] rounded-full'
                >
                  <img
                    src={nonato}
                    alt='image'
                    className='w-full rounded-full hover:scale-110 duration-200 ease-in-out'
                  />
                  <span className='absolute top-0 left-0 z-[-1]'>
                    <svg
                      width='71'
                      height='82'
                      viewBox='0 0 71 82'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='1.29337'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 1.29337 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 12.6747 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 24.0575 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 35.4379 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 46.8197 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 68.807 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9443'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 57.9443 80.7066)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 1.29337 69.3249)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 12.6747 69.3249)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 24.0575 69.3249)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 35.4379 69.3249)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 46.8197 69.325)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 68.807 69.325)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9433'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 57.9433 69.325)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 1.29337 57.9433)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 1.29337 24.0568)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 12.6747 57.9433)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 12.6747 24.0568)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 24.0575 57.9433)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 24.0575 24.0568)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 35.4379 57.9433)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 35.4379 24.0568)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 46.8197 57.9431)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 46.8197 24.0567)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 68.807 57.9431)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 68.807 24.0567)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9433'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 57.9433 57.9431)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9443'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 57.9443 24.0567)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 1.29337 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 1.29337 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 12.6747 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 12.6747 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 24.0575 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 24.0575 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 35.4379 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 35.4379 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 46.8197 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 46.8197 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 68.807 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 68.807 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9433'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 57.9433 46.5615)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9443'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 57.9443 12.6751)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 1.29337 35.1798)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='1.29337'
                        cy='1.2933'
                        r='1.29337'
                        transform='rotate(-90 1.29337 1.2933)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 12.6747 35.1798)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='12.6747'
                        cy='1.2933'
                        r='1.29337'
                        transform='rotate(-90 12.6747 1.2933)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 24.0575 35.1798)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='24.0575'
                        cy='1.29336'
                        r='1.29337'
                        transform='rotate(-90 24.0575 1.29336)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 35.4379 35.1798)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='35.4379'
                        cy='1.29336'
                        r='1.29337'
                        transform='rotate(-90 35.4379 1.29336)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 46.8197 35.18)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='46.8197'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 46.8197 1.29354)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 68.807 35.18)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='68.807'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 68.807 1.29354)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9443'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 57.9443 35.18)'
                        fill='#10fc02'
                      />
                      <circle
                        cx='57.9443'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 57.9443 1.29354)'
                        fill='#10fc02'
                      />
                    </svg>
                  </span>
                  <span className='absolute right-0 bottom-0'>
                    <svg
                      width='22'
                      height='22'
                      viewBox='0 0 22 22'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z'
                        stroke='#13C296'
                      />
                    </svg>
                  </span>
                </div>
                <div className='text-center'>
                  <h4 className='mb-2 text-lg font-medium text-dark'>
                    Gustavo Nonato
                  </h4>
                  <p className='mb-5 text-sm font-medium text-body-color'>
                    Gerente de M??dias Sociais e Publicidade e Propaganda
                  </p>
                  <div className='flex items-center justify-center'>
                    <a
                      href='javascript:void(0)'
                      className='mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-primary'
                    >
                      <svg
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        className='fill-current'
                      >
                        <path
                          d='M16.7821 0.947388H1.84847C1.14272 0.947388 0.578125 1.49747 0.578125 2.18508V16.7623C0.578125 17.4224 1.14272 18 1.84847 18H16.7257C17.4314 18 17.996 17.4499 17.996 16.7623V2.15757C18.0525 1.49747 17.4879 0.947388 16.7821 0.947388ZM5.7442 15.4421H3.17528V7.32837H5.7442V15.4421ZM4.44563 6.2007C3.59873 6.2007 2.94944 5.5406 2.94944 4.74297C2.94944 3.94535 3.62696 3.28525 4.44563 3.28525C5.26429 3.28525 5.94181 3.94535 5.94181 4.74297C5.94181 5.5406 5.32075 6.2007 4.44563 6.2007ZM15.4835 15.4421H12.9146V11.509C12.9146 10.5739 12.8864 9.33618 11.5596 9.33618C10.2045 9.33618 10.0069 10.3813 10.0069 11.4265V15.4421H7.438V7.32837H9.95046V8.45605H9.9787C10.3457 7.79594 11.1644 7.13584 12.4347 7.13584C15.0601 7.13584 15.54 8.7861 15.54 11.0414V15.4421H15.4835Z'
                        />
                      </svg>
                    </a>
                    <a
                      href='javascript:void(0)'
                      className='mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-primary'
                    >
                      <svg
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        className='fill-current'
                      >
                        <path
                          d='M8.90245 12.1939C10.7363 12.1939 12.2229 10.7073 12.2229 8.87352C12.2229 7.0397 10.7363 5.5531 8.90245 5.5531C7.06863 5.5531 5.58203 7.0397 5.58203 8.87352C5.58203 10.7073 7.06863 12.1939 8.90245 12.1939Z'
                        />
                        <path
                          d='M12.5088 0H5.23824C2.34719 0 0 2.34719 0 5.23824V12.4516C0 15.3999 2.34719 17.7471 5.23824 17.7471H12.4516C15.3999 17.7471 17.7471 15.3999 17.7471 12.5088V5.23824C17.7471 2.34719 15.3999 0 12.5088 0ZM8.90215 13.2244C6.46909 13.2244 4.55126 11.2493 4.55126 8.87353C4.55126 6.49771 6.49771 4.52264 8.90215 4.52264C11.278 4.52264 13.2244 6.49771 13.2244 8.87353C13.2244 11.2493 11.3066 13.2244 8.90215 13.2244ZM14.9133 4.92338C14.627 5.23824 14.1976 5.40999 13.711 5.40999C13.2817 5.40999 12.8523 5.23824 12.5088 4.92338C12.1939 4.60851 12.0222 4.20777 12.0222 3.72116C12.0222 3.23454 12.1939 2.86243 12.5088 2.51894C12.8237 2.17545 13.2244 2.0037 13.711 2.0037C14.1404 2.0037 14.5984 2.17545 14.9133 2.49031C15.1995 2.86243 15.3999 3.29179 15.3999 3.74978C15.3712 4.20777 15.1995 4.60851 14.9133 4.92338Z'
                        />
                        <path
                          d='M13.7397 3.03418C13.3676 3.03418 13.0527 3.34905 13.0527 3.72116C13.0527 4.09328 13.3676 4.40815 13.7397 4.40815C14.1118 4.40815 14.4267 4.09328 14.4267 3.72116C14.4267 3.34905 14.1405 3.03418 13.7397 3.03418Z'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT  */}
      <section id='contact' className='relative py-20 md:py-[120px]'>
        <div
          className='absolute top-0 left-0 z-[-1] h-1/2 w-full bg-[#f3f4fe] lg:h-[45%] xl:h-1/2'
        ></div>
        <div className='container px-4'>
          <div className='-mx-4 flex flex-wrap items-center'>
            <div className='w-full px-4 lg:w-7/12 xl:w-8/12'>
              <div className='ud-contact-content-wrapper'>
                <div className='ud-contact-title mb-12 lg:mb-[150px]'>
                  <span className='mb-5 text-base font-semibold text-dark'>
                    CONTATE-NOS
                  </span>
                  <h2 className='text-[35px] font-semibold'>
                    Adoramos te ouvir! <br />
                    Tire d??vidas, entre em contato.
                  </h2>
                </div>
                <div className='mb-12 flex flex-wrap justify-between lg:mb-0'>
                  <div className='mb-8 flex w-[330px] max-w-full'>
                    <div className='mr-6 text-[32px] text-primary'>
                      <svg
                        width='34'
                        height='25'
                        viewBox='0 0 34 25'
                        className='fill-current'
                      >
                        <path
                          d='M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z'
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className='mb-6 text-lg text-white font-semibold'>Como podemos ajudar?</h5>
                      <p className='text-base text-body-color'>openMindconnect@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full px-4 lg:w-5/12 xl:w-4/12'>
              <div
                className='wow fadeInUp rounded-lg bg-white py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]'
                data-wow-delay='.2s
              '
              >
                <h3 className='mb-8 text-2xl font-semibold md:text-[26px]'>
                  Envie-nos uma mensagem
                </h3>
                <form>
                  <div className='mb-6'>
                    <label for='fullName' className='block text-xs text-dark'
                    >Nome Completo*</label
                    >
                    <input
                      type='text'
                      name='fullName'
                      placeholder='OpenMind Connect'
                      className='w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none'
                    />
                  </div>
                  <div className='mb-6'>
                    <label for='email' className='block text-xs text-dark'
                    >Email*</label
                    >
                    <input
                      type='email'
                      name='email'
                      placeholder='openMindconnect@gmail.com'
                      className='w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none'
                    />
                  </div>
                  <div className='mb-6'>
                    <label for='phone' className='block text-xs text-dark'
                    >Telefone/Celular*</label
                    >
                    <input
                      type='text'
                      name='phone'
                      placeholder='+55 19 99423-8412'
                      className='w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none'
                    />
                  </div>
                  <div className='mb-6'>
                    <label for='message' className='block text-xs text-dark'
                    >Mensagem*</label
                    >
                    <textarea
                      name='message'
                      rows='1'
                      placeholder='digite sua mensagem aqui'
                      className='w-full resize-none border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none'
                    ></textarea>
                  </div>
                  <div className='mb-0'>
                    <button
                      type='submit'
                      className='inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark'
                    >
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className='wow fadeInUp relative z-10 bg-black pt-20 lg:pt-[120px]'
        data-wow-delay='.15s'
      >
        <div className='container'>
          <div className='footerinfo -mx-4 flex flex-wrap'>
            <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12'>
              <div className='mb-10 w-full'>
                <a
                  href='javascript:void(0)'
                  className='mb-6 inline-block max-w-[160px]'
                >
                  <img
                    src={logoOpenMind1}
                    alt='logo'
                    className='w-28 hover:rotate-6 scale-110 duration-200 ease-in-out'
                  />
                </a>
                <p className='mb-7 text-base text-[#f3f4fe]'>
                  Vamos transformar sua vis??o em realidade e conecta-l?? ao mundo!
                </p>
                <div className='-mx-3 flex items-center'>
                  <a
                    href='javascript:void(0)'
                    className='px-3 text-[#dddddd] hover:text-white'
                  >
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 18 18'
                      className='fill-current'
                    >
                      <path
                        d='M8.91688 12.4995C10.6918 12.4995 12.1306 11.0911 12.1306 9.35385C12.1306 7.61655 10.6918 6.20819 8.91688 6.20819C7.14197 6.20819 5.70312 7.61655 5.70312 9.35385C5.70312 11.0911 7.14197 12.4995 8.91688 12.4995Z'
                      />
                      <path
                        d='M12.4078 0.947388H5.37075C2.57257 0.947388 0.300781 3.17104 0.300781 5.90993V12.7436C0.300781 15.5367 2.57257 17.7604 5.37075 17.7604H12.3524C15.2059 17.7604 17.4777 15.5367 17.4777 12.7978V5.90993C17.4777 3.17104 15.2059 0.947388 12.4078 0.947388ZM8.91696 13.4758C6.56206 13.4758 4.70584 11.6047 4.70584 9.35389C4.70584 7.10312 6.58976 5.23199 8.91696 5.23199C11.2165 5.23199 13.1004 7.10312 13.1004 9.35389C13.1004 11.6047 11.2442 13.4758 8.91696 13.4758ZM14.735 5.61164C14.4579 5.90993 14.0423 6.07264 13.5714 6.07264C13.1558 6.07264 12.7402 5.90993 12.4078 5.61164C12.103 5.31334 11.9368 4.9337 11.9368 4.47269C11.9368 4.01169 12.103 3.65916 12.4078 3.33375C12.7125 3.00834 13.1004 2.84563 13.5714 2.84563C13.9869 2.84563 14.4302 3.00834 14.735 3.30663C15.012 3.65916 15.2059 4.06593 15.2059 4.49981C15.1782 4.9337 15.012 5.31334 14.735 5.61164Z'
                      />
                      <path
                        d='M13.5985 3.82184C13.2383 3.82184 12.9336 4.12013 12.9336 4.47266C12.9336 4.82519 13.2383 5.12349 13.5985 5.12349C13.9587 5.12349 14.2634 4.82519 14.2634 4.47266C14.2634 4.12013 13.9864 3.82184 13.5985 3.82184Z'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12'>
              <div className='mb-10 w-full'>
                <h4 className='mb-9 text-lg font-semibold text-white'>Tecnologias</h4>
                <ul className='flex flex-wrap items-center'>
                  <li>
                    <a
                      href=''
                      rel='nofollow noopner'
                      target='_blank'
                      className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
                    >
                      <img
                        src={react}
                        alt=''
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href=''
                      rel='nofollow noopner'
                      target='_blank'
                      className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
                    >
                      <img
                        src={tailwindwhite}
                        alt=''
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href=''
                      rel='nofollow noopner'
                      target='_blank'
                      className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
                    >
                      <img
                        src={firebasewhite}
                        alt=''
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href=''
                      rel='nofollow noopner'
                      target='_blank'
                      className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
                    >
                      <img
                        src={js}
                        alt=''
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href=''
                      rel='nofollow noopner'
                      target='_blank'
                      className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
                    >
                      <img
                        src={djangowhite}
                        alt=''
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href=''
                      rel='nofollow noopner'
                      target='_blank'
                      className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
                    >
                      <img
                        src={mysql}
                        alt=''
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 border-t border-opacity-40 py-8 lg:mt-[60px]'>
          <div className='container'>
            <div className='-mx-4 flex flex-wrap'>

              <div className='w-full px-4 md:w-1/3'>
                <div className='my-1 flex justify-center md:justify-end'>
                  <p className='text-base text-[#f3f4fe]'>
                    Designed and Developed by
                    <a
                      href=''
                      rel='nofollow noopner'
                      target='_blank'
                      className='text-primary hover:underline ml-1'
                    >
                      OpenMind Connect
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* <span className='absolute left-0 top-0 z-[-1]'>
            <img src={footershape1} alt='' />
          </span> */}
          <span className='absolute bottom-0 right-0 z-[-1]'>
            <img src={footershape3} alt='' />
          </span>
          <span className='absolute top-0 right-0 z-[-1]'>
            <svg
              width='102'
              height='102'
              viewBox='0 0 102 102'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
            </svg>
          </span>
        </div>
      </footer>
      <a
        href='javascript:void(0)'
        className='back-to-top fixed bottom-8 right-8 left-auto z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark'
      >
        <span
          className='mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white'
        ></span>
      </a>
      {/* <script src='../assets/js/init.js'/> */}
    </>
  );
}

export default OpenMind;



