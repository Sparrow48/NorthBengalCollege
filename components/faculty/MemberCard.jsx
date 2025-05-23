import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const MemberCard = ({ department = {}, member = null }) => {

  return (
    <>
      {
        member && (
          <div>
            <CardContent className="flex items-start gap-4 p-0">
              <Image
                src={member?.image}
                alt={member?.name}
                width={300}
                height={400}
                className="w-40 h-auto rounded-lg"
              />
              <div>
                <h3 className="text-sm lg:text-base font-semibold">
                  <Link href={`/departments/${department?.slug}/doctors/quaid-mortaza-haque`}>
                    {member?.name}
                  </Link>
                </h3>
                {member?.qualification && <p className="text-xs lg:text-sm text-gray-500">{member?.qualification}</p>}
                {
                  member?.expertise?.length > 0 &&
                  <div className="flex flex-col text-xs lg:text-sm my-6 gap-2">
                    {
                      member?.expertise?.map((exp, index) => (
                        <div key={`expertise-${exp?.title}-${member?.name}`}  className="text-sm inline-flex items-center flex-wrap gap-2">
                            <span className="text-sm lg:text-base text-muted-foreground font-semibold">{exp?.title}</span>
                            {exp?.timeperiod && <Badge className="!text-xs text-nowrap rounded-full cursor-default">{exp?.timeperiod}</Badge>}
                        </div>
                      ))
                    }
                  </div>
                }
                {/* <div className="text-sm inline-flex items-center flex-wrap gap-2 my-6">
                    <span className="text-sm lg:text-base text-muted-foreground font-semibold">Professor and HOD</span>
                    <Badge className="!text-xs text-nowrap rounded-full cursor-default">Full Time</Badge>
                </div> */}
                {
                  (member?.phone || member?.email) && (
                    <div className="text-xs lg:text-sm space-y-3 mb-2 md:mb-0">
                      {
                        member?.email && (
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <a href={`mailto:${member?.email}`} className="text-theme-red-light hover:underline">{member?.email}</a>
                          </div>
                        )
                      }
                      {
                        member?.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <a href={`tel:${member?.phone}`} className="text-theme-red-light hover:underline">{member?.phone}</a>
                          </div>
                        )
                      }
                    </div>
                  )
                }
                <Button variant="secondary" size="sm" className="mt-4 text-white bg-theme-red-light hover:bg-theme-red-dark px-5" asChild>
                    <Link href={`/departments/${department?.slug}/doctors/${member?.slug}`}>SEE PROFILE</Link>
                </Button>
              </div>
            </CardContent>
          </div>
        )
      }
    </>
  );
};

export default MemberCard;
