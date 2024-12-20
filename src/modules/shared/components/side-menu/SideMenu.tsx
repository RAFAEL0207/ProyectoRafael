'use client'
import { useUIStore } from '../..'
import Image from "next/image";
import { sidemenu_options } from '@/config/constants'
import { SideMenuItem } from './SideMenuItem'
import { LogoutButton } from './LogoutButton';
import { CloseSideMenuButton } from './CloseSideMenuButton';


export const SideMenu = () => {

    const isSideMeunuOpen = useUIStore(state => state.isSideMenuOpen);

    return (
        <>
            {
                isSideMeunuOpen && (
                    <div 
                        className='md:hidden fixed top-0 left-0 w-screen h-screen z-20 bg-black opacity-30'
                    />
                )
            }

            <aside className={isSideMeunuOpen ? 'sidemenu sidemenu-active' : 'sidemenu'}>
                <div className='mb-8 flex items-center gap-2'>
                    <div className='bg-gradient text-2xl p-2 rounded-xl'>
                    <Image
                        width={240}
                        height={20}
                        src="/images/logo.png"
                        alt=""
                    />
                    </div>
                </div>
                <ul className='flex flex-col gap-2'>
                    {
                        sidemenu_options.map((option, index) => (
                            <li key={index}>
                                <SideMenuItem
                                    icon={option.icon}
                                    path={option.path}
                                    role={option.role}
                                >
                                    {option.name}
                                </SideMenuItem>
                            </li>
                        ))
                    }
                </ul>
                <CloseSideMenuButton />
                <div className='flex-1'></div>
                <LogoutButton />
            </aside>
        </>
    )
}
