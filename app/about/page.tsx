import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Sobre Nós",
  description: "Conheça a chapa #Include <Mudança>.",
}

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-8 md:space-y-12">
        <div className="space-y-3 md:space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Nossa Chapa</h1>
          <p className="text-sm md:text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça a chapa #Include &lt;Mudança&gt; e nossa visão para o futuro.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=800&text=Include+Mudança+Chapa"
              alt="Chapa #Include <Mudança>"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4 bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">#Include &lt;Mudança&gt;</h2>
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
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Nossa Equipe</h3>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  name: "Alexsander",
                  role: "Presidente",
                  image: "/alex.jpeg",
                },
                { name: "Kalleb", role: "Vice", image: "/kaleb.jpeg" },
                { name: "Murilo", role: "Tesoureiro", image: "/murilo.jpeg" },
                { name: "Carlos", role: "Comunicação", image: "/carlosss.jpg" },
                { name: "Gustavo", role: "Marketing", image: "/gustacvo.jpeg" },
                { name: "Lívia", role: "Marketing", image: "/livia.jpeg" },
                {
                  name: "Ane Saraiva",
                  role: "Eventos e Cultura",
                  image: "/ane.jpeg",
                },
                {
                  name: "Yasmim",
                  role: "Eventos e Cultura",
                  image: "/yasmin.jpeg",
                },
                { name: "Lincoln", role: "Projetos", image: "/lincum.jpeg" },
                { name: "Gabriel", role: "Projetos", image: "/martins.jpeg" },
                {
                  name: "Helton",
                  role: "Secretário Geral",
                  image: "/elton.jpeg",
                },
                { name: "Elson", role: "Diretor Acadêmico", image: "/elson.jpeg" },
              ].map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <div className="relative aspect-square rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <CardHeader className="p-3 md:p-4 text-center">
                    <CardTitle className="text-base md:text-lg bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">{member.name}</CardTitle>
                    <CardDescription className="font-medium">{member.role}</CardDescription>
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

