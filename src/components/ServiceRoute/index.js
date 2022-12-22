import {
  ServiceContainer,
  ServiceSection,
  ServiceHeading,
  NumberContainer,
  Number,
  ImageContainer,
  ServiceImage,
  ServiceContent,
  ServiceDescription,
  ServiceLists,
  Heading,
  ServiceMainHeading,
} from './StyledService'

const serviceData = [
  {
    id: 1,
    number: '01',
    imageUrl:
      'https://res.cloudinary.com/dhr74n4vu/image/upload/v1671681362/ai-1_ioi5hn.png',
    Description: 'Introducing AI to children in an age appropriate manner.',
    color: '#001440',
  },
  {
    id: 2,
    number: '02',
    imageUrl:
      'https://res.cloudinary.com/dhr74n4vu/image/upload/v1671681374/ai-2_p6mjoe.png',
    Description:
      'Gain awareness on AI and build an interactive story around it.',
    color: '#9d2235',
  },
  {
    id: 3,
    number: '03',
    imageUrl:
      'https://res.cloudinary.com/dhr74n4vu/image/upload/v1671681380/ai-3_q2ouvp.png',
    Description: 'Acquire programming skills in user-friendly format',
    color: '#fe5000',
  },
  {
    id: 4,
    number: '04',
    imageUrl:
      'https://res.cloudinary.com/dhr74n4vu/image/upload/v1671681385/ai-4_u18mqe.png',
    Description: 'Exposure to mini projects on diverse topics',
    color: '#154734',
  },
  {
    id: 5,
    number: '05',
    imageUrl:
      'https://res.cloudinary.com/dhr74n4vu/image/upload/v1671681391/ai-5_ao6iov.png',
    Description: 'Train the teachers programme',
    color: '#b58b00',
  },
]

const ServiceRoute = () => (
  <ServiceContainer>
    <ServiceMainHeading>
      <Heading>Tech for teens - a rubixe &reg; initiative</Heading>
    </ServiceMainHeading>
    <ServiceSection>
      {serviceData.map(data => (
        <>
          {data.id === 2 || data.id === 4 ? (
            <>
              <ServiceLists>
                <ServiceContent>
                  <ServiceDescription>{data.Description}</ServiceDescription>
                </ServiceContent>
                <ImageContainer>
                  <ServiceImage src={data.imageUrl} alt="ai" />
                </ImageContainer>

                <ServiceHeading bgColor={data.color} data={data.id}>
                  <NumberContainer>
                    <Number color={data.color}>{data.number}</Number>
                  </NumberContainer>
                </ServiceHeading>
              </ServiceLists>
            </>
          ) : (
            <>
              <ServiceLists>
                <ServiceHeading flexOrder3={data.order3} bgColor={data.color}>
                  <NumberContainer>
                    <Number color={data.color}>{data.number}</Number>
                  </NumberContainer>
                </ServiceHeading>
                <ImageContainer flexOrder2={data.order2}>
                  <ServiceImage src={data.imageUrl} alt="ai" />
                </ImageContainer>
                <ServiceContent flexOrder1={data.order3}>
                  <ServiceDescription>{data.Description}</ServiceDescription>
                </ServiceContent>
              </ServiceLists>
            </>
          )}
        </>
      ))}
    </ServiceSection>
  </ServiceContainer>
)

export default ServiceRoute
