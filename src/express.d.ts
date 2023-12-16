import { Request } from 'express';

declare global {
  namespace Express {
    interface User {
      _id: string;
      // Aggiungi qui altre proprietà dell'utente che ti aspetti di ricevere dal tuo JWT
    }

    interface Request {
      user?: User;
    }
  }
}
