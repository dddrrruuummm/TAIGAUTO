export type TuningItem = {
  id: string;
  brand: "BRABUS" | "MANSORY";
  title: string;
  category: "Exterior & carbon" | "Wheels" | "Interior";
  image: string;
  alt: string;
  description: string;
  application?: string;
  productReference?: string;
  imageFit?: "contain" | "cover";
};

export const tuningBrands = [
  {
    name: "BRABUS" as const,
    image: "/brands/brabus-widestar-exterior.webp",
    alt: "BRABUS G-Class with carbon exterior detailing and forged wheels",
    title: "A distinctive G-Class profile",
    text: "Explore BRABUS exterior components, forged wheel designs, and interior details. Start with your vehicle model and the part you have in mind.",
    model: "G-Class · Exterior, wheels & interior",
  },
  {
    name: "MANSORY" as const,
    image: "/brands/mansory-venatus-exterior.webp",
    alt: "MANSORY Venatus based on the Lamborghini Urus, showing its redesigned exterior",
    title: "Carbon with character",
    text: "Explore MANSORY carbon bodywork, wheel designs, and cabin finishes. Your vehicle specification guides the sourcing conversation.",
    model: "Venatus / Urus · Exterior, wheels & interior",
  },
];

export const tuningItems: TuningItem[] = [
  {"id":"brabus-rear-spoiler","brand":"BRABUS","title":"Carbon rear spoiler","category":"Exterior & carbon","image":"/brands/brabus-rear-spoiler.webp","alt":"BRABUS rear roof spoiler with carbon inserts on a Mercedes-AMG G63","description":"A rear roof spoiler with exposed carbon inserts, offered in glossy or matte finishes. Fitment and finish depend on the vehicle specification.","application":"Mercedes-AMG G63 · W465","productReference":"465-450-99","imageFit":"cover"},
  {"id":"brabus-carbon-roof-lights","brand":"BRABUS","title":"Carbon roof lights","category":"Exterior & carbon","image":"/brands/brabus-carbon-roof-lights.webp","alt":"BRABUS carbon roof attachment with auxiliary LED lights above a G63 windshield","description":"Carbon roof attachment with auxiliary LED lighting above the windshield. Specify your preferred finish and vehicle details for fitment review.","application":"Mercedes-AMG G63 · W465","productReference":"465-360-99","imageFit":"cover"},
  {"id":"brabus-monoblock-y","brand":"BRABUS","title":"Monoblock Y","category":"Wheels","image":"/brands/brabus-monoblock-y.webp","alt":"BRABUS Monoblock Y Platinum Edition polished forged wheel","description":"Forged wheels with a polished Y-spoke design. Available configurations require checks for wheel size, tire choice, clearance and vehicle specification.","application":"Mercedes-AMG G63 · W465","productReference":"Y12-463A-PE","imageFit":"contain"},
  {"id":"mansory-fd15-wheel","brand":"MANSORY","title":"FD.15 forged wheel","category":"Wheels","image":"/brands/mansory-fd15-forged-wheel.webp","alt":"MANSORY FD.15 fully forged wheel in a chrome finish","description":"Fully forged FD.15 wheel in chrome. Confirm diameter, width, offset, bolt pattern, and vehicle fitment for your inquiry.","application":"Vehicle-specific wheel sizing","productReference":"FD15 24 10 20 1230 C","imageFit":"contain"},
  {"id":"mansory-led-wheel-cap","brand":"MANSORY","title":"LED floating wheel cap","category":"Wheels","image":"/brands/mansory-led-floating-wheel-cap.webp","alt":"Black MANSORY floating wheel center cap with a white MANSORY emblem","description":"Floating center cap with LED emblem lighting, shown in black. Intended for selected MANSORY wheel designs; confirm cap size, wheel reference, and variant.","application":"Selected MANSORY wheel designs","productReference":"MCLWCAP-1","imageFit":"contain"},
  {"id":"mansory-us-carbon-plate-frame","brand":"MANSORY","title":"US carbon plate frame","category":"Exterior & carbon","image":"/brands/mansory-us-carbon-plate-frame.webp","alt":"MANSORY carbon-fiber US license plate frame with gold logo detailing","description":"Carbon-fiber license plate holder for US-format plates, shown with a gold MANSORY logo. Confirm the 310 × 160 mm frame dimensions and mounting layout.","application":"US-format license plates","productReference":"MCLCFUSG","imageFit":"contain"},
  {id:"brabus-exterior",brand:"BRABUS",title:"Carbon exterior details",category:"Exterior & carbon",image:"/brands/brabus-carbon-detail.webp",alt:"BRABUS carbon-fiber exterior components on a G-Class",description:"Carbon bodywork and aerodynamic details. Share the exact model, model year, and component reference for fitment review."},
  {id:"brabus-wheels",brand:"BRABUS",title:"Monoblock ZV wheels",category:"Wheels",image:"/brands/brabus-forged-wheel.webp",alt:"BRABUS Monoblock ZV Platinum Edition forged wheel with black and polished spokes",description:"Monoblock ZV Platinum Edition forged wheel design. Include diameter, finish, and your vehicle specification."},
  {id:"brabus-interior",brand:"BRABUS",title:"Interior finishes",category:"Interior",image:"/brands/brabus-interior.webp",alt:"BRABUS Masterpiece G-Class interior with quilted black leather and carbon trim",description:"Cabin upholstery and trim directions. Send a reference image or part number to discuss the intended finish."},
  {id:"mansory-exterior",brand:"MANSORY",title:"Carbon bodywork",category:"Exterior & carbon",image:"/brands/mansory-carbon-detail.webp",alt:"MANSORY Venatus carbon-fiber exterior and aerodynamic detailing",description:"MANSORY exterior styling and carbon components. Identify the vehicle variant and the bodywork you want to discuss."},
  {id:"mansory-wheels",brand:"MANSORY",title:"YN.5 forged wheels",category:"Wheels",image:"/brands/mansory-forged-wheel.webp",alt:"MANSORY YN.5 forged wheel in a chrome finish",description:"YN.5 forged wheel design in chrome for model-specific review. Compatibility and availability are confirmed per inquiry."},
  {id:"mansory-interior",brand:"MANSORY",title:"Cabin details",category:"Interior",image:"/brands/mansory-interior.webp",alt:"MANSORY Venatus interior showing customized upholstery and cabin trim",description:"Interior trim and upholstery directions. Share the cabin finish and vehicle details with your parts brief."},
];

export function inquiryHref(brand: string, topic?: string) {
  const params = new URLSearchParams({ brand });
  if (topic) params.set("topic", topic);
  return `/contact?${params.toString()}`;
}
