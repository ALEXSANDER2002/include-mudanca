"use client"

import type React from "react"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export function SuggestionForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        course: "eng_comp",
        semester: "",
        suggestion: "",
        type: "suggestion",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const formRef = useRef<HTMLFormElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormState((prev) => ({
            ...prev,
            [name]: value,
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

        emailjs
            .sendForm(
                "service_xd36mfj",
                "template_st5zwva",
                formRef.current!,
                "BBe6AgOB4bqrcGmzT"
            )
            .then(() => {
                setIsSubmitting(false)
                setIsSubmitted(true)
            })
            .catch((error) => {
                console.error("Erro ao enviar e-mail:", error)
                alert("Falha ao enviar a contribuição. Tente novamente.")
                setIsSubmitting(false)
            })
    }

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center justify-center py-6 space-y-4 text-center">
                <div className="rounded-full bg-blue-500/20 p-3">
                    <CheckCircle className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-medium">Sugestão Enviada!</h3>
                <p className="text-muted-foreground">
                    Obrigado por compartilhar sua opinião. Sua contribuição é muito importante para melhorarmos o Centro Acadêmico.
                </p>
            </div>
        )
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="course">Curso</Label>
                    <Select value="eng_comp" disabled>
                        <SelectTrigger id="course">
                            <SelectValue placeholder="Engenharia de Computação" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="eng_comp">Engenharia de Computação</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="semester">Semestre</Label>
                    <Select
                        value={formState.semester}
                        onValueChange={(value) => handleSelectChange("semester", value)}
                    >
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

            <div className="space-y-2">
                <Label htmlFor="type">Tipo de Contribuição</Label>
                <Select
                    value={formState.type}
                    onValueChange={(value) => handleSelectChange("type", value)}
                >
                    <SelectTrigger id="type">
                        <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="suggestion">Sugestão</SelectItem>
                        <SelectItem value="complaint">Reclamação</SelectItem>
                        <SelectItem value="idea">Ideia de Projeto</SelectItem>
                        <SelectItem value="feedback">Feedback Geral</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="suggestion">Sua Contribuição</Label>
                <Textarea
                    id="suggestion"
                    name="suggestion"
                    placeholder="Compartilhe sua sugestão, reclamação ou ideia para o Centro Acadêmico..."
                    rows={5}
                    value={formState.suggestion}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Campos ocultos para capturar semester e type */}
            <input type="hidden" name="semester" value={formState.semester} />
            <input type="hidden" name="type" value={formState.type} />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Contribuição"}
            </Button>
        </form>
    )
}