import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'yellow.body',
        color: 'black.text'
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline'
        }
      }
    }
  },
  components: {},
  fonts: {
    heading: 'Inter'
  },
  colors: {
    yellow: {
      body: '#FFF9B0',
      card: '#FFC75F'
    },
    black: {
      text: '#363636'
    }
  }
})
export default theme
