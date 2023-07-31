import { TbBrandSolidjs } from 'solid-icons/tb'
import {
  RiBusinessMailLine,
  RiMapMapPinLine,
  RiDevicePhoneFill,
  RiLogosGithubFill
} from 'solid-icons/ri'

import styles from './Header.module.css'

const Header = () => {
  const phone = new URLSearchParams(window.location.search).get('phone')
  const email = new URLSearchParams(window.location.search).get('email')

  return (
    <div class={styles.header}>
      <div class={styles.tzIcon}>
        <p>tz</p>
      </div>
      <div class={styles.title}>
        <h1>Tim Zwolak</h1>
      </div>
      <div class={styles.contact}>
        <ul class={styles.contactList}>
          <Show when={email}>
            <li>
              <span class={styles.icon}>
                <RiBusinessMailLine />
              </span>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          </Show>

          <Show when={phone}>
            <li>
              <span>
                <RiDevicePhoneFill />
              </span>
              <a
                href={`tel:+1${phone}`}
                aria-label={`cell phone ${phone.split('').join(' ')}`}
              >
                {phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}
              </a>
            </li>
          </Show>

          <li>
            <span>
              <RiMapMapPinLine />
            </span>
            <span class={styles.address} aria-label='home address'>
              Littleton, CO
            </span>
          </li>
          <li>
            <span>
              <RiLogosGithubFill />
            </span>
            <a
              href='https://github.com/timothypage'
              area-label='github user profile'
            >
              timothypage
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
