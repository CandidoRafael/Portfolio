import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FlexContainer, PaddingContainer, Container, BlueText } from '../styles/Global.styled'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavbarContainer, Logo, MenuIcon } from '../styles/Navbar.styled'
import NavMenu from './layout/NavMenu'


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

  return (
    <div>
        <NavbarContainer bgcolor={sticky}>
          <PaddingContainer 
            top='1.2rem' 
            bottom='1.2rem'
            responsiveleft='1rem'
            responsiveright='1rem'
            >
            <Container>
                <FlexContainer responsiveflex='true' justify='space-between'>
                    <Logo>
                        RafaDev<BlueText>.</BlueText>
                    </Logo>

                    <MenuIcon
                      as={motion.a}
                      whileHover={{scale: 1.2}}
                      onClick={() =>  setOpenMenu(true) }
                    >
                        <GiHamburgerMenu />
                    </MenuIcon>
                </FlexContainer>
            </Container>

            <AnimatePresence>
                {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
            </AnimatePresence>
          </PaddingContainer>
        </NavbarContainer>
    </div>
  )
}

export default Navbar