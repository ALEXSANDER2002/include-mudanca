"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function VotingForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    studentId: "",
    course: "",
    semester: "",
    agreeToUpdates: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-6 space-y-4 text-center">
        <div className="rounded-full bg-blue-500/20 p-3">
          <CheckCircle className="h-8 w-8 text-blue-500" />
        </div>
        <h3 className="text-xl font-medium">Apoio Registrado!</h3>
        <p className="text-muted-foreground">
          Obrigado por apoiar a chapa #INCLUDE &lt;MUDANÇA&gt;. Enviaremos atualizações sobre nossa campanha para o seu
          email.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nome Completo</Label>
        <Input
          id="name"
          name="name"
          placeholder="Seu nome completo"
          value={formState.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Institucional</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="seu.email@universidade.edu"
          value={formState.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="studentId">Número de Matrícula</Label>
        <Input
          id="studentId"
          name="studentId"
          placeholder="Ex: 202312345"
          value={formState.studentId}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="course">Curso</Label>
          <Select value={formState.course} onValueChange={(value) => handleSelectChange("course", value)}>
            <SelectTrigger id="course">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eng_comp">Engenharia de Computação</SelectItem>
              <SelectItem value="eng_soft">Engenharia de Software</SelectItem>
              <SelectItem value="ciencia_comp">Ciência da Computação</SelectItem>
              <SelectItem value="sistemas">Sistemas de Informação</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="semester">Semestre</Label>
          <Select value={formState.semester} onValueChange={(value) => handleSelectChange("semester", value)}>
            <SelectTrigger id="semester">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}º Semestre
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center space-x-2 pt-2">
        <Checkbox
          id="agreeToUpdates"
          name="agreeToUpdates"
          checked={formState.agreeToUpdates}
          onCheckedChange={(checked) => setFormState((prev) => ({ ...prev, agreeToUpdates: checked as boolean }))}
          required
        />
        <Label htmlFor="agreeToUpdates" className="text-sm text-muted-foreground">
          Concordo em receber atualizações sobre a campanha da chapa #INCLUDE &lt;MUDANÇA&gt;
        </Label>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Registrando..." : "Registrar Apoio"}
      </Button>
    </form>
  )
}

