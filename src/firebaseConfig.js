import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpN0uCDgeg31fLsXtuEMoS8bKFEghv-k8",
  authDomain: "tienda-luis-a86f2.firebaseapp.com",
  projectId: "tienda-luis-a86f2",
  storageBucket: "tienda-luis-a86f2.firebasestorage.app",
  messagingSenderId: "333251443882",
  appId: "1:333251443882:web:8dac4571a36800521264d3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)