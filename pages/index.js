// components
import MirrorIcons from "../components/MirrorIcons";
import Websites from "../components/Websites";

export default function Home() {
  return (
    <>
      <div className="h-fill min-h-[500px] xs:min-h-[525px] md:min-h-[575px] xl:min-h-[600px] h-full flex flex-col animate-fade-in">
        <div className="websites flex-1 flex flex-col justify-center">
          <Websites />
        </div>
        <div className="mirror flex justify-center overflow-hidden">
          <MirrorIcons />
        </div>
      </div>
    </>
  );
}
