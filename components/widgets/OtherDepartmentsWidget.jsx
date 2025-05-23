import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

const OtherDepartmentsWidget = ({ departments = [] }) => {
  return (
    <>
      <section className="bg-slate-100 rounded-md">
        <div className="flex items-center justify-between border-b-4 border-theme-red-light p-4">
          <h2 className="text-lg font-semibold">OTHER DEPARTMENTS</h2>
          <Button variant="link" size="md" className="text-pink-600" asChild>
            <Link href="/departments">SEE ALL</Link>
          </Button>
        </div>
        <div className="space-y-8 px-4 py-8">
          <ul className="space-y-3 text-sm">
            {departments?.map((department) => (
              <li key={department?.id}>
                <Link
                  href={`/departments/${department?.slug}`}
                  className="inline-flex items-center gap-4 font-semibold text-theme-primary hover:text-theme-red-light"
                >
                  <MoveRight />
                  <span>{department?.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default OtherDepartmentsWidget;
