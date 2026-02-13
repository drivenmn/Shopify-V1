import svgPaths from "./svg-bw4ginjiah";

function ImageErrorLoadingImage() {
  return <div className="absolute left-[398.25px] size-[87.998px] top-[204.77px]" data-name="Image (Error loading image)" />;
}

function ImageWithFallback() {
  return (
    <div className="absolute bg-gray-100 h-[497.529px] left-0 top-0 w-[884.502px]" data-name="ImageWithFallback">
      <ImageErrorLoadingImage />
    </div>
  );
}

function ImageErrorLoadingImage1() {
  return <div className="absolute left-[398.25px] size-[87.998px] top-[204.77px]" data-name="Image (Error loading image)" />;
}

function ImageWithFallback1() {
  return (
    <div className="absolute bg-gray-100 h-[497.529px] left-0 opacity-90 top-0 w-[884.502px]" data-name="ImageWithFallback">
      <ImageErrorLoadingImage1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_379_458)" id="Icon">
          <path d={svgPaths.p2de1c680} id="Vector" stroke="var(--stroke-0, #017974)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
        </g>
        <defs>
          <clipPath id="clip0_379_458">
            <rect fill="white" height="15.9961" width="15.9961" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[15.996px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.996px] items-start relative w-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#0f172b] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">FULL VEHICLE PROTECTION</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] box-border content-stretch flex gap-[7.998px] h-[33.242px] items-center left-[23.99px] px-[16.621px] py-[0.625px] rounded-[2.09715e+07px] top-[23.99px] w-[228.809px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.625px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[2.09715e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Icon />
      <Text />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#ff6600] relative rounded-[2.09715e+07px] shrink-0 size-[23.994px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.875px] border-solid border-white inset-0 pointer-events-none rounded-[2.09715e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[23.994px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-[98.975px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.996px] relative w-[98.975px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.6)] top-0 tracking-[1.2px] uppercase w-[99px]">gloss Series</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[11.992px] h-[23.994px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Text1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[35.996px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[0.88px] whitespace-pre">Molten Orange</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[0.25px] whitespace-pre">Premium Color Change PPF</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.6)] box-border content-stretch flex flex-col gap-[7.998px] h-[137.227px] items-start left-[31.99px] pb-[0.625px] pt-[24.619px] px-[24.619px] rounded-[16px] top-[328.31px] w-[277.842px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.625px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container2 />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[497.529px] relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback />
      <ImageWithFallback1 />
      <Container />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-slate-100 h-[505.029px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[505.029px] items-start p-[3.75px] relative w-full">
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[3.75px] border-solid border-white inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[444.648px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[444.648px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] text-nowrap top-[0.25px] whitespace-pre">*Preview shows Tesla Model Y. Film can be applied to any vehicle.</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[104.15px] size-[15.996px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p11ede900} id="Vector" stroke="var(--stroke-0, #017974)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          <path d={svgPaths.p3f3f7a40} id="Vector_2" stroke="var(--stroke-0, #017974)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          <path d={svgPaths.p4325f00} id="Vector_3" stroke="var(--stroke-0, #017974)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[35.996px] relative rounded-[6.8px] shrink-0 w-[132.139px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.996px] relative w-[132.139px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[53.99px] not-italic text-[#017974] text-[14px] text-center text-nowrap top-[8.25px] translate-x-[-50%] whitespace-pre">View Gallery</p>
        <Icon1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[35.996px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[35.996px] items-center justify-between px-[15.996px] py-0 relative w-full">
          <Paragraph1 />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default function TeslaVisualizer() {
  return (
    <div className="content-stretch flex flex-col gap-[23.994px] items-start relative size-full" data-name="TeslaVisualizer">
      <Container5 />
      <Container6 />
    </div>
  );
}