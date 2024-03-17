export async function fetchCoinName() {
  const allCoin = await fetch('https://api.upbit.com/v1/market/all');
  const json = await allCoin.json();
  const filterKRWCoin = json.filter((oneCoin) => oneCoin.market.includes('KRW'));
  return filterKRWCoin;
}

export async function fetchCoinInfo(coin) {
  const name = coin.map((oneCoin) => oneCoin.market).join(',');

  const coinsInfo = await fetch(`https://api.upbit.com/v1/ticker?markets=${name}`);
  const json = await coinsInfo.json();
  return json;
}
