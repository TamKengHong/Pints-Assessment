import { Box, Center, Circle, Flex, Image } from "@chakra-ui/react"
import { Stock } from './Stock'

const Picture = ({ ticker }: Stock) => {
  const url = `https://storage.googleapis.com/iex/api/logos/${ticker}.png`
  return (
    <Center boxSize="100px">
      <Circle bg="gray.200" size="80px">
        <Image
          fit="contain"
          borderRadius='full'
          boxSize='68px'
          src={url}
          alt='Ticker Symbol'
        />
      </Circle>
    </Center>
  )
}
const Description = ({ ticker, fullName }: Stock) => {
  return (
    <Box>
      <Box p="1" h="50%" w="180px" fontSize="2xl" fontWeight="bold">
        {ticker}
      </Box>
      <Box p="1" h="50%" w="180px" textColor="gray.500">
        {fullName}
      </Box>
    </Box>
  )
}
const PriceInfo = ({ currPrice, absChange, percentChange }: Stock) => {
  const color = absChange < 0 ? "red" : "green"
  return (
    <Box>
      <Box p="1" h="50%" w="150px" fontSize="2xl" fontWeight="bold">
        {"$" + currPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
      </Box>
      <Flex p="1" h="50%" w="150px" textColor={color} >
        <Box w="90px">
          {(absChange < 0 ? "↓ " : "↑ +") + absChange.toString()}
        </Box>
        <Box w="60px">
          {(absChange > 0 ? "+" : "") + percentChange.toString() + "%"}
        </Box>
      </Flex>
    </Box>
  )
}


export const StockCard = (stock: Stock) => {
  return (
    <Flex bg="white" h="100" borderBottom="2px" borderColor="gray.200">
      <Picture {...stock} />
      <Description {...stock} />
      <PriceInfo {...stock} />
    </Flex>
  )
}
