import Section from "../Section/Section";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { handleCursorEnter, handleCursorLeave } from "@/utils/gsapUtils";

const LittleInfo = () => {
  const data = [
    { icon: "🏍️", description: "Apachi RTR 160 4V — Rupali" },
    { icon: "⚽", description: "PlayeD FootbalL..." },
    { icon: "🌆", description: "EveninG PersoN" },
    { icon: "📸", description: "CapturE TimE in FrameS" },
    { icon: "🎧", description: "Well who doesn't like MusicS" },
  ];

  return (
    <div className="w-full border-t border-b border-border border-dashed flex items-center justify-center py-7">
      <Section sectionName="little-info" className="h-auto w-full">
        <div className="w-full flex items-center justify-center flex-row flex-wrap gap-5 text-3xl">
          {data.map((d, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger
                  asChild
                  onMouseEnter={() => handleCursorEnter(4)}
                  onMouseLeave={handleCursorLeave}
                >
                  <span className="text-shadow-md">{d.icon}</span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">{d.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default LittleInfo;
