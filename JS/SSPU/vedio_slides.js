function show(n){
    var snap_box = document.getElementsByClassName('smallImg')
    var slides_box = document.getElementsByClassName('bigImg')
    for(let i = 0; i < slides_box.length;i++){
        slides_box[i].style.display = 'none'
    }
   slides_box[n].style.display = 'block'
}