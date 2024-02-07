function toggleMode (){
    const html = document.documentElement;

   // if (html.classList.contains ("light"))
    // {
       // html.classList.remove ("light");
    //}
    //else {
     //   html.classList.add ("light");
   // } não é necessário fazer tudo isto, pois existe essa ferramenta abaixo que simplifica

html.classList.toggle ("light")

// agora repetir a lógica com imagem
const img = document.querySelector ("#profile img")

//substituir a imagem
if (html.classList.contains ("light")) {
    img.setAttribute ("src", "./assets/avatar-light.png")
    // se tiver light mode, adicionar a imagem light.
    }
    else {
        img.setAttribute ("src", "./assets/avatar.png")
        // se não tiver light mode, adicionar a imagem padrão.
    }
}