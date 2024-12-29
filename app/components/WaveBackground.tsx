import styles from '@/app/styles/WaveBackground.module.css';
import zIndex from '../styles/zIndex';

export default function WaveBackground() {
  return (
    <div className={styles.waveContainer} style={{ zIndex: zIndex.waveBackground }}>
      <div className={`${styles.wave} ${styles.wave1}`}></div>
      <div className={`${styles.wave} ${styles.wave2}`}></div>
      <div className={`${styles.wave} ${styles.wave3}`}></div>
    </div>
  );
}
