"use client";
import AvatarDemo from "../avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const AvatarUser = () => {
  // const { userMember } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AvatarDemo 
          classfallBack="bg-secondary-foreground text-primary-foreground"
          className="w-10 h-10"
          src="https://github.com/shadcn.png"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuSeparator />
        <form action={'/'}>
          <DropdownMenuItem asChild className="w-full">
            <button type="submit">Logout</button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
