import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import { CustomNavigationMenuItem } from './CustomNavigationMenuItem';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { Logout } from './Logout';
import { DEPARTMENTS, DEPARTMENTS_CATEGORY } from '@/data/departments.js';

export async function SiteHeader() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {/* Top bar */}
      <div className="w-full bg-theme-primary text-white px-4 py-2">
        <div className="container flex justify-center md:justify-between items-center flex-wrap md:px-4">
          <div className="max-md:w-full flex justify-between items-center gap-4 text-sm">
            <div className="flex flex-shrink-0 items-center gap-2">
              <span>+88012345678</span>
            </div>
            <div className="flex flex-shrink-0 items-start sm:items-center gap-x-2 flex-row">
              <span className="text-nowrap">Monday - Friday</span>
              <span className="text-nowrap">10:00 to 6:00</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm px-4">
            <Link href="/journals" className="hover:text-gray-200">
              Journal
            </Link>
            <Link href="/admission" className="hover:text-gray-200">
              Admission
            </Link>
            <Link href="/news-media/events" className="hover:text-gray-200">
              Events
            </Link>
            <Link href="/careers" className="hover:text-gray-200">
              Careers
            </Link>
            <Link href="/notices" className="hover:text-gray-200">
              Notices
            </Link>

            {session && (
              <Link href="/logout" className="hover:text-gray-200">
                <Logout />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="w-full sticky top-0 border-b z-50 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/images/logo-icon.svg"
                alt="North Bengal Medical College Logo"
                className="h-12 w-auto mb-1"
                width={44}
                height={48}
              />
              <div className="text-xl font-bold md:hidden lg:block child:leading-tight">
                <div>NORTH BENGAL</div>
                <div>MEDICAL COLLEGE</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex">
              <NavigationMenu delayDuration={0}>
                <NavigationMenuList>
                  {/* <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background sm:px-2 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        ABOUT
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem> */}

                  <CustomNavigationMenuItem href={'/about'} label="ABOUT">
                    <div className="w-[250px] p-2 list-none animate-none">
                      <Link
                        href="/about"
                        className="block p-2 hover:bg-accent rounded-md"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="group inline-flex w-full items-center rounded-md bg-background sm:px-2 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          About Us
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        href="/about/mission-and-vision"
                        className="block p-2 hover:bg-accent rounded-md"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="group inline-flex w-full items-center rounded-md bg-background sm:px-2 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          Mission and Vision
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        href="/about/basic-info"
                        className="block p-2 hover:bg-accent rounded-md"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="group inline-flex w-full items-center rounded-md bg-background sm:px-2 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          Basic Info
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </CustomNavigationMenuItem>

                  <CustomNavigationMenuItem
                    href={'/departments'}
                    label="DEPARTMENTS"
                  >
                    <div className="w-[250px] p-2 list-none animate-none">
                      {Object.values(DEPARTMENTS_CATEGORY)?.map(
                        (department) => (
                          <Link
                            key={department.id}
                            href={`/departments/${department.slug}`}
                            className="block p-2 hover:bg-accent rounded-md"
                            legacyBehavior
                            passHref
                          >
                            <NavigationMenuLink className="group inline-flex w-full items-center rounded-md bg-background sm:px-2 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                              {department.name}
                            </NavigationMenuLink>
                          </Link>
                        )
                      )}
                    </div>
                  </CustomNavigationMenuItem>

                  <CustomNavigationMenuItem href={'/academic'} label="ACADEMIC">
                    <div className="w-[250px] p-2 list-none animate-none">
                      <Link
                        href="/curriculum"
                        className="block p-2 hover:bg-accent rounded-md"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="group inline-flex w-full items-center rounded-md bg-background sm:px-2 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          Curriculum
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        href="/admission"
                        className="block p-2 hover:bg-accent rounded-md"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="group inline-flex w-full items-center rounded-md bg-background sm:px-2 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          Admission
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        href="/notices"
                        className="block p-2 hover:bg-accent rounded-md"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="group inline-flex w-full items-center rounded-md bg-background sm:px-2 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          Notices
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        href="/campus-tour"
                        className="block p-2 hover:bg-accent rounded-md"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="group inline-flex w-full items-center rounded-md bg-background sm:px-2 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          Campus Tour
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </CustomNavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/facilities" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background sm:px-2 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        FACILITIES
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/news-media" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background sm:px-2 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        NEWS & MEDIA
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background sm:px-2 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        CONTACT
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    className="focus:ring-0 [&_svg]:size-6 border"
                    variant="ghost"
                    size="icon"
                  >
                    <Menu className="h-10 w-10" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4">
                    <SheetClose asChild>
                      <Link href="/about" className="text-lg font-medium">
                        ABOUT
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/departments" className="text-lg font-medium">
                        DEPARTMENTS
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/academic" className="text-lg font-medium">
                        ACADEMIC
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/facilities" className="text-lg font-medium">
                        FACILITIES
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/campus-tour" className="text-lg font-medium">
                        CAMPUS TOUR
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/news-media" className="text-lg font-medium">
                        NEWS & MEDIA
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/contact" className="text-lg font-medium">
                        CONTACT
                      </Link>
                    </SheetClose>
                    <div className="border-t pt-4 mt-4">
                      <SheetClose asChild>
                        <Link href="/journal" className="block py-2">
                          Journal
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/admission" className="block py-2">
                          Admission
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/news-media/events" className="block py-2">
                          Events
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/careers" className="block py-2">
                          Careers
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/notices" className="block py-2">
                          Notice
                        </Link>
                      </SheetClose>
                      {session && (
                        <SheetClose asChild>
                          <Link href="/logout" className="hover:text-gray-200">
                            Logout
                          </Link>
                        </SheetClose>
                      )}
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
