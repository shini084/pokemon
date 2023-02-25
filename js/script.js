function lucario(){
    var screen = document.querySelector('#screenId')

    for(r=0;r<66;r++){
        for(c=0;c<53;c++){
            let pixel = document.createElement('div')
            pixel.className = 'pixel'
            pixel.id = `c${c}r${r}`
            
            pixel.style.animation = `sand 2s  ease ${
               (((r - 65)%2 * -1)*64 + ((c - 64) * -1)) / 20
            }s 1 normal forwards`
            screen.appendChild(pixel)
        }
    }
}

