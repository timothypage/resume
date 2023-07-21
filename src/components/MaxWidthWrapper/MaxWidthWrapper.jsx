import styles from './MaxWidthWrapper.module.css'

const MaxWidthWrapper = ({children}) => {
  return <div class={styles.maxWidthWrapper}>{children}</div>
}

export default MaxWidthWrapper
