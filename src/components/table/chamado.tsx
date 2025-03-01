import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

const chamados = [
  {
    codigo: "0001",
    status: "Aberto",
    status_code: "0",
    created: "11/08/2024",
    title: "Infiltração banheiro",
  },
  {
    codigo: "0005",
    status: "Aguardando",
    status_code: "2",
    created: "09/06/2024",
    title: "Pedra quebrada",
  },
  {
    codigo: "0003",
    status: "Visita agendada",
    status_code: "3",
    created: "23/05/2024",
    title: "Cano entupido",
  },
  {
    codigo: "0002",
    status: "Resolvido",
    status_code: "1",
    created: "05/02/2024",
    title: "Caida de água",
  },
];

export function ChamadosTable() {

  function setColorBadge(code: string) {
    const colorsCode = {
        "0" : "bg-yellow-500",
        "1" : "bg-green-500",
        "2" : "bg-blue-500",
        "3" : "bg-foreground"
    }

    return colorsCode[code as "0"]
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Código</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Motivo</TableHead>
          <TableHead className="text-right">Data criação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {chamados.map((chamado) => (
          <TableRow key={chamado.codigo}>
            <TableCell className="font-medium">{chamado.codigo}</TableCell>
            <TableCell>
                <Badge variant="outline" className="flex gap-2 items-center w-fit"> <span className={cn("w-2 h-2 rounded-full", setColorBadge(chamado.status_code))}></span>{chamado.status}</Badge>
            </TableCell>
            <TableCell>{chamado.title}</TableCell>
            <TableCell className="text-right">{chamado.created}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
