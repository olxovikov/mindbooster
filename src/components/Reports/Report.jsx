import { useEffect } from 'react';
import { useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'
import styles from './Report.module.css'

function Report(props) {
    const [textArea, setTextArea] = useState(props.text);

    useEffect(()=>{
    
        let rez = (props.reports).map((element)=>{
            if (props.id === element.id) {return {...element, text: textArea}}
            else {return {...element}}
        })
        props.setReports(rez)

        }, [textArea])

    useEffect(()=>{
        setTextArea(props.text)
    }, [props.text])

    return (
        <div onClick={()=>{return props.selectReport(props.id)}} className={props.isSelected ? styles.selectedReport : styles.report}>
            <label id={styles.date}>
                {props.date}
            </label>
            <ReactTextareaAutosize onClick={(event)=>event.stopPropagation()} value={textArea} onChange={(event)=>setTextArea(event.target.value)} style={props.isSelected ? {color: 'grey'} : {color:'rgb(17,40,65)'}}/>
        </div>
    )
}

export default Report