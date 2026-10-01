import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  darkSurface?: boolean;
};

export function BrandLogo({ className = "", darkSurface = false }: BrandLogoProps) {
  return (
    <span
      className={`inline-flex items-center ${darkSurface ? "rounded-full bg-white px-3 py-2" : ""} ${className}`.trim()}
    >
      <Image
        src="/brand/logo.png"
        alt="Jasiri"
        width={836}
        height={246}
        className="block h-[28px] w-auto md:h-[32px]"
      />
    </span>
  );
}
