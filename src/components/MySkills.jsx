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
           responsiveflex  
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
            <Heading as='h4' size='h4'>
                My Skills
            </Heading>

            <Heading as='h2' size='h2' top='.5rem'>
                What <BlueText>I can do</BlueText>
            </Heading>

            <ParaText top='2rem' bottom='1.5rem'>
                As a Developer, i have a wide range of experience in
                front-end development. I am proficient in Javascript,
                Typescript, React, HTML and CSS. My strong experience in 
                building responsive and dynamic user interfaces using React and
                Zustand has allowed me to create engagin and interactive web applications
            </ParaText>

            <ParaText>
                I have experience in using React for building scalable and maintainable
                applications and a bult of stuffs 
            </ParaText>
          </motion.div>
         </FlexContainer>
        </PaddingContainer>
  )
}

export default MySkills