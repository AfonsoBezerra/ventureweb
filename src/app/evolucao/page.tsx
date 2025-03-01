import { Card } from "@/components/cards";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUp, Bath, Building2, CalendarDays, Codepen, Container, Grid2x2, Layers, PaintRoller, Sofa, Sprout, TableCellsMerge, Zap } from "lucide-react";
import Image from "next/image";
import Img1 from "@/assets/img/img1.jpg"

export default function Evolucao() {
  return (
    <section className="w-full p-10 m-auto flex flex-col gap-6 min-h-[92vh]">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl">Evolução da Obra</h1>
        <span className="font-light text-sm text-foreground/70">
          Confira como anda a obra da sua nova conquista
        </span>
      </div>

      <div className="flex justify-between w-full gap-10 h-full">
        <div className="w-full min-h-[600px] bg-card shadow-sm rounded-md flex gap-5 p-10 flex-col">
          <div className="flex justify-between items-start min-h-[10vh]">
            <div className="flex w-full gap-5 flex-col">
              <h1 className="font-semibold text-2xl text-foreground">
                Andamento da obra:
              </h1>
              <div className="flex items-center gap-6">
                <h2 className="font-bold text-2xl">70.5%</h2>
                <span className="text-green-500 text-sm flex items-center gap-1">
                  + 2 <ArrowUp />
                </span>
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <Select defaultValue="total">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="total">Janeiro 2024</SelectItem>
                  <SelectItem value="mensal">Fevereiro 2024</SelectItem>
                  <SelectItem value="custom">Março 2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-full h-full rounded-xl bg-white overflow-hidden relative shadow-inner ">
            <div className="data-foto"></div>
            <div className="absolute top-5 left-5 z-10 flex items-center gap-2 uppercase text-white text-lg font-medium">
                <CalendarDays className="size-8 text-white" />
                Evolução de Janeiro 2024
            </div>
            <Image src={Img1} className="w-full h-full" alt="img-1" />
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-5">
          <Card>
            <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
              <Layers className="text-construtora" /> Terraplanagem
            </h1>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">100%</h2>
              <span className="text-green-500 text-sm flex items-center gap-1">
                + 2% <ArrowUp />
              </span>
            </div>
            <Progress value={100} className="w-full mt-3" />
          </Card>
          <Card>
            <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
              <Codepen className="text-construtora" /> Fundação
            </h1>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">100%</h2>
              <span className="text-green-500 text-sm flex items-center gap-1">
                + 1% <ArrowUp />
              </span>
            </div>
            <Progress value={100} className="w-full mt-3" />
          </Card>
          <Card>
            <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
              <Building2 className="text-construtora" /> Estrutura
            </h1>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">81%</h2>
              <span className="text-green-500 text-sm flex items-center gap-1">
                + 2% <ArrowUp />
              </span>
            </div>
            <Progress value={81} className="w-full mt-3" />
          </Card>
          <Card>
            <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
              <Bath className="text-construtora" /> Hidráulica
            </h1>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">20%</h2>
              <span className="text-green-500 text-sm flex items-center gap-1">
                + 0.5% <ArrowUp />
              </span>
            </div>
            <Progress value={20} className="w-full mt-3" />
          </Card>
          <Card>
            <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
              <Zap className="text-construtora" /> Elétrica
            </h1>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">20%</h2>
              <span className="text-green-500 text-sm flex items-center gap-1">
                + 0.5% <ArrowUp />
              </span>
            </div>
            <Progress value={20} className="w-full mt-3" />
          </Card>
          <Card>
            <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
              <TableCellsMerge className="text-construtora" /> Alvenaria
            </h1>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">76%</h2>
              <span className="text-green-500 text-sm flex items-center gap-1">
                + 1.2% <ArrowUp />
              </span>
            </div>
            <Progress value={76} className="w-full mt-3" />
          </Card>
          <Card>
            <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
              <Grid2x2 className="text-construtora" /> Revestimentos
            </h1>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">52%</h2>
              <span className="text-green-500 text-sm flex items-center gap-1">
                + 3.5% <ArrowUp />
              </span>
            </div>
            <Progress value={52} className="w-full mt-3" />
          </Card>
          <Card>
            <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
              <PaintRoller className="text-construtora" /> Pintura
            </h1>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">31%</h2>
              <span className="text-green-500 text-sm flex items-center gap-1">
                + 1% <ArrowUp />
              </span>
            </div>
            <Progress value={31} className="w-full mt-3" />
          </Card>
          <Card>
            <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
              <Container className="text-construtora" /> Pavimentação externa
            </h1>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">25%</h2>
              <span className="text-green-500 text-sm flex items-center gap-1">
                + 2% <ArrowUp />
              </span>
            </div>
            <Progress value={25} className="w-full mt-3" />
          </Card>
          <Card>
            <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
              <Sofa className="text-construtora" /> Decoração e mobiliário
              de áreas comuns
            </h1>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">12%</h2>
              <span className="text-green-500 text-sm flex items-center gap-1">
                + 2% <ArrowUp />
              </span>
            </div>
            <Progress value={12} className="w-full mt-3" />
          </Card>
          <Card>
            <h1 className="text-xs font-medium text-foreground uppercase flex items-center gap-2">
              <Sprout className="text-construtora" /> Paisagismo
            </h1>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">5%</h2>
              <span className="text-green-500 text-sm flex items-center gap-1">
                + 1% <ArrowUp />
              </span>
            </div>
            <Progress value={5} className="w-full mt-3" />
          </Card>
        </div>
      </div>
    </section>
  );
}