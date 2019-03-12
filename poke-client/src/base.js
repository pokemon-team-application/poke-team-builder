import Rebase from 're-base';
import Firebase from 'firebase';

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyClsaEltMxr1iVkP4jmBcuNffj5Ga3G0N8',
  authDomain: 'roberts-azali-poketeam-builder.firebaseapp.com',
  databaseURL: 'https://roberts-azali-poketeam-builder.firebaseio.com',
  projectId: 'roberts-azali-poketeam-builder',
  storageBucket: 'roberts-azali-poketeam-builder.appspot.com',
  messagingSenderId: '1038471078972',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
