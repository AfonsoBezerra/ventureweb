"use client";

import { Eye, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServiceCallsPage() {
  const agendamentos = [
    {
      motivo: "Inspeção elétrica",
      responsavel: "João",
      data: "19/02/2024",
      horario: "14:00",
      status: "Pendente",
      statusColor: "bg-amber-500 hover:bg-amber-600",
      acoes: "check-x",
    },
    {
      motivo: "Manutenção hidráulica",
      responsavel: "João",
      data: "14/02/2024",
      horario: "09:30",
      status: "Confirmado",
      statusColor: "bg-blue-500 hover:bg-blue-600",
      acoes: "check-x",
    },
    {
      motivo: "Vistoria estrutural",
      responsavel: "João",
      data: "09/02/2024",
      horario: "11:00",
      status: "Em Processo",
      statusColor: "bg-purple-500 hover:bg-purple-600",
      acoes: "clock",
    },
    {
      motivo: "Reparo no ar condicionado",
      responsavel: "João",
      data: "04/02/2024",
      horario: "16:00",
      status: "Resolvido",
      statusColor: "bg-green-500 hover:bg-green-600",
      acoes: "more",
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
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Novo chamado
        </Button>
      </div>
      <div className="w-full bg-card rounded-lg p-5">
        <Card className="w-full !p-0 shadow-none">
          <CardContent className="w-full p-0">
            <div className="w-full">
              <Card className="w-full border-none shadow-sm">
                <CardContent className="w-full ">
                  {/* Versão para desktop e tablet */}
                  <div className="hidden md:block w-full overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-muted-foreground/10">
                          <th className="text-left py-4 font-medium text-sm text-gray-500">
                            Motivo
                          </th>
                          <th className="text-left py-4 font-medium text-sm text-gray-500">
                            Responsável
                          </th>
                          <th className="text-left py-4 font-medium text-sm text-gray-500">
                            Data da visita
                          </th>
                          <th className="text-left py-4 font-medium text-sm text-gray-500">
                            Horário
                          </th>
                          <th className="text-right py-4 font-medium text-sm text-gray-500"></th>
                          <th className="text-right py-4 font-medium text-sm text-gray-500"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {agendamentos.map((item, index) => (
                          <tr
                            key={index}
                            className="border-b border-muted-foreground/10"
                          >
                            <td className="py-4">
                              <div className="font-medium">Motivo</div>
                              <div className="text-sm text-muted-foreground">
                                {item.motivo}
                              </div>
                            </td>
                            <td className="py-4">
                              <div className="text-sm">{item.responsavel}</div>
                            </td>
                            <td className="py-4">
                              <div className="text-sm">{item.data}</div>
                            </td>
                            <td className="py-4">
                              <div className="text-sm">{item.horario}</div>
                            </td>
                            <td className="py-4">
                              <Badge className={item.statusColor}>
                                {item.status}
                              </Badge>
                            </td>
                            <td className="py-4 text-right">
                              <div className="flex justify-end space-x-2">
                                {item.status !== "Pendente" && (
                                  <Button className="w-fit text-xs">
                                    <Eye />
                                    Ver mais
                                  </Button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Versão para mobile */}
                  <div className="md:hidden w-full space-y-4">
                    {agendamentos.map((item, index) => (
                      <Card
                        key={index}
                        className="w-full overflow-hidden  border border-muted-foreground/20 rounded-xl !shadow-none"
                      >
                        <CardContent className="w-full p-0">
                          <div className="w-full p-4 border-b border-muted-foreground/10">
                            <div className="flex justify-between items-center mb-2">
                              <div className="font-medium">{item.motivo}</div>
                              <Badge className={item.statusColor}>
                                {item.status}
                              </Badge>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <span className="text-gray-500">
                                  Responsável:
                                </span>{" "}
                                {item.responsavel}
                              </div>
                              <div>
                                <span className="text-gray-500">Data:</span>{" "}
                                {item.data}
                              </div>
                              <div>
                                <span className="text-gray-500">Horário:</span>{" "}
                                {item.horario}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end p-2 bg-gray-50">
                            {item.status !== "Pendente" && (
                              <Button className="w-fit text-xs">
                                <Eye />
                                Ver mais
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
