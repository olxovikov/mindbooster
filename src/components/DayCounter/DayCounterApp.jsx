import React from 'react'
import { useState } from 'react'
import DailyForm from './DailyForm'
import DailyList from './DailyList'
import { v4 as uuidv4 } from 'uuid'

const DayCounterApp = () => {
    const [dailyList,setDailyList] = useState(JSON.parse(localStorage.getItem('DAILY_DATA')) || [])
    let currentDate = new Date().toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    })

    function runSetDailyList(newDailyName, startDate) {
        currentDate = new Date(`${currentDate}`.split('.').reverse().join('-'))
        let prevDate = new Date(`${startDate}`.split('.').reverse().join('-'))

        const newDaily = 
            {
                dailyName: newDailyName,
                'startDate': prevDate,
                days: Math.floor((currentDate - prevDate) / (1000*60*60*24)),
                id: uuidv4()
            }

        setDailyList([newDaily, ...dailyList])
        localStorage.setItem('DAILY_DATA', JSON.stringify([newDaily, ...dailyList]))
    }

    function deleteDaylik(id) {
        dailyList.forEach(element =>{
            if (element.id === id) {let result = dailyList.filter(element => element.id !== id); setDailyList(result); localStorage.setItem('DAILY_DATA', JSON.stringify(result))}
        })
    }

    function resetDailykDate(id) {
        let result = dailyList.map(element=>{
            if (element.id===id) {
                return {...element, days: 0, startDate: new Date(`${currentDate}`.split('.').reverse().join('-'))}
            }
            else {return {...element}}
        })

        setDailyList([...result])
        localStorage.setItem('DAILY_DATA', JSON.stringify([...result]))
    }

    function refresh() {
        
        let result = dailyList.map(element => {
            let firstDate = new Date(`${currentDate}`.split('.').reverse().join('-'));
            return {...element, days: Math.floor((firstDate - new Date(`${element.startDate}`)) / (1000*60*60*24))}
        })
        setDailyList([...result])
        localStorage.setItem('DAILY_DATA', JSON.stringify([...result]))
 }

  return (
    <>
        <h1>DayCounter</h1>
        <DailyForm currentDate={currentDate} runSetDailyList={runSetDailyList}/>
        {dailyList.length ? 
        <DailyList resetDailykDate={resetDailykDate} refresh={refresh} deleteDaylik={deleteDaylik} dailyList={dailyList}/>
        : <h2 id='DayAppH2'>List is empty</h2>}
    </>
  )
}

export default DayCounterApp