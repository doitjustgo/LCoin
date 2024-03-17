import React from 'react';
import styles from './AllCoins.module.css';
import { useQuery } from 'react-query';
import { fetchCoinName, fetchCoinInfo } from '../components/api';
import OneCoinBox from '../components/OneCoinBox';

export default function AllCoins() {
  const { isLoading: loading1, data: coinsSymbol } = useQuery('allCoinNames', fetchCoinName);
  const { isLoading: loading2, data: coinsInfo } = useQuery('allCoinInfo', () => fetchCoinInfo(coinsSymbol), {
    refetchInterval: 200,
    enabled: !!coinsSymbol, // 첫 번째 쿼리가 완료될 때까지 두 번째 쿼리 실행 안 함
  });

  const coinsWithPriceAndName = coinsInfo?.map((coin) => {
    const coinNameMatch = coinsSymbol.find((info) => info.market === coin.market);
    const formattedTradePrice = coin.trade_price?.toLocaleString('ko-KR');

    return { ...coin, korean_name: coinNameMatch.korean_name, trade_price: formattedTradePrice };
  });

  return (
    <div className={styles.container}>
      {loading1 || loading2 ? (
        '로딩중'
      ) : (
        <div className={styles.coinsList}>
          {coinsWithPriceAndName.slice(0, 100).map((oneCoin) => (
            <OneCoinBox key={oneCoin.market} {...oneCoin} />
          ))}
        </div>
      )}
    </div>
  );
}
