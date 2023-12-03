import {BiSolidDownload} from 'react-icons/bi';

export default function HeroSection(){
    return(
        <section id="HeroSection">
            <div className="HeroContet">
                <p className="HeroSaudacao">Olá, eu sou Matheus Albert</p>
                <h1 className="HeroTitle">Desenvolvedor web<br />Front-End</h1>
                <p className="HeroResume">Entusiasta do universo da programação.
                    < br/> Pronto a encarar novos desafios, gosto de criar soluções web úteis e práticas.
                </p>
                <div className='HeroButton'>
                    <a href="https://drive.google.com/file/d/11dRaou6NjxHjcpM3H-7AD-iuRUMWOZRQ/view?usp=drive_link" 
                    className='btn_cv' target='blank' download>CV <BiSolidDownload /></a>
                </div>
            </div>
            <div className="HeroImg">
                {/* <img src="./images/HeroImg.png" alt="Imagem da página Hero" /> */}
                <img src='./images/perfil_teste.png' alt='Imagem de perfil profissional'/>
            </div>
        </section>
    )
}