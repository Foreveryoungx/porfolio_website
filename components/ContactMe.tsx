import React from 'react';
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/20/solid';

type Props = {}
export default function ContactMe({}: Props) {
    return (
        <div className={"h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"}>
            <h3 className={"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"}>
                Contact
            </h3>

            <div className={"flex flex-col space-y-10"}>
                <h4 className={"text-4xl font-semibold text-center"}>
                    I have got just what you need.{""}
                    <span className={"decoration-[#f7AB0A]/50 underline"}>Lets talk.</span>
                </h4>

                <div>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <PhoneIcon className={"text-[#F7AB0A] h-7 w-7 animate-pulse"} />
                        <p className={"text-2xl"}>+16362147938</p>
                    </div>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <MapPinIcon className={"text-[#F7AB0A] h-7 w-7 animate-pulse"} />
                        <p className={"text-2xl"}>123 Developer Lane</p>
                    </div>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <EnvelopeIcon className={"text-[#F7AB0A] h-7 w-7 animate-pulse"} />
                        <p className={"text-2xl"}>trevon.allen1994@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};