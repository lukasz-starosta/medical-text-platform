import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Grid, Menu } from 'antd'
import styles from './Navbar.module.css'
import {
  DASHBOARD_PATH,
  BROWSER_PATH,
  ACCOUNT_PATH,
  UPLOAD_PATH,
  HOME_PATH,
  PRIVACY_PATH,
} from '../../constants/app_paths'

const Navbar = () => {
  const router = useRouter()

  const onButtonClick = (route: string) => {
    router.push(route)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>MedicalTextPlatform</p>
      </div>
      <div className={styles.buttons}>
        <Button className={styles.button} onClick={() => onButtonClick(DASHBOARD_PATH)}>
          Start
        </Button>
        <Button className={styles.button} onClick={() => onButtonClick(BROWSER_PATH)}>
          Przeglądaj
        </Button>
        <Button className={styles.button} onClick={() => onButtonClick(ACCOUNT_PATH)}>
          Moje konto
        </Button>
        <Button className={styles.button} onClick={() => onButtonClick(UPLOAD_PATH)}>
          Utwórz wpis
        </Button>
      </div>
      <div className={styles.footer}>
        <Button className={styles.button} onClick={() => onButtonClick(HOME_PATH)}>
          Wyloguj
        </Button>
        <Button
          className={styles.footerText}
          type="link"
          onClick={() => onButtonClick(PRIVACY_PATH)}
        >
          Polityka prywatności
        </Button>
      </div>
    </div>
  )
}

export default Navbar
