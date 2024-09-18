import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/tw.svg"
            width={32}
            height={32}
            alt="taiwan"
            className="mr-4 rounded-md"
          />
          Mandarin
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/es.svg"
            width={32}
            height={32}
            alt="spain"
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/fr.svg"
            width={32}
            height={32}
            alt="france"
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/it.svg"
            width={32}
            height={32}
            alt="italy"
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/jp.svg"
            width={32}
            height={32}
            alt="japan"
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};
