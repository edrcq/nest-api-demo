import { Injectable } from '@nestjs/common';

// dont put secret in code source, use dotenv with .env file (and .gitignore .env file) ! Warning !
const API_TOKEN = 'ThisIsASecretToken'

@Injectable()
export class AuthService {

    isValidToken(token: string): boolean {
        return token === API_TOKEN
    }
}
