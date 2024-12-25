import React from 'react'
import styles from './Switch.module.css'

const Switch = ({onChange, checked}) => {
  return (
    <label className={styles.switcher}>
        <input checked={checked} onChange={onChange} type='checkbox' />
        <span />
    </label>
  )
}

export default Switch