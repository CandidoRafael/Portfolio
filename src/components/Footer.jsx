import { motion } from 'framer-motion'
import { PaddingContainer, Heading, BlueText, FlexContainer, Button } from '../styles/Global.styled'
import { ContactForm, FormInput, FormLabel } from '../styles/Footer.styled'
import { fadeInBottomVariant } from '../utils/Variants'
import Form from './Form'

const Footer = () => {
  return (
    <PaddingContainer
        id='Contact'
        top='5%'
        bottom='10%'
    >
        <Heading 
          as={motion.h4}
          variants={fadeInBottomVariant}
          initial='hidden'
          whileInView='visible'
          size='h4' 
          align='center'
        >
            Contato
        </Heading>

        <Heading 
          as={motion.h2}
          variants={fadeInBottomVariant}
          initial='hidden'
          whileInView='visible'
          size='h2' 
          align='center' 
          top='0.5rem'>
            Entre em contato por <BlueText>Email</BlueText>
        </Heading>

        <Form />

        
    </PaddingContainer>
  )
}

export default Footer