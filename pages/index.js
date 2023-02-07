function welcome(){
    return fetch("https://cdn.contentful.com/spaces/2f79l6aaem21/environments/master/entries?access_token=joeljjW8yxNT-dO3cXf9QD5-rM4shsVnT6q9vdySxRU&content_type=bienvenido")
    .then((res)=> res.json())
    .then((data) => welcomeRes(data));
}

function welcomeRes(data){
    const contenedor = document.querySelector(".bienvenida");
    const template = document.querySelector("#template-welcome");
    const clone = document.importNode(template.content, true);
    let titleEl = clone.querySelector(".template-welcome__name").textContent = data.items[0].fields.titulo;

    
    contenedor.appendChild(clone);
    
}

function presentation(){
    return fetch("https://cdn.contentful.com/spaces/2f79l6aaem21/environments/master/entries?access_token=joeljjW8yxNT-dO3cXf9QD5-rM4shsVnT6q9vdySxRU&content_type=presentacion")
    .then((res)=> res.json())
    .then((data) => presentationRes(data));
}

function presentationRes(data){
    const contenedor = document.querySelector(".presentacion");
    const template = document.querySelector("#presentation");
    const clone = document.importNode(template.content, true);
    let titleEl = clone.querySelector(".contenedor-presentation__title").textContent = data.items[0].fields.titulo;
    let datosEl = clone.querySelector(".contenedor-presentation__about-me").textContent = data.items[0].fields.misDatos;
    let imgEl = clone.querySelector(".contenedor-presentation__img").src = data.includes.Asset[0].fields.file.url;
    
    contenedor.appendChild(clone);
    
}

function misServicios(){
    return fetch("https://cdn.contentful.com/spaces/2f79l6aaem21/environments/master/entries?access_token=joeljjW8yxNT-dO3cXf9QD5-rM4shsVnT6q9vdySxRU&content_type=misServicios")
    .then((res)=> res.json())
    .then((data) => misServiciosRes(data));


function misServiciosRes(result){
    let contador = 0;
    const contenedor = document.querySelector(".service");
    const template = document.querySelector("#contenedor-service");
    const imgContenful = result.includes.Asset.map((e)=> e.fields.file.url)
    for(let item of result.items){
        if(item.fields.imagen){
            let titulo = template.content.querySelector(".card-title");
            titulo.textContent = item.fields.titulo;
            let description = template.content.querySelector(".card-description");
            description.textContent = item.fields.descripcion;
            let img = template.content.querySelector(".card-img");
            img.src = imgContenful[contador];
            contador++;

            let clone = document.importNode(template.content,true)
            contenedor.appendChild(clone)
     }
    }
    // for (let i = 0; i < dateItems.length; i++){
    //     const clone = template.content.cloneNode(true);
        
    //     let img = clone.querySelector(".card-img").src =
    //        data.includes.Asset[0].fields.file.url;
     
    //     let titleService = clone.querySelector(".card-title").textContent =
    //           dateItems[i].fields.titulo;
        
    //     let descriptionService = clone.querySelector(".card-description").textContent =
    //         dateItems[i].fields.descripcion;
        
         //   contenedor.appendChild(clone);
     };
}


function main(){
    header(document.querySelector(".header-section"));
    welcome();
    presentation();
    misServicios();
    contactComponent(document.querySelector(".form-div"));
    footer(document.querySelector(".contenedor-footer"))
}

main();