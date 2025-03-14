"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  delay?: number
}

export function TeamMember({ name, role, image, delay = 0 }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40">
        <div className="rounded-full bg-white overflow-hidden h-full w-full">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
      </div>
      <div className="mt-2 md:mt-4 text-center">
        <h4 className="font-medium text-xs sm:text-sm md:text-base text-white">{name}</h4>
        <p className="text-xs md:text-sm text-gray-400">{role}</p>
      </div>
    </motion.div>
  )
}

