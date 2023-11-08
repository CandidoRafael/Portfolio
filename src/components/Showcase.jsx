import { motion } from 'framer-motion'
import { PaddingContainer, FlexContainer, Heading, ParaText, BlueText, IconContainer } from '../styles/Global.styled'
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'
import { ButtonCV, Particle, ShowcaseImgCard, ShowcaseParticleContainer } from '../styles/Showcase.styled'
import foto from '../assets/foto.png'
import Background from '../assets/particle.png'
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'

const Showcase = () => {
  return (
    <PaddingContainer 
        id='Home' 
        left='3%' 
        right='10%' 
        top='18%'
        bottom='10%'
        responsiveleft='1rem'
        responsiveright='1rem'
        responsivetop='8rem'
    >
        <FlexContainer align='center'  fullwidthchild='true'>
            <motion.div
              variants={fadeInLeftVariant}
              initial='hidden'
              whileInView='visible'
            > 
              <Heading
                as='h2'
                size='h2'
                top='0.5rem'
                bottom='1rem'
              >
                  Meu nome é <BlueText>Rafael Candido</BlueText>
              </Heading>

              <Heading as='h3' size='h3'>
                E sou seu próximo Desenvolvedor Front End ;)
              </Heading>

              <ParaText as='p' top='2rem' bottom='4rem'>
                Olá! Sou Rafael Cândido, um entusiasta da tecnologia
                com 18 anos de idade e uma paixão ardente pelo desenvolvimento
                Front End. Ao longo dos anos, mergulhei de cabeça no mundo da
                programação web, e essa jornada tem sido incrivelmente 
                empolgante<BlueText>.</BlueText>
              </ParaText>

              <FlexContainer gap='20px' align='center' responsiveflex='true'>
                <a href="https://www.linkedin.com/in/rafael-candido-68803a248/" target='_blank'>
                <IconContainer color='blue' size='1.5rem'>
                    <BsLinkedin />
                </IconContainer>
                </a>
    
                 <a href="https://github.com/CandidoRafael">
                <IconContainer color='blue' size='1.5rem'>
                    <BsGithub />
                </IconContainer>
                 </a>
                 
                 <ButtonCV
                 href='https://www.dropbox.com/scl/fi/09qapsq0w32bcwsm0i3og/Curriculo-Pronto.pdf?rlkey=djp59aupij789tz3r286at922&dl=0' 
                 target='_blank'>
                    Currículo
                 </ButtonCV>
              </FlexContainer>
            </motion.div>

            <FlexContainer 
              justify='flex-end'
              as={motion.div}
              variants={fadeInRightVariant}
              initial='hidden'
              whileInView='visible'
              >
              <ShowcaseParticleContainer>
                <ShowcaseImgCard>
                    <img src={foto} alt="foto" className='fotoImg' />
                </ShowcaseImgCard>

                  <Particle 
                    as={motion.img}
                    animate={{
                      x: [0, 100, 0],
                      rotate: 360,
                      scale: [1, 0.5, 1]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity
                    }}
                    src={Background}
                    alt='particle'
                    top='-80px'
                    left='-20px'
                    rotate='60deg'
                  />
                  <Particle 
                    as={motion.img}
                    animate={{
                      y: [0, 100, 0],
                      rotate: 360,
                      scale: [1, 0.5, 1]
                    }}
                    transition={{
                      duration: 17,
                      repeat: Infinity
                    }}
                    src={Background}
                    alt='particle'
                    top='100px'
                    right='-70px'
                    rotate='40deg'
                  />

                  <Particle
                    as={motion.img}
                    animate={{
                      y: [0, -100, 0],
                      rotate: 360,
                      scale: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: 18,
                      repeat: Infinity
                    }}
                    src={Background}
                    alt='particle'
                    top='-20px'
                    right='-70px'
                    rotate='90deg'
                  />
              </ShowcaseParticleContainer>
            </FlexContainer>
        </FlexContainer>

    </PaddingContainer>
  )
}

export default Showcase