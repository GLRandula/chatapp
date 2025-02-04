// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { useState } from "react"
// import { UserAuth } from "../context/AuthContext";
// import { db } from "../firebase";

// const SendMessage = () => {
//   const [value, setValue] = useState("");
//   const { currentUser } = UserAuth();
  
//   const handleSendMessage = async (e) => {
//     e.preventDefault();

//     if(value.trim() === "") {
//       alert("Enter valid message!");
//       return;
//     }

//     try {
//       const { uid, displayName, photoURL } = currentUser; 
//       await addDoc(collection(db, "messages"), {
//         text: value,
//         name: displayName,
//         avatar: photoURL,
//         createdAt: serverTimestamp(),
//         uid
//       })
//     } catch(error) {
//       console.log(error);
//     }
//     //console.log(value);
//     setValue("");
//   };

//   return (
//     <div className="w-full bg-neutral text-neutral-content items-center p-4 fixed bottom-0">
//       <form onSubmit={handleSendMessage} className="containerWrap flex gap-2">
//         <input
//           value={value} onChange={e => setValue(e.target.value)}
//           type="text"
//           placeholder="Type here"
//           className="input input-bordered input-primary w-full"
//         />
//         <button type='submit' className="btn btn-outline btn-primary w-auto px-10">
//           Send
//         </button>
//       </form>
//     </div>
//   )
// }

// export default SendMessage

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react"
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();
  
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if(value.trim() === "") {
      alert("Enter valid message!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser; 
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    } catch(error) {
      console.log(error);
    }
    setValue("");
  }

  return (
    <div className="bg-base-100 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input value={value} onChange={e => setValue(e.target.value)} placeholder="Type your message here..." className="input w-full focus:outline-none bg-gray-300 rounded-r-none text-black" type="text" />
        <button type="submit" className="w-auto bg-primary text-white rounded-r-lg px-5 text-sm">Send</button>
      </form>
    </div>
  )
}

export default SendMessage;