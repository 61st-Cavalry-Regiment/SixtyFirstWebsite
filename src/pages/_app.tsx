import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import TopBar from '../components/TopBar'
import { Auth } from '@supabase/ui'
import { supabase } from '../utils/supabaseClient'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Auth.UserContextProvider supabaseClient={supabase}>
            <TopBar></TopBar>
            <Component {...pageProps} />
        </Auth.UserContextProvider>
    )
}
export default MyApp
