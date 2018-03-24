import styles from './logo.css'
function Logo(){

    return (<div className={styles.logowrap}>
        <img src={require('./logo.png')} />
    </div>)
}
export default Logo