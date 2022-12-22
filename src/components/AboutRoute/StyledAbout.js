import styled from 'styled-components'

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-top: 15px;
  }
`

export const AboutContent = styled.div`
  width: 40%;
  padding-bottom: 20px;
  margin-left: 20px;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`
export const AboutHeading = styled.h1`
  color: #181818;
  font-family: 'Roboto';
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 15px;
`
export const AboutDescription = styled.p`
  color: #181818;
  font-weight: 500;
  font-size: 14px;
  font-family: 'Roboto';
  line-height: 1.8;
`

export const AboutImageContainer = styled.div``
export const AboutImage = styled.img`
  width: 500px;
  height: 400px;
  @media screen and (max-width: 800px) {
    width: 350px;
    height: 250px;
  }
`

export const MoreInfoContainer = styled.div`
  background-color: #c84186;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MoreInfoContent = styled.div`
  width: 79%;
`

export const InfoHeading = styled.h1`
  line-height: 1.8;
  font-family: 'Roboto';
  font-size: 20px;
  text-transform: uppercase;
  color: #ffffff;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`
export const InfoDescription = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.8;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`
