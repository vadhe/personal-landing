import React from 'react'
import { Grid, Box, Img, Link, Heading } from '@chakra-ui/react'
import Card from '~/components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'

const index: React.FC = () => {
  return (
    <Box my={4}>
      <Header />
      <Grid templateColumns="repeat(12, 1fr)" gap={6} mx={{ base: 2, lg: 52 }}>
        <Card minH={96} base={12} lg={12}>
          <Box>
            <Heading my={2}>Recent Projects</Heading>
            <Link href="https://resto-app-gold.vercel.app/" target="_blank">
              <Box>
                <Img src="./resto.png" alt="resto" />
              </Box>
            </Link>
          </Box>
        </Card>
        {/* <Card height={72} base={12} lg={4} />
        <Card height={72} base={12} lg={8} />
        <Card height={96} base={12} lg={12} />
        <Card height={72} base={12} lg={4} />
        <Card height={72} base={12} lg={8} /> */}
        <Footer />
      </Grid>
    </Box>
  )
}

export default index
