function lucario(){
    var screen = document.querySelector('#screenId')

    for(r=0;r<64;r++){
        for(c=0;c<64;c++){
            var pixel = document.createElement('div')
            pixel.className = 'pixel'
            pixel.id = `c${c}r${r}`
            screen.appendChild(pixel)
        }
    }
}