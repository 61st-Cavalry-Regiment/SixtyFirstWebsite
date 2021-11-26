import { Auth } from '@supabase/ui'
import router from 'next/router'
import { supabase } from '../utils/supabaseClient'

export default function Login() {
    const { user } = Auth.useUser()
    if (user) router.back()
    else
        return (
            <div className="w-[40%] mx-auto pt-[10px]">
                <h3 className="text-md text-center text-white">
                    Please only use this if you{"'"}ve been instructed to.
                </h3>
                <Auth supabaseClient={supabase} providers={['discord']}></Auth>
            </div>
        )
}
