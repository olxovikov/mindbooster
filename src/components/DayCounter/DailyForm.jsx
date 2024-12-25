import React from 'react'
import { useState } from 'react'
import styles from './DailyForm.module.css'

const DailyForm = ({runSetDailyList, currentDate}) => {

    const [textInput, setTextInput] = useState('')
    // const [dataInput, setDataInput] = useState('')
    const [date, setDate] = useState(`${currentDate}`.split('.').reverse().join('-'))


    /* function isValidDate(value) {
      const pattern = /^\d{2}\.\d{2}\.\d{4}$/;
      if (!pattern.test(value)) return false;
    
      // Разбиваем строку на части: день, месяц, год
      const [day, month, year] = value.split('.').map(Number);
    
      // Создаем дату из этих значений (месяцы в JavaScript идут от 0 до 11)
      const date = new Date(year, month - 1, day);
    
      // Проверяем, что дата соответствует введенным значениям
      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
      );
    } */

    function dailySubmit(event) {
        event.preventDefault()
        if (textInput.trim() && date) {
          console.log(date)
          runSetDailyList(textInput.trim(), date)
          setTextInput('')
        }
    }

  return (
    <form onSubmit={dailySubmit} className={styles.dailyForm}>
        <label>What do you want to count?</label>
        <input placeholder={'Write something...'} value={textInput} onChange={(event)=>setTextInput(event.target.value)}/>
        <label>What is the start date?</label>
        {/* <input placeholder={'DD.MM.YYYY'} value={dataInput} onChange={(event)=>setDataInput(event.target.value)}/> */}
        <input type='date' value={date} onChange={(event)=>{setDate(event.target.value)}} />
        <button type="submit">Start counting</button>
    </form>
  )
}

export default DailyForm