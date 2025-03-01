import { ArrowUp } from "@/assets/svg/arrow";
import { Card } from "@/components/cards";
import { CardChamados } from "@/components/chamados/table";
import { EvolucaoChart } from "@/components/charts/evolucao";
import { FinancialChart } from "@/components/charts/financial";
import { IndicacaoContain } from "@/components/charts/indicacao";
import { NotificacaoCard } from "@/components/notificacao";
import { DollarSign, Landmark, ScrollText, TrendingUp, UserRoundPlus } from "lucide-react";

export default function Home() {
  return (
    <section className="w-full p-10 m-auto flex flex-col gap-6 min-h-[100vh]">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl">Olá Afonso 👋</h1>
        <span className="font-light text-sm text-foreground/70">
          Esteja por dentro de tudo que acontece na obra do seu novo
          apartamento!
        </span>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-5">
        <Card>
          <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
            <TrendingUp className="text-cyan-500" /> Evolução Total
          </h1>
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-2xl">70%</h2>
            <span className="text-green-500 text-sm flex items-center gap-1">
              + 2% <ArrowUp />
            </span>
          </div>
        </Card>
        <Card>
          <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
            <DollarSign className="text-green-500" /> Total pago
          </h1>
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-2xl">R$42.256,63</h2>
            <span className="text-green-500 text-sm flex items-center gap-1">
              + 36% <ArrowUp />
            </span>
          </div>
        </Card>

        <Card>
          <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
            <Landmark className="text-red-500" /> Total Faltante
          </h1>
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-2xl">R$358.744,63</h2>
          </div>
        </Card>
        
        <Card>
          <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
            <ScrollText className="text-yellow-500" /> Chamados Abertos
          </h1>
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-2xl">2</h2>
          </div>
        </Card>

        <Card>
          <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
            <UserRoundPlus className="text-blue-500" /> Pessoas Indicadas
          </h1>
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-2xl">5</h2>
            <span className="text-green-500 text-sm flex items-center gap-1">
              + 2 <ArrowUp />
            </span>
          </div>
        </Card>

      </div>
      <div className="w-full grid grid-cols-3 gap-4">
          <EvolucaoChart />
          <FinancialChart />
          <IndicacaoContain />
      </div>
      <div className="w-full grid grid-cols-3 gap-4">
        <CardChamados />
        <NotificacaoCard />
      </div>
    </section>
  );
}
