import { Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { ChamadosTable } from "../table/chamado";
import { Button } from "../ui/button";

export function CardChamados() {
  return (
    <Card className="col-start-1 col-end-3 flex flex-col justify-between">
      <CardHeader className="w-full items-start flex flex-row justify-between pb-0 ">
        <div className="w-fit flex flex-col gap-1">
            <CardTitle>Chamados</CardTitle>
            <CardDescription>Histórico de chamados</CardDescription>
        </div>
        <Button className="bg-construtora text-sm py-1 px-3 text-white">Ver mais</Button>
      </CardHeader>
      <CardContent className="flex items-center justify-center flex-col pt-4 gap-4">
        <ChamadosTable />
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          O tempo médio dos atendimentos é de 1 dia<Zap className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Conte com conosco para melhorar sua experiência
        </div>
      </CardFooter>
    </Card>
  );
}
