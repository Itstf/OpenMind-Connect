import '../styles/animate.css';
import '../styles/tailwind.css';
// import '../assets/js/main';
// import '../assets/js/menuscroll';
// import '../assets/js/wowmin';

import { Link } from 'react-router-dom';

import logoOpenMind2 from '../assets/logo/openMind2.png';
import logoOpenMind1 from '../assets/logo/openMind1.png';
import tec2 from '../assets/tec2.jpg';
import footershape1 from '../assets/footer/shape-1.svg';
import footershape3 from '../assets/footer/shape-3.svg';

export const BlogDetails = () => {
  return (
    <>
      {/* // NAVBAR  */}
      <div className='ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent'>
        <div className='container'>
          <div className='relative -mx-4 flex items-center justify-between'>
            <div className='w-60 px-4'>
              <Link to='/openMindconnect' className='navbar-logo block py-5'> <img src={logoOpenMind2} alt='' className='header-logo' /> </Link>
            </div>
            <div className='flex w-full items-center justify-between px-4'>
              <div>
                <button id='navbarToggler'
                  className='absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden'>
                  <span className='relative my-[6px] block h-[2px] w-[30px] bg-white'></span>
                  <span className='relative my-[6px] block h-[2px] w-[30px] bg-white'></span>
                  <span className='relative my-[6px] block h-[2px] w-[30px] bg-white'></span>
                </button>
                <nav id='navbarCollapse'
                  className='absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6'>
                </nav>
              </div>
              <div className='hidden justify-end pr-16 sm:flex lg:pr-0'>
                <Link to='/SignIn' className='loginBtn py-3 px-7 text-base font-medium text-white hover:opacity-70'> Sign In</Link>
                <Link to='/SignUp' className='signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark'> Sign Up </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // BANNER */}
      <div className='relative z-10 overflow-hidden bg-black pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap items-center'>
            <div className='w-full px-4'>
              <div className='text-center'>
                <h1 className='text-4xl font-semibold text-white'>OpenMind Connect</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className='absolute top-0 left-0 z-[-1]'>
            <svg width='495' height='470' viewBox='0 0 495 470' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <circle cx='55' cy='442' r='138' stroke='white' stroke-opacity='0.04' stroke-width='50' />
              <circle cx='446' r='39' stroke='white' stroke-opacity='0.04' stroke-width='20' />
              <path d='M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z' stroke='white'
                stroke-opacity='0.08' stroke-width='12' />
            </svg>
          </span>
          <span className='absolute top-0 right-0 z-[-1]'>
            <svg width='493' height='470' viewBox='0 0 493 470' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <circle cx='462' cy='5' r='138' stroke='white' stroke-opacity='0.04' stroke-width='50' />
              <circle cx='49' cy='470' r='39' stroke='white' stroke-opacity='0.04' stroke-width='20' />
              <path d='M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z' stroke='white'
                stroke-opacity='0.06' stroke-width='13' />
            </svg>
          </span>
        </div>
      </div>

      {/* BLOG CONTAINER */}
      <section className='pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-white'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap justify-center'>
            <div className='w-full px-4'>
              <div className='wow fadeInUp relative z-20 mb-[60px] h-[300px] overflow-hidden rounded md:h-[400px] lg:h-[500px]'
                data-wow-delay='.1s
                '>
                <img src={tec2} alt='image' className='h-full w-full object-cover object-center' />
                <div
                  className='absolute top-0 left-0 z-10 flex h-full w-full items-end bg-gradient-to-t from-dark-700 to-transparent'>
                  <div className='flex flex-wrap items-center p-4 pb-4 sm:p-8'>
                    <div className='mb-4 mr-5 flex items-center md:mr-10'>
                      <div className='mr-4 h-10 w-10 overflow-hidden rounded-full'>
                        <img src={logoOpenMind2} alt='image' className='w-full' />
                      </div>
                      <p className='text-base font-medium text-white'>
                        By
                        <a href='javascript:void(0)' className='text-white hover:opacity-70'>
                          OpenMind Connect
                        </a>
                      </p>
                    </div>
                    <div className='mb-4 flex items-center'>
                      <p className='flex items-center text-sm font-medium text-white'>
                        <span className='mr-3'>
                          <svg width='20' height='12' viewBox='0 0 20 12' className='fill-current'>
                            <path
                              d='M10.2559 3.8125C9.03711 3.8125 8.06836 4.8125 8.06836 6C8.06836 7.1875 9.06836 8.1875 10.2559 8.1875C11.4434 8.1875 12.4434 7.1875 12.4434 6C12.4434 4.8125 11.4746 3.8125 10.2559 3.8125ZM10.2559 7.09375C9.66211 7.09375 9.16211 6.59375 9.16211 6C9.16211 5.40625 9.66211 4.90625 10.2559 4.90625C10.8496 4.90625 11.3496 5.40625 11.3496 6C11.3496 6.59375 10.8496 7.09375 10.2559 7.09375Z' />
                            <path
                              d='M19.7559 5.625C17.6934 2.375 14.1309 0.4375 10.2559 0.4375C6.38086 0.4375 2.81836 2.375 0.755859 5.625C0.630859 5.84375 0.630859 6.125 0.755859 6.34375C2.81836 9.59375 6.38086 11.5312 10.2559 11.5312C14.1309 11.5312 17.6934 9.59375 19.7559 6.34375C19.9121 6.125 19.9121 5.84375 19.7559 5.625ZM10.2559 10.4375C6.84961 10.4375 3.69336 8.78125 1.81836 5.96875C3.69336 3.1875 6.84961 1.53125 10.2559 1.53125C13.6621 1.53125 16.8184 3.1875 18.6934 5.96875C16.8184 8.78125 13.6621 10.4375 10.2559 10.4375Z' />
                          </svg>
                        </span>
                        404
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='-mx-4 flex flex-wrap'>
                <div className='w-full px-4 lg:w-8/12'>
                  <div>
                    <h2
                      className='wow fadeInUp mb-6 text-[26px] font-bold leading-snug text-dark sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug'
                      data-wow-delay='.1s
                      '>
                      Visão OpenMind Connect
                    </h2>
                    <p className='wow fadeInUp mb-8 text-base leading-relaxed text-body-color' data-wow-delay='.1s'>
                      There's a time and place for everything… including asking
                      for reviews. For instance: you should not asking for a
                      review on your checkout page. The sole purpose of this page
                      is to guide your customer to complete their purchase, and
                      this means that the page should be as minimalist and
                      pared-down possible. You don't want to have any unnecessary
                      elements or Call To Actions.
                    </p>
                    <p className='wow fadeInUp mb-10 text-base leading-relaxed text-body-color' data-wow-delay='.1s'>
                      There's a time and place for everything… including asking
                      for reviews. For instance: you should not asking for a
                      review on your checkout page. The sole purpose of this page
                      is to guide your customer to complete their purchase, and
                      this means that the page should be as minimalist and
                      pared-down possible. You don't want to have any unnecessary
                      elements or Call To Actions.
                    </p>
                    <h3 className='wow fadeInUp mb-8 text-2xl font-bold text-dark sm:text-[26px]' data-wow-delay='.1s'>
                      Valores
                    </h3>
                    <p className='wow fadeInUp mb-10 text-base leading-relaxed text-body-color' data-wow-delay='.1s'>
                      At quo cetero fastidii. Usu ex ornatus corpora sententiae,
                      vocibus deleniti ut nec. Ut enim eripuit eligendi est, in
                      iracundia signiferumque quo. Sed virtute suavitate
                      suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                      adversarium interpretaris eu sit, eum viris impedit ne.
                      Erant appareat corrumpit ei vel.
                    </p>
                    <div
                      className='wow fadeInUp relative z-10 mb-10 overflow-hidden rounded bg-primary bg-opacity-5 py-8 px-6 text-center sm:p-10 md:px-[60px]'
                      data-wow-delay='.1s
                      '>
                      <div className='mx-auto max-w-[530px]'>
                        <span className='mb-6 flex justify-center text-primary'>
                          <svg width='44' height='26' viewBox='0 0 44 26' className='fill-current'>
                            <path
                              d='M10.1101 0.00124908C5.46698 -0.0701833 1.25247 2.92998 0.252417 7.00162C-0.319041 9.50175 0.180985 12.0019 1.68106 14.002C3.25258 16.145 5.68128 17.5022 8.39571 17.8593L10.8958 24.0025C11.1816 24.6454 11.8245 25.074 12.5388 25.074C13.2531 25.074 13.896 24.6454 14.1817 24.0025C14.6103 22.931 15.1103 21.7881 15.6104 20.7166C16.8247 18.0022 18.0391 15.2163 18.9677 12.359C19.9677 9.35889 19.5392 6.14443 17.8248 3.71573C16.1104 1.35846 13.396 0.0726814 10.1101 0.00124908ZM16.6104 11.6447C15.6818 14.3592 14.4675 17.145 13.3245 19.788C13.1102 20.3595 12.8245 20.8595 12.6102 21.431L10.1815 15.5735L9.39576 15.5021C7.10992 15.3592 4.96695 14.2163 3.7526 12.5733C2.68112 11.1447 2.32396 9.35889 2.75255 7.64451C3.46687 4.71579 6.53846 2.57281 10.0386 2.57281H10.1101C12.5388 2.57281 14.5389 3.57287 15.8247 5.28724C17.039 7.00162 17.3247 9.43032 16.6104 11.6447Z' />
                            <path
                              d='M42.3267 3.78726C40.6124 1.35856 37.8979 0.00134277 34.612 0.00134277C34.5406 0.00134277 34.5406 0.00134277 34.4692 0.00134277C29.8975 0.00134277 25.7544 3.0015 24.7544 7.00171C24.1829 9.50185 24.6829 12.002 26.183 14.0735C27.7545 16.2165 30.1832 17.5737 32.8977 17.9309L35.3978 24.074C35.6835 24.7169 36.3264 25.1455 37.0407 25.1455C37.7551 25.1455 38.398 24.7169 38.6837 24.074C39.1123 23.0026 39.6123 21.8596 40.1123 20.7882C41.3267 18.0737 42.541 15.2879 43.4696 12.4306C44.4697 9.50184 44.0411 6.21596 42.3267 3.78726ZM41.1124 11.6448C40.1838 14.3592 38.9694 17.1451 37.8265 19.7881C37.6122 20.3596 37.3265 20.8596 37.1122 21.431L34.6835 15.5736L33.8977 15.5022C31.6119 15.3593 29.4689 14.2164 28.2546 12.5734C27.1831 11.1448 26.8259 9.35898 27.2545 7.57317C27.9688 4.64445 31.0404 2.50147 34.5406 2.50147H34.612C37.0407 2.50147 39.0408 3.50153 40.3266 5.2159C41.541 7.00171 41.8267 9.43041 41.1124 11.6448Z' />
                          </svg>
                        </span>
                        <p className='mb-4 text-base font-medium italic leading-[26px] text-dark'>
                          Escrever o dilema (frase inspiradora da empresa)
                        </p>
                        <span className='text-sm italic text-body-color'>
                          “OpenMind Connect”
                        </span>
                      </div>
                      <div>
                        <span className='absolute left-0 top-0'>
                          <svg width='103' height='109' viewBox='0 0 103 109' fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <ellipse cx='0.483916' cy='3.5' rx='102.075' ry='105.5' transform='rotate(180 0.483916 3.5)'
                              fill='url(#paint0_linear)' />
                            <defs>
                              <linearGradient id='paint0_linear' x1='-101.591' y1='-50.4346' x2='49.1618' y2='-49.6518'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#3056D3' stop-opacity='0.15' />
                                <stop offset='1' stop-color='white' stop-opacity='0' />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <span className='absolute bottom-0 right-0'>
                          <svg width='102' height='106' viewBox='0 0 102 106' fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <ellipse cx='102.484' cy='105.5' rx='102.075' ry='105.5' fill='url(#paint0_linear)' />
                            <defs>
                              <linearGradient id='paint0_linear' x1='0.409163' y1='51.5654' x2='151.162' y2='52.3482'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#3056D3' stop-opacity='0.5' />
                                <stop offset='1' stop-color='white' stop-opacity='.2' />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <h3 className='wow fadeInUp mb-8 text-2xl font-bold text-dark sm:text-[26px]' data-wow-delay='.1s'>
                      Missão
                    </h3>

                    <p className='wow fadeInUp mb-8 text-base leading-relaxed text-body-color' data-wow-delay='.1s'>
                      At quo cetero fastidii. Usu ex ornatus corpora sententiae,
                      vocibus deleniti ut nec. Ut enim eripuit eligendi est, in
                      iracundia signiferumque quo. Sed virtute suavitate
                      suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                      adversarium interpretaris eu sit, eum viris impedit ne.
                      Erant appareat corrumpit ei vel.
                    </p>
                    <p className='wow fadeInUp mb-11 text-base leading-relaxed text-body-color' data-wow-delay='.1s'>
                      At quo cetero fastidii. Usu ex ornatus corpora sententiae,
                      vocibus deleniti ut nec. Ut enim eripuit eligendi est, in
                      iracundia signiferumque quo. Sed virtute suavitate
                      suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                      adversarium interpretaris eu sit, eum viris impedit ne.
                      Erant appareat corrumpit ei vel.
                    </p>

                    <div className='-mx-4 mb-12 flex flex-wrap items-center'>
                      <div className='w-full px-4 md:w-1/2'>
                        <div className='wow fadeInUp mb-8 flex flex-wrap items-center md:mb-0' data-wow-delay='.1s'>
                        </div>
                      </div>
                      <div className='w-full px-4 md:w-1/2'>
                        <div className='wow fadeInUp flex items-center md:justify-end' data-wow-delay='.1s'>
                          <span className='mr-5 text-sm font-medium text-body-color'>
                            OpenMind Connect
                          </span>
                          <div className='flex items-center'>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full px-4 lg:w-4/12'>
                  <div>
                    <div
                      className='wow fadeInUp relative mb-12 overflow-hidden rounded bg-primary py-[60px] px-11 text-center lg:px-8'
                      data-wow-delay='.1s
                      '>
                      <h3 className='mb-2 text-2xl font-semibold text-white'>
                        Titulo
                      </h3>
                      <p className='mb-8 text-base text-white'>
                        pensar em o que colocar
                      </p>
                      <p className='text-sm font-medium text-white'>
                        pensar em o que colocar
                      </p>
                      <div>
                        <span className='absolute top-0 right-0'>
                          <svg width='46' height='46' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <circle cx='1.39737' cy='44.6026' r='1.39737' transform='rotate(-90 1.39737 44.6026)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='1.39737' cy='7.9913' r='1.39737' transform='rotate(-90 1.39737 7.9913)' fill='white'
                              fill-opacity='0.44' />
                            <circle cx='13.6943' cy='44.6026' r='1.39737' transform='rotate(-90 13.6943 44.6026)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='13.6943' cy='7.9913' r='1.39737' transform='rotate(-90 13.6943 7.9913)' fill='white'
                              fill-opacity='0.44' />
                            <circle cx='25.9911' cy='44.6026' r='1.39737' transform='rotate(-90 25.9911 44.6026)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='25.9911' cy='7.9913' r='1.39737' transform='rotate(-90 25.9911 7.9913)' fill='white'
                              fill-opacity='0.44' />
                            <circle cx='38.288' cy='44.6026' r='1.39737' transform='rotate(-90 38.288 44.6026)' fill='white'
                              fill-opacity='0.44' />
                            <circle cx='38.288' cy='7.9913' r='1.39737' transform='rotate(-90 38.288 7.9913)' fill='white'
                              fill-opacity='0.44' />
                            <circle cx='1.39737' cy='32.3058' r='1.39737' transform='rotate(-90 1.39737 32.3058)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='13.6943' cy='32.3058' r='1.39737' transform='rotate(-90 13.6943 32.3058)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='25.9911' cy='32.3058' r='1.39737' transform='rotate(-90 25.9911 32.3058)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='38.288' cy='32.3058' r='1.39737' transform='rotate(-90 38.288 32.3058)' fill='white'
                              fill-opacity='0.44' />
                            <circle cx='1.39737' cy='20.0086' r='1.39737' transform='rotate(-90 1.39737 20.0086)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='13.6943' cy='20.0086' r='1.39737' transform='rotate(-90 13.6943 20.0086)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='25.9911' cy='20.0086' r='1.39737' transform='rotate(-90 25.9911 20.0086)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='38.288' cy='20.0086' r='1.39737' transform='rotate(-90 38.288 20.0086)' fill='white'
                              fill-opacity='0.44' />
                          </svg>
                        </span>
                        <span className='absolute bottom-0 left-0'>
                          <svg width='46' height='46' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <circle cx='1.39737' cy='44.6026' r='1.39737' transform='rotate(-90 1.39737 44.6026)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='1.39737' cy='7.9913' r='1.39737' transform='rotate(-90 1.39737 7.9913)' fill='white'
                              fill-opacity='0.44' />
                            <circle cx='13.6943' cy='44.6026' r='1.39737' transform='rotate(-90 13.6943 44.6026)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='13.6943' cy='7.9913' r='1.39737' transform='rotate(-90 13.6943 7.9913)' fill='white'
                              fill-opacity='0.44' />
                            <circle cx='25.9911' cy='44.6026' r='1.39737' transform='rotate(-90 25.9911 44.6026)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='25.9911' cy='7.9913' r='1.39737' transform='rotate(-90 25.9911 7.9913)' fill='white'
                              fill-opacity='0.44' />
                            <circle cx='38.288' cy='44.6026' r='1.39737' transform='rotate(-90 38.288 44.6026)' fill='white'
                              fill-opacity='0.44' />
                            <circle cx='38.288' cy='7.9913' r='1.39737' transform='rotate(-90 38.288 7.9913)' fill='white'
                              fill-opacity='0.44' />
                            <circle cx='1.39737' cy='32.3058' r='1.39737' transform='rotate(-90 1.39737 32.3058)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='13.6943' cy='32.3058' r='1.39737' transform='rotate(-90 13.6943 32.3058)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='25.9911' cy='32.3058' r='1.39737' transform='rotate(-90 25.9911 32.3058)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='38.288' cy='32.3058' r='1.39737' transform='rotate(-90 38.288 32.3058)' fill='white'
                              fill-opacity='0.44' />
                            <circle cx='1.39737' cy='20.0086' r='1.39737' transform='rotate(-90 1.39737 20.0086)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='13.6943' cy='20.0086' r='1.39737' transform='rotate(-90 13.6943 20.0086)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='25.9911' cy='20.0086' r='1.39737' transform='rotate(-90 25.9911 20.0086)'
                              fill='white' fill-opacity='0.44' />
                            <circle cx='38.288' cy='20.0086' r='1.39737' transform='rotate(-90 38.288 20.0086)' fill='white'
                              fill-opacity='0.44' />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className='-mx-4 mb-8 flex flex-wrap'>
                      <div className='w-full px-4'>
                        <h2 className='wow fadeInUp relative pb-5 text-2xl font-semibold text-dark sm:text-[28px]'
                          data-wow-delay='.1s
                          '>
                          Pensar/colocar
                        </h2>
                        <span className='mb-10 inline-block h-[2px] w-20 bg-primary'></span>
                      </div>

                      <div className='w-full px-4 md:w-1/2 lg:w-full'>
                        <div className='wow fadeInUp mb-5 flex w-full items-center border-b border-[#F2F3F8] pb-5'
                          data-wow-delay='.1s
                          '>
                          <div className='mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-full'>
                            <img src={logoOpenMind1} alt='image' className='w-full' />
                          </div>
                          <div className='w-full'>
                            <h4>
                              <a href='javascript:void(0)'
                                className='mb-1 inline-block text-lg font-medium leading-snug text-dark hover:text-primary lg:text-base xl:text-lg'>
                                Pensar em o que colocar aqui, textããão
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className='w-full px-4 md:w-1/2 lg:w-full'>
                        <div className='wow fadeInUp mb-5 flex w-full items-center border-b border-[#F2F3F8] pb-5'
                          data-wow-delay='.1s
                          '>
                          <div className='mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-full'>
                            <img src={logoOpenMind1} alt='image' className='w-full' />
                          </div>
                          <div className='w-full'>
                            <h4>
                              <a href='javascript:void(0)'
                                className='mb-1 inline-block text-lg font-medium leading-snug text-dark hover:text-primary lg:text-base xl:text-lg'>
                                Pensar em o que colocar aqui, textããão
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className='w-full px-4 md:w-1/2 lg:w-full'>
                        <div className='wow fadeInUp mb-5 flex w-full items-center border-b border-[#F2F3F8] pb-5'
                          data-wow-delay='.1s
                          '>
                          <div className='mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-full'>
                            <img src={logoOpenMind1} alt='image' className='w-full' />
                          </div>
                          <div className='w-full'>
                            <h4>
                              <a href='javascript:void(0)'
                                className='mb-1 inline-block text-lg font-medium leading-snug text-dark hover:text-primary lg:text-base xl:text-lg'>
                                Pensar em o que colocar aqui, textããão
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className='w-full px-4 md:w-1/2 lg:w-full'>
                        <div
                          className='wow fadeInUp mb-5 flex w-full items-center border-0 border-[#F2F3F8] pb-5 md:border-b lg:border-0'
                          data-wow-delay='.1s
                          '>
                          <div className='mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-full'>
                            <img src={logoOpenMind1} alt='image' className='w-full' />
                          </div>
                          <div className='w-full'>
                            <h4>
                              <a href='javascript:void(0)'
                                className='mb-1 inline-block text-lg font-medium leading-snug text-dark hover:text-primary lg:text-base xl:text-lg'>
                                Pensar em o que colocar aqui, textããão
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='wow fadeInUp mb-12 overflow-hidden rounded' data-wow-delay='.1s'>
                      <img src={tec2} alt='image' className='w-full' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='-mx-4 flex flex-wrap'>
            <div className='wow fadeInUp mt-14 w-full px-4' data-wow-delay='.2s'>
              <h2 className='relative pb-5 text-2xl font-semibold text-dark sm:text-[28px]'>
                Parte Marketing
              </h2>
              <span className='mb-10 inline-block h-[2px] w-20 bg-primary'></span>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div className='wow fadeInUp group mb-10' data-wow-delay='.1s'>
                <div className='mb-8 overflow-hidden rounded'>
                  <a href='blog-details.html' className='block'>
                    <img src={tec2} alt='image'
                      className='w-full transition group-hover:rotate-6 group-hover:scale-125' />
                  </a>
                </div>
                <div>
                  <span
                    className='mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white'>
                    aaa
                  </span>
                  <h3>
                    <a href='blog-details.html'
                      className='mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl'>
                      titulo
                    </a>
                  </h3>
                  <p className='text-base text-body-color'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div className='wow fadeInUp group mb-10' data-wow-delay='.15s'>
                <div className='mb-8 overflow-hidden rounded'>
                  <a href='blog-details.html' className='block'>
                    <img src={tec2} alt='image'
                      className='w-full transition group-hover:rotate-6 group-hover:scale-125' />
                  </a>
                </div>
                <div>
                  <span
                    className='mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white'>
                    bbb
                  </span>
                  <h3>
                    <a href='blog-details.html'
                      className='mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl'>
                      titulo
                    </a>
                  </h3>
                  <p className='text-base text-body-color'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div className='wow fadeInUp group mb-10' data-wow-delay='.2s'>
                <div className='mb-8 overflow-hidden rounded'>
                  <a href='blog-details.html' className='block'>
                    <img src={tec2} alt='image'
                      className='w-full transition group-hover:rotate-6 group-hover:scale-125' />
                  </a>
                </div>
                <div>
                  <span
                    className='mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white'>
                    ccc
                  </span>
                  <h3>
                    <a href='blog-details.html'
                      className='mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl'>
                      titulo
                    </a>
                  </h3>
                  <p className='text-base text-body-color'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER  */}
      <footer className='wow fadeInUp relative z-10 bg-black pt-20 lg:pt-[120px]' data-wow-delay='.15s'>
        <div className='container'>
          <div className='footerinfo -mx-4 flex flex-wrap'>
            <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12'>
              <div className='mb-10 w-full'>
                <a href='javascript:void(0)' className='mb-6 inline-block max-w-[160px]'>
                  <img src={logoOpenMind1} alt='logo' className='max-w-full' />
                </a>
                <p className='mb-7 text-base text-[#f3f4fe]'>
                  Vamos transformar sua visão em realidade e conecta-lá ao mundo!
                </p>
                <div className='-mx-3 flex items-center'>
                  <a href='javascript:void(0)' className='px-3 text-[#dddddd] hover:text-white'>
                    <svg width='18' height='18' viewBox='0 0 18 18' className='fill-current'>
                      <path
                        d='M8.91688 12.4995C10.6918 12.4995 12.1306 11.0911 12.1306 9.35385C12.1306 7.61655 10.6918 6.20819 8.91688 6.20819C7.14197 6.20819 5.70312 7.61655 5.70312 9.35385C5.70312 11.0911 7.14197 12.4995 8.91688 12.4995Z' />
                      <path
                        d='M12.4078 0.947388H5.37075C2.57257 0.947388 0.300781 3.17104 0.300781 5.90993V12.7436C0.300781 15.5367 2.57257 17.7604 5.37075 17.7604H12.3524C15.2059 17.7604 17.4777 15.5367 17.4777 12.7978V5.90993C17.4777 3.17104 15.2059 0.947388 12.4078 0.947388ZM8.91696 13.4758C6.56206 13.4758 4.70584 11.6047 4.70584 9.35389C4.70584 7.10312 6.58976 5.23199 8.91696 5.23199C11.2165 5.23199 13.1004 7.10312 13.1004 9.35389C13.1004 11.6047 11.2442 13.4758 8.91696 13.4758ZM14.735 5.61164C14.4579 5.90993 14.0423 6.07264 13.5714 6.07264C13.1558 6.07264 12.7402 5.90993 12.4078 5.61164C12.103 5.31334 11.9368 4.9337 11.9368 4.47269C11.9368 4.01169 12.103 3.65916 12.4078 3.33375C12.7125 3.00834 13.1004 2.84563 13.5714 2.84563C13.9869 2.84563 14.4302 3.00834 14.735 3.30663C15.012 3.65916 15.2059 4.06593 15.2059 4.49981C15.1782 4.9337 15.012 5.31334 14.735 5.61164Z' />
                      <path
                        d='M13.5985 3.82184C13.2383 3.82184 12.9336 4.12013 12.9336 4.47266C12.9336 4.82519 13.2383 5.12349 13.5985 5.12349C13.9587 5.12349 14.2634 4.82519 14.2634 4.47266C14.2634 4.12013 13.9864 3.82184 13.5985 3.82184Z' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12'>
              <div className='mb-10 w-full'>
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
                    <a href='' rel='nofollow noopner' target='_blank' className='text-primary hover:underline ml-1'>
                      OpenMind Connect
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className='absolute left-0 top-0 z-[-1]'>
            <img src={footershape1} alt='' />
          </span>
          <span className='absolute bottom-0 right-0 z-[-1]'>
            <img src={footershape3} alt='' />
          </span>
          <span className='absolute top-0 right-0 z-[-1]'>
            <svg width='102' height='102' viewBox='0 0 102 102' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1.8667 33.1956C2.89765 33.1956 3.7334 34.0318 3.7334 35.0633C3.7334 36.0947 2.89765 36.9309 1.8667 36.9309C0.835744 36.9309 4.50645e-08 36.0947 0 35.0633C-4.50645e-08 34.0318 0.835744 33.1956 1.8667 33.1956Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M18.2939 33.1956C19.3249 33.1956 20.1606 34.0318 20.1606 35.0633C20.1606 36.0947 19.3249 36.9309 18.2939 36.9309C17.263 36.9309 16.4272 36.0947 16.4272 35.0633C16.4272 34.0318 17.263 33.1956 18.2939 33.1956Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M34.7209 33.195C35.7519 33.195 36.5876 34.0311 36.5876 35.0626C36.5876 36.0941 35.7519 36.9303 34.7209 36.9303C33.69 36.9303 32.8542 36.0941 32.8542 35.0626C32.8542 34.0311 33.69 33.195 34.7209 33.195Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M50.9341 33.195C51.965 33.195 52.8008 34.0311 52.8008 35.0626C52.8008 36.0941 51.965 36.9303 50.9341 36.9303C49.9031 36.9303 49.0674 36.0941 49.0674 35.0626C49.0674 34.0311 49.9031 33.195 50.9341 33.195Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M1.8667 16.7605C2.89765 16.7605 3.7334 17.5966 3.7334 18.6281C3.7334 19.6596 2.89765 20.4957 1.8667 20.4957C0.835744 20.4957 4.50645e-08 19.6596 0 18.6281C-4.50645e-08 17.5966 0.835744 16.7605 1.8667 16.7605Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M18.2939 16.7605C19.3249 16.7605 20.1606 17.5966 20.1606 18.6281C20.1606 19.6596 19.3249 20.4957 18.2939 20.4957C17.263 20.4957 16.4272 19.6596 16.4272 18.6281C16.4272 17.5966 17.263 16.7605 18.2939 16.7605Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M34.7209 16.7605C35.7519 16.7605 36.5876 17.5966 36.5876 18.6281C36.5876 19.6596 35.7519 20.4957 34.7209 20.4957C33.69 20.4957 32.8542 19.6596 32.8542 18.6281C32.8542 17.5966 33.69 16.7605 34.7209 16.7605Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M50.9341 16.7605C51.965 16.7605 52.8008 17.5966 52.8008 18.6281C52.8008 19.6596 51.965 20.4957 50.9341 20.4957C49.9031 20.4957 49.0674 19.6596 49.0674 18.6281C49.0674 17.5966 49.9031 16.7605 50.9341 16.7605Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M1.8667 0.324951C2.89765 0.324951 3.7334 1.16115 3.7334 2.19261C3.7334 3.22408 2.89765 4.06024 1.8667 4.06024C0.835744 4.06024 4.50645e-08 3.22408 0 2.19261C-4.50645e-08 1.16115 0.835744 0.324951 1.8667 0.324951Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M18.2939 0.324951C19.3249 0.324951 20.1606 1.16115 20.1606 2.19261C20.1606 3.22408 19.3249 4.06024 18.2939 4.06024C17.263 4.06024 16.4272 3.22408 16.4272 2.19261C16.4272 1.16115 17.263 0.324951 18.2939 0.324951Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M34.7209 0.325302C35.7519 0.325302 36.5876 1.16147 36.5876 2.19293C36.5876 3.2244 35.7519 4.06056 34.7209 4.06056C33.69 4.06056 32.8542 3.2244 32.8542 2.19293C32.8542 1.16147 33.69 0.325302 34.7209 0.325302Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M50.9341 0.325302C51.965 0.325302 52.8008 1.16147 52.8008 2.19293C52.8008 3.2244 51.965 4.06056 50.9341 4.06056C49.9031 4.06056 49.0674 3.2244 49.0674 2.19293C49.0674 1.16147 49.9031 0.325302 50.9341 0.325302Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M66.9037 33.1956C67.9346 33.1956 68.7704 34.0318 68.7704 35.0633C68.7704 36.0947 67.9346 36.9309 66.9037 36.9309C65.8727 36.9309 65.037 36.0947 65.037 35.0633C65.037 34.0318 65.8727 33.1956 66.9037 33.1956Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M83.3307 33.1956C84.3616 33.1956 85.1974 34.0318 85.1974 35.0633C85.1974 36.0947 84.3616 36.9309 83.3307 36.9309C82.2997 36.9309 81.464 36.0947 81.464 35.0633C81.464 34.0318 82.2997 33.1956 83.3307 33.1956Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M99.7576 33.1956C100.789 33.1956 101.624 34.0318 101.624 35.0633C101.624 36.0947 100.789 36.9309 99.7576 36.9309C98.7266 36.9309 97.8909 36.0947 97.8909 35.0633C97.8909 34.0318 98.7266 33.1956 99.7576 33.1956Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M66.9037 16.7605C67.9346 16.7605 68.7704 17.5966 68.7704 18.6281C68.7704 19.6596 67.9346 20.4957 66.9037 20.4957C65.8727 20.4957 65.037 19.6596 65.037 18.6281C65.037 17.5966 65.8727 16.7605 66.9037 16.7605Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M83.3307 16.7605C84.3616 16.7605 85.1974 17.5966 85.1974 18.6281C85.1974 19.6596 84.3616 20.4957 83.3307 20.4957C82.2997 20.4957 81.464 19.6596 81.464 18.6281C81.464 17.5966 82.2997 16.7605 83.3307 16.7605Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M99.7576 16.7605C100.789 16.7605 101.624 17.5966 101.624 18.6281C101.624 19.6596 100.789 20.4957 99.7576 20.4957C98.7266 20.4957 97.8909 19.6596 97.8909 18.6281C97.8909 17.5966 98.7266 16.7605 99.7576 16.7605Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M66.9037 0.324966C67.9346 0.324966 68.7704 1.16115 68.7704 2.19261C68.7704 3.22408 67.9346 4.06024 66.9037 4.06024C65.8727 4.06024 65.037 3.22408 65.037 2.19261C65.037 1.16115 65.8727 0.324966 66.9037 0.324966Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M83.3307 0.324951C84.3616 0.324951 85.1974 1.16115 85.1974 2.19261C85.1974 3.22408 84.3616 4.06024 83.3307 4.06024C82.2997 4.06024 81.464 3.22408 81.464 2.19261C81.464 1.16115 82.2997 0.324951 83.3307 0.324951Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M99.7576 0.324951C100.789 0.324951 101.624 1.16115 101.624 2.19261C101.624 3.22408 100.789 4.06024 99.7576 4.06024C98.7266 4.06024 97.8909 3.22408 97.8909 2.19261C97.8909 1.16115 98.7266 0.324951 99.7576 0.324951Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M1.8667 82.2029C2.89765 82.2029 3.7334 83.039 3.7334 84.0705C3.7334 85.102 2.89765 85.9382 1.8667 85.9382C0.835744 85.9382 4.50645e-08 85.102 0 84.0705C-4.50645e-08 83.039 0.835744 82.2029 1.8667 82.2029Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M18.2939 82.2029C19.3249 82.2029 20.1606 83.039 20.1606 84.0705C20.1606 85.102 19.3249 85.9382 18.2939 85.9382C17.263 85.9382 16.4272 85.102 16.4272 84.0705C16.4272 83.039 17.263 82.2029 18.2939 82.2029Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M34.7209 82.2026C35.7519 82.2026 36.5876 83.0387 36.5876 84.0702C36.5876 85.1017 35.7519 85.9378 34.7209 85.9378C33.69 85.9378 32.8542 85.1017 32.8542 84.0702C32.8542 83.0387 33.69 82.2026 34.7209 82.2026Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M50.9341 82.2026C51.965 82.2026 52.8008 83.0387 52.8008 84.0702C52.8008 85.1017 51.965 85.9378 50.9341 85.9378C49.9031 85.9378 49.0674 85.1017 49.0674 84.0702C49.0674 83.0387 49.9031 82.2026 50.9341 82.2026Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M1.8667 65.7677C2.89765 65.7677 3.7334 66.6039 3.7334 67.6353C3.7334 68.6668 2.89765 69.503 1.8667 69.503C0.835744 69.503 4.50645e-08 68.6668 0 67.6353C-4.50645e-08 66.6039 0.835744 65.7677 1.8667 65.7677Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M18.2939 65.7677C19.3249 65.7677 20.1606 66.6039 20.1606 67.6353C20.1606 68.6668 19.3249 69.503 18.2939 69.503C17.263 69.503 16.4272 68.6668 16.4272 67.6353C16.4272 66.6039 17.263 65.7677 18.2939 65.7677Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M34.7209 65.7674C35.7519 65.7674 36.5876 66.6036 36.5876 67.635C36.5876 68.6665 35.7519 69.5027 34.7209 69.5027C33.69 69.5027 32.8542 68.6665 32.8542 67.635C32.8542 66.6036 33.69 65.7674 34.7209 65.7674Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M50.9341 65.7674C51.965 65.7674 52.8008 66.6036 52.8008 67.635C52.8008 68.6665 51.965 69.5027 50.9341 69.5027C49.9031 69.5027 49.0674 68.6665 49.0674 67.635C49.0674 66.6036 49.9031 65.7674 50.9341 65.7674Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M1.8667 98.2644C2.89765 98.2644 3.7334 99.1005 3.7334 100.132C3.7334 101.163 2.89765 102 1.8667 102C0.835744 102 4.50645e-08 101.163 0 100.132C-4.50645e-08 99.1005 0.835744 98.2644 1.8667 98.2644Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M1.8667 49.3322C2.89765 49.3322 3.7334 50.1684 3.7334 51.1998C3.7334 52.2313 2.89765 53.0675 1.8667 53.0675C0.835744 53.0675 4.50645e-08 52.2313 0 51.1998C-4.50645e-08 50.1684 0.835744 49.3322 1.8667 49.3322Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M18.2939 98.2644C19.3249 98.2644 20.1606 99.1005 20.1606 100.132C20.1606 101.163 19.3249 102 18.2939 102C17.263 102 16.4272 101.163 16.4272 100.132C16.4272 99.1005 17.263 98.2644 18.2939 98.2644Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M18.2939 49.3322C19.3249 49.3322 20.1606 50.1684 20.1606 51.1998C20.1606 52.2313 19.3249 53.0675 18.2939 53.0675C17.263 53.0675 16.4272 52.2313 16.4272 51.1998C16.4272 50.1684 17.263 49.3322 18.2939 49.3322Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M34.7209 98.2647C35.7519 98.2647 36.5876 99.1008 36.5876 100.132C36.5876 101.164 35.7519 102 34.7209 102C33.69 102 32.8542 101.164 32.8542 100.132C32.8542 99.1008 33.69 98.2647 34.7209 98.2647Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M50.9341 98.2647C51.965 98.2647 52.8008 99.1008 52.8008 100.132C52.8008 101.164 51.965 102 50.9341 102C49.9031 102 49.0674 101.164 49.0674 100.132C49.0674 99.1008 49.9031 98.2647 50.9341 98.2647Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M34.7209 49.3326C35.7519 49.3326 36.5876 50.1687 36.5876 51.2002C36.5876 52.2317 35.7519 53.0678 34.7209 53.0678C33.69 53.0678 32.8542 52.2317 32.8542 51.2002C32.8542 50.1687 33.69 49.3326 34.7209 49.3326Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M50.9341 49.3326C51.965 49.3326 52.8008 50.1687 52.8008 51.2002C52.8008 52.2317 51.965 53.0678 50.9341 53.0678C49.9031 53.0678 49.0674 52.2317 49.0674 51.2002C49.0674 50.1687 49.9031 49.3326 50.9341 49.3326Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M66.9037 82.2029C67.9346 82.2029 68.7704 83.0391 68.7704 84.0705C68.7704 85.102 67.9346 85.9382 66.9037 85.9382C65.8727 85.9382 65.037 85.102 65.037 84.0705C65.037 83.0391 65.8727 82.2029 66.9037 82.2029Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M83.3307 82.2029C84.3616 82.2029 85.1974 83.0391 85.1974 84.0705C85.1974 85.102 84.3616 85.9382 83.3307 85.9382C82.2997 85.9382 81.464 85.102 81.464 84.0705C81.464 83.0391 82.2997 82.2029 83.3307 82.2029Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M99.7576 82.2029C100.789 82.2029 101.624 83.039 101.624 84.0705C101.624 85.102 100.789 85.9382 99.7576 85.9382C98.7266 85.9382 97.8909 85.102 97.8909 84.0705C97.8909 83.039 98.7266 82.2029 99.7576 82.2029Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M66.9037 65.7674C67.9346 65.7674 68.7704 66.6036 68.7704 67.635C68.7704 68.6665 67.9346 69.5027 66.9037 69.5027C65.8727 69.5027 65.037 68.6665 65.037 67.635C65.037 66.6036 65.8727 65.7674 66.9037 65.7674Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M83.3307 65.7677C84.3616 65.7677 85.1974 66.6039 85.1974 67.6353C85.1974 68.6668 84.3616 69.503 83.3307 69.503C82.2997 69.503 81.464 68.6668 81.464 67.6353C81.464 66.6039 82.2997 65.7677 83.3307 65.7677Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M99.7576 65.7677C100.789 65.7677 101.624 66.6039 101.624 67.6353C101.624 68.6668 100.789 69.503 99.7576 69.503C98.7266 69.503 97.8909 68.6668 97.8909 67.6353C97.8909 66.6039 98.7266 65.7677 99.7576 65.7677Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M66.9037 98.2644C67.9346 98.2644 68.7704 99.1005 68.7704 100.132C68.7704 101.163 67.9346 102 66.9037 102C65.8727 102 65.037 101.163 65.037 100.132C65.037 99.1005 65.8727 98.2644 66.9037 98.2644Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M66.9037 49.3322C67.9346 49.3322 68.7704 50.1684 68.7704 51.1998C68.7704 52.2313 67.9346 53.0675 66.9037 53.0675C65.8727 53.0675 65.037 52.2313 65.037 51.1998C65.037 50.1684 65.8727 49.3322 66.9037 49.3322Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M83.3307 98.2644C84.3616 98.2644 85.1974 99.1005 85.1974 100.132C85.1974 101.163 84.3616 102 83.3307 102C82.2997 102 81.464 101.163 81.464 100.132C81.464 99.1005 82.2997 98.2644 83.3307 98.2644Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M83.3307 49.3322C84.3616 49.3322 85.1974 50.1684 85.1974 51.1998C85.1974 52.2313 84.3616 53.0675 83.3307 53.0675C82.2997 53.0675 81.464 52.2313 81.464 51.1998C81.464 50.1684 82.2997 49.3322 83.3307 49.3322Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M99.7576 98.2644C100.789 98.2644 101.624 99.1005 101.624 100.132C101.624 101.163 100.789 102 99.7576 102C98.7266 102 97.8909 101.163 97.8909 100.132C97.8909 99.1005 98.7266 98.2644 99.7576 98.2644Z'
                fill='white' fill-opacity='0.08'></path>
              <path
                d='M99.7576 49.3322C100.789 49.3322 101.624 50.1684 101.624 51.1998C101.624 52.2313 100.789 53.0675 99.7576 53.0675C98.7266 53.0675 97.8909 52.2313 97.8909 51.1998C97.8909 50.1684 98.7266 49.3322 99.7576 49.3322Z'
                fill='white' fill-opacity='0.08'></path>
            </svg>
          </span>
        </div>
      </footer>

      <a href='javascript:void(0)'
        className='back-to-top fixed bottom-8 right-8 left-auto z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark'>
        <span className='mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white'></span>
      </a>
    </>
  )
}

export default BlogDetails;