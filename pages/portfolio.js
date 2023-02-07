
function miPortfolio(){
    return fetch("https://cdn.contentful.com/spaces/2f79l6aaem21/environments/master/entries?access_token=joeljjW8yxNT-dO3cXf9QD5-rM4shsVnT6q9vdySxRU&content_type=miPortafolio")
    .then((res)=> res.json())
    .then((data) => misPortfolioRes(data));


function misPortfolioRes(result){
    let contador = 0;
    const contenedor = document.querySelector(".portfolio");
    const template = document.querySelector("#contenedor-portfolio-dos");
    const imgContenful = result.includes.Asset.map((e)=> e.fields.file.url)
    for(let item of result.items){
        if(item.fields.imagen){
            let titulo = template.content.querySelector(".portfolio-card_title");
            titulo.textContent = item.fields.titulo;
            let description = template.content.querySelector(".portfolio-card_description");
            description.textContent = item.fields.descripcion;
            let url = template.content.querySelector(".portfolio-card_description");
            url.href = item.fields.url;
            let img = template.content.querySelector(".portfolio-link");
            description.textContent = item.fields.descripcion;
            img.src = imgContenful[contador];
            contador++;

            let clone = document.importNode(template.content,true)
            contenedor.appendChild(clone)
     }
    }
 }
}   


function main(){
    header(document.querySelector(".portfolio-header"));
    miPortfolio();
    footer(document.querySelector(".portfolio-footer"));
}

main();