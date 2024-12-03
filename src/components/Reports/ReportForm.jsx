import { useState } from 'react'
import styles from './ReportForm.module.css'

function ReportForm(props) {

    const [textInput, setTextInput] = useState('')

    function runSetTextInput(event) {
        setTextInput(event.target.value)
    }

    function submitForm(event) {
        event.preventDefault()

        if (textInput.trim()) {
            props.runSetReports(textInput.trim())
        }

        setTextInput('')
        
    }


    return(
        <form className={styles.report__form} onSubmit={submitForm}>
            <input placeholder='Write something...' id={styles.input} value={textInput} onChange={runSetTextInput}></input>
            <button id={styles.button}type='submit'>Save</button>
        </form>
    )
}

export default ReportForm