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
import { API_LOGOUT_PATH } from '../../constants/api_paths'

const Navbar = () => {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch(API_LOGOUT_PATH, {method: 'POST'})
    router.push(HOME_PATH)
  }

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
        <Button className={styles.button} onClick={handleLogout}>
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
