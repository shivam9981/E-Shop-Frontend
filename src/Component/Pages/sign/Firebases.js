import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzhkEN_h-JUIeC6Zpyem9BAld34DeIVs8",
  authDomain: "e-shop-otp.firebaseapp.com",
  projectId: "e-shop-otp",
  storageBucket: "e-shop-otp.appspot.com",
  messagingSenderId: "824980636721",
  appId: "1:824980636721:web:298c7d843970640c484110"
};
const apps = initializeApp(firebaseConfig);

export default apps;