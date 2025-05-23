import { Info, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import RequirementItem from "./RequirementItem"

const RequirementsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">
            Admission
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-3">Requirements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Review our admission requirements for both graduate and undergraduate diploma programs.
          </p>
        </div>

        <Tabs defaultValue="graduate" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 h-auto">
            <TabsTrigger className="py-4" value="graduate">Graduate Diploma</TabsTrigger>
            <TabsTrigger className="py-4" value="undergraduate">Undergraduate Diploma</TabsTrigger>
          </TabsList>

          <TabsContent value="graduate">
            <Card>
              <CardHeader>
                <CardTitle>Graduate Diploma Requirements</CardTitle>
                <CardDescription>Requirements for admission to our graduate diploma programs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <RequirementItem>Open to students 18 years and over at course commencement</RequirementItem>
                  <RequirementItem>
                    If English is not your first Language, you will need to demonstrate English language proficiency
                    equivalent to IELTS (Academic) 6.0 overall, with a minimum of 5.5 in each and 6.0 in speaking
                  </RequirementItem>
                  <RequirementItem>All applicants are interviewed as part of the process</RequirementItem>
                  <RequirementItem>
                    Applicants not meeting the entry criteria may be considered on a case by case basis by the Academic
                    Director. Consideration will given to those with appropriate and evidenced previous history, prior
                    work experience and life skills experience
                  </RequirementItem>
                </ul>

                {/* <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2">
                    Apply Now <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Info className="h-4 w-4" /> Request Information
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="undergraduate">
            <Card>
              <CardHeader>
                <CardTitle>Undergraduate Diploma Requirements</CardTitle>
                <CardDescription>Requirements for admission to our undergraduate diploma programs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <RequirementItem>Open to students 18 years and over at course commencement</RequirementItem>
                  <RequirementItem>
                    If English is not your first Language, you will need to demonstrate English language proficiency
                    equivalent to IELTS (Academic) 6.0 overall, with a minimum of 5.5 in each and 6.0 in speaking
                  </RequirementItem>
                  <RequirementItem>All applicants are interviewed as part of the process</RequirementItem>
                  <RequirementItem>
                    Applicants not meeting the entry criteria may be considered on a case by case basis by the Academic
                    Director. Consideration will given to those with appropriate and evidenced previous history, prior
                    work experience and life skills experience
                  </RequirementItem>
                </ul>

                {/* <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2">
                    Apply Now <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Info className="h-4 w-4" /> Request Information
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-4 bg-muted rounded-lg border border-border flex items-center gap-3">
          <Info className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            For specific program requirements or questions about your eligibility, please contact our admissions team.
          </p>
        </div>
      </div>
    </section>
  )
}

export default RequirementsSection