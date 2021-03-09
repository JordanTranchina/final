firebase.auth().onAuthStateChanged(async function (user) {

  let db = firebase.firestore()
  let querySnapshot = await db.collection('shots').get()
  console.log(querySnapshot.size)

  let button = document.querySelector(".button")
  button.addEventListener("click", function (event) {
    event.preventDefault()

    let illness = document.querySelector("#illness").value
    console.log(`the illness is ${illness}`);
  })

  if (user) {
    // Signed in
    console.log('signed in')
  } else {
    // Signed out
    console.log('signed out')

    // Initializes FirebaseUI Auth
    let ui = new firebaseui.auth.AuthUI(firebase.auth())

    // FirebaseUI configuration
    let authUIConfig = {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: 'vaccines.html'
    }

    // Starts FirebaseUI Auth
    ui.start('.sign-in-or-sign-out', authUIConfig)
  }
})
