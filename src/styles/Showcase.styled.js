import { styled } from "styled-components";

export const ShowcaseParticleContainer = styled.div`
    position: relative;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
       display: none;
        
    }
`

export const ShowcaseImgCard = styled.div`
    border: 2px solid white;
    border-radius: 50%;
    width: 22em;
    height: 22em;
    position: relative;
    overflow: hidden;
`

export const Particle = styled.img`
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    bottom: ${({ bottom }) => bottom};
    transform: rotate(${({ rotate }) => rotate});
`

export const ButtonCV = styled.a`
    cursor: pointer;
    padding: .7rem 2rem;
    background-color: #fff;
    text-decoration: none;
    color: #222;
    border-radius: .3rem;
    border: 1px solid transparent;
    transition: all .5s ease-in;

    &:hover {
        border: 1px solid #fff;
        background-color: transparent;
        color:#fff;
    }
`