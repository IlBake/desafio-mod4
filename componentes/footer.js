function footer(footerContenedor){
    const footerEl = document.createElement("div");

    footerEl.innerHTML =`
    <div class="pie-pagina">
            <img class="logo-seba" src="./img/Logo_SB-sin-fondo.png" alt="">
        <div class="footer__section">
            <div class="footer__container-icon">
                <a class="footer__home" href="./index.html">
                    <div class="footer__container-icon-and-text">
                        <img src="./img/home-sin-fondo.png" alt="Home" class="footer__icon">
                        <span>Home</span>
                    </div>
                </a>
            </div>
            <div class="footer__container-icon">
                <a class="footer__icon-text" href="./services.html">
                    <div class="footer__container-icon-and-text">
                        <img src="./img/portfolio-sin-fondo.png" alt="Servicios" class="footer__icon">
                        <span>Servicios</span>
                    </div>
                </a>
            </div>
            <div class="footer__container-icon">
                <a class="footer__icon-text" href="./contact.html">
                    <div class="footer__container-icon-and-text">
                        <img src="./img/telefono-sin-fondo.png" alt="Contact" class="footer__icon">
                        <span>Contacto</span>
                    </div>
                </a>
            </div>
        </div>
        <div class="footer__container-social-icons">
            <a target="_blank" href=""><img src="./img/linkedin (1).png" alt="Linkedin"
                class="footer__social-icon"></a>
            <a target="_blank" href=""><img src="./img/github (1).png" alt="Github" class="footer__social-icon"></a>
            <a href=""><img src="./img/twitter.png" alt="Twitter" class="footer__social-icon"></a>
        </div>
    </div>`;
    footerContenedor.appendChild(footerEl);
}