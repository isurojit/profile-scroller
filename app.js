const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Boston, MA',
        image: 'https://randomuser.me/portraits/men/62.jpg'
    },
    {
        name: 'Natalia Johnson',
        age: 26,
        gender: 'Female',
        lookingfor: 'Male',
        location: 'Los Angeles, CA',
        image: 'https://randomuser.me/portraits/women/82.jpg'
    },
    {
        name: 'Steve Willams',
        age: 28,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'San Francisco, CA',
        image: 'https://randomuser.me/portraits/men/18.jpg'
    },
    {
        name: 'Rehana Path',
        age: 31,
        gender: 'Female',
        lookingfor: 'Male',
        location: 'Houston, TX',
        image: 'https://randomuser.me/portraits/women/13.jpg'
    },
    {
        name: 'Alex Dufferson',
        age: 29,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Austin, TX',
        image: 'https://randomuser.me/portraits/men/11.jpg'
    },
    {
        name: 'Cylica Anderson',
        age: 39,
        gender: 'Female',
        lookingfor: 'Male',
        location: 'New York, US',
        image: 'https://randomuser.me/portraits/women/3.jpg'
    },
    {
        name: 'Robert Flaxy',
        age: 35,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Miami, FLORIDA',
        image: 'https://randomuser.me/portraits/men/4.jpg'
    }
];

const profiles = profileIterator(data);

//Call default profile
nextProfileDisplay();

//Next Event
document.getElementById('next').addEventListener('click', nextProfileDisplay);

//Function next profile
function nextProfileDisplay(){
    const currentProfile = profiles.next().value;
    console.log(currentProfile);

    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `<ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
        </ul>`;
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    }else{
        window.location.reload();
    }
}

//Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex < profiles.length ?
            {
                value: profiles[nextIndex++],
                done: false
            }:
            {
                done: true
            }
        }
    };
}