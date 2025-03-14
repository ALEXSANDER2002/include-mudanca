"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Mensagem Enviada",
      description: "Obrigado pela sua mensagem. Entraremos em contato em breve!",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-8 md:space-y-12">
        <div className="space-y-3 md:space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contato</h1>
          <p className="mx-auto max-w-[700px] text-sm md:text-base lg:text-xl text-muted-foreground">
            Tem perguntas ou quer se envolver? Entre em contato com o Centro Acadêmico de Engenharia de Computação.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Mail className="h-8 w-8 text-primary" />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                <a href="mailto:contato@includemudanca.edu" className="hover:text-primary">
                  contato@includemudanca.edu
                </a>
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Phone className="h-8 w-8 text-primary" />
              <CardTitle>Telefone</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                <a href="tel:+551234567890" className="hover:text-primary">
                  +55 (12) 3456-7890
                </a>
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <MapPin className="h-8 w-8 text-primary" />
              <CardTitle>Localização</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Prédio de Engenharia de Computação, Sala 101
                <br />
                Campus Universitário, 12345-678
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="mx-auto max-w-3xl">
          <CardHeader className="px-4 py-4 md:px-6 md:py-6">
            <CardTitle className="text-xl md:text-2xl">Envie-nos uma mensagem</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Preencha o formulário abaixo e entraremos em contato o mais breve possível.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 pb-4 md:px-6 md:pb-6">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Seu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Assunto da sua mensagem"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

