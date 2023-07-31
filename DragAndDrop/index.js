console.log("Drag and drop in js")

const imgBox = document.querySelector('.imgBox')
const whiteBoxes = document.getElementsByClassName('whiteBox')

console.log(imgBox)
console.log(whiteBoxes)

// Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', function(e){
    e.target.className += ' hold'
    setTimeout(()=>{
        e.target.className += ' hide';
    }, 0)
    console.log("Drag Start")
})

imgBox.addEventListener('dragend', function(e){
    //Back to normal
    e.target.className = 'imgBox'
    console.log("Drag End")
})

for(let box of whiteBoxes){
    box.addEventListener('dragover', function(e){
        // Need to do this or else we cant drop the element here
        e.preventDefault();
        console.log("Drag Over")
    })
    
    box.addEventListener('dragenter', function(e){
        e.target.className += ' dashed'
        console.log("Drag Enter")
        
    })
    
    box.addEventListener('dragleave', function(e){
        e.target.className = 'whiteBox '
        console.log("Drag Leave")
        
    })
    
    box.addEventListener('drop', function(e){
        console.log("Drag drop")
        e.target.append(imgBox)
    })
}