import { tesloApi } from "@/api/tesloApi";
import { isAxiosError } from "axios";
import type { AuthResponse } from "../interfaces/auth.response";

export const registerAction = async (fullName: string, email: string, password: string) => {
    try {
        const { data } = await tesloApi.post<AuthResponse>('/auth/register', { fullName, email, password });
        return {
            ok: true,
            user: data.user,
            token: data.token
        };
    }
    catch (error) {
        if (isAxiosError(error)) {
            if (error.response?.status === 409) {
                return {
                    ok: false,
                    message: 'Email already in use'
                };
            }
        }else{
            return{
                message:'Usario registrado existosamente'
            }
        }
        console.error(error);
        throw new Error('An error occurred while trying to register');
    }
}