
function mostrarMenuOculto() {
    const abrirMenuEl = document.querySelector(".menu-hamburguesa");
    const menuEl = document.querySelector(".menu-oculto__contenedor");
    const cerrarMenuEl = document.querySelector(".menu-oculto__boton-cerrar");
  
    abrirMenuEl.addEventListener("click", () => {
      menuEl.style.display = "flex";
    });
  
    cerrarMenuEl.addEventListener("click", () => {
      menuEl.style.display = "";
    });
}

function header(el) {
    const headerEl = document.createElement("div");
  
    headerEl.innerHTML = `
            <header class="header">
            <a href="./index.html"><img src="/img/Logo_SB-sin-fondo.png" alt="logo IlBake" class="logo__ilBake"></a>
                <div class="menu-hamburguesa">
                    <div class="menu-hamburguesa__mobile"></div>
                    <div class="menu-hamburguesa__mobile"></div>
                    <div class="menu-hamburguesa__mobile"></div>
                </div>
                <div class="menu-oculto__contenedor">
                    <div class="menu-oculto__contenedor-de-boton">
                        <button class="menu-oculto__boton-cerrar"> + </button>
                    </div>
                    <div class="menu-oculto-contenedor__opciones">
                        <a href="./portfolio.html" class="menu-oculto__opciones">Portfolio</a>
                        <a href="./services.html" class="menu-oculto__opciones">Servicios</a>
                        <a href="./contact.html" class="menu-oculto__opciones">Contacto</a>
                        <a href="./index.html" class="menu-oculto__opciones">Home</a>
                    </div>
                </div>
                <div class="menu-desktop">
                    <a href="./portfolio.html" class="menu-desktop__opciones">PORTFOLIO</a>
                    <a href="./services.html" class="menu-desktop__opciones">SERVICIOS</a>
                    <a href="./contact.html" class="menu-desktop__opciones">CONTACTO</a>
                </div>
            </header>`;
        el.appendChild(headerEl);
        mostrarMenuOculto();
}
  

