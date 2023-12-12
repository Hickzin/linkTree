function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /* trocando foto de perfil dependendo do light mode 
  const img = document.querySelector("#profile img")

  //substituicao da imagem
  if(html.classList.contains('ligth')){
    img.settAtribute('src', './assets/avatar-light.png')
  } else {
    img.settAtribute('src', './assets/avatar.png)
  }
*/
}
