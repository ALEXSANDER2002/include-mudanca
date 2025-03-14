import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Sobre Nós",
  description: "Conheça a chapa #Include <Mudança>.",
}

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 lg:py-24">
      <div className="mx-auto max-w-3xl space-y-8 md:space-y-12">
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossa Chapa</h1>
          <p className="text-sm md:text-base lg:text-xl text-muted-foreground">
            Conheça a chapa #Include &lt;Mudança&gt; e nossa visão para o futuro.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=800&text=Include+Mudança+Chapa"
              alt="Chapa #Include <Mudança>"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Chapa #Include &lt;Mudança&gt;</h2>
            <p className="text-muted-foreground">
              A chapa #Include &lt;Mudança&gt; representa uma visão coletiva para o futuro do Centro Acadêmico de
              Engenharia de Computação. Nosso nome, que combina a diretiva include do C++ com a palavra "mudança",
              reflete nosso compromisso com a inclusividade e a transformação na educação em engenharia de computação.
            </p>
            <p className="text-muted-foreground">
              Acreditamos que a educação em engenharia de computação deve ser acessível a todos, independentemente de
              origem ou experiência prévia. Estamos comprometidos em criar uma comunidade diversa e inclusiva onde todos
              se sintam bem-vindos e valorizados. Também acreditamos no poder da tecnologia para impulsionar mudanças
              positivas na sociedade, e incentivamos nossos membros a usar suas habilidades e conhecimentos para
              enfrentar desafios do mundo real.
            </p>
            <p className="text-muted-foreground">
              Nossa chapa é composta por estudantes dedicados que são apaixonados por engenharia de computação e
              comprometidos em servir à comunidade estudantil. Trazemos perspectivas, experiências e habilidades
              diversas para a mesa, unidos por nossa visão compartilhada de um centro acadêmico mais inclusivo e
              inovador.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">Nossa Equipe</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alexsander",
                  role: "Presidente",
                  image: "/placeholder.svg?height=200&width=200&text=Alexsander",
                },
                { name: "Kalleb", role: "Vice", image: "/placeholder.svg?height=200&width=200&text=Kalleb" },
                { name: "Murilo", role: "Tesoureiro", image: "/placeholder.svg?height=200&width=200&text=Murilo" },
                { name: "Carlos", role: "Comunicação", image: "/placeholder.svg?height=200&width=200&text=Carlos" },
                { name: "Gustavo", role: "Marketing", image: "/placeholder.svg?height=200&width=200&text=Gustavo" },
                { name: "Lívia", role: "Marketing", image: "/placeholder.svg?height=200&width=200&text=Livia" },
                {
                  name: "Ane Saraiva",
                  role: "Eventos e Cultura",
                  image: "/placeholder.svg?height=200&width=200&text=Ane",
                },
                {
                  name: "Yasmim",
                  role: "Eventos e Cultura",
                  image: "/placeholder.svg?height=200&width=200&text=Yasmim",
                },
                { name: "Lincoln", role: "Projetos", image: "/placeholder.svg?height=200&width=200&text=Lincoln" },
                { name: "Gabriel", role: "Projetos", image: "/placeholder.svg?height=200&width=200&text=Gabriel" },
                {
                  name: "Helton",
                  role: "Secretário Geral",
                  image: "/placeholder.svg?height=200&width=200&text=Helton",
                },
                { name: "Elson", role: "Diretor Acadêmico", image: "/placeholder.svg?height=200&width=200&text=Elson" },
              ].map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <div className="relative aspect-square">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardHeader className="p-3 md:p-4">
                    <CardTitle className="text-base md:text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

