let explorers = {
  btc: 'https://blockchair.com/bitcoin/transaction/{{hash}}',
  ltc: 'https://blockchair.com/litecoin/transaction/{{hash}}',
  dash: 'https://blockchair.com/dash/transaction/{{hash}}',
  bch: 'https://blockchair.com/bitcoin-cash/transaction/{{hash}}',
  doge: 'https://blockchair.com/dogecoin/transaction/{{hash}}',
  bsv: 'https://blockchair.com/bitcoin-sv/transaction/{{hash}}',
  usdt: 'https://omniexplorer.info/tx/{{hash}}',
  zec: 'https://explorer.zcha.in/transactions/{{hash}}',

  eth: 'https://etherscan.io/tx/{{hash}}',
  trx: 'https://tronscan.org/#/transaction/{{hash}}',
  xrp: 'https://xrpscan.com/tx/{{hash}}',
  xlm: 'https://stellarchain.io/tx/{{hash}}',
  iota: 'https://thetangle.org/transaction/{{hash}}',
  xtz: 'https://tzscan.io/{{hash}}',
  neo: 'https://neoscan.io/transaction/{{hash}}',
  bnb: 'https://explorer.binance.org/tx/{{hash}}',
  atom: 'https://www.mintscan.io/txs/{{hash}}',
  eos: 'https://eosflare.io/tx/{{hash}}',
  etc: 'https://gastracker.io/tx/{{hash}}',

  ada: 'https://cardanoexplorer.com/tx/{{hash}}',
  xmr: 'http://moneroblocks.info/tx/{{hash}}',
  algo: 'https://algoexplorer.io/tx/{{hash}}'
}

let ERC20 = [
  'ZRX', 'TUSD', 'USDC', 'HOT', 'OMG', 'ZIL', 'LINK', 'PAX', 'REP', 'BAT',
  'ENJ', 'AE', 'MKR'
]

ERC20.forEach(coin => {
  explorers[coin.toLowerCase()] = 'https://etherscan.io/tx/{{hash}}'
});

module.exports = (coin, hash) => {
  let template = explorers[coin.toLowerCase()]
  return (template || '{{hash}}').replace('{{hash}}', hash)
}
