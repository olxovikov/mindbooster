import Report from "./Report"
import styles from './ReportList.module.css'

function ReportList(props) {

    return(
        <div id={styles.reportList}>
            {props.reports.map((element)=>{
                return <Report reports={props.reports} setReports={props.setReports} runSetReports={props.runSetReports} isSelected={element.isSelected} selectReport={props.selectReport} deleteReport={props.deleteReport} id={element.id} text={element.text} key={element.id} date={element.date}/>
            })}
        </div>
    )
}

export default ReportList