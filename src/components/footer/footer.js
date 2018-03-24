import { Link } from 'dva/router'
import $ from './footer.css'
function Footer({navlist}){
    const newNavlist = navlist.filter(v=>!v.hide);
    console.log(newNavlist,'~~')
            return (<ul className={$.footer}>
            {newNavlist.map(v=>{
                return (
                <li className={$.oli} key={v.path}> 
                  
                  <Link to={v.path}>{v.text}</Link> 
                </li>)
            })}
</ul>)
}
export default Footer;