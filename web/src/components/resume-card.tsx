"use client"

import { motion } from "framer-motion"
import { ChevronRightIcon } from "lucide-react"
import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ResumeCardProps {
  logoUrl: string
  altText: string
  title: string
  subtitle?: string
  href?: string
  badges?: readonly string[]
  period: string
  description?: string
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <a
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="ml-[-15px] mr-[-25px] pl-4 pt-6">
          <Avatar
            className="bg-muted-background m-auto size-12 border
              dark:bg-foreground"
          >
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="group ml-4 flex-grow flex-col items-center">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3
                className="inline-flex items-center justify-center text-xs
                  font-semibold leading-none sm:text-sm"
              >
                {title}
                <ChevronRightIcon
                  className={cn(
                    `size-4 translate-x-0 transform opacity-0 transition-all
                    duration-300 ease-out group-hover:translate-x-1
                    group-hover:opacity-100`,
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div
                className="mr-[-25px] text-right text-xs tabular-nums
                  text-muted-foreground sm:text-sm"
              >
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-[-4px] text-xs sm:text-sm"
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </a>
  )
}
