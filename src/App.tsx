import { ChakraProvider, Box, Center } from "@chakra-ui/react"
import { StockCard } from "./StockCard"
import { StockList } from "./StockList"

export const App = () => (
  <ChakraProvider>
    <Center bg="gray.200" h="100vh">
      <StockList />
    </Center>
  </ChakraProvider>
)
