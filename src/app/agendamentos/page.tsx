import { CalendarDays, CheckCircle, Clock, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SchedulePage() {
  const visits = [
    {
      id: 1,
      date: "2024-02-20",
      time: "14:00",
      responsavel: "João",
      reason: "Inspeção elétrica",
      status: "pendente",
    },
    {
      id: 2,
      date: "2024-02-15",
      time: "09:30",
      responsavel: "João",
      reason: "Manutenção hidráulica",
      status: "confirmado",
    },
    {
      id: 3,
      date: "2024-02-10",
      time: "11:00",
      responsavel: "João",
      reason: "Vistoria estrutural",
      status: "em_processo",
    },
    {
      id: 4,
      date: "2024-02-05",
      time: "16:00",
      responsavel: "João",
      reason: "Reparo no ar condicionado",
      status: "resolvido",
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pendente: { class: "bg-yellow-500", label: "Pendente" },
      confirmado: { class: "bg-blue-500", label: "Confirmado" },
      em_processo: { class: "bg-purple-500", label: "Em Processo" },
      resolvido: { class: "bg-green-500", label: "Resolvido" },
    }[status];

    return (
      <Badge className={`${statusConfig?.class} text-white`}>
        {statusConfig?.label}
      </Badge>
    );
  };

  return (
    <div className="w-full mx-auto p-10 flex flex-col gap-6 min-h-[92vh]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-2xl">Agendamentos</h1>
          <span className="font-light text-sm text-foreground/70">
            Confira seus agendamentos criados
          </span>
        </div>
      </div>
      <div className="w-full bg-card rounded-lg p-5">
        <Card className="p-0 shadow-none">
          <CardContent>
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-4">
                {visits.map((visit) => (
                  <Card key={visit.id} className="p-4 rounded-none">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4 items-center">
                      <div>
                        <p className="font-medium">Motivo</p>
                        <p className="text-muted-foreground">{visit.reason}</p>
                      </div>
                      <div>
                        <p className="font-medium">Responsável</p>
                        <p className="text-muted-foreground">
                          {visit.responsavel}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Data criação</p>
                        <p className="text-muted-foreground">{visit.time}</p>
                      </div>
                      <div>
                        <p className="font-medium">Horário</p>
                        <p className="text-muted-foreground">
                          {new Date(visit.date).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        {getStatusBadge(visit.status)}
                        {visit.status === "pendente" && (
                          <div className="flex gap-2">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            </Button>
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8"
                            >
                              <XCircle className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        )}
                        {visit.status === "em_processo" && (
                          <Clock className="h-5 w-5 text-purple-500" />
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
