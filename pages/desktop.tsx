// components
import DesktopLayout from "../components/DesktopLayout";
import MirrorIcons from "../components/MirrorIcons";
import Websites from "../components/Websites";

export default function Home() {
  return (
    <DesktopLayout>
      <div className="pt-16 sm:pt-24 min-h-[500px] xs:min-h-[600px] md:min-h-[630px] xl:min-h-[700px] h-screen w-full flex flex-col">
        <div className="websites flex-1 flex flex-col justify-center">
          <Websites />
        </div>
        <div className="flex justify-center overflow-hidden animate-fade-in">
          <MirrorIcons />
        </div>
      </div>
    </DesktopLayout>
  );
}
