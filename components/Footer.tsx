import React from 'react'
import { GridItem, Text } from '@chakra-ui/react'

const Footer: React.FC = () => {
  return (
    <GridItem colSpan={12} d="flex" justifyContent="center">
      <Text fontStyle="italic">
        Created by Vadhe & UI Design by <a href="https://www.figma.com/@fajarsiddiq">fajarsiddiq</a>
      </Text>
    </GridItem>
  )
}

export default Footer
