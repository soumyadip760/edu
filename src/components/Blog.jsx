import React from 'react'
import styled from 'styled-components'
import { H1, H5, PriceHead } from './Price'
import { blogData } from '../data'
import Blogs from './Blogs'
import { mobile } from './Responsive'

const Container = styled.div`
padding: 2rem;
background: #f8f8f8;
`
const BlogItem = styled.div`
display: flex;
justify-content: space-around;
${mobile({flexWrap: "wrap"})}
`

export default function Blog() {
  return (
  <Container>
  <PriceHead>
    <H5>OUR BLOG</H5>
    <H1>Recent From Blog</H1>
    </PriceHead>
    <BlogItem>
      {blogData.slice(0, 3).map(item => {
        return (
          <Blogs
          items={item}
           />
        )
      })}
    </BlogItem>
  </Container>
  )
}
