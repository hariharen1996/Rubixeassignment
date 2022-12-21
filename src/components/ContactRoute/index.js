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
  const [error, setError] = useState('')
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
          <Form>
            <Label htmlFor="name">
              Name <sup>*</sup>
            </Label>
            <Input type="text" placeholder="Enter Your Name" />
            <Label htmlFor="email">
              Email <sup>*</sup>
            </Label>
            <Input type="text" placeholder="Enter Your Email" />
            <Label htmlFor="mobile-number">
              Mobile Number <sup>*</sup>
            </Label>
            <Input type="text" placeholder="Enter Your Mobile Number" />
            <Button type="submit">Register Now</Button>
          </Form>
        </ContactForm>
      </ContactSection>
    </ContactContainer>
  )
}

export default ContactRoute
