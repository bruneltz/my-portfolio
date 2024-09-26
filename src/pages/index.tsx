import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Inter_Tight } from "next/font/google";

const inter = Inter_Tight({ subsets: ["latin"] });

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";


export default function Home() {
  return (
    <div className="flex justify-center bg-gradient-to-r from-zinc-100 to-zinc-200 shadow-[inset_0_0_200px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col max-w-6xl px-20 py-20 gap-2">
        <div className="flex justify-between items-center max-w-60 border-l-4 duration-300 border-b-4 border-sky-500 hover:border-sky-700 bg-gradient-to-r from-zinc-50 to-zinc-100 rounded-lg p-2">

          <h1 className={`${inter.className} text-2xl font-bold text-zinc-800`}>
            Bruno Eltz
          </h1>
          <div className="flex gap-2">
            <GitHubLogoIcon className="size-6 cursor-pointer" onClick={() => window.location.href = 'https://github.com/bruneltz'}></GitHubLogoIcon>
            <LinkedInLogoIcon className="size-6 cursor-pointer" onClick={() => window.location.href = 'https://www.linkedin.com/in/brunoeltz/'}></LinkedInLogoIcon>
          </div>

        </div>
        <div className="border-l-4 duration-300 border-b-4 border-sky-500 hover:border-sky-700 bg-gradient-to-r from-zinc-50 to-zinc-100 rounded-lg p-2">
          <p className={`${inter.className} text-zinc-800`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend vestibulum est eu hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tincidunt sollicitudin elit vel semper. Cras non nisi nec urna facilisis sollicitudin et vel ex. In at aliquam turpis. Fusce non magna ultrices, pharetra nunc vel, malesuada sapien. In egestas odio efficitur augue lacinia, a rhoncus sapien gravida. Morbi eget convallis massa. Sed diam ipsum, pretium ut congue sed, consectetur ut mauris. Curabitur euismod consequat eleifend. Sed sed rutrum nisl. Vestibulum faucibus pellentesque mollis. Sed volutpat ligula eu tincidunt elementum. Duis lobortis nisl quis tellus aliquet, ac dictum elit mattis. Vestibulum nec auctor odio.</p>
        </div>

        <div className="border-l-4 duration-300 border-b-4 border-sky-500 hover:border-sky-700 bg-gradient-to-r from-zinc-50 to-zinc-100 rounded-lg p-2">
          <h2 className={`${inter.className} text-xl font-semibold text-zinc-800`}>Projects</h2>
          <Separator className="my-2 bg-sky-200"></Separator>
          <div className="flex gap-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          </div>
        </div>

        <div className="border-l-4 duration-300 border-b-4 border-sky-500 hover:border-sky-700 bg-gradient-to-r from-zinc-50 to-zinc-100 rounded-lg p-2">
          <h2 className={`${inter.className} text-xl font-semibold text-zinc-800`}>Experience</h2>

          <Separator className="mt-2 bg-sky-200"></Separator>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Back-end</AccordionTrigger>
              <AccordionContent>
                ...
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Front-end</AccordionTrigger>
              <AccordionContent>
                ...
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>
    </div>
  );
}
