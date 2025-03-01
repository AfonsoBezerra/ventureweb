import { Badge } from "@/components/ui/badge";
import { AccordionPayment, AccordionPaymentProx } from "./accordion";
import { Toggle } from "@/components/ui/toggle";
import { TabsDemo } from "./tabs";

export default function Financeiro() {
  return (
    <section className="w-full p-10 m-auto flex flex-col gap-6 min-h-[92vh]">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl">Financeiro</h1>
        <span className="font-light text-sm text-foreground/70">
          Confira seus Débitos e se necessário emita 2 via de boleto
        </span>
      </div>
      <div className="w-full min-h-[300px] bg-card rounded-lg p-10 flex flex-col gap-5 items-center">
          <h2 className="font-extrabold text-3xl uppercase">Saldo Devedor</h2>
          <h1 className="font-extrabold text-5xl uppercase text-red-600">R$ 190.000,00</h1>
          <h3 className="font-medium text-lg">Valor de entrada: <span className="text-2xl font-extrabold text-green-500">R$ 10.00,00</span></h3>
          <span className="font-medium text-sm">Valor da compra: R$ 250.000,00</span>
          <Badge>Entrada parcelada</Badge>
      </div>
      <TabsDemo atual={<AccordionPayment />} proximo={<AccordionPaymentProx />}/>

    </section>
  );
}