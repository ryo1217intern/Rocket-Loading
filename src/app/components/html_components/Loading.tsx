import React from 'react'
import styles from '../css_components/Loading.module.css'
import LoadingIcon from './LoadingIcon'

const Loading = () => {
  return (
    <div className={styles.body}>
      Loading Now...
      <LoadingIcon />
    </div>
  )
}

export default Loading
