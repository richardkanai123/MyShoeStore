'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ShoppingCartIcon, SlidersHorizontal, UserCog2, UserCog2Icon } from "lucide-react"
import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SettingsMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={cn('p-2 pointer-events-auto cursor-pointer')}>
                <SlidersHorizontal />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <Button variant='ghost' className={cn('w-full rounded-md relative')}>
                    <ShoppingCartIcon className="w-6 h-6 " />
                    <span className=" text-lg text-yellow-500 font-extrabold">2</span>
                </Button>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <ModeToggle />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <UserCog2Icon /> <span className="text-sm font-light ml-3">Account</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default SettingsMenu