import styles from "./SkillDisplay.module.css"

const SkillDisplay = ({ name, level, icon }) => {
  return (
    <>
      <div class={styles.textDisplay}>
        <span>{icon}</span>
        <span>{name}</span>
      </div>
      <div>
        <div class={styles.skillLevels}>
          <For each={Array(5)}>{(_, i) =>
            <div 
              class={styles.skillLevel} 
              style={{'--background-color': i() < level ? 'var(--primary)' : 'white'}}
            />
          }</For>
        </div>
      </div>
    </>
  )
}

export default SkillDisplay
