import PageHeader from '@/components/common/PageHeader'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Dot, Home, Mail, Phone } from 'lucide-react'
import { DEPARTMENTS } from '@/data/departments'
import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const DoctorsProfilePage = async ({ params }) => {
    const { slug, doctorSlug } = await params;
    const department = DEPARTMENTS?.find(department => department.slug === slug);
    const doctor = department?.facultyMembers?.find(member => member.slug === doctorSlug);

    if (!doctor) {
        notFound();
    }

  return (
    <>
        <PageHeader
            className={"text-white md:min-h-60 bg-cover bg-no-repeat flex items-center"}
            titleClass="text-4xl md:text-6xl"
            breadcumbClass="text-white"
            title={"Doctor's Profile"}
            style={{
                backgroundImage: `url('${PageHeaderBanner?.src}')`,
            }}
            paths={[
                { name: <Home className='size-5' />, url: "/" },
                { name: "Departments", url: "/departments" },
                { name: department?.name, url: `/departments/${department?.slug}` },
                { name: "Doctors", url: `` },
            ]}
        />

        <main className="py-14">
            <div className="w-full">
                <div className="container px-4">
                    <div className="flex flex-col md:flex-row gap-6 lg:gap-14">
                        <div className="flex-shrink-0">
                            <Image
                                src={doctor?.image}
                                alt={doctor?.name}
                                width={300}
                                height={400}
                                className="rounded-lg w-full"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-2xl font-bold text-theme-red-light">{doctor?.name}</h2>
                                    <div className="space-y-3">
                                        <p className="text-sm">{doctor?.qualification}</p>
                                        {/* <div className="text-sm flex items-center gap-2">
                                            <span>Professor & HOD</span>
                                            <Badge className="!text-xs rounded-full cursor-default">
                                                Full Time
                                            </Badge>
                                        </div> */}
                                        {
                                            doctor?.expertise?.length > 0 &&
                                            <div className="flex flex-col text-xs lg:text-sm my-6 gap-2">
                                                {
                                                doctor?.expertise?.map((exp, index) => (
                                                    <div key={`expertise-${exp?.title}-${doctor?.name}`}  className="text-sm inline-flex items-center flex-wrap gap-2">
                                                        <span className="text-sm lg:text-base text-muted-foreground font-semibold">{exp?.title}</span>
                                                        {exp?.timeperiod && <Badge className="!text-xs text-nowrap rounded-full cursor-default">{exp?.timeperiod}</Badge>}
                                                    </div>
                                                ))
                                                }
                                            </div>
                                        }
                                    </div>
                                    <div className="mt-3 space-y-2">
                                        {
                                            doctor?.email && (
                                                <p className="text-sm flex items-center gap-2">
                                                    <Mail className="h-4 w-4" />
                                                    <a href={`mailto:${doctor?.email}`} className="text-theme-red-light hover:underline">
                                                        {doctor?.email}
                                                    </a>
                                                </p>
                                            )
                                        }
                                        {
                                            doctor?.phone && (
                                                <p className="text-sm flex items-center gap-2">
                                                    <Phone className="h-4 w-4" />
                                                    <a href={`tel:${doctor?.phone}`} className='text-theme-red-light hover:underline'>
                                                        {doctor?.phone}
                                                    </a>
                                                </p>
                                            )
                                        }
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">Biography</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Prof. Dr. Kazi Shihab Uddin passed MBBS from Mymensingh Medical College in 1987. He passed MD in
                                        Internal Medicine from Dhaka University in 2002. Before joining here as Professor he was Associate
                                        Professor in the same department of Our Medical College Hospital.
                                    </p>
                                </div>

                                <div>
                                <h3 className="font-semibold mb-3">SPECIALITY SUBJECT</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                        "PHARMACOLOGY & THERAPEUTICS",
                                        "CLINICAL PHARMACOLOGY",
                                        "CANCER CHEMOTHERAPY",
                                        "BIOEQUIVALENCE STUDY",
                                        "BIOTECHNOLOGY",
                                        ].map((specialty) => (
                                        <Badge
                                            key={specialty}
                                            className="bg-theme-red-light text-white hover:bg-theme-red-light/90 rounded-full px-4 lg:px-6 py-1 lg:py-3 cursor-default"
                                        >
                                            {specialty}
                                        </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                <h3 className="font-semibold mb-3">RESEARCH & PUBLICATION</h3>
                                <div className="space-y-4">
                                    {[
                                        "Prevalence and Antibiotic susceptibility patterns of E.coli and S. aureus isolated from clinical specimens at KYAMC Hospital, Enayetpur, Sirajganj",
                                        "Pattern of Carbapenemase-producing pathogens at North Bengal Medical College",
                                        "Prevalence and Antibiotic susceptibility patterns of E.coli and S. aureus isolated from clinical specimens at KYAMC Hospital, Enayetpur, Sirajganj",
                                        "Pattern of Carbapenemase-producing pathogens at North Bengal Medical College",
                                    ].map((publication, index) => (
                                        <Link
                                            key={index}
                                            className="max-w-3xl flex items-start gap-2 text-sm text-muted-foreground hover:text-theme-red-light cursor-pointer transition-colors underline"
                                            href={"#"}
                                        >
                                            {/* <i className="inline-block bg-theme-red-light w-1 flex-grow-0 flex-shrink-0"></i> */}
                                            <Dot className='flex-grow-0 flex-shrink-0' />
                                            <p className='mt-0.5'>{publication}</p>
                                        </Link>
                                    ))}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default DoctorsProfilePage