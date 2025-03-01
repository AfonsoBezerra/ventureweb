import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "@/assets/img/logoAg.webp";

export function NotificacaoCard() {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="w-full items-start flex flex-row justify-between pb-0 ">
        <div className="w-fit flex flex-col gap-1">
          <CardTitle>Notificações</CardTitle>
          <CardDescription>Histórico de notificações</CardDescription>
        </div>
        <Button className="bg-construtora text-sm py-1 px-3 text-white">
          Ver mais
        </Button>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-3">
          <li className="flex justify-between items-center">
            <div className="flex gap-6 items-center">
              <Image
                src={Logo}
                alt="logo contrutora"
                width={500}
                height={500}
                className="object-contain w-10 h-10 rounded-full"
              />
              <h1 className="text-sm opacity-70">
                AgVelasco te mandou uma mensagem
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs opacity-50">2h atras</span>
              <span className="w-2 h-2 rounded-full bg-red-700"></span>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-6 items-center">
              <Image
                src={Logo}
                alt="logo contrutora"
                width={500}
                height={500}
                className="object-contain w-10 h-10 rounded-full"
              />
              <h1 className="text-sm opacity-70">
                Agendamento pendende de aprovação
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs opacity-50">2h atras</span>
              <span className="w-2 h-2 rounded-full bg-red-700"></span>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-6 items-center">
              <Image
                src={Logo}
                alt="logo contrutora"
                width={500}
                height={500}
                className="object-contain w-10 h-10 rounded-full"
              />
              <h1 className="text-sm opacity-70">
                Seu chamado #0002 foi atualizado
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs opacity-50">2 dias atras</span>
              <span className="w-2 h-2 rounded-full"></span>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-6 items-center">
              <Image
                src={Logo}
                alt="logo contrutora"
                width={500}
                height={500}
                className="object-contain w-10 h-10 rounded-full"
              />
              <h1 className="text-sm opacity-70">
                AgVelasco adicionou novas fotos da obra
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs opacity-50">5 dias atras</span>
              <span className="w-2 h-2 rounded-full"></span>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-6 items-center">
              <Image
                src={Logo}
                alt="logo contrutora"
                width={500}
                height={500}
                className="object-contain w-10 h-10 rounded-full"
              />
              <h1 className="text-sm opacity-70">
                AgVelasco atualizou a evolução de obra
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs opacity-50">31 dias atras</span>
              <span className="w-2 h-2 rounded-full"></span>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
