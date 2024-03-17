import * as React from 'react';
import Card from '@mui/material/Card';
import styles from './OneCoinBox.module.css';

// 이미지 로드 실패 시 기본 이미지 로드
const handleImageError = (e) => {
  e.target.src = 'basicCoin.png';
};

export default function OneCoinBox({ korean_name, trade_price, signed_change_rate, market }) {
  return (
    <Card className={styles.oneCoinBox} variant="outlined" sx={{ maxWidth: 360 }}>
      <div className={styles.coinTitle}>
        <img
          src={`https://cryptoicon-api.pages.dev/api/icon/${market.split('-')[1].toLowerCase()}`}
          className={styles.Img}
          alt={korean_name}
          onError={handleImageError}
        />
        <span className={styles.coinTitleText}>{korean_name}</span>
      </div>
      <div className={signed_change_rate > 0 ? styles.upTicker : styles.downTicker}>
        <div className={styles.price}>{trade_price}원</div>
        <div className={styles.rate}>
          {signed_change_rate * 100 >= 0 ? '+' : ''}
          {(signed_change_rate * 100).toFixed(2)}%
        </div>
      </div>
    </Card>
  );
}
