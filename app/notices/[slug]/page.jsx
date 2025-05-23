import PageHeader from '@/components/common/PageHeader';
import { CalendarDays, Download, Home } from 'lucide-react';

import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const NoticesPage = async ({ params }) => {
  const notice = await fetch(`http://localhost:3000/api/notice/${params.slug}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }
      return data.data;
    })
    .catch((error) => {
      console.error('Error fetching notice:', error);
      return null;
    });

  return (
    <>
      <PageHeader
        className={
          'text-white md:min-h-60 bg-cover bg-no-repeat flex items-center'
        }
        titleClass="text-4xl md:text-6xl"
        breadcumbClass="text-white"
        title={'Notice Details'}
        style={{
          backgroundImage: `url('${PageHeaderBanner?.src}')`,
        }}
        paths={[
          { name: <Home className="size-5" />, url: '/' },
          { name: 'Notices', url: '/notices' },
          { name: 'MicroBiology', url: '/journals/department/microbiology' },
          { name: 'Details', url: '' },
        ]}
      />

      <main className="py-10">
        <div className="w-full">
          <div className="container px-4">
            <Card className="max-w-4xl mx-auto">
              <div className="p-6 md:p-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <Link href={`/notices/department/microbiology`}>
                        <Badge
                          variant="secondary"
                          className="bg-red-100 text-red-700 hover:bg-red-100"
                        >
                          {notice?.department}
                        </Badge>
                      </Link>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        {new Date(notice?.createdAt).toLocaleDateString(
                          'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )}
                      </div>
                    </div>

                    <Button variant="outline" className="gap-2" asChild>
                      <Link
                        href={notice?.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={true}
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </Link>
                    </Button>
                  </div>

                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {notice?.title}
                  </h1>

                  <div className="prose prose-gray max-w-none">
                    {/* <p className="text-muted-foreground">
                      This is to inform all students that December 8th, 2025 is
                      the last day to withdraw from any course without incurring
                      an academic penalty. Please ensure all withdrawal forms
                      are submitted to the Microbiology department office before
                      5:00 PM on the specified date.
                    </p>

                    <h3 className="text-lg font-semibold mt-6 mb-2">
                      Important Instructions:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Complete the course withdrawal form</li>
                      <li>
                        Obtain signatures from course instructor and academic
                        advisor
                      </li>
                      <li>
                        Submit the form to department office before deadline
                      </li>
                      <li>
                        Retain acknowledgment receipt for future reference
                      </li>
                    </ul> */}
                    {/* {
                        ($constitution->type === 'word') 
                        ? <iframe src="https://view.officeapps.live.com/op/embed.aspx?src={{ Storage::disk('s3')->url($constitution->url) }}">This is an embedded <a target='_blank' href='http://office.com'>Microsoft Office</a> document, powered by <a target='_blank' href='http://office.com/webapps'>Office Online</a></iframe>
                        : ($constitution->type === 'pdf') &&
                        <iframe src="https://docs.google.com/gview?url={{ Storage::disk('s3')->url($constitution->url) }}&embedded=true"></iframe>
                    } */}
                    <iframe
                      className="w-full aspect-[1/1.414]"
                      src={`https://docs.google.com/gview?url=${notice?.fileUrl}&embedded=true`}
                    ></iframe>
                  </div>

                  {/* <div className="mt-6 pt-6 border-t">
                    <h3 className="text-sm font-semibold mb-3">Attachments</h3>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download Withdrawal Form (PDF)
                    </Button>
                  </div> */}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default NoticesPage;
