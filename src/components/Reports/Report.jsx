import { useEffect, useState, useRef } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize'
import styles from './Report.module.css'
import edit from '../../img/editpen.svg'

function Report(props) {
    const [textArea, setTextArea] = useState(props.text);
    const [stopEdit, setStopEdit] = useState(true)
    const textareaRef = useRef(null)

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

    useEffect(()=>{
        if (!stopEdit && textareaRef.current) {
            textareaRef.current.focus();
            const len = textareaRef.current.value.length;
            textareaRef.current.setSelectionRange(len, len);
        }
    }, [stopEdit])

    function changeEditMode(event) {
        event.stopPropagation()

        if (stopEdit) {
            setStopEdit(false)
        }
        else {setStopEdit(true)}
    }

    return (
        <div onClick={()=>{return props.selectReport(props.id)}} className={props.isSelected ? styles.selectedReport : styles.report}>
            <label id={styles.date}>
                {props.date}
            </label>
            <ReactTextareaAutosize onBlur={()=>setStopEdit(true)} ref={textareaRef} disabled={stopEdit} onClick={stopEdit ? null : (event)=>event.stopPropagation()} value={textArea} onChange={(event)=>setTextArea(event.target.value)} style={props.isSelected ? {color: 'grey'} : {color:'rgb(17,40,65)'}}/>
            <button onClick={changeEditMode}><img style={stopEdit ? null : {filter: 'invert(79%) sepia(47%) saturate(5961%) hue-rotate(113deg) brightness(92%) contrast(105%)'}} src={edit} /></button>
        </div>
    )
}

export default Report