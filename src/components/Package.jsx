import React from 'react'
import styled from 'styled-components'
import { packageData } from '../data'
import Packages from './Packages'
import { H1, H5, PriceHead } from './Price'
import { tablet } from './Responsive'

const Container = styled.div`
background: #f8f8f8;
padding: 2rem;
`
const PackageDetail = styled.div`
display: flex;
justify-content: space-around;
${tablet({
  flexWrap: "wrap"
})}s
`

export default function Package() {
  return (
  <Container>
  <PriceHead>
  <H5>OUR PRICING</H5>
   <H1>Pricing & Packages</H1>
  </PriceHead>
  <PackageDetail>
    {packageData.map(item => {
        return(
            <Packages
            items={item}
             />
        )
    })}
  </PackageDetail>
  
  </Container>
  )
}
