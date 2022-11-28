import Image from 'next/image'
import {InstagramLogo, Lightbulb, FacebookLogo,TiktokLogo, WhatsappLogo, Envelope, BehanceLogo} from 'phosphor-react'

import photoProfileImg from '../assets/photo-profile.png'
import logoHTML from '../assets/icon-html.png'
import logoCSS from '../assets/icon-css.png'
import logoReact from '../assets/logo-react.png'
import logoFigma from '../assets/logo-figma.png'
import logoLinkedin from '../assets/linkedin-logo.png'
import logoGithub from '../assets/github-logo.png'

export default function Home() {
  return (
    <div className='max-w-[1440px]'>
      <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center text-white">
        <main className='max-w-sm bg-white rounded overflow-hidden shadow-lg items-center '>
          <Image 
            className='w-[400px] content-center'
            src={photoProfileImg} 
            alt="Foto de perfil de Saionara Aguiar"
            quality={100}
          />
          <div className='px-6 py-4 text-violet-900 font-bold'>
            <h1 className='text-2xl mb-2'>Saionara Aguiar</h1>
            <div className="grid grid-rows-2" >
              <span className="">Ciêntista da Computação</span>      
              <span className=''>Desenvolvedora</span>
              <span className=''>Designer</span>
            </div>
            <div className="grid grid-cols-3 gap-3 p-2 ml-8" >              
              <a href='https://www.instagram.com/saionara_ag/'>
                <InstagramLogo size={38} />
              </a>
              <a href='https://www.facebook.com/saionara.aguiar'>
                <FacebookLogo size={38} />
              </a>
              <a href='https://www.tiktok.com/@saio_ag'>
                <TiktokLogo size={38}  />
              </a>
            </div>
          </div>
        </main>

        <div className=''>
          <div className='mx-auto mb-4 border-b-4 rounded border-green-500 pb-6'>
            <h1 className='font-bold mb-2'>Biografia</h1>
            <p>Saionara Aguiar, brasileira, bahiana, católica, técnica em informática, ciêntista da computação. 
              Apaixonada por tecnologia desde dos 10 anos de idade, amante de metodologias agéis e design. Criatividade 
              é chama viva que a mantém inspirada por sonhar com um mundo melhor!
            </p>
          </div>

          <div className='mx-auto mb-6 border-b-4 rounded border-green-500 pb-6'>
            <h1 className='font-bold mb-2'>Habilidades Tecnologicas</h1>
            <div className='grid grid-cols-5 gap-8 text-center'>
              <div className='items-center '>
              <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTML'>
                <Image
                  src={logoHTML} 
                  alt="HTML 5"
                />
                <span>HTML 5</span>
                </a>
              </div>
              <div>
                <a href='https://developer.mozilla.org/pt-BR/docs/Web/CSS'>
                  <Image
                  src={logoCSS} 
                  alt="CSS"
                  />
                  <span>CSS 4</span>
                </a>
                
              </div>
              <div>
              <a href='https://pt-br.reactjs.org/'>
                <Image
                  src={logoReact} 
                  alt="React"
                />
                <span>React</span>
                </a>
              </div>
              <div>
              <a href='https://www.figma.com/'>
                <Image
                  src={logoFigma} 
                  alt="Figma"
                />
                <span>Figma</span>
                </a>
              </div>
              </div>
            </div>
            <div className='mx-auto mb-6 border-b-4 rounded border-green-500 pb-6 '>
              <h1 className='font-bold mb-2'>Redes Profissionais</h1>
              <div className='grid grid-cols-4 gap-2 text-center text-lg'>
                <a 
                  href='https://github.com/agsaionara' 
                  className='bg-green-500 hover:bg-[#05DA8E] text-black rounded-md p-2 flex items-center gap-2'>
                <Image
                    src={logoGithub} 
                    alt="Github"
                    className='w-[24px]'
                  />
                  GitHub
                </a>
                <a href='https://www.linkedin.com/in/saionara-aguiar/' className='bg-green-500 hover:bg-[#05DA8E] text-black rounded-md p-2 flex items-center gap-2'>
                  <Image
                    src={logoLinkedin} 
                    alt="Linkedin"
                    className='w-[24px]'
                  />
                  Linkedin
                </a>
                <a 
                  href="https://www.behance.net/saionarag" 
                  className='bg-green-500 hover:bg-[#05DA8E] text-black rounded-md p-2 flex items-center gap-2'>
                  <BehanceLogo size={32} />
                  Behance
                </a>
                {/*<a href='#' className='bg-green-500 hover:bg-[#05DA8E] text-black rounded-md p-2 flex items-center gap-2 '
                >
                  <WhatsappLogo size={32} />
                  Whatsapp
                </a>*/}
              </div>
              
            </div>
          </div>
      </div>  

      <footer className='flex gap-2 p-2 mt-2 items-center text-white text-sm bg-[#05DA8E]'>
          Desenvolvido por Saionara AG <Lightbulb size={16}/>  
          saionara.aguiargomes@gmail.com <Envelope size={16} />
          (+55 77) 999362800 <WhatsappLogo size={16}/>
      </footer>
    </div>
  )
}
