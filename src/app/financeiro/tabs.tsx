import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import React from "react"

export function TabsDemo({atual, proximo}: {atual: React.ReactNode, proximo: React.ReactNode}) {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="w-fit p-2 flex gap-4">
        <TabsTrigger value="account">Pagamentos</TabsTrigger>
        <TabsTrigger value="password">Próximos Pagamentos</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Pagamentos</CardTitle>
            <CardDescription>
              Visualize os seus pagamentos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {atual}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Próximos pagamentos</CardTitle>
            <CardDescription>
              Visualize seus próximos pagamentos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {proximo}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
