let explorers = {
  btc: 'https://blockchair.com/bitcoin/transaction/{{hash}}',
  ltc: 'https://blockchair.com/litecoin/transaction/{{hash}}',
  dash: 'https://blockchair.com/dash/transaction/{{hash}}',
  bch: 'https://blockchair.com/bitcoin-cash/transaction/{{hash}}',
  doge: 'https://blockchair.com/dogecoin/transaction/{{hash}}',
  bsv: 'https://blockchair.com/bitcoin-sv/transaction/{{hash}}',
  usdt: 'https://omniexplorer.info/tx/{{hash}}',
  zec: 'https://explorer.zcha.in/transactions/{{hash}}',
  qtum: 'https://explorer.qtum.org/tx/{{hash}}',

  eth: 'https://etherscan.io/tx/{{hash}}',
  trx: 'https://tronscan.org/#/transaction/{{hash}}',
  xrp: 'https://xrpscan.com/tx/{{hash}}',
  xlm: 'https://stellarchain.io/tx/{{hash}}',
  miota: 'https://thetangle.org/transaction/{{hash}}',
  xtz: 'https://dunscan.io/{{hash}}',
  neo: 'https://neotracker.io/tx/{{hash}}',
  bnb: 'https://explorer.binance.org/tx/{{hash}}',
  atom: 'https://www.mintscan.io/txs/{{hash}}',
  eos: 'https://bloks.io/transaction/{{hash}}',
  etc: 'https://blockscout.com/etc/mainnet/tx/{{hash}}',

  ada: 'https://cardanoexplorer.com/tx/{{hash}}',
  xmr: 'http://moneroblocks.info/tx/{{hash}}',
  algo: 'https://algoexplorer.io/tx/{{hash}}',
  ae: 'https://explorer.aepps.com/transactions/{{hash}}',
  zil: 'https://viewblock.io/zilliqa/tx/{{hash}}',
  ont: 'https://explorer.ont.io/transaction/{{hash}}',
  waves: 'https://wavesexplorer.com/tx/{{hash}}',
  rvn: 'https://ravencoin.network/tx/{{hash}}',
  zen: 'https://explorer.zen-solutions.io/tx/{{hash}}',
  xem: 'https://explorer.nemtool.com/#/s_tx?hash={{hash}}'
}

let ERC20 = [
  'ZRX', 'TUSD', 'USDC', 'HOT', 'OMG', 'LINK', 'PAX', 'REP', 'DAI', 'BAT',
  'ENJ', 'MKR', 'USDS', 'BUSD', 'GUSD', 'EURS', 'HUSD', 'USDT20'
]

ERC20.forEach(coin => {
  explorers[coin.toLowerCase()] = 'https://etherscan.io/tx/{{hash}}'
});

module.exports = (coin, hash) => {
  let template = explorers[coin.toLowerCase()]
  return (template || '{{hash}}').replace('{{hash}}', hash)
}
