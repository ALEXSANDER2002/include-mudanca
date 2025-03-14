import Link from "next/link"
import { Github, Instagram, Linkedin, Twitter, Code } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-blue-500/20 bg-background/80 backdrop-blur-lg">
      <div className="container grid grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:py-12">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-blue-500" />
            <span className="inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              #INCLUDE &lt;MUDANÇA&gt;
            </span>
          </Link>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Transformando a educação através da inovação, inclusão e colaboração. Junte-se a nós para moldar o futuro da
            engenharia de computação.
          </p>
          <div className="flex gap-3 md:gap-4">
           
            <Link
              href="https://www.instagram.com/caenc.unifesspa/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 text-muted-foreground hover:bg-blue-500/10 hover:text-blue-500"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
           
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-medium">Navegação</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-blue-500">
                Início
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-blue-500">
                Sobre Nós
              </Link>
            </li>
            
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-blue-500">
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-medium">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">📧</span>
              <a href="mailto:caencunifesspa@gmail.com" className="text-muted-foreground hover:text-blue-500">
              caencunifesspa@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">📱</span>
              <a href="tel:+551234567890" className="text-muted-foreground hover:text-blue-500">
                +55 (94) 9276-0247
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">📍</span>
              <span className="text-muted-foreground">
                Bloco 5
                <br />
                Campus II, 68505-080
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container border-t border-blue-500/20 py-4 md:py-6">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row md:gap-4">
          <p className="text-center text-xs md:text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Centro Acadêmico de Engenharia de Computação. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
            <Link href="#" className="hover:text-blue-500">
              Privacidade
            </Link>
            <Link href="#" className="hover:text-blue-500">
              Termos
            </Link>
            <Link href="#" className="hover:text-blue-500">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}