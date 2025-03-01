import { Bell } from 'lucide-react';
import { AvatarUser } from "./avatarUser";
import Logo from "@/assets/img/logo-1.png";
import Image from "next/image"; 

const Header = () => {
    return(
        <header className="bg-background w-full h-[80px] border-b border-border px-8 py-4 flex items-center justify-between sticky top-0 left-0 ">
            {/* <SearchDialog /> */}
            {/* <h1 className='font-bold text-3xl'>Olá, Afonso 👋</h1> */}

            <div className="h-[80px] p-2 flex border-b-[1px] border-border-primary items-center">
                <Image
                    src={Logo}
                    alt="logo contrutora"
                    width={500}
                    height={500}
                    className="object-contain w-full h-full"
                />
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-text-secondary w-fit p-2 bg-[#FFA412]/10 rounded-md relative">
                <span className='w-2 h-2 rounded-full bg-red-500 shadow-sm shadow-red-400/90 absolute top-2 right-2.5'></span>
                    <Bell className='w-5.5 h-5.5 text-[#FFA412]/80' />
                </div>
                <div className="flex items-center gap-2">
                   <AvatarUser />
                </div>
            </div>
   
        </header>
    )
}

export default Header