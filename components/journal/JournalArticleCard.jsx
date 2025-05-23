import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText } from 'lucide-react'

const JournalArticleCard = ({ className = "" }) => {
  return (
    <Card className={cn("", className)}>
        <CardContent className="p-4">
            <div className="flex justify-between items-start flex-col-reverse md:flex-row gap-1 mb-1">
                <div>
                    <h3 className="font-medium">Artificial Intelligence Used in Medical Education and Service</h3>
                    <p className="text-sm text-muted-foreground mt-1">Dave M.J and Angela</p>
                </div>
                <div className="text-sm text-muted-foreground text-nowrap">166-182</div>
            </div>
            <Button variant="outline" size="sm" className="mt-2">
                <FileText className="w-4 h-4 mr-2" />
                Article PDF
            </Button>
        </CardContent>
    </Card>
  )
}

export default JournalArticleCard