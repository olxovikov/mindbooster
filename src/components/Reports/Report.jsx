import styles from './Report.module.css'

function Report(props) {
    return (
        <div onClick={()=>{return props.selectReport(props.id)}} className={props.isSelected ? styles.selectedReport : styles.report}>
            <label id={styles.date}>
                {props.date}
            </label>
            <label>
                {props.text}
            </label>
        </div>
    )
}

export default Report