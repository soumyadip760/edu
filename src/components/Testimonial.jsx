import React from 'react'
import styled from 'styled-components'
import Testimonials from './Testimonials'
import { testData } from '../data'
import { H1, H5 } from './Price'
import { tablet } from './Responsive'

const Container = styled.div`
padding: 2rem;
background: #f8f8f8;
`
const Head = styled.div`
text-align: center;
`
const TestimonialData = styled.div`
display: flex;
justify-content: space-between;
${tablet({flexWrap: "wrap"})}
`

export default function Testimonial() {
    return (
        <Container>
            <Head>
                <H5>TESTIMONIAL</H5>
                <H1>Our Successful Students </H1>
            </Head>
            <TestimonialData>
                {testData.map(item => {
                    return (
                        <Testimonials 
                         items={item}
                          />
                    )
                })}
            </TestimonialData>
        </Container>
    )
}
