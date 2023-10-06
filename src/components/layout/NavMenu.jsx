import { PaddingContainer, FlexContainer } from '../../styles/Global.styled'
import { AiOutlineClose } from 'react-icons/ai'
import { NavMenuContainer, MenuIcon, MenuItem } from '../../styles/Navbar.styled'
import { navLinks } from '../../utils/Data'
import { slideInLeft } from '../../utils/Variants'
import { motion } from 'framer-motion'

const NavMenu = ({ setOpenMenu }) => {
  return (
    <NavMenuContainer 
      as={motion.div}
      variants={slideInLeft}
      initial= 'hidden'
      animate='visible'
      exit='exit'
    >
       <PaddingContainer  left='5%' right='5%' top='2rem'>
        <FlexContainer responsiveflex='true' justify='flex-end'>
         <MenuIcon
          as={motion.a}
          whileHover={{scale: 1.2}}
         >
            <AiOutlineClose onClick={() => setOpenMenu(false)}/>
         </MenuIcon>
        </FlexContainer>
       </PaddingContainer>

       <PaddingContainer top='8%'>
        <FlexContainer responsiveflex direction='column' align='center'>
            {navLinks.map((link) => (
                <MenuItem 
                  as={motion.a}
                  whileHover={{scale: 1.1}}
                  key={link.id}
                  onClick={() => setOpenMenu(false)} 
                  href={`#${link.href}`}
                >
                    {link.name}
                </MenuItem>
            ))}
        </FlexContainer>
       </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu