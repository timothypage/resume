import { 
  RiDevelopmentJavascriptFill,
} from "solid-icons/ri"

import {
  FaBrandsDocker,
  FaBrandsGitAlt,
  FaBrandsAws,
  FaBrandsJava
} from 'solid-icons/fa'

import {
  SiRuby,
  SiPython,
  SiC,
  SiCss3,
  SiUbuntu
} from 'solid-icons/si'


import SkillDisplay from '/src/components/SkillDisplay'

import styles from './Skills.module.css'

const Skills = ({ className }) => {
  return (
    <div class={`${className} ${styles.skills}`}>
      <h2>Skills</h2>
      <ul class={styles.skillsList}>
        <For each={skills}>{(skill, i) =>
          <li>
            <SkillDisplay {...skill} />
          </li>
        }</For>
      </ul>
    </div>
  )
}

const skills = [
  {
    name: 'javascript',
    level: 5,
    icon: <RiDevelopmentJavascriptFill />
  },
  {
    name: 'docker',
    level: 5,
    icon: <FaBrandsDocker />
  },
  {
    name: 'html / css',
    level: 4,
    icon: <SiCss3 />
  },
  {
    name: 'ruby',
    level: 4,
    icon: <SiRuby />
  },
  {
    name: 'AWS',
    level: 4,
    icon: <FaBrandsAws />
  },
  {
    name: 'git',
    level: 4,
    icon: <FaBrandsGitAlt />
  },
  {
    name: 'linux',
    level: 3,
    icon: <SiUbuntu />
  },
  {
    name: 'python',
    level: 2,
    icon: <SiPython />
  },
  {
    name: 'java',
    level: 2,
    icon: <FaBrandsJava />
  },
  {
    name: 'c',
    level: 2,
    icon: <SiC />
  }
]

export default Skills
