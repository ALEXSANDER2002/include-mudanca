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
      className="flex flex-col items-center group"
    >
      <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative h-full w-full rounded-full p-[3px] bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500">
          <div className="rounded-full bg-blue-950 overflow-hidden h-full w-full p-[2px]">
            <div className="rounded-full overflow-hidden h-full w-full">
              <Image 
                src={image || "/placeholder.svg"} 
                alt={name} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 md:mt-4 text-center">
        <h4 className="font-medium text-xs sm:text-sm md:text-base text-white group-hover:text-blue-300 transition-colors duration-300">{name}</h4>
        <p className="text-xs md:text-sm text-gray-400">{role}</p>
      </div>
    </motion.div>
  )
}

