import styles from './Objective.module.css'

const Objective = ({ className }) => {
  return (
    <div class={`${className} ${styles.objective}`}>
      <h2>Objective</h2>
      <p>
        To use my knowledge of docker, javascript, and css to create
        applications that delight users.
      </p>
    </div>
  )
}

export default Objective
