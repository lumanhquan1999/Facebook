import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDdxmU53IJLosn-HKp1iWXD0W6wFGh5PgE",
    authDomain: "facebook-43227.firebaseapp.com",
    projectId: "facebook-43227",
    storageBucket: "facebook-43227.appspot.com",
    messagingSenderId: "507212539463",
    appId: "1:507212539463:web:24b733978c5cae8226b362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const storage = getStorage(app);

export {auth, storage, ref, uploadBytes, getDownloadURL};