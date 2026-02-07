import styles from './Input.module.css'
interface InputProps {
    type?: string
    hasError?:boolean
    errorMessage?: string
}
export const Input = ({
    type = 'text',
    hasError = false,
    errorMessage,
}: InputProps) => {
    return(
        <div className={styles.wrapper}>
            <input
             type={type}
             className={`${styles.input} ${hasError ? styles.error : ''}`}
            />
            {hasError && errorMessage &&(
                <p className={styles.errorText}>
                    <span className={styles.icon}>!</span>
                    {errorMessage}
                </p>
            )}
        </div>
    )
}