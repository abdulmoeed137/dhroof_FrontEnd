// login.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Authentication_APIs, environment, ServerResponseError } from '../global-imports';
import { LoginResponseDao } from '../DAOs/login/LoginResponseDao';

@Injectable({ providedIn: 'root' })
export class LoginService {

    constructor(private http: HttpClient) { }

    async login(email: string, password: string): Promise<LoginResponseDao> {
        const url = `${environment.ServerUrl}${Authentication_APIs.LoginApi}`;
        const payload = { email, password };

        try {
            const ServerResponse = await firstValueFrom(
                this.http.post<LoginResponseDao>(url, payload, { observe: 'response' })
            );

            const error = await ServerResponseError(ServerResponse);
            if (error) return error as LoginResponseDao;

            const responseData = ServerResponse.body as LoginResponseDao;
            return responseData;

        } catch (error: any) {
            // Check if it's an HttpErrorResponse with a structured body
            if (error.status && error.error && typeof error.error === 'object') {
                const serverError = error.error;
                return {
                    status: false,
                    message: serverError.message || 'Login failed',
                    first_login: '0',
                    token: ''
                };
            }

            // Fallback for unexpected errors
            return {
                status: false,
                message: 'Something went wrong...',
                first_login: '0',
                token: ''
            };
        }
    }

}
