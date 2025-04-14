import { Construction } from "lucide-react"

export const metadata = {
  title: "Avaliação de Professores - Em Construção",
  description: "Sistema de Avaliação de Professores - Em desenvolvimento.",
}

export default function AvaliacaoPage() {
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
          Avaliação de Professores
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Sistema de Feedback e Avaliação Docente
        </p>
        <div className="relative overflow-hidden rounded-lg border border-blue-500/30 bg-blue-500/5 p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse"></div>
          <p className="relative text-lg text-muted-foreground">
            Esta página está em desenvolvimento. Em breve você terá acesso ao sistema de avaliação de professores,
            onde poderá compartilhar seu feedback sobre as disciplinas e contribuir para a melhoria contínua do
            ensino em nossa universidade.
          </p>
        </div>
      </div>
    </div>
  )
} 