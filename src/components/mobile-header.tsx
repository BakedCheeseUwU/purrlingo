import { MobileSidebar } from "@/components/mobile-sidebar";

export const MobileHeader = () => {
  return (
    <div className="bg-green-500 fixed top-0 z-50 flex items-center border-b-2 lg:hidden h-[50px] w-full px-6">
      <MobileSidebar />
    </div>
  );
};
