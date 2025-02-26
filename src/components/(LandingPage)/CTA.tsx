import Link from "next/link";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-10 sm:px-6 sm:py-22 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl bg-gray-100 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-primary sm:text-4xl">
              Boost your productivity. Start using our app today.
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-900">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link href="#">
                <Button>Get started</Button>
              </Link>
              <Link href="#">
                <Button variant={"outline"}>
                  Learn more <span aria-hidden="true">→</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
