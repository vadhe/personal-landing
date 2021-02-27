import { Button } from '@chakra-ui/react'
import React from 'react'

type AppProps = {
  icon: JSX.Element
  title: string
}
const Btn: React.FC<AppProps> = ({ icon, title }: AppProps) => {
  return (
    <Button color="black.text" mx={2} leftIcon={icon} bg="yellow.card" variant="solid">
      {title}
    </Button>
  )
}

export default Btn
