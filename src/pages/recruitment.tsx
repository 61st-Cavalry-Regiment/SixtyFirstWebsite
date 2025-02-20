import Image from 'next/image'
import TSIcon from '../../public/ts_stacked_bluelight.png'
import DiscordIcon from '../../public/Discord-Logo-Color.svg'
import { parseUrl } from '../components/Image'
import { supabase } from '../utils/supabaseClient'

function Recruitment() {
    return (
        <div className="container text-center text-primary mt-12 flex flex-col space-y-10">
            <div>
                <h1 className="pb-5">Recruitment</h1>
                <p>
                    The 61st Cavalry Regiment is an Army based, semi-realistic
                    milsim unit. We utilize a combined arms approach focusing on
                    mechanized infantry tactics in addition to air assault
                    elements. As a community, we emphasize having a fun in-game
                    experience through the use and application of an organized
                    military structure. This unit has been created by an
                    experienced group of Arma community members who have the
                    knowledge and skills to support a well-functioning unit.
                </p>
            </div>
            <div>
                <h1 className="pb-5">BCT</h1>
                <p>
                    The first step in becoming a part of the 61st is to go
                    through our Basic Combat Training course that will teach you
                    the skills to succeed in an Arma Operation. To progress in
                    and have access to all the different aspects of the 61st,
                    you will need to pass the BCT. BCT is not meant to fail you
                    in any way. Our BCT training structure is organized around a
                    Final Test that will cover all aspects of what our unit
                    expects of our members. Anyone who comes in wanting to take
                    part in a teamwork-oriented experience will succeed in BCT
                    and in the unit as a whole.
                </p>
            </div>
            <div>
                <h1 className="pb-5">Detachments</h1>
                <p>
                    To provide the fullest Arma 3 experience, the 61st maintains
                    additional support detachments to work hand-in-hand with the
                    main infantry element.
                </p>
                <div className="grid lg:mx-28 mx-12 grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 gap-4">
                    <div className="hidden lg:block scale-150 my-auto">
                        <Image
                            src={
                                supabase.storage
                                    .from('imgs')
                                    .getPublicUrl('inf.png').publicURL ?? ''
                            }
                            width={206}
                            height={106}
                            className="mx-auto"
                            alt="inf logo"
                        />
                    </div>
                    <div className="hidden lg:block my-auto">
                        <Image
                            src={
                                supabase.storage
                                    .from('imgs')
                                    .getPublicUrl('air.png').publicURL ?? ''
                            }
                            width={416}
                            height={240}
                            className="mx-auto"
                            alt="air logo"
                        />
                    </div>
                    <div className="hidden lg:block my-auto scale-75">
                        <Image
                            src={
                                supabase.storage
                                    .from('imgs')
                                    .getPublicUrl('med.png').publicURL ?? ''
                            }
                            width={416}
                            height={342}
                            className="mx-auto"
                            alt="med logo"
                        />
                    </div>
                    <div className="lg:row-start-2">
                        <h3 className="py-3">Orion</h3>
                        <p>
                            Orion is our foundational Infantry detachment
                            specializing in mechanized insertions and CQB. Every
                            operation will have Orion members running so if you
                            are looking for the more front lines feel in the
                            battlefield, look no further than Orion.
                        </p>
                    </div>
                    <div className="lg:row-start-2">
                        <h3 className="pb-3">Phoenix</h3>
                        <p>
                            Phoenix is our Army Aviation detachment. Their main
                            prerogative is to assist all detachments on the
                            field in any way possible. Phoenix utilizes the
                            UH-60 Black Hawk and the CH-47 Chinook as their main
                            methods of transportation. Phoenix also has access
                            to the well known AH-64 Apache which specializes in
                            fast and precise air strikes to eliminate enemy
                            threats on the ground and in air.
                        </p>
                    </div>
                    <div className="lg:row-start-2">
                        <h3 className="pb-3">Perseus</h3>
                        <p>
                            Perseus is our Army Medical Detachment. The main
                            goal of an Arma medic on the field is to keep combat
                            effectiveness among the squads as high as possible.
                            The beauty of Perseus in the 61st Cavalry is that
                            all Medics are trained to operate in both infantry
                            capacities as well as in MEDEVAC situations. A
                            Perseus Medic is versatile and one of the key roles
                            needed to have a successful Arma operation.{' '}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="pb-5">How we operate</h1>
                <p>
                    Drawing from the best practices in running a well-organized
                    and enjoyable Arma unit, the 61st operates under a fixed
                    COC. While in-game all members are expected to follow orders
                    from their leadership to ensure every player on the field
                    has the best experience possible. Outside of Arma, all
                    community members are expected to show respect to their
                    fellow players and to unit leadership who ensure a great
                    gaming experience is available to everyone.
                </p>
            </div>
            <div>
                <h1 className="pb-5">Scheduling</h1>
                <p>
                    Weekly Official Operations take place every Sunday at 7:30PM
                    EST. These operations are created by a dedicated Mission
                    Development Staff that work to provide the best tactical
                    experience possible. Beyond the in-game experience, the
                    Mission Development Staff also work to provide each official
                    operation with a constantly evolving mission report that
                    brings life to what is otherwise a “typical” Arma
                    mission.These reports are maintained regularly and shape the
                    in-game experience by tying players on the ground to the
                    larger mission context in which they are operating. The main
                    goal of official operations is to challenge the unit and
                    push all members to work as a team., With every operation,
                    our goal is to show how great the Arma experience can be
                    when strong teamwork across an entire task force is put to
                    practice. When we aren’t hosting an official operation, we
                    use field training exercises (FTXs) to teach and practice
                    different strategies and tactics to make all our members the
                    best Arma players they can be.
                </p>
            </div>
            <div>
                <h1 className="pb-5">Joining requirements</h1>
                <ul className="list-disc mx-auto list-inside text-left">
                    <li>16+ years old</li>
                    <li>20 hours in ARMA 3</li>
                    <li>Follow unit leadership decisions</li>
                    <li>
                        Be able to work cooperatively with people form all walks
                        of life
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="pb-5">Once your in our TS</h1>
                <p>
                    Join one of the &quot;Recruitment Waiting room&quot;
                    channels under the recruitment section and wait for a
                    recruiter to join the channel and begin your recruitment
                    process. Please understand that recruiters are giving their
                    free time to the unit so give them a chance to get to you!
                </p>
            </div>
            <div className="flex space-x-4 justify-center">
                <a
                    href="ts3server://ts.61st-regiment.com?port=10031"
                    style={{ width: '128px' }}
                    className="p-3 inline-block"
                >
                    <Image
                        src={TSIcon}
                        loading="eager"
                        unoptimized={true}
                        alt="Teamspeak icon"
                    />
                </a>
                <a
                    href="https://discord.gg/R6mG2JKNxt"
                    className="p-3 inline-block my-auto"
                >
                    <Image
                        src={DiscordIcon}
                        width={128}
                        height={128}
                        alt="Discord icon"
                    />
                </a>
            </div>
        </div>
    )
}

export default Recruitment
