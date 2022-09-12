export default function getStocksData(): string[] {
  const stocks = [
    'AAPL',
    'MSFT',
    'GOOG',
    'AMZN',
    'UNH',
    'META',
    'TSM',
    'NVDA',
    'V',
    'JNJ',
    'XOM',
    'WMT',
    'JPM',
    'TSLA',
    'MA',
    'KO',
    'PFE',
    'NVO',
  ];

  return stocks.sort((a, b) => a.localeCompare(b));
}
