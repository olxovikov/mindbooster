import { useState } from 'react'
import styles from './ReportForm.module.css'

function ReportForm(props) {

    const [textArea, setTextArea] = useState('')

    function runSetTextArea(event) {
        setTextArea(event.target.value)
    }

    function submitForm(event) {
        event.preventDefault()

        if (textArea.trim()) {
            props.runSetReports(textArea.trim())
        }

        setTextArea('')
    }


    return(
        <form className={styles.report__form} onSubmit={submitForm}>
            <input placeholder='Write something...' id={styles.input} value={textArea} onChange={runSetTextArea}></input>
            <button id={styles.button}type='submit'>Save</button>
        </form>
    )
}

export default ReportForm