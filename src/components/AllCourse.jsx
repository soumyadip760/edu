import React from 'react'
import styled from 'styled-components'
import { CoureseData } from '../data'
import AllCourses from './AllCourses'
import { H1, H5 } from './Price'
import { mobile } from './Responsive'

const Container = styled.div`
padding: 2rem;
`
const Head = styled.div`
text-align: center;
`
const CourseItem = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
${mobile({
  justifyContent: "space-around"
})}
`

export default function AllCourse() {
  return (
   <Container>
     <Head>
        <H5>OUR COURSES</H5>
        <H1>Explore Our Popular Online Courses </H1>
        </Head>
        <CourseItem>
            {CoureseData.map(item => {
                return(
                    <AllCourses
                    items={item}
                    itemId={item.id}
                     />
                )
            })}
        </CourseItem>
   </Container>
  )
}
