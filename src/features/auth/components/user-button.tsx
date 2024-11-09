"use client"
import {Avatar,AvatarFallback,AvatarImage} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { useCurrentUser } from "../api/use-current-user"
import { Loader, LogOut } from "lucide-react"
import { useAuthActions } from "@convex-dev/auth/react"
const UserButton =()=>{

    const {signOut} = useAuthActions();

    const {data,isLoading} = useCurrentUser();

    if(isLoading){
        return <Loader className="size-4 animate-spin text-muted-foreground"/>
    }

    if(!data){
        return null;
    }

    const {image,name,email}=data;

    const avatarFallback = name?.charAt(0).toUpperCase();

    return(
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="outline-none relative">
                <Avatar className="size-10 hover:opacity-75 transition">
                    <AvatarImage alt={name} src={image} />
                    <AvatarFallback className="bg-sky-500 text-white">
                          {avatarFallback}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={()=>signOut()}>
                    <LogOut className="size-4 mr-2"/>
                    Logout

                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserButton;