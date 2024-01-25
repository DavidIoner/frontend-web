import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "email", type: "text,", placeholder: "email" },
                password: { label: "password", type: "text,", placeholder: "senha" },
            },
            async authorize(credentials) {
                const user = {id: '1', name: 'nome aleatorio', email: 'test@example.com', password: 'segredo123'}
            
                if (user && 
                    user?.email === credentials?.email &&
                    user?.password === credentials?.password) {
                    return user
                    }
                return null
            }
        }),
    ]
}