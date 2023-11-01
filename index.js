
    const fullName = document.getElementById('fullname');
    const form = document.getElementById('form');
    const submitBtn  = document.getElementById('submit-button');
    const email = document.getElementById('email');
    const selectOne = document.getElementById('select1');
    const selectTwo = document.getElementById('select2');
    const textArea = document.getElementById('message')
    const notify = document.getElementById('notify');
    const heads = document.querySelector('.heading--two')
    

function succes(el){
    el.classList.add('succes');
    el.classList.remove('error')
    
}
function error(el){
    el.classList.add('error');
    el.classList.remove('succes')
}

function validate(element){
    let condition;
    const elId=element.id;
    const elValue= element.value.trim()

    switch(elId){

        case 'fullname':
        case 'email':
            condition = elValue.length>2;
            break;

        case 'select1':
        case 'select2':
            condition= elValue !== '';
            console
            break; 

        case 'message':
            const elWordsAmount= elValue.split(/\s+/);
            condition= !!elValue && elWordsAmount.length>2;
            break;
        default:
            condition=false;
    }  
    
    if(condition){
        succes(element)
    }

    else{
        error(element)
    }
    }


// PLAY BUTTON

const video = document.querySelector('.video-play');
const playButton= document.getElementById('play-btn')

video.addEventListener('play', () => {
    playButton.style.display = 'none';
});

video.addEventListener('pause', () => {
    playButton.style.display = 'block';
});

playButton.addEventListener('click', () => {
    video.play();
    playButton.style.display = 'none'; 
});



///////Fetch contacts/////////

const contactLink = document.getElementById('contact-link');
const contactBlock = document.getElementById('contactData');
let count =0;
contactLink.addEventListener('click', getData)

