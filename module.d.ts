declare namespace NodeJS {
    export interface ProcessEnv {
        CDN: string
        NEXT_PUBLIC_CDN: string
        NEXT_PUBLIC_SUPABASE_ANON_KEY: string
        NEXT_PUBLIC_SUPABASE_URL: string
        SUPABASE_URL: string
    }
}
