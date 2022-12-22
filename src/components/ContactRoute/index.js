import {useState} from 'react'
import {
  ContactContainer,
  ContactDescription,
  ContactHeading,
  ContactText,
  ContactForm,
  Form,
  Input,
  Label,
  ErrorMessage,
  Button,
  HorizontalLine,
  ContactSection,
} from './StyledContact'

const ContactRoute = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [mobileError, setMobileError] = useState('')

  const changeName = event => {
    setName(event.target.value)
  }

  const changeEmail = event => {
    setEmail(event.target.value)
  }

  const changeMobileNumber = event => {
    setMobileNumber(event.target.value)
  }

  const submitForm = event => {
    event.preventDefault()
    if (name === '') {
      setNameError('*Name is Required')
    } else if (
      name.includes(0) ||
      name.includes(1) ||
      name.includes(2) ||
      name.includes(3) ||
      name.includes(4) ||
      name.includes(5) ||
      name.includes(6) ||
      name.includes(7) ||
      name.includes(8) ||
      name.includes(9)
    ) {
      setNameError('*Digits should not be included')
    } else {
      setNameError('')
    }

    if (email === '') {
      setEmailError('*Email is Required')
    } else if (!email.includes('@') || !email.includes('.com')) {
      setEmailError('*Enter a valid email-id')
    } else {
      setEmailError('')
    }

    if (mobileNumber === '') {
      setMobileError('*Mobile Number is Required')
    } else if (mobileNumber.length === 10) {
      setMobileError('')
    } else {
      setMobileError('*Enter a valid mobile number')
    }
  }

  return (
    <ContactContainer>
      <ContactSection>
        <ContactDescription>
          <ContactHeading>get in touch</ContactHeading>
          <ContactText>
            Please complete the form and we will get back to you.
          </ContactText>
        </ContactDescription>

        <ContactForm>
          <Form onSubmit={submitForm}>
            <Label htmlFor="name">
              Name <sup>*</sup>
            </Label>
            <Input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={changeName}
            />
            <ErrorMessage>{nameError}</ErrorMessage>
            <Label htmlFor="email">
              Email <sup>*</sup>
            </Label>
            <Input
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={changeEmail}
            />
            <ErrorMessage>{emailError}</ErrorMessage>
            <Label htmlFor="mobile-number">
              Mobile Number <sup>*</sup>
            </Label>
            <Input
              type="text"
              placeholder="Enter Your Mobile Number"
              value={mobileNumber}
              onChange={changeMobileNumber}
            />
            <ErrorMessage>{mobileError}</ErrorMessage>
            <Button type="submit">Register Now</Button>
          </Form>
        </ContactForm>
      </ContactSection>
    </ContactContainer>
  )
}

export default ContactRoute
