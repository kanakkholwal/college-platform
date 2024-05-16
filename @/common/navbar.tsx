"use client";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
    Cloud,
    LogOut,
    Settings,
    UserRound
} from 'lucide-react';
import { signOut } from "next-auth/react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function Navbar() {

    return (
        <>
            <nav className={cn(
                "fixed left-0 top-0 z-50 max-w-7xl mx-auto inset-inline-0 flex w-full items-center justify-between font-bold text-xl p-4 lg:py-2 backdrop-blur-2xl lg:static lg:rounded-xl lg:border border-b",
                " lg:bg-white/20 lg:dark:bg-zinc-800/30 border-gray-300/50 bg-gradient-to-b from-primary/5 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ")}>
                <Link href="/" className="relative bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent hover:from-sky-500 hover:to-primary lg:text-xl whitespace-nowrap">
                    {process.env.NEXT_PUBLIC_WEBSITE_NAME}
                </Link>
                <div className="flex items-center gap-5">
                    <Link href="https://x.com/kanakkholwal" className={" hover:text-primary hover:-translate-y-1 ease-in duration-300 flex justify-center items-center h-8 icon"}>
                        <RiTwitterXFill className="w-5 h-5" />
                    </Link>
                    <Link href="https://linkedin.com/in/kanak-kholwal" className={" hover:text-primary hover:-translate-y-1 ease-in duration-300 flex justify-center items-center h-8 icon"}>
                        <FiLinkedin className="w-5 h-5" />
                    </Link>
                    <Link href="https://github.com/kanakkholwal" className={" hover:text-primary hover:-translate-y-1  ease-in duration-300 flex justify-center items-center h-16 icon"}>
                        <LuGithub className="w-5 h-5" />
                    </Link>
                    <Link href="https://instagram.com/kanakkholwal" className={" hover:text-primary hover:-translate-y-1  ease-in duration-300 flex justify-center items-center h-16 icon"}>
                        <BsInstagram className="w-5 h-5" />
                    </Link>
                    <div className="border-r border-gray-300 dark:border-neutral-800 h-8" />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="link" size="icon" rounded="full"><UserRound/></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" side="bottom" align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <UserRound className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                    {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                    {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                                </DropdownMenuItem>
                                {/* <DropdownMenuItem>
                                    <Keyboard className="mr-2 h-4 w-4" />
                                    <span>Keyboard shortcuts</span>
                                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                </DropdownMenuItem> */}
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />            
                            <DropdownMenuItem disabled>
                                <Cloud className="mr-2 h-4 w-4" />
                                <span>API</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/", })} className='cursor-pointer'>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                                {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>

        </>)
}