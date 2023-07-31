console.log("This is index file")

// Array of object which conatins the information about candidates
const data = [
    {
        name : "Prachi Said",
        age : 18,
        city : "Pune",
        language : "Python",
        framework : "Django",
        image : "https://randomuser.me/api/portraits/women/55.jpg"
    },

    {
        name : "Shubham Sharma",
        age : 28,
        city : "Banglore",
        language : "JavaScript",
        framework : "Angular",
        image : "https://randomuser.me/api/portraits/men/80.jpg"
    },

    {
        name : "Roham Das",
        age : 18,
        city : "Kolhapur",
        language : "Python",
        framework : "Flask",
        image : "https://randomuser.me/api/portraits/men/77.jpg"
    },

    {
        name : "Rohit Sharma",
        age : 31,
        city : "Mumbai",
        language : "Java",
        framework : "Spring",
        image : "https://randomuser.me/api/portraits/men/60.jpg"
    },

    {
        name : "Sanika Deokar",
        age : 19,
        city : "Pune",
        language : "JavaScript",
        framework : "ReactJS",
        image : "https://randomuser.me/api/portraits/women/85.jpg"
    }
]

// Cv Iterator

function cvIterator(profiles){
    let nextIndex = 0;

    return{
        next : function(){
            if(nextIndex < profiles.length){
                return{
                    value : profiles[nextIndex++], 
                    done : false
                }
            }
            else{
                return{done : false}
            }
        }
    }
}

const candidates = cvIterator(data);
nextCV();
// Button Listener for next Button
const next = document.getElementById('next')
next.addEventListener('click', nextCV)

function nextCV(){
    const currentCandidate = candidates.next().value
    let image = document.getElementById('image')
    let profile = document.getElementById('profiles')

    if(currentCandidate != undefined){
    image.innerHTML = `<img src = '${currentCandidate.image}'>`
    profile.innerHTML =  `<ul class="list-group">
    <li class="list-group-item">Name : ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework}</li>
  </ul>`
    }else{
        alert("End of file")
        window.location.reload()
    }
}