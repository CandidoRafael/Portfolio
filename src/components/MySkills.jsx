import { motion } from 'framer-motion'
import { FlexContainer, PaddingContainer, Heading, BlueText, ParaText, IconContainer } from '../styles/Global.styled'
import { SkillsCard, SkillsCardContainer } from '../styles/MySkills.styled'
import { Skills } from '../utils/Data'
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'

const MySkills = () => {
  return (
        <PaddingContainer
          id='Skills'
          top='10%'
          bottom='10%'
          responsiveleft='1rem'
          responsiveright='1rem'
        >
         <FlexContainer  
           responsiveflex='true'  
           responsivedirection='column-reverse'
           fullwidthchild='true'
           >
          <SkillsCardContainer
            as={motion.div}
            variants={fadeInLeftVariant}
            initial='hidden'
            whileInView='visible'
          >
            {Skills.map((skill) => (
             <SkillsCard key={skill.id}>
                <IconContainer size='5rem' color='blue'>
                    {skill.icon}
                </IconContainer>

                <Heading as='h4' size='h4'>
                    {skill.tech}
                </Heading>
             </SkillsCard>
            ))}
          </SkillsCardContainer>

          <motion.div
            variants={fadeInRightVariant}
            initial='hidden'
            whileInView='visible'
          >
            
            <Heading as='h2' size='h2' top='.5rem'>
               Minhas <BlueText>Habilidades</BlueText>
            </Heading>

            <ParaText top='2rem' bottom='1.5rem'>
            Como Desenvolvedor, tenho experiência em
              desenvolvimento front-end. Sou proficiente em Javascript,
              TypeScript, React, HTML e CSS. Além disso , sempre busco 
              criar interfaces responsivas e atraentes aos olhos do usuário.
            </ParaText>

            <ParaText>
              Um ponto forte adicional é o uso de bibliotecas 
              que agregam o desenvolvimento da aplicação. 
              Como React-Hook-Form, ZOD, React-Query, Zustand, ContextAPI...

            </ParaText>
          </motion.div>
         </FlexContainer>
        </PaddingContainer>
  )
}

export default MySkills