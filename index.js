let explorers = {
  mainnet: {
    btc: 'https://blockchain.info/tx/{{hash}}',
    ltc: 'http://explorer.litecoin.net/tx/{{hash}}',
    bch: 'https://explorer.bitcoin.com/bch/tx/{{hash}}',
    xmr: 'http://moneroblocks.info/tx/{{hash}}',
    dash: 'https://chainz.cryptoid.info/dash/tx.dws?{{hash}}.htm',
    eth: 'https://etherscan.io/tx/{{hash}}',
    xrp: 'https://xrpcharts.ripple.com/#/transactions/{{hash}}',
    xlm: 'https://stellarchain.io/tx/{{hash}}'
  },
  testnet: {
    btc: 'https://live.blockcypher.com/btc-testnet/tx/{{hash}}/',
    ltc: 'https://chain.so/tx/LTCTEST/{{hash}}',
    bch: 'https://www.blocktrail.com/tBCC/tx/{{hash}}',
    xmr: 'https://testnet.xmrchain.net/tx/{{hash}}',
    dash: 'https://chain.so/tx/DASHTEST/{{hash}}',
    eth: 'https://kovan.etherscan.io/tx/{{hash}}',
    xrp: 'https://ripplerm.github.io/ripple-wallet/',
    xlm: 'https://testnet.steexp.com/tx/{{hash}}'
  }
}

module.exports = (net, coin, hash) => {
  return explorers[net][coin.toLowerCase()].replace('{{hash}}', hash)
}
