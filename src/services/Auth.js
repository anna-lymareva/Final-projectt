import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { cloudService } from './CloudService';

class AuthService {
  constructor() {
    this.auth = getAuth(cloudService.app);
  }

  authorizeUser() {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(
        this.auth,
        (user) => {
          resolve(user);
        },
        (error) => {
          reject(error);
        },
      );
    });
  }

  signUp(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  signOut() {
    return signOut(this.auth);
  }
}

export const authService = new AuthService();
