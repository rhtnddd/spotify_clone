import { useState, useEffect } from 'react';
import spotifyLogo from '../../assets/spotify_logo.svg'
import styles from './LoginWeb.module.css'
export const LoginWeb = () => {
  return (
    <div>
        <img
          src={spotifyLogo}
          alt="Spotify"
          className={styles.logo}
        >
        </img>
        <h1 className={styles.logintext}>돌아오신 것<br></br>을 환영합니다</h1>
    </div>
  )
}