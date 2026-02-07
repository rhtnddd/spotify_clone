import { useState, useEffect } from 'react';
import spotifyLogo from '../../assets/spotify_logo.svg'
import { Input } from '../../components/Input/Input'
import styles from './LoginWeb.module.css'
export const LoginWeb = () => {
  const [hasError, setHasError] = useState(true)
  return (
    <div className={styles.container}>
        <img
          src={spotifyLogo}
          alt="Spotify"
          className={styles.logo}
        />

        <h1 className={styles.logintext}>돌아오신 것<br></br>을 환영합니다</h1>

        <p className={styles.loginemail}>이메일 또는 사용자 이름</p>

        <Input
          hasError={hasError}
          errorMessage='Spotify 사용자 이름 또는 이메일 주소를 입력하세요.'
        />
    </div>
  )
}