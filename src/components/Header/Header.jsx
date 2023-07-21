import { TbBrandSolidjs } from "solid-icons/tb"
import  { 
  RiBusinessMailLine,
  RiMapMapPinLine, 
  RiDevicePhoneFill,
  RiLogosGithubFill
} from "solid-icons/ri"

import styles from "./Header.module.css"

const Header = () => {
  return (
    <div class={styles.header}>
      <div class={styles.icon}>
        <p>tz</p>
      </div>
      <div class={styles.title}>
        <h1>Tim Zwolak</h1>
      </div>
      <div class={styles.contact}>
        <ul class={styles.contactList}>
          <li>
            <span><RiBusinessMailLine /></span>
            <a href="mailto:***REMOVED***">***REMOVED***</a>
          </li>
          <li>
            <span><RiDevicePhoneFill /></span>
            <a 
              href="tel:+1***REMOVED***" 
              aria-label="***REMOVED***"
            >***REMOVED***</a>
          </li>
          <li>
            <span><RiMapMapPinLine /></span>
            <span class={styles.address} aria-label="home address">
              nope
            </span>
          </li>
          <li>
            <span><RiLogosGithubFill /></span>
            <a href="https://github.com/timothypage" area-label="github user profile">
              timothypage
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
