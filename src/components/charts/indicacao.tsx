import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import indicacao from "@/assets/img/indicacao.png";
import { Zap } from "lucide-react";

export function IndicacaoContain() {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="items-center pb-0">
        <CardTitle>Indicações</CardTitle>
        <CardDescription>Total de indicações</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center flex-col pt-4 gap-4">
        <Image
          src={indicacao}
          alt="indicacao"
          width={500}
          height={500}
          className="w-[200px]"
        />
        <h1 className="text-3xl font-bold">
          5 <span className="opacity-60 text-base font-normal">/ 7</span>
        </h1>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Suas Indicações subiram + 2 <Zap className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Falta mais 2 indicações para ganhar seu premio
        </div>
      </CardFooter>
    </Card>
  );
}
