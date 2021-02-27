import React from 'react'
import { GridItem, Box } from '@chakra-ui/react'

type CardProps = {
  base: number
  lg: number
  minH: number
  children: JSX.Element
}
const Card: React.FC<CardProps> = ({ base, lg, minH, children }: CardProps) => {
  return (
    <GridItem w="full" colSpan={{ base, lg }}>
      <Box w="full" minH={minH} bg="yellow.card" border={1} borderRadius="md" px={6} py={4}>
        {children}
      </Box>
    </GridItem>
  )
}

export default Card
