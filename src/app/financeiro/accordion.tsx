import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

  
  export function AccordionPayment() {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-full p-5 bg-card mt-2 flex justify-between items-end">
                <h1 className="text-lg ">
                    Jan/2025
                </h1>
                <Badge variant="outline" className="">Aguardando Pag</Badge>
                <div className="font-medium  text-xl">R$  <span className="font-extrabold text-2xl">870,00</span></div>
                <Button>Emitir boleto</Button>
            </div>
            <Separator />
            <div className="w-full p-5 bg-card flex justify-between items-end">
                <h1 className="text-lg text-red-500">
                    Dez/2024
                </h1>
                <Badge variant="outline" className="text-red-500 border-red-500">Em Atraso</Badge>
                <div className="font-medium text-red-500 text-xl">R$  <span className="font-extrabold text-2xl">870,00</span></div>
                <Button>Emitir 2ª boleto</Button>
            </div>
            <Separator />
            <div className="w-full p-5 bg-card flex justify-between items-end">
                <h1 className="text-lg text-green-500">
                    Nov/2024
                </h1>
                <Badge variant="outline" className="text-green-500 border-green-500">Pago</Badge>
                <div className="font-medium text-green-500 text-xl">R$  <span className="font-extrabold text-2xl">870,00</span></div>
                <Button>Comprovante</Button>
            </div>
            <Separator />
            <div className="w-full p-5 bg-card flex justify-between items-end">
                <h1 className="text-lg text-green-500">
                    Out/2024
                </h1>
                <Badge variant="outline" className="text-green-500 border-green-500">Pago</Badge>
                <div className="font-medium text-green-500 text-xl">R$  <span className="font-extrabold text-2xl">870,00</span></div>
                <Button>Comprovante</Button>
            </div>
            <Separator />
            <div className="w-full p-5 bg-card flex justify-between items-end">
                <h1 className="text-lg text-green-500">
                    Set/2024
                </h1>
                <Badge variant="outline" className="text-green-500 border-green-500">Pago</Badge>
                <div className="font-medium text-green-500 text-xl">R$  <span className="font-extrabold text-2xl">870,00</span></div>
                <Button>Comprovante</Button>
            </div>
            <Separator />
            <div className="w-full p-5 bg-card flex justify-between items-end">
                <h1 className="text-lg text-green-500">
                    Ago/2024
                </h1>
                <Badge variant="outline" className="text-green-500 border-green-500">Pago</Badge>
                <div className="font-medium text-green-500 text-xl">R$  <span className="font-extrabold text-2xl">870,00</span></div>
                <Button>Comprovante</Button>
            </div>
        </div>
    )
  }

  export function AccordionPaymentProx() {
    return (
        <div className="flex flex-col gap-2">
        <div className="w-full p-5 bg-card mt-2 flex justify-between items-end">
            <h1 className="text-lg ">
                Abr/2025
            </h1>
            <Badge variant="outline" className="">Aguardando Pag</Badge>
            <div className="font-medium  text-xl">R$  <span className="font-extrabold text-2xl">870,00</span></div>
            <Button>Emitir boleto</Button>
        </div>
        <Separator />
        <div className="w-full p-5 bg-card mt-2 flex justify-between items-end">
            <h1 className="text-lg ">
                Mar/2025
            </h1>
            <Badge variant="outline" className="">Aguardando Pag</Badge>
            <div className="font-medium  text-xl">R$  <span className="font-extrabold text-2xl">870,00</span></div>
            <Button>Emitir boleto</Button>
        </div>
        <Separator />
        <div className="w-full p-5 bg-card mt-2 flex justify-between items-end">
            <h1 className="text-lg ">
                Fev/2025
            </h1>
            <Badge variant="outline" className="">Aguardando Pag</Badge>
            <div className="font-medium  text-xl">R$  <span className="font-extrabold text-2xl">870,00</span></div>
            <Button>Emitir boleto</Button>
        </div>
    </div>
    )
  }

  