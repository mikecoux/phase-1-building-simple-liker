// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorMsg = document.getElementById('modal')
const likeButton = document.querySelectorAll('.like-glyph')

function handleLike () {
  //iterate through the array adding event listeners
  likeButton.forEach(post => {
    post.addEventListener('click', () => {
      if (post.innerHTML === EMPTY_HEART){
        mimicServerCall()
        .then (() => {
          post.innerHTML = FULL_HEART
          post.classList.add('activated-heart')
          console.log('successful like')
        })
        .catch (() => {
          errorMsg.classList.remove('hidden')
          setTimeout(() => {
            errorMsg.classList.add('hidden')
          }, 3000)
        })
      } else {
        post.innerHTML = EMPTY_HEART
        post.classList.remove('activated-heart')
      }
    })
  })
}

handleLike()

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
