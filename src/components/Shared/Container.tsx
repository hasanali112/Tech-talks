import { cn } from "@/lib/utils";

type TChildrenProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: TChildrenProps) => {
  return (
    <div
      className={cn(
        "w-full lg:max-w-[1000px] xl:max-w-[1440px] 2xl:max-w-[1920px] px-[0.825rem] mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
