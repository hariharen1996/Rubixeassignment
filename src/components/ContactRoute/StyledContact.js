import styled from 'styled-components'

export const ContactContainer = styled.div`
  padding: 20px;
  margin-left: 30px;
  margin-right: 30px;
  width: 50%;
`
export const ContactSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: Center;
  gap: 20px;
  width: 100%;
  border: 1px solid #000000;
  padding: 30px;
`

export const ContactDescription = styled.div`
  border-right: 1px solid #000000;
  height: 300px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`
export const ContactHeading = styled.h1`
  color: #181818;
  font-size: 30px;
  font-weight: 600;
  font-family: 'Roboto';
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-right: 10px;
`
export const ContactText = styled.p`
  color: #181818;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-right: 10px;
`
export const ContactForm = styled.div`
  width: 60%;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:flex-startl
  align-items: center;
`
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #475569;
  margin-bottom: 8px;
`
export const Label = styled.label`
  margin-bottom: 5px;
  color: #212121;
  font-weight: 600;
  font-size: 14px;
`
export const ErrorMessage = styled.p``
export const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 8px 17px;
  cursor: pointer;
  background-color: #212e52;
  color: #ffffff;
  border: none;
  outline: none;
  border-radius: 5px;
`

export const HorizontalLine = styled.hr`
  background-color: #181818;
  height: 100%;
  width: 100%;
`