function getData(){
    const contactsList= document.createElement('ul');
    contactsList.classList.add('contact-list');
    


    // Show and Hide the block
    if(contactBlock.style.display=='block'){
        contactBlock.style.display='none'
    }
    else{
        contactBlock.style.display='block'
    }


// GET FETCH
    fetch('contacts.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((contacts)=> getContacts(contacts))

  function getContacts(contacts){ if(count === 0 || count % 2  === 0){
    console.log(contacts);
        contacts.forEach((contacts) => {
            const li = document.createElement('li')
            const spanName = document.createElement('p')
            const spanPos = document.createElement('span')
            const spanPhone =document.createElement('span')

            spanName.textContent=contacts.name;
            spanPos.textContent=contacts.position;
            spanPhone.textContent=contacts.phone;

            li.classList.add('list-item')

            li.appendChild(spanName);
            li.appendChild(spanPos);
            li.appendChild(spanPhone);
            contactsList.appendChild(li);
        });
       count+=1; 
       console.log(count);
       contactBlock.appendChild(contactsList)
    } }
    getContacts();
   
  }





// /////////////////LESSON30//////////////


async function getDat(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users/3'
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
    const commentsUrl ='https://jsonplaceholder.typicode.com/comments/'

    try{
        const responseUsers = await fetch(apiUrl);
        const person = await responseUsers.json();

        const responsePosts = await fetch(postsUrl);
        const posts = await responsePosts.json();

        const responseComments = await fetch(commentsUrl)
        const comments = await responseComments.json();
        

       
// Get POSTS FUNCTION
        const filtredPosts = posts.filter(post => post.userId === person.id);
        // console.log(titles);
        
// Get Comment Function
    const getComments = filtredPosts.map(post => {
        return comments.filter(comment => comment.postId === post.id);
    });
    console.log(getComments);




    /////////////////////////////////////////////////

    
    const search = document.getElementById('search')
    const searchConteiner =document.querySelector('.nav-right')
    search.addEventListener('click', show)
    function show(){
        let counter = 0;
        if(count === 0 ||counter % 2  === 0){
            
                const infoBlock = document.createElement('div');
                const postsBlock = document.createElement('ul');
                const postsName = document.createElement('li');
                const postsTitle = document.createElement('li');
                const postsBody = document.createElement('li');
                const commentBlock = document.createElement('ul');
                const commentName = document.createElement('li');
                const commentBody = document.createElement('li');
              
                infoBlock.classList.add('posts__container');
                infoBlock.style.display = 'flex';
              
                searchConteiner.appendChild(infoBlock);
                infoBlock.appendChild(postsBlock);
                infoBlock.appendChild(commentBlock)
              
                postsBlock.appendChild(postsName);
                postsBlock.appendChild(postsTitle);
                postsBlock.appendChild(postsBody);
              
                commentBlock.appendChild(commentName);
                commentBlock.appendChild(commentBody);
              
                let currentPostIndex = 0;
                let currentCommentIndex = 0;
              
                function displayPostAndComment() {
                  if (currentPostIndex < filtredPosts.length) {
                    postsName.textContent = `Name : ${filtredPosts[currentPostIndex].name}`;
                    postsTitle.textContent = `Title: ${filtredPosts[currentPostIndex].title}`;
                    postsBody.textContent = `Text: ${filtredPosts[currentPostIndex].body}`;
                    currentPostIndex++;
                  }
              
                  if (currentCommentIndex < getComments.length) {
                    commentName.textContent = getComments[currentCommentIndex].name;
                    commentBody.textContent = getComments[currentCommentIndex].body;
                    currentCommentIndex++;
                  }
              
                  if (currentPostIndex < filtredPosts.length || currentCommentIndex < getComments.length) {
                    setTimeout(displayPostAndComment, 5000);
                  }
                }
              
                displayPostAndComment();
              
              counter+=1;

        
    }

  
  

}
   
      

       
    //     const infoBlock =document.createElement('div');
    //     const postsBlock = document.createElement('ul');
    //     const postsName = document.createElement('li');
    //     const postsTitle = document.createElement('li');
    //     const postsBody = document.createElement('li');
    //     const commentBlock = document.createElement('ul');
    //     const commentName=document.createElement('li');
    //     const commentBody= document.createElement('li');


    //     infoBlock.classList.add('posts__container');
    //     infoBlock.style.display= 'flex';
        
       

    //     commentName.textContent=getComments[0].name;
    //     commentBody.textContent=getComments[0].body;

    //     searchConteiner.appendChild(infoBlock);
    //     infoBlock.appendChild(postsBlock);
    //     infoBlock.appendChild(commentBlock);

    //     postsBlock.appendChild(postsName);
    //     postsBlock.appendChild(postsTitle);
    //     postsBlock.appendChild(postsBody);

    //     commentBlock.appendChild(commentName)
    //     commentBlock.appendChild(commentBody)

    //     function displayPostAndComment() {
    //         if (currentPostIndex < filtredPosts.length) {
    //           postsName.textContent = filtredPosts[currentPostIndex].name;
    //           postsTitle.textContent = `Title: ${filtredPosts[currentPostIndex].title}`;
    //           postsBody.textContent = `Text: ${filtredPosts[currentPostIndex].body}`;
    //           currentPostIndex++;
    //         }
        
    //         if (currentCommentIndex < getComments.length) {
    //           commentName.textContent = getComments[currentCommentIndex].name;
    //           commentBody.textContent = getComments[currentCommentIndex].body;
    //           currentCommentIndex++;
    //         }
        
    //         if (currentPostIndex < filtredPosts.length || currentCommentIndex < getComments.length) {
    //           setTimeout(displayPostAndComment, 5000);
    //         }
    //       }
        
    //       displayPostAndComment();
    //     }
      
        
        
        
        
        


            // postsName.textContent=person[i].name;
            // postsTitle.textContent=`Title : ${filtredPosts[i].title}`;
            // postsBody.textContent= `Text : ${filtredPosts[i].body}`;
            
        
    }
    catch(error){
        alert('Eror 404')
    }

}
    
    
getDat();

// setTimeout(getData, 100000);

// const search = document.getElementById('search')
// const searchConteiner =document.querySelector('.nav-right')
// search.addEventListener('click', show)

// function show(){
//     const infoBlock =document.createElement('div');
//     const postsBlock = document.createElement('ul');
//     const postsName = document.createElement('li');
//     const postsTitle = document.createElement('li');
//     const postsBody = document.createElement('li');
//     const commentBlock = document.createElement('ul');
//     const commentName=document.createElement('li');
//     const commentBody= document.createElement('li');


//     infoBlock.classList.add('posts__container');
//     infoBlock.style.display= 'flex';

//     postsName.textContent=




//     searchConteiner.appendChild(infoBlock);
//     infoBlock.appendChild(postsBlock);
//     infoBlock.appendChild(commentBlock);

//     postsBlock.appendChild(postsName);
//     postsBlock.appendChild(postsTitle);
//     postsBlock.appendChild(postsBody);

//     commentBlock.appendChild(commentName)
//     commentBlock.appendChild(commentBody)







// }

