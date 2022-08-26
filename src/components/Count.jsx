import React from 'react'
import styled from 'styled-components'
import { tablet, mobile} from './Responsive'

const Container = styled.div`
display: flex;
${tablet({
flexWrap: "wrap"
})}
${mobile({
  display: "none"
})}
`
const Image = styled.img``
const CountText = styled.div`
color: #fff;
margin-top: 1rem;
margin-left: .4rem;
font-size: 1.2rem;
font-weight: 600;
`
const H2 = styled.h2`

`
const P = styled.p``
export default function Count(props) {
  return (
    <Container>
    <Image src={props.image} alt='' />
    <CountText>
        <H2>{props.title}</H2>
        <P>{props.desc}</P>
    </CountText>
    </Container>
  )
}
