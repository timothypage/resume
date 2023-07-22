import styles from "./LicensesAndCertifications.module.css"

const LicensesAndCertifications = ({ className }) => {
  return (
    <section class={`${className} ${styles.licenses}`}>
      <h2>Licenses And Certifications</h2>
      <ul>
        <li>AWS Solutions Architect - Assoc.</li>
        <li>FCC Amateur Radio - Extra Class</li>
        <li>Emergency Medical Technician - Basic (expired)</li>
      </ul>
    </section>
  )
}

export default LicensesAndCertifications
