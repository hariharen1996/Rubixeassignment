import styled, {css} from 'styled-components'

export const ServiceContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  background-color: #f4f4f4;
  padding: 15px;
`

export const ServiceMainHeading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 11%;
`

export const Heading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #181818;
  margin-bottom: 20px;
  margin-top: 20px;
  text-transform: uppercase;
  @media screen and (max-width: 565px) {
    font-size: 16px;
  }
`

export const ServiceSection = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 95%;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`
export const ServiceHeading = styled.h1`
  background-color: ${props => props.bgColor};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props =>
    props.data === 2 || props.data === 4
      ? css`
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        `
      : css`
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        `}
`
export const NumberContainer = styled.div`
  background-color: #cbd5e1;
  border-radius: 50%;
  position: absolute;
  padding: 8px;
`
export const Number = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  font-family: 'Roboto';
`
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`
export const ServiceImage = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 15px;
  margin-bottom: 10px;
`
export const ServiceContent = styled.div`
  margin-top: 20px;
  display: flex;
  padding: 15px;
`
export const ServiceDescription = styled.p`
  color: #181818;
  font-size: 12px;
  font-family: 'Roboto';
  text-align: center;
`
export const ServiceLists = styled.li`
  list-style: none;
  width: 150px;
  box-shadow: 2px 13px 4px rgba(3, 3, 3, 0.07);
  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`
