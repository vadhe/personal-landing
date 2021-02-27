import React from 'react'
import { Grid, GridItem, Img, Heading, Text, Flex } from '@chakra-ui/react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiOutlineMedium, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaDollarSign } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import Btn from './Btn'

const Header: React.FC = () => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={6} my={10}>
      <GridItem colSpan={{ base: 12, lg: 5 }} mx="auto">
        <Img w="300px" h="300px" border={1} borderRadius="full" ml={{ lg: 40 }} src="./profil.svg" />
      </GridItem>
      <GridItem colSpan={{ base: 12, lg: 7 }} ml={{ lg: 40 }} textAlign={{ base: 'center', lg: 'left' }}>
        <Heading my={2} as="h1" size="2xl" isTruncated>
          Hi There !
        </Heading>
        <Text my={2} fontWeight="400">
          Vadhe is here I am 👨🏻‍💻 FrontEnd + Learner & Other.
          <br /> I currently work at <a href="https://home.pallakastudio.com/">Pallaka Studio</a> and I am an college student <br /> aswell
        </Text>
        {/* <Text my={2} fontWeight="400">
          👨🏻 👨🏻‍💻 FrontEnd + Learner & Other ⚡🚀🛠️
        </Text> */}
        <Text my={2} ml={{ lg: 10 }} fontWeight="400">
          You Can Find Me In this Below
        </Text>
        <Flex justifyContent={{ base: 'center', lg: 'start' }} ml={{ lg: 16 }}>
          <IconContext.Provider value={{ size: '30px' }}>
            <AiFillFacebook />
            <AiFillGithub />
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiOutlineMedium />
            <AiOutlineTwitter />
          </IconContext.Provider>
        </Flex>
        <Flex justifyContent={{ base: 'center', lg: 'start' }} mt={6}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aldyvadhe@gmail.com">
            <Btn icon={<MdEmail />} title="Email" />
          </a>
          <a href="https://saweria.co/vadhe">
            <Btn icon={<FaDollarSign />} title="Support Me" />
          </a>
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default Header
