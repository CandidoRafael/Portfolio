import { PaddingContainer, Heading, BlueText } from '../styles/Global.styled'
import { projectDetails } from '../utils/Data'
import Project from './layout/Project'
import { motion } from 'framer-motion'
import { FadeInTopVariant } from '../utils/Variants'

const MyProjects = () => {
  return (
    <PaddingContainer
      id='Projects'
      top='5%'
      bottom='5%'
      responsivetop='20%'
      responsiveright='1rem'
      responsiveleft='1rem'

    >
      <Heading 
        as={motion.h4} 
        size='h4'
        variants={FadeInTopVariant}
        initial='hidden'
        whileInView='visible'

        >
          Meus Projetos
      </Heading>

      <Heading 
       as={motion.h2} 
       variants={FadeInTopVariant}
       initial='hidden'
       whileInView='visible'
       size='h2'
       >
      Projetos <BlueText>Desenvolvidos</BlueText>
      </Heading>
      
      {projectDetails.map((project) => (
        <PaddingContainer top='5rem' bottom='5rem' key={project.id}>
          <Project data={project} />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  )
}

export default MyProjects