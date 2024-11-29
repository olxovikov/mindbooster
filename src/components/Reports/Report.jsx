import styles from './Report.module.css'

function Report(props) {
    return (
        <div onClick={()=>{return props.selectReport(props.id)}} className={props.isSelected ? styles.selectedReport : styles.report}>
            <label id={styles.date}>
                {props.date}
            </label>
            <label>
                {(props.text).split('\n').map((element, index) => (
                    <span key={index}>
                        {element}
                        <br/>
                        {/* {index < (props.text).split('\n').length-1 && <br/>} */}
                    </span>
                ))}
            </label>
        </div>
    )
}

export default Report