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
      <div className="md:max-w-[1124px] md:h-screen mx-auto md:grid grid-cols-2 items-center text-white">
        <main className='md:max-w-sm bg-white rounded overflow-hidden shadow-xl items-center md:p-6'>
          <div className='md:shrink-0'>
            <Image 
              className='md:w-[400px] content-center'
              src={photoProfileImg} 
              alt="Foto de perfil de Saionara Aguiar"
              quality={100}
          />
          </div>
          
          <div className='px-6 py-4 text-violet-900 font-bold md:items-center'>
            <h1 className='text-2xl md:text-center mb-2'>Saionara Aguiar</h1>
            <div className="grid grid-rows-2 gap-2" >
              <span className="md:text-center">Ciêntista da Computação</span>      
              <span className='md:text-center'>Desenvolvedora</span>
              <span className='md:text-center'>Designer</span>
            </div>
            <div className="grid grid-cols-3 gap-3 p-2 ml-8" >              
              <a href='https://www.instagram.com/saionara_ag/' className='md:shrink-0 hover:text-green-500'>
                <InstagramLogo size={38} className=' hover:text-green-500'/>
              </a>
              <a href='https://www.facebook.com/saionara.aguiar' className=' hover:text-green-500'>
                <FacebookLogo size={38} />
              </a>
              <a href='https://www.tiktok.com/@saio_ag' className=' hover:text-green-500'>
                <TiktokLogo size={38}  />
              </a>
            </div>
          </div>
        </main>

        <div className='p-5'>
          <div className='mx-auto mb-4 border-b-4 rounded border-green-500 pb-6'>
            <h1 className='font-bold mb-2'>Biografia</h1>
            <p>Saionara Aguiar, brasileira, bahiana, católica, técnica em informática, ciêntista da computação. 
              Apaixonada por tecnologia desde dos 10 anos de idade, amante de metodologias agéis e design. Criatividade 
              é chama viva que a mantém inspirada por sonhar com um mundo melhor!
            </p>
          </div>

          <div className='mx-auto mb-6 border-b-4 rounded border-green-500 pb-6'>
            <h1 className='font-bold mb-2'>Habilidades Tecnologicas</h1>
            <div className='grid grid-cols-4 gap-8 text-center md:text-xs text-sm'>
              <div className='items-center'>
                <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTML' className='md:shrink-0'>
                  <Image
                    src={logoHTML} 
                    alt="HTML 5"
                  />
                  <span className=''>HTML 5</span>
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
                  className='md:flex bg-green-500 hover:bg-[#05DA8E] text-black rounded-md p-2 items-center gap-2'>
                <Image
                    src={logoGithub} 
                    alt="Github"
                    className='w-[24px]'
                  />
                  GitHub
                </a>
                <a href='https://www.linkedin.com/in/saionara-aguiar/' className='md:flex bg-green-500 hover:bg-[#05DA8E] text-black rounded-md p-2 items-center gap-2'>
                  <Image
                    src={logoLinkedin} 
                    alt="Linkedin"
                    className='w-[24px]'
                  />
                  Linkedin
                </a>
                <a 
                  href="https://www.behance.net/saionarag" 
                  className='md:flex bg-green-500 hover:bg-[#05DA8E] text-black rounded-md p-2  items-center gap-2'>
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

      <footer className='md:flex gap-4 p-2 mt-2 items-center text-white text-sm bg-[#05DA8E]'>
          <p className='md:flex gap-2'>Desenvolvido por Saionara AG <Lightbulb size={16}/> </p> 
          <a className='md:flex gap-2' href="mailto:saionara.aguiargomes@gmail.com">saionara.aguiargomes@gmail.com <Envelope size={16} /></a>
          <a className='md:flex gap-2' href='https://chat.whatsapp.com/KgHXtjzG5Gi2712Gw9QLbF'>Central de Atendimento<WhatsappLogo size={16}/></a>
      </footer>
    </div>
  )
}
