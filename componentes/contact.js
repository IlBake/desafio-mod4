function sendForm(formDataEl) {
    formDataEl.addEventListener('submit', (e) => {
       e.preventDefault();
 
       const formData = new FormData(formDataEl);
       const formObject = Object.fromEntries(formData.entries());
       fetch('https://apx-api.vercel.app/api/utils/dwf', {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
             to: "miqueaslazarte03@gmail.com",
             message: `Nombre: ${formObject.user},
             Email: ${formObject.email}, 
             Mensaje: ${formObject.message}`
          })
       }).then(data => data.json());
          formDataEl.reset();
       });
 }
 function contactComponent(formContainer) {
    const formEl = document.createElement("div");
 
    formEl.innerHTML = `<section class="form">
    <div class="form__container">
      <div class="form-title">
         <h2 class="form__container-title">Escribime</h2>
      </div>   
       <form class="form__container-form">
       <div class="label-name-email">
          <label>
               <h3 class="form__container-form-name">NOMBRE</h3>
               <input type="text" name="user" placeholder="ej: Sebastián" class="form__container-form-input">
            </label>
            <label>
               <h3 class="form__container-form-name">EMAIL</h3>
               <input type="email" name="email" placeholder="ej: tu_email@gmail.com" class="form__container-form-input">
            </label>
         </div>
          <label>
             <h3 class="form__container-form-name">Mensaje</h3>
             <textarea class="form__container-form-textarea" name="message" placeholder="Deja aquí tu mensaje"></textarea>
          </label>
          <div class="button">
             <button class="button_send">Enviar</button>
          </div>
       </form>
    </div>
 </section>`;
    const formDataEl = formEl.querySelector(".form__container-form");
    sendForm(formDataEl);
    formContainer.appendChild(formEl);
 };

// function enviarFormulario(formularioData){
//     formularioData.addEventListener("submit",(e)=> {
//     e.preventDefaut();

//     const formData = new formData(formularioData);
//     const formularioObj = Object.fromEntries(formData.entries());
//     fetch('https://apx-api.vercel.app/api/utils/dwf', {
//         method: "POST",
//          headers: { "content-type": "application/json" },
//          body: JSON.stringify({
//             to: "sebabachella@gmail.com",
//             message: `Nombre: ${formularioObj.user},
//             Email: ${formularioObj.email}, 
//             Mensaje: ${formularioObj.message}`
//         })
//     }).then(data => data.json());
//     formularioData.reset();
// });
// }

// function contactComponent(el){
    
//     const componentEl = document.createElement("div");
//     // componentEl.innerText = "Holaaaa";
//     componentEl.innerHTML = `
//     <section class="contacto">
//         <h2 class="contacto__title">Contacto</h2>
//         <form class="contacto__form">
//             <label>
//                 <h3 class="contacto_label">Nombre</h3>
//                 <input class="contacto__input" type="text">
//             </label>
//             <label>
//                 <h3 class="contacto_label">Email</h3>
//                 <input class="contacto__input" type="text">
//             </label>
//             <label>
//                 <h3 class="contacto_label">Mensaje</h3>
//                 <textarea class="contacto__input"></textarea>
//             </label>
//             <div class="contacto__submit-cont">
//                 <button class="contacto__submit-button">Enviar</button>
//             </div>
//         </form>
//     </section>
//     `;
//     const formularioData = componentEl.querySelector(".contacto__form");
//     enviarFormulario(formularioData);
//     el.appendChild(componentEl);
// }
// function main(){
//     contactComponent(document.querySelector(".form-container"));
//     header(document.querySelector(".header-section"));
// }

// main();