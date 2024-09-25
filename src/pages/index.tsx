import Image from "next/image";
import { Inter, Inter_Tight } from "next/font/google";
import { Separator } from "@/components/ui/separator"

import { Button } from "@/components/ui/button";
import Link from "next/link";
const inter = Inter_Tight({ subsets: ["latin"] });
import { buttonVariants } from "@/components/ui/button"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-zinc-100 to-zinc-200 px-20 py-20 gap-2">
      <div className="flex flex-col border-l-4 duration-300 border-b-4 border-sky-500 hover:border-sky-700 bg-gradient-to-r from-zinc-50 to-zinc-100 rounded-lg p-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="flex">
              <h1 className={`${inter.className} text-2xl font-bold text-zinc-800`}>Bruno Eltz</h1>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is my first web portfolio, feel free </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex flex-col border-l-4 duration-300 border-b-4 border-sky-500 hover:border-sky-700 bg-gradient-to-r from-zinc-50 to-zinc-100 rounded-lg p-2">
        <p className={`${inter.className} text-zinc-800`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend vestibulum est eu hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tincidunt sollicitudin elit vel semper. Cras non nisi nec urna facilisis sollicitudin et vel ex. In at aliquam turpis. Fusce non magna ultrices, pharetra nunc vel, malesuada sapien. In egestas odio efficitur augue lacinia, a rhoncus sapien gravida. Morbi eget convallis massa. Sed diam ipsum, pretium ut congue sed, consectetur ut mauris. Curabitur euismod consequat eleifend. Sed sed rutrum nisl. Vestibulum faucibus pellentesque mollis. Sed volutpat ligula eu tincidunt elementum. Duis lobortis nisl quis tellus aliquet, ac dictum elit mattis. Vestibulum nec auctor odio.</p>
      </div>

      <div className="flex flex-col border-l-4 duration-300 border-b-4 border-sky-500 hover:border-sky-700 bg-gradient-to-r from-zinc-50 to-zinc-100 rounded-lg p-2">
        <h2 className={`${inter.className} text-xl font-semibold text-zinc-800`}>Experience</h2>

        <Separator className="mt-2 bg-sky-200"></Separator>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Back-end</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Front-end</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>


    </div>
  );
}
