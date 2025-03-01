import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export default function AvatarDemo({src, className, fallBack, classfallBack} : {src: string, className?: string, fallBack?: string, classfallBack?: string}) {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt="@shadcn" />
      <AvatarFallback className={classfallBack}>{fallBack}</AvatarFallback>
    </Avatar>
  );
}
