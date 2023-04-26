import { initializeApp } from 'firebase/app';

class CloudService {
  constructor() {
    this._config = {
      apiKey: process.env.API_KEY,
      authDomain: 'beautyhouse-1eea2.firebaseapp.com',
      projectId: 'beautyhouse-1eea2',
      storageBucket: 'beautyhouse-1eea2.appspot.com',
      messagingSenderId: '719052958694',
      appId: '1:719052958694:web:8f9b0c3d3b78c04560c427',
    };
    this.app = initializeApp(this._config);
  }
}

export const cloudService = new CloudService();
