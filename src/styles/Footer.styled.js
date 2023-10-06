import styled from 'styled-components'

export const ContactForm = styled.form`
    width: 40%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 90%;
        margin: auto
    }
`

export const FormLabel = styled.label`
    display: inline-block;
    color: ${({ theme }) => theme.colors.para_text_color};
    padding-bottom: 10px;
`

export const FormInput = styled.input`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary_light};
    border: 1px solid ${({ theme }) => theme.colors.para_text_color};
    color: ${({ theme }) => theme.colors.para_text_color};
    border-radius: 5px;
    padding: 15px;

    &::placeholder {
        color: ${({ theme }) => theme.colors.para_text_color};
    }
`

export const ButtonSubmit = styled.button`
    border: none;
    padding: 1.2rem 2.2rem;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    background-color: ${({ theme }) => theme.colors.blue};
    color: #fff;
`