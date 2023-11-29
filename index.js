import Swiper from "swiper/bundle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const fullName = document.getElementById("fullname");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-button");
const email = document.getElementById("email");
const selectOne = document.getElementById("select1");
const selectTwo = document.getElementById("select2");
const textArea = document.getElementById("message");
const notify = document.getElementById("notify");
const heads = document.querySelector(".heading--two");

new Swiper(".mySwiper", {
  modules: [Navigation, Pagination],
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
});
// var swiper = new Swiper(".mySwiper2", {
//   modules: [Navigation, Pagination, Autoplay],
//   spaceBetween: 100,
//   slidesPerView: 1,
//   loop: true,

//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

function succes(el) {
  el.classList.add("succes");
  el.classList.remove("error");
}
function error(el) {
  el.classList.add("error");
  el.classList.remove("succes");
}

function validate(element) {
  let condition;
  const elId = element.id;
  const elValue = element.value.trim();
  console.log(4444444);

  switch (elId) {
    case "fullname":
    case "email":
      condition = elValue.length > 2;

      break;

    case "select1":
    case "select2":
      condition = elValue !== "";
      console;
      break;

    case "message":
      const elWordsAmount = elValue.split(/\s+/);
      condition = !!elValue && elWordsAmount.length > 2;
      break;
    default:
      condition = false;
  }

  if (condition) {
    succes(element);
  } else {
    error(element);
  }
}
validate();

// PLAY BUTTON

const video = document.getElementById("video");
const playButton = document.querySelector(".play-button");

function videoFunction(el) {
  el.addEventListener("play", () => {
    playButton.style.display = "none";
    console.log("play");
  });

  el.addEventListener("pause", () => {
    console.log("pause");
    playButton.style.display = "block";
  });
}
videoFunction(video);

playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// ///////Fetch contacts/////////

const contactLink = document.getElementById("contact-link");
const contactBlock = document.getElementById("contactData");
let count = 0;
// contactLink.addEventListener('click', getData)
contactLink.addEventListener("click", getPosts);

function getData() {
  const contactsList = document.createElement("ul");
  contactsList.classList.add("contact-list");

  // Show and Hide the block
  if (contactBlock.style.display == "block") {
    contactBlock.style.display = "none";
  } else {
    contactBlock.style.display = "block";
  }

  // GET FETCH CONTACT//////////////////////////
  fetch("contacts.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((contacts) => getContacts(contacts));

  function getContacts(contacts) {
    if (count === 0 || count % 2 === 0) {
      console.log(contacts);
      contacts.forEach((contact) => {
        // CREATE LIST  for CONTACT DATA
        const li = document.createElement("li");
        const spanName = document.createElement("p");
        const spanPos = document.createElement("span");
        const spanPhone = document.createElement("span");

        // TEXT CONTENT THE ITEMS
        spanName.textContent = contact.name;
        spanPos.textContent = contact.position;
        spanPhone.textContent = contact.phone;

        li.classList.add("list-item");

        // APPEND CHILDREN
        li.appendChild(spanName);
        li.appendChild(spanPos);
        li.appendChild(spanPhone);
        contactsList.appendChild(li);
      });
      count += 1;
      contactBlock.appendChild(contactsList);
    }
  }
  getContacts();
}

/////////////////////// CREATE SLIDEMENU AND PAGE WITH POSTS
async function getPosts() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users/3";
  const postsUrl = "https://jsonplaceholder.typicode.com/posts?userId=3";
  const commentsUrl = "https://jsonplaceholder.typicode.com/comments/";
  const postsBlock = document.getElementById("postsBlock");
  postsBlock.classList.add("postBlock");

  try {
    const currentUl = postsBlock.querySelector("ul");
    if (currentUl) postsBlock.removeChild(currentUl);
    postsBlock.classList.add("postBlock");

    const responseUsers = await fetch(apiUrl);
    const user = await responseUsers.json();

    const responsePosts = await fetch(postsUrl);
    const posts = await responsePosts.json();

    const postsUl = document.createElement("ul");
    postsBlock.appendChild(postsUl);
    postsUl.classList.add("posts-ul");

    const userName = document.createElement("h2");
    userName.textContent = user.name;
    postsUl.appendChild(userName);
    userName.classList.add("heading-three");

    posts.forEach((post) => {
      console.log(post.title);
      const postTitle = document.createElement("li");
      postTitle.textContent = post.title;
      postsUl.appendChild(postTitle);
      postTitle.classList.add("posts-list");
    });

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.classList.add("button-close");
    const currentCloseBtn = postsBlock.querySelector("button");
    if (currentCloseBtn) postsBlock.removeChild(currentCloseBtn);

    closeButton.addEventListener("click", closeFunction);

    function closeFunction() {
      setTimeout(() => postsBlock.classList.remove("postBlock"), 500);
    }
    postsBlock.appendChild(closeButton);
  } catch {}

  // try{
  //     const responseUsers = await fetch(apiUrl);
  //     const person = await responseUsers.json();

  //     const responsePosts = await fetch(postsUrl);
  //     const posts = await responsePosts.json();
  //     // console.log(posts);

  //     const responseComments = await fetch(commentsUrl)
  //     const comments = await responseComments.json();

  //     //////SLIDE MENU//////
  //     function displayContent(){

  //         const currentUl = postsBlock.querySelector('ul');
  //         if (currentUl) postsBlock.removeChild(currentUl);

  //         // OPEN CLOSE FUNCTIONS
  //         postsBlock.classList.add('postBlock')

  //         const closeButton = document.createElement('button')
  //         closeButton.textContent= 'Close'
  //         closeButton.classList.add('button-close')
  //         const currentCloseBtn = postsBlock.querySelector('button');
  //         if (currentCloseBtn) postsBlock.removeChild(currentCloseBtn);

  //         closeButton.addEventListener('click', closeFunction)

  //         function closeFunction(){
  //             setTimeout(() => postsBlock.classList.remove('postBlock'), 500);

  //         }
  //         postsBlock.appendChild(closeButton)

  //         /////////////////////////////////////////

  //         const  ulContent = document.createElement('ul')
  //         ulContent.classList.add('posts-ul')

  //         const displayPerson = document.createElement('li')
  //         displayPerson.textContent= person.name;
  //         ulContent.appendChild(displayPerson);

  //         /////////////////////////////////////////////////////////
  //         const postId=0;

  //         for (const post of posts) {
  //             const displayPosts = document.createElement('li');
  //             displayPosts.textContent = `Title: ${post.title}`;
  //             displayPosts.classList.add('posts-list');
  //             ulContent.appendChild(displayPosts);
  //             displayPosts.addEventListener('click', windowPost)

  //             function windowPost(){
  //                 const postId = post.id;
  //                 const targetPage ='postsPage.html'
  //                 window.open(targetPage, "_blank");
  //                 console.log(postId);

  //                 const postTitle = document.getElementById('post-title');
  //                 const postBody = document.getElementById('post-body');
  //                 const postComments = document.getElementById('post-comments');

  //             }

  //           }

  //         const displayComments = document.createElement('li')
  //         // displayComments.textContent= comments;

  //         ulContent.appendChild(displayComments)
  //         postsBlock.appendChild(ulContent)

  //     }

  //     displayContent();

  // }
  // catch {
  //     console.log(error);
  // }
}
