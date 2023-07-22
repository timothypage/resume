import styles from './Education.module.css'

const Education = ({ className }) => {
  return <section class={`${className} ${styles.education}`}>
    <h2>Education</h2>
    <p class={styles.college}>Michigan State University</p> 
    <p>East Lansing, MI</p>
    <p>BSc in Biochemistry</p>
    <p>May 2009</p>
  </section>
}

export default Education
