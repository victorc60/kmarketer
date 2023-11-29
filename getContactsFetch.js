//     ///////Fetch contacts/////////

// export const fetchContacts =()=>{ 

//     const contactLink = document.getElementById('contact-link');
//     const contactBlock = document.getElementById('contactData');
//     let count =0;
//     contactLink.addEventListener('click', getData)

//     function getData(){
//         const contactsList= document.createElement('ul');
//         contactsList.classList.add('contact-list');
        

//         // Show and Hide the block
//         if(contactBlock.style.display=='block'){
//             contactBlock.style.display='none'
//         }
//         else{
//             contactBlock.style.display='block'
//         }


//     // GET FETCH
//     fetch('contacts.json')
//     .then(response => {
//         if (!response.ok) {
//         throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })

//     .then((contacts)=> getContacts(contacts))

//     function getContacts(contacts){ if(count === 0 || count % 2  === 0){
//         console.log(contacts);
//             contacts.forEach((contacts) => {
//                 const li = document.createElement('li')
//                 const spanName = document.createElement('p')
//                 const spanPos = document.createElement('span')
//                 const spanPhone =document.createElement('span')

//                 spanName.textContent=contacts.name;
//                 spanPos.textContent=contacts.position;
//                 spanPhone.textContent=contacts.phone;

//                 li.classList.add('list-item')

//                 li.appendChild(spanName);
//                 li.appendChild(spanPos);
//                 li.appendChild(spanPhone);
//                 contactsList.appendChild(li);
//             });
//         count+=1; 
//         console.log(count);
//         contactBlock.appendChild(contactsList)
//         } }
//         getContacts();
    
//     }
// }