const {
    initializeApp,
    applicationDefault,
    cert,
  } = require("firebase-admin/app");
  const { getFirestore, FieldValue } = require("firebase-admin/firestore");
  const serviceAccount = require("./digitaldrama-522-firebase-adminsdk-zi7po-7cd0e62c4f.json");
  
  initializeApp({
    credential: cert(serviceAccount),
  });

const db = getFirestore();
const Blogs = db.collection("Blogs");
  

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // declare all characters

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


//ADD BLOG

//GET BLOG
// const querySnapshot = await getDocs(c);
// //SNAPSHOT IMPLEMENT
// onSnapshot(c, (snapshot) => {
//   const dummyList = [];
//   snapshot.docs.forEach((doc) => {
//     dummyList.push({
//       ...doc.data(),
//       id: doc.id,
//       bucket:
//         currentcUser && currentcUser.userType === "Mentor"
//           ? "YourClients"
//           : "YourMentors",
//     });
//   });

//   setList(dummyList);
// });
// };


module.exports = Blogs;