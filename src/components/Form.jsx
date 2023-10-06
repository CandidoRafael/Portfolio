import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { fadeInBottomVariant } from '../utils/Variants';
import emailjs from '@emailjs/browser';
import { FaSpinner } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi'
import { FlexContainer, PaddingContainer } from '../styles/Global.styled'
import { ContactForm, FormInput, FormLabel, ButtonSubmit } from '../styles/Footer.styled'

const Form = () => {

  const form = useRef(null)
  const [loading, setLoading] = useState(false)
  const [sucess, setSucess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    if(!form.current) return 

    setLoading(true)

    emailjs.
     sendForm(
        'service_amsf2ld',
        'template_qt4zuwc',
        form.current,
        'Vlw_pP96WDaVsn8M9')
      .then(() => {
        setSucess(true)
        setLoading(false)
      }, (error) => {
          setError(true)
          setLoading(false)
          console.log(error)
      });
  };

  return (
    <PaddingContainer top='3rem'>
            <FlexContainer justify='center'>

                <ContactForm 
                  as={motion.form}
                  ref={form}
                  onSubmit={sendEmail}
                  variants={fadeInBottomVariant}
                  initial='hidden'
                  whileInView='visible'

                 >
                  <PaddingContainer bottom='2rem'>
                    <FormLabel htmlFor='name'>Nome:</FormLabel>
                    <FormInput 
                      type='text'
                      id='fullName'
                      name='fullName' 
                      required
                      placeholder='Digite seu nome...'/>
                  </PaddingContainer>
                  
                  <PaddingContainer bottom='2rem'>
                    <FormLabel htmlFor='email'>Email:</FormLabel>
                    <FormInput 
                      type='email' 
                      name='email'
                      id='email'
                      required
                      placeholder='Digite seu email...'
                      />
                  </PaddingContainer>

                  <PaddingContainer bottom='2rem'>
                    <FormLabel htmlFor='message'>Mensagem:</FormLabel>
                    <FormInput 
                      name='message'
                      id='message' 
                      as='textarea'
                      required
                      placeholder='Digite sua mensagem...'
                    />
                  </PaddingContainer>

                  <FlexContainer justify='center'>
                    <ButtonSubmit type='submit' disabled={loading}> 
                    {loading && <FaSpinner className='animation'/>}
                    {sucess && <HiCheckCircle className='success'/>}                        
                        Enviar Mensagem
                    </ButtonSubmit>
                    
                    

                  </FlexContainer>
                </ContactForm>
            </FlexContainer>
        </PaddingContainer>
  )
}

export default Form