import React from 'react'
import styled from 'styled-components'
import Count from './Count'
import { countItem } from '../data'

const Container = styled.div`
background: url("https://raw.githubusercontent.com/sunil9813/Education-Website-Using-ReactJS/master/public/images/awrapper.webp");
background-size: cover;
background-position: 50%;
background-repeat: no-repeat;
display: flex;
width: 100%;
justify-content: space-between;
padding: 2rem;
`


export default function Counter() {
  return (
    <Container>
      {countItem.map(item => {
        return (
            <Count 
             image={item.image}
             title={item.title}
             desc={item.desc}
             />
        )
      })}
    </Container>
  )
}
