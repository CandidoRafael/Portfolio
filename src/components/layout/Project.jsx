import { PaddingContainer, Heading, ParaText, FlexContainer, IconContainer, Button } from '../../styles/Global.styled'
import { FaGithub } from 'react-icons/fa'
import { ProjectImage, ProjectImageContainer, TechStackCard } from '../../styles/MyProject.styled'
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants'
import { motion } from 'framer-motion'

const Project = ({ data }) => {
  return (
   <FlexContainer 
    fullwidthchild='true'
    direction={data.reverse ? 'row-reverse' : undefined}
    >
        <motion.div
          variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
          initial='hidden'
          whileInView='visible'
        >
          <FlexContainer align='center' gap='1rem'>
         
            <Heading as='h3' size='h3' bottom='1rem'>
                {data.project_name}
            </Heading>

            <IconContainer color='blue' size='2rem'>
                <FaGithub />
            </IconContainer>
          </FlexContainer>

          <PaddingContainer top='1rem'>
            <FlexContainer gap='1.5rem'>
                {data.tech_stack.map((stack, index) => (
                    <TechStackCard key={index}>{stack}</TechStackCard>
                ))}
            </FlexContainer>
          </PaddingContainer>

          <ParaText top='1.5rem' bottom='2rem'>
            {data.project_desc}
          </ParaText>

          <Button>Visit web site</Button>
        </motion.div>

        <ProjectImageContainer 
          as={motion.div}
          variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
          initial='hidden'
          whileInView='visible'
          justify={data.reverse ? 'flex-start' : 'flex-end'}>
            <ProjectImage src={data.project_img} />
        </ProjectImageContainer>
   </FlexContainer>
  )
}

export default Project