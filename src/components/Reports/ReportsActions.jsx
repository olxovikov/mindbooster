import Button from '../UI/Button.jsx'
import styles from './ReportsActions.module.css'
import trash from '../../img/trash-solid.svg'
import check from '../../img/check-solid.svg'


function ReportsActions(props) {
    return(
        <div className={styles.actions}>
            <Button title='Select all' onClick={props.selectAll}><img src={check} alt='Select all'/></Button>
            <Button title='Delete selected' disabled={props.isDisabled} onClick={props.deleteSelected}><img src={trash} alt='Delete selected'/></Button>
        </div>
    )
}

export default ReportsActions