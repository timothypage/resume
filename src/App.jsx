import MaxWidthWrapper from '/src/components/MaxWidthWrapper'
import Header from '/src/components/Header'
import Objective from '/src/components/Objective'
import Skills from '/src/components/Skills'
import Experience from '/src/components/Experience'
import Education from '/src/components/Education'
import LicensesAndCertifications from '/src/components/LicensesAndCertifications'

import styles from './App.module.css'

function App () {
  return (
    <MaxWidthWrapper>
      <Header />
      <main class={styles.gridWrapper}>
        <Objective className={styles.objective}/>
        <div class={styles.leftSection}>
          <Skills className={styles.skillsDisplay}/>
          <Education className={styles.educationDisplay} />
        </div>
        <Experience className={styles.experience}/>
        <LicensesAndCertifications className={styles.licenses} />
      </main>
      <p>&lt;&lt;EOF</p>
    </MaxWidthWrapper>
  )
}

export default App
