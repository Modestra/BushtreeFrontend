import './Header.css'
import LogoSvg from '../assets/logo_site.svg'
import { useNavigate } from 'react-router-dom';

function HeaderApp(){

    const navigate = useNavigate();

    return(
        <header>
            <img src={LogoSvg} alt="" />
            <nav>
                <a href="">Инструкция</a>
                <a href="">Готовые решения</a>
                <a href="">Вопрос-ответ</a>
            </nav>
            <button onClick={()=> navigate('flowers')} className="btn btn-outline-success" type="submit">Создать цветник</button>
        </header>
    )
}

export default HeaderApp;