"use client"

import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

interface EventRegistrationModalProps {
  isOpen: boolean
  onClose: () => void
  eventTitle: string
  eventDate: string
}

export function EventRegistrationModal({
  isOpen,
  onClose,
  eventTitle,
  eventDate,
}: EventRegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    registration: "",
    phone: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Aqui você implementaria a chamada real para sua API
      // await api.post("/event-registration", formData)
      
      toast.success("Inscrição realizada com sucesso!")
      onClose()
      setFormData({ name: "", email: "", registration: "", phone: "" })
    } catch (error) {
      toast.error("Erro ao realizar inscrição. Tente novamente.")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-blue-950/50 backdrop-blur-sm border-blue-500/20">
        <DialogHeader>
          <DialogTitle>Inscrição para {eventTitle}</DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para se inscrever no evento que acontecerá em {eventDate}.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-blue-950/50 border-blue-500/20"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail institucional</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-blue-950/50 border-blue-500/20"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="registration">Matrícula</Label>
              <Input
                id="registration"
                value={formData.registration}
                onChange={(e) => setFormData({ ...formData, registration: e.target.value })}
                className="bg-blue-950/50 border-blue-500/20"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-blue-950/50 border-blue-500/20"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10"
            >
              Cancelar
            </Button>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              Confirmar Inscrição
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
} 