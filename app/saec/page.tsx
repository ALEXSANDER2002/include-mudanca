import { Construction } from "lucide-react"

export const metadata = {
  title: "SAEC - Em Construção",
  description: "Semana Acadêmica de Engenharia da Computação - Em desenvolvimento.",
}

export default function SaecPage() {
  return (
    <div className="container px-4 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-md opacity-70 animate-pulse"></div>
            <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-blue-950 border border-blue-500/50">
              <Construction className="h-10 w-10 text-blue-400" />
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
          SAEC
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Semana Acadêmica de Engenharia da Computação
        </p>
        <div className="relative overflow-hidden rounded-lg border border-blue-500/30 bg-blue-500/5 p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse"></div>
          <p className="relative text-lg text-muted-foreground">
            Em breve você terá acesso a todas as informações sobre a SAEC 2025! Estamos preparando uma semana incrível
            com palestras, workshops, competições e muito networking. A Semana Acadêmica é o maior evento do curso
            de Engenharia da Computação, reunindo estudantes, professores e profissionais da área para compartilhar
            conhecimento e experiências.
          </p>
          <div className="mt-6 space-y-4">
            <h2 className="text-lg font-semibold text-blue-400">O que esperar:</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-left">
              <li>Palestras com profissionais renomados da área</li>
              <li>Workshops práticos de tecnologias emergentes</li>
              <li>Competições de programação e hackathons</li>
              <li>Networking com empresas e profissionais</li>
              <li>Apresentações de projetos acadêmicos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 