// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

import GradualSpacing from "./ui/gradual-spacing";
import { FadeText } from "./ui/fade-text";

// Asset imports
import Bg from "@/public/heroBg.svg";

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <Image
          src={Bg}
          width={1000}
          height={1000}
          alt="Company Logo"
          className="absolute not-prose mb-6 dark:invert md:mb-8 z-0"
        />

        <GradualSpacing
          className="mt-16 font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="Best Turkish Agancy "
        />

        <Balancer className="z-10">
          <FadeText
            className="text-4xl mt-5 font-bold text-black dark:text-white"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.2 } },
            }}
            text="For Studding in the Best Universities"
          />
        </Balancer>

        <div className="not-prose mt-6 flex gap-2 md:mt-12 z-10">
          <Button asChild>
            <Link href="/">
              <Camera className="mr-2" />
              Lorem Ipsum
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href="/posts">Dolor Sit Amet -{">"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
