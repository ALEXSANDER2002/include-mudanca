"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ChevronRight,
  Code,
  Cpu,
  Users,
  BookOpen,
  Calendar,
  Lightbulb,
  CheckCircle,
  Vote,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroParticles } from "@/components/hero-particles"
import { GlowingButton } from "@/components/glowing-button"
import { CircuitBackground } from "@/components/circuit-background"
import { PropostaCard } from "@/components/proposta-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeamMember } from "@/components/team-member"
import { SuggestionForm } from "@/components/suggestion-form"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background/90 to-background border-b border-border/40 min-h-[90vh] sm:min-h-0">
        <div className="absolute inset-0 z-0">
          <HeroParticles />
        </div>
        <div className="container relative z-10 px-4 py-16 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                Eleições 2025 - Centro Acadêmico de Engenharia de Computação
              </div>
              <h1 className="text-3xl font-bold tracking-tighter md:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                  #INCLUDE
                </span>{" "}
                <br className="hidden sm:inline" />
                &lt;MUDANÇA&gt;
              </h1>
              <p className="max-w-[600px] text-base text-muted-foreground md:text-xl">
                Transformando a educação através da inovação, inclusão e colaboração. Junte-se a nós para moldar o
                futuro da engenharia de computação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <GlowingButton asChild className="relative overflow-hidden group animate-pulse hover:animate-none">
                  <Link href="#vote" className="flex items-center justify-center px-6 py-3">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center">
                      <Vote className="mr-2 h-5 w-5" />
                      <span className="font-bold">VOTE AGORA</span>
                      <span className="ml-1 text-blue-300">• Seu voto faz a diferença!</span>
                    </span>
                  </Link>
                </GlowingButton>
                <Button variant="outline" className="border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10">
                  <Link href="/about">Nossas Propostas</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto lg:ml-auto"
            >
              <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px] rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/faz o M (6).png"
                        alt="Centro Acadêmico de Engenharia de Computação"
                        width={400}
                        height={400}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full p-3">
                      <Cpu className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full p-3">
                      <Users className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full p-3">
                      <Code className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full p-3">
                      <BookOpen className="h-6 w-6 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre a Chapa */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-orange-900/20 opacity-30"></div>
        
        {/* Partículas decorativas */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-blue-500/20 blur-xl"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-[800px] text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Quem Somos
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Conheça a chapa #INCLUDE &lt;MUDANÇA&gt; e nossa visão para o Centro Acadêmico
            </p>
          </motion.div>

          <div className="relative mx-auto max-w-[1100px] mb-16">
            {/* Background decorativo */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-orange-500/10 rounded-3xl backdrop-blur-sm border border-blue-500/20"></div>

            {/* Grid de membros da equipe */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 lg:gap-12 p-4 md:p-8">
              {/* Primeira linha - Presidente e Vice */}
              <div className="col-span-2 md:col-span-4 flex justify-center gap-4 md:gap-8 lg:gap-16 mb-4 md:mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TeamMember
                    name="Alexsander"
                    role="Presidente"
                    image="/alex.jpeg"
                    delay={0.1}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TeamMember
                    name="Kalleb"
                    role="Vice"
                    image="/kaleb.jpeg"
                    delay={0.2}
                  />
                </motion.div>
              </div>

              {/* Segunda linha - 4 membros */}
              {[
                { name: "Murilo", role: "Tesoureiro", image: "/murilo.jpeg", delay: 0.3 },
                { name: "Carlos", role: "Comunicação", image: "/carlosss.jpg", delay: 0.4 },
                { name: "Gustavo", role: "Marketing", image: "/gustacvo.jpeg", delay: 0.5 },
                { name: "Lívia", role: "Marketing", image: "/livia.jpeg", delay: 0.6 }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TeamMember
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    delay={member.delay}
                  />
                </motion.div>
              ))}

              {/* Terceira linha - 4 membros */}
              {[
                { name: "Ane Saraiva", role: "Eventos e Cultura", image: "/ane.jpeg", delay: 0.7 },
                { name: "Yasmim", role: "Eventos e Cultura", image: "/yasmin.jpeg", delay: 0.8 },
                { name: "Lincoln", role: "Projetos", image: "/lincum.jpeg", delay: 0.9 },
                { name: "Gabriel", role: "Projetos", image: "/martins.jpeg", delay: 1.0 }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TeamMember
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    delay={member.delay}
                  />
                </motion.div>
              ))}

              {/* Quarta linha - 2 membros centralizados */}
              <div className="col-span-2 md:col-span-4 flex justify-center gap-4 md:gap-8 lg:gap-16 mt-4 md:mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TeamMember
                    name="Helton"
                    role="Secretário Geral"
                    image="/elton.jpeg"
                    delay={1.1}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TeamMember
                    name="Elson"
                    role="Diretor Acadêmico"
                    image="/elson.jpeg"
                    delay={1.2}
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto max-w-[800px] text-center"
          >
            <div className="relative overflow-hidden bg-blue-950/40 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-blue-500/30 shadow-[0_0_15px_rgba(0,119,255,0.15)]">
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-orange-500/20 to-red-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              {/* Ícone decorativo */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-md opacity-70 animate-pulse"></div>
                  <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-blue-950 border border-blue-500/50">
                    <Code className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 mb-4">
                Nossa Missão
              </h3>
              
              <div className="relative z-10 space-y-4">
                <p className="text-muted-foreground md:text-lg leading-relaxed">
                  A chapa <span className="text-blue-400 font-semibold">#INCLUDE</span> <span className="text-cyan-400 font-semibold">&lt;MUDANÇA&gt;</span> representa uma visão coletiva para o futuro do Centro Acadêmico de
                  Engenharia de Computação. Nosso nome, que combina a diretiva include do C++ com a palavra "mudança",
                  reflete nosso compromisso com a inclusividade e a transformação na educação em engenharia de computação.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center mt-6 md:mt-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <GlowingButton asChild className="relative group overflow-hidden">
                      <Link href="/about" className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4">
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-cyan-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative flex items-center gap-2 font-bold text-base md:text-lg">
                          Conheça Nossa Equipe
                          <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </GlowingButton>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button 
                      variant="outline" 
                      asChild
                      className="border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg"
                    >
                      <Link href="#propostas" className="flex items-center gap-2">
                        <span>Nossas Propostas</span>
                        <ChevronRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Adicionar keyframes para animação de flutuação */}
        <style jsx global>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
      </section>

      {/* Propostas Section */}
      <section id="propostas" className="relative py-16 md:py-24 bg-gradient-to-b from-background to-blue-950/20">
        <div className="absolute inset-0 z-0 opacity-20">
          <CircuitBackground />
        </div>
        <div className="container relative z-10 px-4">
          <div className="mx-auto max-w-[800px] text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossas Propostas</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Conheça os planos e iniciativas que queremos implementar para melhorar a experiência acadêmica
              </p>
            </motion.div>
          </div>

          <Tabs defaultValue="academico" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="grid w-full max-w-[600px] grid-cols-3 h-auto">
                <TabsTrigger value="academico" className="py-2 px-2 text-sm">
                  Acadêmico
                </TabsTrigger>
                <TabsTrigger value="infraestrutura" className="py-2 px-2 text-sm">
                  Infraestrutura
                </TabsTrigger>
                <TabsTrigger value="comunidade" className="py-2 px-2 text-sm">
                  Comunidade
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="academico" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <PropostaCard
                  icon={<BookOpen className="h-10 w-10 text-blue-500" />}
                  title="Acompanhamento Curricular"
                  description="Estabelecer canal para sugestões de melhorias na grade curricular e metodologias de ensino."
                  delay={0.1}
                />
                <PropostaCard
                  icon={<Calendar className="h-10 w-10 text-blue-500" />}
                  title="Club de Programação"
                  description="Clube responsável por oficinas de tecnologias emergentes no mercado, além de palestras, workshops e hackathons com profissionais da indústria e academia."
                  delay={0.2}
                />
                <PropostaCard
                  icon={<Lightbulb className="h-10 w-10 text-blue-500" />}
                  title="Programa de Mentoria"
                  description="Implementar sistema de monitoria entre alunos veteranos e calouros para disciplinas com altos índices de reprovação (Cálculo, Física, Programação)"
                  delay={0.3}
                />
              </div>
            </TabsContent>

            <TabsContent value="infraestrutura" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <PropostaCard
                  icon={<Cpu className="h-10 w-10 text-blue-500" />}
                  title="Melhoria dos Laboratórios"
                  description="Trabalhar junto à coordenação para atualização dos equipamentos dos laboratórios."
                  delay={0.1}
                />
                <PropostaCard
                  icon={<Code className="h-10 w-10 text-blue-500" />}
                  title="Espaço de Convivência"
                  description="Implementar uma área dedicada para descanso e interação entre os estudantes, um espaço colaborativo que sirva também para o desenvolvimento de projetos e estudos em grupo."
                  delay={0.2}
                />
                <PropostaCard
                  icon={<CheckCircle className="h-10 w-10 text-blue-500" />}
                  title="Biblioteca Técnica"
                  description="Ampliar o acervo de livros técnicos e disponibilizar recursos digitais para estudantes com materiais extracurriculares."
                  delay={0.3}
                />
              </div>
            </TabsContent>

            <TabsContent value="comunidade" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <PropostaCard
                  icon={<Users className="h-10 w-10 text-blue-500" />}
                  title="Competições Técnicas"
                  description="Organizar olimpíadas de programação, maratonas de código e desafios técnicos."
                  delay={0.1}
                />
                <PropostaCard
                  icon={<Calendar className="h-10 w-10 text-blue-500" />}
                  title="Eventos de Integração"
                  description="Promover eventos sociais e culturais para fortalecer os laços entre estudantes e professores (games, esportes, confraternizações)."
                  delay={0.2}
                />
                <PropostaCard
                  icon={<Lightbulb className="h-10 w-10 text-blue-500" />}
                  title="Caravanas"
                  description="Fomentar a submissão de artigos para congressos como o CSBC e o SBRT, além de organizar caravanas para esses eventos, contribui para a disseminação do conhecimento e o fortalecimento da integração entre estudantes, pesquisadores e profissionais."
                  delay={0.3}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Eventos Planejados */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-[800px] text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Eventos Planejados</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Confira os eventos que pretendemos realizar durante nossa gestão
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Participação no CSBC 2025",
                date: "Julho 2025",
                description:
                  "Organização de uma delegação para participar do Congresso da Sociedade Brasileira de Computação, o maior evento acadêmico de computação do Brasil.",
                highlights: [
                  "Apresentação de artigos científicos",
                  "Networking com pesquisadores",
                  "Participação em workshops e minicursos",
                ],
                image: "/csbcjpg.jpg",
              },
              {
                title: " Workshop",
                date: "Maio 2025",
                description:
                  "Workshop de  Computação, com palestras, minicursos e apresentações de projetos desenvolvidos pelos alunos.",
                highlights: [
                  "Palestras com profissionais do Mercado de Trabalho",
                  "Apresentação de projetos de pesquisa",
                  "Competições de programação",
                ],
                image: "/Planejar-um-workshop.jpg",
              },
              {
                title: "Hackathon de Inovação",
                date: "Primeiro Semestre 2025",
                description:
                  "Competição de 8 horas para desenvolver soluções tecnológicas para problemas reais da universidade e comunidade.",
                highlights: [
                  "Prêmios para as melhores soluções",
                  "Mentoria de profissionais",
                  "Oportunidades de estágio",
                ],
                image: "/Hackathon.png",
              },
              {
                title: "Semana de Engenharia de Computação",
                date: "Segundo Semestre 2025",
                description:
                  "Uma semana inteira dedicada à engenharia de computação com palestras, workshops e atividades práticas.",
                highlights: ["Palestrantes renomados", "Workshops técnicos", "Feira de recrutamento"],
                image: "/slides (2).png",
              },
              {
                title: "Maratona de Programação",
                date: "Trimestral",
                description:
                  "Competições de programação para desenvolver habilidades de resolução de problemas e trabalho em equipe.",
                highlights: ["Diferentes níveis de dificuldade", "Preparação para competições nacionais", "Premiações"],
                image: "/maratona.jpeg",
              },
              {
                title: "Projeto de Extensão Tecnológica",
                date: "Contínuo",
                description:
                  "Projeto para levar conhecimento de tecnologia para escolas públicas e comunidades carentes.",
                highlights: ["Inclusão digital", "Ensino de programação", "Impacto social"],
                image: "/extensao.jpeg",
              },
            ].map((evento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 transition-colors overflow-hidden">
                  {evento.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={evento.image || "/extensao.jpeg"}
                        alt={evento.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-blue-400 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{evento.date}</span>
                    </div>
                    <CardTitle className="text-xl">{evento.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{evento.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-blue-400">Destaques:</p>
                      <ul className="space-y-1">
                        {evento.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-blue-500 mt-0.5">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sugestões e Reclamações Section */}
      <section id="sugestoes" className="relative py-16 md:py-24 bg-gradient-to-b from-background to-blue-950/20">
        <div className="absolute inset-0 z-0 opacity-20">
          <CircuitBackground />
        </div>
        <div className="container relative z-10 px-4">
          <div className="mx-auto max-w-[800px] text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sugestões </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Compartilhe suas ideias, sugestões ou reclamações para ajudar a melhorar nosso Centro Acadêmico
              </p>
            </motion.div>
          </div>

          <div className="mx-auto max-w-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-blue-500/20 bg-blue-950/10 backdrop-blur-sm">
                <CardHeader className="px-4 md:px-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30">
                      <MessageSquare className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Sua Opinião Importa</h3>
                      <p className="text-muted-foreground">Ajude-nos a construir um Centro Acadêmico melhor</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-4 pb-6 md:px-6 md:pb-8">
                  <SuggestionForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Voting Section */}
      <section id="vote" className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-b from-background to-blue-950/20">
        <div className="absolute inset-0 z-0 opacity-30">
          <CircuitBackground />
        </div>
        <div className="container relative z-10 px-4">
          <div className="mx-auto max-w-[800px] text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vote em Nossa Chapa</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Seu apoio é fundamental para transformarmos o Centro Acadêmico de Engenharia de Computação
              </p>
            </motion.div>
          </div>

          <div className="mx-auto max-w-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-blue-500/20 bg-blue-950/10 backdrop-blur-sm">
                <CardHeader className="px-4 md:px-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30">
                      <Vote className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Eleições 2025</h3>
                      <p className="text-muted-foreground">17 de Março de 2025</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl">Informações sobre a Votação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6 px-4 md:px-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium">Como votar:</h4>
                    <ol className="space-y-2 pl-5 list-decimal text-muted-foreground">
                      <li>Acesse o portal de votação com seu login institucional</li>
                      <li>Selecione a chapa "#INCLUDE &lt;MUDANÇA&gt;"</li>
                      <li>Confirme seu voto com sua senha</li>
                      <li>Pronto! Seu voto foi registrado com segurança</li>
                    </ol>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-medium">Quem pode votar:</h4>
                    <p className="text-muted-foreground">
                      Todos os estudantes regularmente matriculados no curso de Engenharia de Computação.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-medium">Horário de votação:</h4>
                    <p className="text-muted-foreground">Das 8h às 20h no dia 17 de março de 2025.</p>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <GlowingButton asChild size="lg">
                      <Link href="https://votacao.universidade.edu" target="_blank">
                        Acessar Portal de Votação
                      </Link>
                    </GlowingButton>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&text=Circuit+Pattern')] bg-center opacity-10"></div>
        <div className="container relative px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Junte-se ao Movimento</h2>
              <p className="text-muted-foreground md:text-xl">
                Faça parte da chapa #INCLUDE &lt;MUDANÇA&gt; e ajude a transformar nossa universidade
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <GlowingButton size="lg" asChild>
                  <Link href="#vote">Vote Agora</Link>
                </GlowingButton>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10"
                  asChild
                >
                  <Link href="/contact">Entre em Contato</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

