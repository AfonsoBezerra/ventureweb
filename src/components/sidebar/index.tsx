"use client";
import { cn } from "@/lib/utils";
import {
  MessagesSquare,
  Megaphone,
  ChartPie,
  Building2,
  PencilRuler,
  UserRoundPlus,
  ChartSpline,
  Settings,
  CircleUserRound,
  HousePlus,
  ChartNoAxesCombined,
  House,
  Landmark,
  DollarSign,
  Receipt,
  ScrollText,
  Info,
  CalendarDays,
  BookCopy,
  Trophy,
  HeartHandshake,
  BadgePercent,
  MessageSquare,
} from "lucide-react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Logo from "@/assets/img/logo-1.png";
import { SheetContent } from "../ui/sheet";
import Image from "next/image";
import { AvatarUser } from "../header/avatarUser";
import AvatarDemo from "../avatar";
import instagram from "@/assets/img/instagram-new.png";
import youtube from "@/assets/img/youtube-play.png";
import linkedin from "@/assets/img/linkedin.png";
import pinterest from "@/assets/img/pinterest1.webp";

const SidebarLink = ({
  className,
  disabled,
  active,
  ...props
}: LinkProps & {
  className?: string;
  disabled?: boolean;
  active: boolean;
  children: React.ReactNode;
}) => (
  <Link
    {...props}
    className={cn(
      "text-text-secondary relative border-b-transparent px-1.5 transition border-b-[1px] w-full py-2 flex items-center font-normal",
      disabled && "pointer-events-none opacity-50",
      active && "text-white bg-construtora pointer-events-none",
      className
    )}
  />
);

export const Icons = {
  dashboard: House,
  obra: ChartNoAxesCombined,
  chamados: Megaphone,
  indicacao: Trophy,
  financeiro: Receipt,
  chamado: ScrollText,
  agendamento: CalendarDays,
  setting: Settings,
  funcionarios: CircleUserRound,
  infos: BookCopy,
  comunidade: HeartHandshake,
  ofertas: BadgePercent,
  suporte: MessageSquare,
};

export const Sidebar = ({ useSheet = false }: { useSheet?: boolean }) => {
  const Comp = useSheet ? SheetContent : "aside";
  const pathname = usePathname();
  return (
    <Comp
      side="left"
      className="bg-background sticky top-0 max-w-[260px] flex flex-col justify-between w-full h-dvh border-r border-border"
    >
      <section className="w-full h-full flex flex-col">
        <nav className="w-full h-full items-center flex flex-col overflow-auto font-medium text-sm">
          <div className="w-full flex items-center flex-col pb-5">
            <div className="w-full h-[200px]">
              <Image
                alt="empreendimento banner"
                src="https://haiaboavista.com.br/images/img-gallery-15-lg@2x.jpg"
                className="w-full h-full object-cover"
                width="800"
                height="800"
              />
            </div>
            <span className="text-xl font-bold mt-3">Haia Boa Vista</span>
            <span className="text-sm font-light text-foreground/80 mt-1">
              Unidade: 6089 - Torre 2
            </span>
          </div>
          <div className="w-full flex h-full flex-col justify-between pb-5">
            <div className="flex flex-col">
              <SidebarLink
                active={pathname == "/"}
                className="py-4 px-3"
                href={"/"}
              >
                <Icons.dashboard className="size-6 mr-3" /> Dashboard
              </SidebarLink>

              <SidebarLink
                active={pathname.includes("evolucao")}
                className="py-4 px-3"
                href={`/evolucao`}
              >
                <Icons.obra className="size-6 mr-3 " /> Evolução da obra
              </SidebarLink>

              <SidebarLink
                active={pathname.includes("financeiro")}
                className="py-4 px-3"
                href={`/financeiro`}
              >
                <Icons.financeiro className="size-6 mr-3" /> Financeiro
              </SidebarLink>

              <SidebarLink
                active={pathname.includes("chamados")}
                className="py-4 px-3"
                href={`/chamados`}
              >
                <Icons.chamado className="size-6 mr-3" /> Chamados
              </SidebarLink>

              <SidebarLink
                active={pathname.includes("agendamentos")}
                className="py-4 px-3"
                href={`/agendamentos`}
              >
                <Icons.agendamento className="size-6 mr-3" /> Agendamentos
              </SidebarLink>

              <SidebarLink
                active={false}
                className="py-4 px-3"
                href={`/dashboard/empreendimentos`}
              >
                <Icons.infos className="size-6 mr-3" /> Manuais
              </SidebarLink>

              <SidebarLink
                active={false}
                className="py-4 px-3"
                href={`/dashboard/empreendimentos`}
              >
                <Icons.indicacao className="size-6 mr-3" /> Indicação
              </SidebarLink>

              <SidebarLink
                active={false}
                className="py-4 px-3"
                href={`/dashboard/empreendimentos`}
              >
                <Icons.comunidade className="size-6 mr-3" /> Comunidade
              </SidebarLink>

              <SidebarLink
                active={false}
                className="py-4 px-3"
                href={`/dashboard/empreendimentos`}
              >
                <Icons.suporte className="size-6 mr-3" /> Suporte
              </SidebarLink>

              {/* <SidebarLink
                active={false}
                className="py-4 px-3"
                href={`/dashboard/empreendimentos`}
              >
                <Icons.ofertas className="size-6 mr-3" /> Ofertas e novidades
              </SidebarLink> */}
            </div>
            <div className="w-full flex gap-4 px-3 pt-6 justify-evenly border-t border-border">
              <Link
                href={"/"}
                aria-hidden
                className="rounded-full p-1 overflow-hidden bg-construtora"
              >
                <Image
                  src={instagram}
                  alt="instagram"
                  width="200"
                  height="200"
                  className="w-7 h-7 object-cover rounded-full"
                />
              </Link>

              <Link
                href={"/"}
                aria-hidden
                className="rounded-full p-1 overflow-hidden  bg-construtora"
              >
                <Image
                  src={youtube}
                  alt="youtube"
                  width="200"
                  height="200"
                  className="w-7 h-7 object-contain rounded-full"
                />
              </Link>

              <Link
                href={"/"}
                aria-hidden
                className="rounded-full p-1 overflow-hidden  bg-construtora"
              >
                <Image
                  src={linkedin}
                  alt="linkedin"
                  width="200"
                  height="200"
                  className="w-7 h-7 object-contain rounded-full"
                />
              </Link>

              <Link
                href={"/"}
                aria-hidden
                className="rounded-full p-1 overflow-hidden  bg-construtora"
              >
                <Image
                  src={pinterest}
                  alt="pinterest"
                  width="200"
                  height="200"
                  className="w-7 h-7 object-contain rounded-full"
                />
              </Link>
            </div>
          </div>
        </nav>
      </section>
    </Comp>
  );
};
