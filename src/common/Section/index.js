import React from 'react'
import { SectionContainer, SectionHeader, SectionBody } from './styled'

const Section = ({ title, body, extraContent }) => (
  <SectionContainer>
    <SectionHeader>{title}{extraContent}</SectionHeader>
    
    <SectionBody>{body}</SectionBody>
  </SectionContainer>
)
export default Section
