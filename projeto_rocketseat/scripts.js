function toggleMode(){
    const hmtl = document.documentElement
    hmtl.classList.toggle("light")
    // if(hmtl.classList.contains('light')){
    //     hmtl.classList.remove('light')
    // }
    // else{
    //     hmtl.classList.add('light')
    // }
    const img = document.querySelector("#profile img")
    if(hmtl.classList.contains('light')){
        img.src="./assets/avatar-light-mode.png"
    }
    else{
        img.src="./assets/avatar-dark-mode.png"
    }
}
