let explorers = {
  mainnet: {
    btc: 'https://blockchain.info/tx/{{hash}}',
    ltc: 'http://explorer.litecoin.net/tx/{{hash}}',
    bch: 'https://explorer.bitcoin.com/bch/tx/{{hash}}',
    xmr: 'http://moneroblocks.info/tx/{{hash}}',
    dash: 'https://chainz.cryptoid.info/dash/tx.dws?{{hash}}.htm',
    eth: 'https://etherscan.io/tx/{{hash}}',
    xrp: 'https://xrpcharts.ripple.com/#/transactions/{{hash}}',
    xlm: 'https://stellarchain.io/tx/{{hash}}',
    ada: 'https://cardanoexplorer.com/tx/{{hash}}',
    trx: 'https://tronscan.org/#/transaction/{{hash}}',
    miota: 'https://thetangle.org/transaction/{{hash}}',
    zec: 'https://chain.so/tx/ZEC/{{hash}}'
  },
  testnet: {
    btc: 'https://live.blockcypher.com/btc-testnet/tx/{{hash}}/',
    ltc: 'https://chain.so/tx/LTCTEST/{{hash}}',
    bch: 'https://www.blocktrail.com/tBCC/tx/{{hash}}',
    xmr: 'https://testnet.xmrchain.net/tx/{{hash}}',
    dash: 'https://chain.so/tx/DASHTEST/{{hash}}',
    eth: 'https://kovan.etherscan.io/tx/{{hash}}',
    xrp: 'https://ripplerm.github.io/ripple-wallet/',
    xlm: 'https://testnet.steexp.com/tx/{{hash}}',
    ada: 'http://cardano-explorer.cardano-testnet.iohkdev.io/tx/{{hash}}',
    trx: 'https://shasta.tronscan.org/#/transaction/{{hash}}',
    miota: 'https://devnet.thetangle.org/transaction/{{hash}}',
    zec: 'https://explorer.testnet.z.cash/tx/{{hash}}'
  }
}

module.exports = (net, coin, hash) => {
  return explorers[net][coin.toLowerCase()].replace('{{hash}}', hash)
}
