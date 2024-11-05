import { tesloApi } from "@/api/tesloApi";
import type { AuthResponse } from '../interfaces/auth.response';
import { isAxiosError } from "axios";
import type { User } from "../interfaces/user.interfaces";


interface LoginError{
    ok: false;
    message: string;
}

interface LoginSuccess{
    ok: true;
    user: User;
    token: string;
}



export const loginAction = async (email:string, password:string): Promise<LoginError | LoginSuccess> =>{
    try{

        const {data} = await tesloApi.post<AuthResponse>('/auth/login', {email, password});
        return {
            ok: true,
            user: data.user,
            token: data.token
        }

    }catch(error){

        if(isAxiosError(error)){
            if(error.response?.status === 401){
                return {
                    ok: false,
                    message: 'Invalid credentials'
                }
            }
        }

        console.error(error);
        throw new Error('An error occurred while trying to login');
    }
}