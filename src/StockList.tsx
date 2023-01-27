import { VStack } from '@chakra-ui/react'
import { StockCard } from './StockCard'
import { Stock } from './Stock'

export const StockList = () => {
  const AAPL: Stock = { ticker: "AAPL", fullName: "Apple Inc. Comm...", currPrice: 161.50, absChange: -4.92, percentChange: -3.05 }
  const NFLX: Stock = { ticker: "NFLX", fullName: "Netflix, Inc. Com...", currPrice: 213.85, absChange: -4.37, percentChange: -2.04 }
  const GOOG: Stock = { ticker: "GOOG", fullName: "Alphabet Inc. Clas...", currPrice: 2390.22, absChange: -108.53, percentChange: -4.54 }
  const AMZN: Stock = { ticker: "AMZN", fullName: "Amazon.com, Inc...", currPrice: 2882.20, absChange: -83.92, percentChange: -2.91 }
  const TSLA: Stock = { ticker: "TSLA", fullName: "Tesla, Inc. Comm...", currPrice: 1000.70, absChange: -8.08, percentChange: -0.81 }
  const TWTR: Stock = { ticker: "TWTR", fullName: "Green price test.", currPrice: 123, absChange: 45, percentChange: 6.78 }
  const stockArr = [AAPL, NFLX, GOOG, AMZN, TSLA, TWTR]
  return (
    <VStack spacing="0">
      {stockArr ? stockArr.map(obj => <StockCard {...obj} />) : null}
    </VStack>
  )
}
