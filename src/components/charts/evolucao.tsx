"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { DatePickerWithRange } from "./rangePicker";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const chartData = [
  {
    evolucao: "estrutura",
    total: 90,
    fill: "var(--color-estrutura)",
    mensal: 2,
  },
  {
    evolucao: "hidraulica",
    total: 30,
    fill: "var(--color-hidraulica)",
    mensal: 2,
  },
  { evolucao: "eletrica", total: 40, fill: "var(--color-eletrica)", mensal: 2 },
  { evolucao: "pintura", total: 5, fill: "var(--color-pintura)", mensal: 4 },
  {
    evolucao: "fundacao",
    total: 100,
    fill: "var(--color-fundacao)",
    mensal: 100,
  },
];

const chartConfig = {
  total: {
    label: "Total",
  },
  mensal: {
    label: "Mensal",
  },
  estrutura: {
    label: "Estrutura",
    color: "hsl(var(--chart-1))",
  },
  hidraulica: {
    label: "Hidraulica",
    color: "hsl(var(--chart-2))",
  },
  eletrica: {
    label: "Eletrica",
    color: "hsl(var(--chart-3))",
  },
  pintura: {
    label: "Pintura",
    color: "hsl(var(--chart-4))",
  },
  fundacao: {
    label: "Fundação",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function EvolucaoChart() {
  const [filters, setFilters] = useState("total");

  const dateNow = new Date();
  const Month = format(dateNow, "MMMM yyyy", { locale: ptBR });
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="w-full flex justify-between flex-wrap items-center gap-3">
          <div className="flex flex-col gap-2 items-start">
            <CardTitle>Taxa de Evolução de obra</CardTitle>
            <CardDescription>
              {filters == "total"
                ? `Dezembro 2022 - ${Month[0].toUpperCase() + Month.substr(1)}`
                : filters == "mensal"
                ? Month[0].toUpperCase() + Month.substr(1)
                : "Periodo selecionado"}
            </CardDescription>
          </div>
          <div className="flex gap-2 flex-col">
            <Select
              defaultValue="total"
              onValueChange={(prev) => setFilters(prev)}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="total">Taxa total</SelectItem>
                <SelectItem value="mensal">Taxa mensal</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            {filters == "custom" && <DatePickerWithRange />}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer className="max-h-[250px] w-full" config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
              right:45
            }}
          >
            <YAxis
              dataKey="evolucao"
              type="category"
              width={80}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey={filters} type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={filters} layout="vertical" radius={5} maxBarSize={30}>
              <LabelList
                dataKey={filters}
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
                formatter={(e: any) => {
                  return `${e}%`
                }}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          A taxa da Evolução foi de 2% esse mês{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
