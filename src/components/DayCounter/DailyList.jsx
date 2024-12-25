import React from 'react'
import Dailyk from './Dailyk'
import styles from './DailyList.module.css'
import refreshDate from '../../img/refreshDate.svg'

const DailyList = ({dailyList, deleteDaylik, refresh, resetDailykDate}) => {
  return (
    <div className={styles.dailyList}>
      <button title='Refresh dates' id={styles.listButton} type='button' onClick={()=>refresh()}><img src={refreshDate} alt='Refresh date'/></button>
      {dailyList.map(element => <Dailyk resetDailykDate={resetDailykDate} deleteDaylik={deleteDaylik} key={element.id} dailyName={element.dailyName} days={element.days} id={element.id}/>)}
    </div>
  )
}

export default DailyList