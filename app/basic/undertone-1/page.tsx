import PalettePage from "@/components/basic/pallate/PalettePage";
import ButtonBack from "@/components/ui/ButtonBack";
import ButtonNext from "@/components/ui/ButtonNext";

const paletteImages = [
  "/basic/undertone-1/face-bg-F22283.png",
  "/basic/undertone-1/face-bg-F25C05.png",
];

const Page = () => {
  return (
    <div className="bg-main min-h-screen pt-16 pb-10 px-4">
      <ButtonBack href="/" label="BACK" />
      <ButtonNext href="/" label="NEXT" />

      <PalettePage
        paletteImages={paletteImages}
        nextTone="/basic/undertone-1"
        description="Choose a color that makes your skin brighter and softens the color around your dark circles & smile lines"
      />
    </div>
  );
};

export default Page;
