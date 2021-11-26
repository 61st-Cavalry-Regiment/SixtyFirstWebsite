import { parseUrl } from '../components/Image'
import Image from 'next/image'
import { supabase } from '../utils/supabaseClient'

export default function Home() {
    return (
        <div className="container text-center text-primary font-medium mt-12">
            <h1 className="">Welcome to the 61st Cavalry Regiment (Arma 3)</h1>
            <p className="my-20">
                For more information about how to join our unit please look at
                our recruitment page.
            </p>
            <h2 className="pb-2">Featured Photos</h2>
            <div className="grid grid-rows-2 xl:grid-rows-1 grid-cols-1 xl:grid-cols-2 gap-2">
                <div>
                    <Image
                        src={
                            supabase.storage
                                .from('photos')
                                .getPublicUrl('home/img_1.jpg').publicURL ?? ''
                        }
                        width={1920}
                        height={1080}
                        alt="img 1"
                    />
                </div>
                <div>
                    <Image
                        src={
                            supabase.storage
                                .from('photos')
                                .getPublicUrl('home/img_2.jpg').publicURL ?? ''
                        }
                        width={1920}
                        height={1080}
                        alt="img 2"
                    />
                </div>
            </div>
        </div>
    )
}
