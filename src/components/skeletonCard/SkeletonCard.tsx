import { Skeleton } from "antd"

import styles from './SkeletonCard.module.scss'

const SkeletonCard = () => {
    return (
    <div className={styles.card}>
      <Skeleton.Input 
        active 
        size="small" 
        style={{ width: 80, height: 20}} 
        className={styles.day} 
        
      />
      <Skeleton.Input 
        active 
        size="small" 
        style={{ width: 100, height: 20, marginTop: 7}} 
        className={styles.date} 
      />
      <div style={{display: 'flex', flexDirection:'column', marginTop: 2}}>
        
      <Skeleton.Avatar 
        active 
        size={48} 
        shape="square" 
      />

      <Skeleton.Button 
        active 
        size="small" 
        style={{ width: 50, height: 24, marginTop: 13 }} 
        className={styles.tempDay} 
      />
      <Skeleton.Button 
        active 
        size="small" 
        style={{ width: 50, height: 24, marginTop: 3}} 
        className={styles.tempNight} 
      />
      </div>

      <Skeleton.Input 
        active 
        size="small" 
        style={{ width: 120, height: 20, marginTop: 6 }} 
        className={styles.desc} 
      />
    </div>
  );
};


export default SkeletonCard