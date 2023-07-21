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
        <Skills className={styles.skills}/>
        <Experience className={styles.experience}/>
        <Education className={styles.education} />
        <LicensesAndCertifications className={styles.licenses} />
      </main>
    </MaxWidthWrapper>
  )
}

export default App
