import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface ExperienceCardProps {
  title: string
  organization: string
  period: string
  responsibilities: string[]
}

export default function ExperienceCard({ title, organization, period, responsibilities }: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{organization}</CardDescription>
        <CardDescription>{period}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">{responsibility}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

