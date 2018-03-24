import styles from './header.css';
import classNames from 'classnames';
function Header({title,color}){

// console.log(styles.topheader,'--')
    return (<div className={styles.topheader} style={{background:color}}>
        {title}
    </div>)
}
export default Header