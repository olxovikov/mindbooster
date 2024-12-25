import React from 'react'
import styles from './Dailyk.module.css'
import trash from '../../img/trash-solid.svg'
import refresh from '../../img/refresh.svg'

const Dailyk = ({dailyName, days, deleteDaylik, id, resetDailykDate}) => {
  return (
    <div className={styles.dailyk}>
        <div className={styles.dailykButtons}>
            <button onClick={()=>resetDailykDate(id)}><img src={refresh} alt='Refresh counter'/></button>
            <button onClick={()=>deleteDaylik(id)}><img src={trash} alt='Delete'/></button>
        </div>
        <div style={{width: '80%'}}>
            <label style={{width: '100%'}}>{`${dailyName},`}</label>
            <br />
            <label style={{width: '100%'}}>{`${days} day(s)`}</label>
        </div>
        
    </div>
  )
}

export default Dailyk