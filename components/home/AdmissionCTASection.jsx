import Image from "next/image"
import SplitSection from "../layouts/SplitSection"
import { MoveRight } from "lucide-react"
import Link from "next/link"

import AdmissionBanner from '@/assets/images/banner/admission.jpg';

const AdmissionCTASection = () => {
  return (
    <>
        <div className="bg-slate-50">
            <SplitSection
                gridClassName="items-center"
                LeftContent = {
                    <>
                        <h3 className="text-2xl font-bold mb-8">Admission</h3>
                        <p className="mb-4">
                            At North Bengal Medical College, we prepare you to launch your career by providing a supportive, creative, and professional environment from which to learn practical skills.
                        </p>
                        <ul className="flex flex-col child:py-4 divide-y py-4">
                            <li><Link href="/admission" className="inline-flex items-center gap-3">Process Overview <MoveRight /></Link></li>
                            <li><Link href="/admission" className="inline-flex items-center gap-3">Fees & Financial Information <MoveRight /></Link></li>
                            <li><Link href="/admission" className="inline-flex items-center gap-3">How To Apply <MoveRight /></Link></li>
                        </ul>
                    </>
                }
                RightContent = {
                    <Image
                        className="rounded-xl"
                        src={AdmissionBanner}
                        width={800}
                        height={533}
                        alt="Admission Banner"
                    />
                }
            />
        </div>
    </>
  )
}

export default AdmissionCTASection