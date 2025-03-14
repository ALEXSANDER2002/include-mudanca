import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Projetos",
  description: "Explore os projetos desenvolvidos pelo Centro Acadêmico de Engenharia de Computação.",
}

const projects = [
  {
    id: 1,
    title: "Iniciativa Campus Inteligente",
    description: "Uma rede de dispositivos IoT para monitorar e otimizar o uso de energia em edifícios do campus.",
    image: "/placeholder.svg?height=300&width=600&text=Campus+Inteligente",
    tags: ["IoT", "Eficiência Energética", "Análise de Dados"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "Plataforma de Laboratório Virtual",
    description:
      "Um ambiente virtual para estudantes de engenharia de computação praticarem programação e design de hardware remotamente.",
    image: "/placeholder.svg?height=300&width=600&text=Lab+Virtual",
    tags: ["Educação", "Realidade Virtual", "Computação em Nuvem"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "App de Mentoria Estudantil",
    description:
      "Um aplicativo móvel conectando estudantes iniciantes com mentores seniores para orientação acadêmica e suporte.",
    image: "/placeholder.svg?height=300&width=600&text=App+Mentoria",
    tags: ["Desenvolvimento Mobile", "Educação", "Comunidade"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 4,
    title: "Sistema Automatizado de Matrícula",
    description:
      "Um sistema com inteligência artificial para otimizar o processo de matrícula e agendamento de disciplinas para estudantes.",
    image: "/placeholder.svg?height=300&width=600&text=Sistema+Matrícula",
    tags: ["IA", "Automação", "Educação"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 5,
    title: "App de Navegação no Campus",
    description:
      "Um mapa interativo e sistema de navegação para o campus universitário com recursos de acessibilidade.",
    image: "/placeholder.svg?height=300&width=600&text=Navegação+Campus",
    tags: ["Desenvolvimento Mobile", "Acessibilidade", "Mapas"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 6,
    title: "Recursos Curriculares Open Source",
    description:
      "Uma coleção de materiais de aprendizagem e recursos de código aberto para cursos de engenharia de computação.",
    image: "/placeholder.svg?height=300&width=600&text=Recursos+Open+Source",
    tags: ["Código Aberto", "Educação", "Documentação"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-8 md:space-y-12">
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Projetos</h1>
          <p className="text-sm md:text-base lg:text-xl text-muted-foreground">
            Explore os projetos inovadores desenvolvidos pelo Centro Acadêmico de Engenharia de Computação e pela chapa
            #Include &lt;Mudança&gt;.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden">
              <div className="relative h-40 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader className="px-4 py-4 md:px-6">
                <CardTitle className="text-lg md:text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-1 md:gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow px-4 md:px-6">
                <p className="text-sm md:text-base text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex gap-2 px-4 pb-4 md:px-6 md:pb-6">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

