"use client";

import { useState } from "react";
import { Eye, Plus } from "lucide-react";
import { CalendarDays, CheckCircle, Clock, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { vi } from "date-fns/locale";
import Link from "next/link";

type ServiceCall = {
  id: number;
  apartment: string;
  assunto: string;
  description: string;
  status: "Pendente" | "Resolvido" | "Aguardando";
  date: string;
};

export default function ServiceCallsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceCalls, setServiceCalls] = useState<ServiceCall[]>([
    {
      id: 1,
      apartment: "101",
      assunto: "Pia Quebrada",
      description: "Leaking faucet",
      status: "Pendente",
      date: "2025-02-17",
    },
    {
      id: 2,
      apartment: "205",
      assunto: "Infiltração",
      description: "Broken window",
      status: "Resolvido",
      date: "2025-02-16",
    },
    {
      id: 3,
      apartment: "310",
      assunto: "Piso quebrado",
      description: "Faulty electrical outlet",
      status: "Aguardando",
      date: "2025-02-15",
    },
  ]);

  const addServiceCall = (
    newCall: Omit<ServiceCall, "id" | "status" | "date">
  ) => {
    const newId = Math.max(...serviceCalls.map((call) => call.id)) + 1;
    setServiceCalls([
      ...serviceCalls,
      {
        ...newCall,
        id: newId,
        status: "Pendente",
        date: new Date().toISOString().split("T")[0],
      },
    ]);
    setIsModalOpen(false);
  };

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

  const visits = [
    {
      id: 1,
      responsavel: "João",
      date: "2024-02-20",
      reason: "Inspeção elétrica",
      status: "pendente",
    },
    {
      id: 2,
      responsavel: "João",
      date: "2024-02-15",
      reason: "Manutenção hidráulica",
      status: "confirmado",
    },
    {
      id: 3,
      responsavel: "João",
      date: "2024-02-10",
      reason: "Vistoria estrutural",
      status: "em_processo",
    },
    {
      id: 4,
      date: "2024-02-05",
      responsavel: "João",
      reason: "Reparo no ar condicionado",
      status: "resolvido",
    },
  ];

  return (
    <div className="w-full mx-auto p-10 flex flex-col gap-6 min-h-[92vh]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-2xl">Chamados</h1>
          <span className="font-light text-sm text-foreground/70">
            Confira seus chamados e se necessário crie algum
          </span>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Novo chamado
        </Button>
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
                        <p className="text-muted-foreground">
                          {new Date(visit.date).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        {getStatusBadge(visit.status)}
                      </div>
                      {visit.status !== 'pendente' && (
                          <Button className="w-fit text-xs"><Eye />Ver mais</Button>
                      )}
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

