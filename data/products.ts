export type ProductStatus = "live" | "low-stock";

export type ProductCategory = "Tops" | "Bottoms" | "Outerwear" | "Headwear" | "Sets";

export type ProductSizeStock = {
  size: string;
  quantity: number;
  sku: string;
};

export type ProductPhoto = {
  src: string;
  alt: string;
};

export type Product = {
  slug: string;
  name: string;
  sku: string;
  category: ProductCategory;
  collection: string;
  price: number;
  compareAtPrice?: number;
  status: ProductStatus;
  color: string;
  sizes: string[];
  sizeStock: ProductSizeStock[];
  description: string;
  details: string[];
  material: string;
  care: string[];
  fit: string;
  inventory: number;
  weightOz: number;
  photos: ProductPhoto[];
  image: string;
  palette: string;
  imageTone: string;
};

const photo = (src: string, alt: string): ProductPhoto => ({ src, alt });

export const products: Product[] = [
  {
    slug: "archive-heavyweight-hoodie",
    name: "Archive Crown Hoodie - Black",
    sku: "MA-D001-HOOD-BLK",
    category: "Tops",
    collection: "Drop 001",
    price: 95,
    status: "live",
    color: "Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeStock: [
      { size: "S", quantity: 4, sku: "MA-D001-HOOD-BLK-S" },
      { size: "M", quantity: 6, sku: "MA-D001-HOOD-BLK-M" },
      { size: "L", quantity: 5, sku: "MA-D001-HOOD-BLK-L" },
      { size: "XL", quantity: 3, sku: "MA-D001-HOOD-BLK-XL" },
      { size: "XXL", quantity: 2, sku: "MA-D001-HOOD-BLK-XXL" },
    ],
    description:
      "Heavy black fleece hoodie with the oversized Monarc Archive crown mark and red star sleeve hits.",
    details: ["14 oz heavyweight fleece", "Large back print", "Sleeve star print", "Double-layer hood"],
    material: "80% cotton / 20% polyester heavyweight fleece",
    care: ["Wash cold inside out", "Tumble dry low", "Do not iron print"],
    fit: "Boxy, slightly cropped",
    inventory: 20,
    weightOz: 28,
    photos: [
      photo("/brand/products/hoodie-black-back.png", "Black Monarc Archive hoodie back print"),
      photo("/brand/products/hoodie-black-front.png", "Black Monarc Archive hoodie front print"),
      photo("/brand/products/hero-hoodie.png", "Model wearing black Monarc Archive hoodie"),
    ],
    image: "/brand/products/hoodie-black-back.png",
    palette: "linear-gradient(135deg, #09090b 0%, #27272a 55%, #78716c 100%)",
    imageTone: "bg-[#151515]",
  },
  {
    slug: "crown-rib-tee",
    name: "Archive Crown Tee - White",
    sku: "MA-ESS-TEE-WHT",
    category: "Tops",
    collection: "Essentials",
    price: 45,
    status: "live",
    color: "White",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeStock: [
      { size: "S", quantity: 6, sku: "MA-ESS-TEE-WHT-S" },
      { size: "M", quantity: 9, sku: "MA-ESS-TEE-WHT-M" },
      { size: "L", quantity: 8, sku: "MA-ESS-TEE-WHT-L" },
      { size: "XL", quantity: 5, sku: "MA-ESS-TEE-WHT-XL" },
      { size: "XXL", quantity: 3, sku: "MA-ESS-TEE-WHT-XXL" },
    ],
    description:
      "White heavyweight tee with a small front crown mark and a clean relaxed shape.",
    details: ["8 oz cotton jersey", "Small chest print", "Pre-shrunk", "Woven neck label"],
    material: "100% cotton heavyweight jersey",
    care: ["Wash cold inside out", "Hang dry recommended", "Do not bleach"],
    fit: "Relaxed streetwear fit",
    inventory: 31,
    weightOz: 8,
    photos: [
      photo("/brand/products/tee-white-front.png", "White Monarc Archive tee front"),
      photo("/brand/products/tee-white-back.png", "White Monarc Archive tee back"),
    ],
    image: "/brand/products/tee-white-front.png",
    palette: "linear-gradient(135deg, #f5f5f4 0%, #d6d3d1 58%, #a7f3d0 100%)",
    imageTone: "bg-[#e8e2d8]",
  },
  {
    slug: "signal-cargo-pant",
    name: "Archive Sweatpant - Black",
    sku: "MA-D001-SWPT-BLK",
    category: "Bottoms",
    collection: "Drop 001",
    price: 80,
    status: "live",
    color: "Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeStock: [
      { size: "S", quantity: 3, sku: "MA-D001-SWPT-BLK-S" },
      { size: "M", quantity: 5, sku: "MA-D001-SWPT-BLK-M" },
      { size: "L", quantity: 5, sku: "MA-D001-SWPT-BLK-L" },
      { size: "XL", quantity: 3, sku: "MA-D001-SWPT-BLK-XL" },
      { size: "XXL", quantity: 1, sku: "MA-D001-SWPT-BLK-XXL" },
    ],
    description:
      "Black heavyweight fleece sweatpant with a relaxed leg, elastic cuff, and small archive crown hit.",
    details: ["Heavy brushed fleece", "Elastic cuff", "Internal drawcord", "Side pockets"],
    material: "80% cotton / 20% polyester brushed fleece",
    care: ["Wash cold with like colors", "Tumble dry low", "Do not bleach"],
    fit: "Relaxed straight leg",
    inventory: 17,
    weightOz: 22,
    photos: [photo("/brand/products/sweatpants.png", "Black and gray Monarc Archive sweatpants")],
    image: "/brand/products/sweatpants.png",
    palette: "linear-gradient(135deg, #1f2818 0%, #556045 58%, #bef264 100%)",
    imageTone: "bg-[#384331]",
  },
  {
    slug: "after-hours-varsity",
    name: "Archive Crown Varsity Jacket",
    sku: "MA-AH-VARS-BLK",
    category: "Outerwear",
    collection: "After Hours",
    price: 188,
    status: "low-stock",
    color: "Black / White / Red",
    sizes: ["S", "M", "L", "XL"],
    sizeStock: [
      { size: "S", quantity: 1, sku: "MA-AH-VARS-BLK-S" },
      { size: "M", quantity: 2, sku: "MA-AH-VARS-BLK-M" },
      { size: "L", quantity: 1, sku: "MA-AH-VARS-BLK-L" },
      { size: "XL", quantity: 1, sku: "MA-AH-VARS-BLK-XL" },
    ],
    description:
      "Black varsity jacket with contrast ribbing, leather-look sleeves, and a large rear crown mark.",
    details: ["Quilted lining", "Large rear print", "Contrast rib trim", "Snap closure"],
    material: "Wool-touch body with faux leather sleeves and satin lining",
    care: ["Spot clean preferred", "Dry clean recommended", "Do not machine dry"],
    fit: "True to size",
    inventory: 5,
    weightOz: 36,
    photos: [photo("/brand/products/jacket.png", "Black Monarc Archive varsity jacket back")],
    image: "/brand/products/jacket.png",
    palette: "linear-gradient(135deg, #020617 0%, #450a0a 55%, #ef4444 100%)",
    imageTone: "bg-[#141821]",
  },
  {
    slug: "midnight-thermal-long-sleeve",
    name: "Archive Crown Tee - Black",
    sku: "MA-ESS-TEE-BLK",
    category: "Tops",
    collection: "Essentials",
    price: 45,
    status: "live",
    color: "Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeStock: [
      { size: "S", quantity: 5, sku: "MA-ESS-TEE-BLK-S" },
      { size: "M", quantity: 8, sku: "MA-ESS-TEE-BLK-M" },
      { size: "L", quantity: 7, sku: "MA-ESS-TEE-BLK-L" },
      { size: "XL", quantity: 5, sku: "MA-ESS-TEE-BLK-XL" },
      { size: "XXL", quantity: 2, sku: "MA-ESS-TEE-BLK-XXL" },
    ],
    description:
      "Black heavyweight tee with a small front crown mark and a clean oversized body.",
    details: ["8 oz cotton jersey", "Small chest print", "Pre-shrunk", "Woven neck label"],
    material: "100% cotton heavyweight jersey",
    care: ["Wash cold inside out", "Hang dry recommended", "Do not bleach"],
    fit: "Oversized streetwear fit",
    inventory: 27,
    weightOz: 8,
    photos: [
      photo("/brand/products/tee-black-front.png", "Black Monarc Archive tee front"),
      photo("/brand/products/tee-black-back.png", "Black Monarc Archive tee back"),
    ],
    image: "/brand/products/tee-black-front.png",
    palette: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 58%, #93c5fd 100%)",
    imageTone: "bg-[#162033]",
  },
  {
    slug: "receipt-graphic-tee",
    name: "Archive Crown Tee - Black Back Print",
    sku: "MA-D001-TEE-BLKBACK",
    category: "Tops",
    collection: "Drop 001",
    price: 45,
    status: "live",
    color: "Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeStock: [
      { size: "S", quantity: 4, sku: "MA-D001-TEE-BLKBACK-S" },
      { size: "M", quantity: 7, sku: "MA-D001-TEE-BLKBACK-M" },
      { size: "L", quantity: 6, sku: "MA-D001-TEE-BLKBACK-L" },
      { size: "XL", quantity: 4, sku: "MA-D001-TEE-BLKBACK-XL" },
      { size: "XXL", quantity: 2, sku: "MA-D001-TEE-BLKBACK-XXL" },
    ],
    description:
      "Black tee with oversized rear crown mark, three red stars, and a small front chest hit.",
    details: ["8 oz cotton jersey", "Large back print", "Small front chest print", "Pre-shrunk"],
    material: "100% cotton heavyweight jersey",
    care: ["Wash cold inside out", "Tumble dry low", "Do not iron print"],
    fit: "Oversized streetwear fit",
    inventory: 23,
    weightOz: 8,
    photos: [
      photo("/brand/products/tee-black-back.png", "Black Monarc Archive tee back print"),
      photo("/brand/products/tee-black-front.png", "Black Monarc Archive tee front print"),
    ],
    image: "/brand/products/tee-black-back.png",
    palette: "linear-gradient(135deg, #fff7ed 0%, #e7d8c6 62%, #11100e 100%)",
    imageTone: "bg-[#eee4d4]",
  },
  {
    slug: "monarc-beanie",
    name: "Archive Crown Snapback - Black",
    sku: "MA-ACC-HAT-BLK",
    category: "Headwear",
    collection: "Accessories",
    price: 40,
    status: "live",
    color: "Black",
    sizes: ["OS"],
    sizeStock: [{ size: "OS", quantity: 40, sku: "MA-ACC-HAT-BLK-OS" }],
    description:
      "Structured black snapback with embroidered crown mark and red star side hit.",
    details: ["Structured crown", "Flat brim", "Embroidered front", "Adjustable snapback"],
    material: "Cotton twill with embroidered logo",
    care: ["Spot clean only", "Air dry", "Do not machine wash"],
    fit: "Adjustable one size",
    inventory: 40,
    weightOz: 7,
    photos: [photo("/brand/products/hats.png", "Black and white Monarc Archive hats")],
    image: "/brand/products/hats.png",
    palette: "linear-gradient(135deg, #7f1d1d 0%, #dc2626 60%, #fca5a5 100%)",
    imageTone: "bg-[#8b1e24]",
  },
  {
    slug: "archive-mesh-short",
    name: "Archive Uniform Set - Black",
    sku: "MA-D001-SET-BLK",
    category: "Sets",
    collection: "Drop 001",
    price: 155,
    compareAtPrice: 175,
    status: "live",
    color: "Black",
    sizes: ["S", "M", "L", "XL"],
    sizeStock: [
      { size: "S", quantity: 2, sku: "MA-D001-SET-BLK-S" },
      { size: "M", quantity: 5, sku: "MA-D001-SET-BLK-M" },
      { size: "L", quantity: 4, sku: "MA-D001-SET-BLK-L" },
      { size: "XL", quantity: 2, sku: "MA-D001-SET-BLK-XL" },
    ],
    description:
      "Full black hoodie and sweatpant set styled as the first Monarc Archive uniform.",
    details: ["Hoodie included", "Sweatpant included", "Set pricing", "Limited bundle quantity"],
    material: "Heavyweight fleece hoodie and matching sweatpant",
    care: ["Wash cold inside out", "Tumble dry low", "Wash set pieces together"],
    fit: "Relaxed matching set",
    inventory: 13,
    weightOz: 50,
    photos: [photo("/brand/products/set-look.png", "Full black Monarc Archive set look")],
    image: "/brand/products/set-look.png",
    palette: "linear-gradient(135deg, #030712 0%, #18181b 58%, #f5f5f4 100%)",
    imageTone: "bg-[#111111]",
  },
  {
    slug: "workshop-canvas-overshirt",
    name: "Archive Crown Hoodie - Heather Gray",
    sku: "MA-ESS-HOOD-GRY",
    category: "Tops",
    collection: "Essentials",
    price: 95,
    status: "live",
    color: "Heather Gray",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeStock: [
      { size: "S", quantity: 3, sku: "MA-ESS-HOOD-GRY-S" },
      { size: "M", quantity: 5, sku: "MA-ESS-HOOD-GRY-M" },
      { size: "L", quantity: 5, sku: "MA-ESS-HOOD-GRY-L" },
      { size: "XL", quantity: 3, sku: "MA-ESS-HOOD-GRY-XL" },
      { size: "XXL", quantity: 1, sku: "MA-ESS-HOOD-GRY-XXL" },
    ],
    description:
      "Heather gray heavyweight hoodie with sleeve stars, front crest, and oversized rear crown mark.",
    details: ["14 oz heavyweight fleece", "Front pouch pocket", "Sleeve star print", "Rib cuffs"],
    material: "80% cotton / 20% polyester heavyweight fleece",
    care: ["Wash cold inside out", "Tumble dry low", "Do not iron print"],
    fit: "Boxy, slightly cropped",
    inventory: 17,
    weightOz: 28,
    photos: [
      photo("/brand/products/hoodie-gray-front.png", "Gray Monarc Archive hoodie front"),
      photo("/brand/products/hoodie-gray-back.png", "Gray Monarc Archive hoodie back"),
    ],
    image: "/brand/products/hoodie-gray-front.png",
    palette: "linear-gradient(135deg, #3f2a1f 0%, #8b5e34 58%, #f2c078 100%)",
    imageTone: "bg-[#6f4a2e]",
  },
  {
    slug: "crown-sock-pack",
    name: "Archive Crown Hoodie - Black Front",
    sku: "MA-ESS-HOOD-BLKFR",
    category: "Tops",
    collection: "Essentials",
    price: 95,
    status: "live",
    color: "Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeStock: [
      { size: "S", quantity: 4, sku: "MA-ESS-HOOD-BLKFR-S" },
      { size: "M", quantity: 7, sku: "MA-ESS-HOOD-BLKFR-M" },
      { size: "L", quantity: 6, sku: "MA-ESS-HOOD-BLKFR-L" },
      { size: "XL", quantity: 4, sku: "MA-ESS-HOOD-BLKFR-XL" },
      { size: "XXL", quantity: 2, sku: "MA-ESS-HOOD-BLKFR-XXL" },
    ],
    description:
      "Black heavyweight hoodie with a subtle front crest and red star sleeve graphics.",
    details: ["14 oz heavyweight fleece", "Double-layer hood", "Pouch pocket", "Sleeve star print"],
    material: "80% cotton / 20% polyester heavyweight fleece",
    care: ["Wash cold inside out", "Tumble dry low", "Do not iron print"],
    fit: "Boxy, slightly cropped",
    inventory: 23,
    weightOz: 28,
    photos: [
      photo("/brand/products/hoodie-black-front.png", "Black Monarc Archive hoodie front"),
      photo("/brand/products/hoodie-black-back.png", "Black Monarc Archive hoodie back"),
    ],
    image: "/brand/products/hoodie-black-front.png",
    palette: "linear-gradient(135deg, #11100e 0%, #f8f1e6 50%, #ff3038 100%)",
    imageTone: "bg-[#241f1b]",
  },
  {
    slug: "archive-duffle",
    name: "Archive Crown Hoodie - Heather Gray Back Print",
    sku: "MA-D001-HOOD-GRYBACK",
    category: "Tops",
    collection: "Drop 001",
    price: 95,
    status: "low-stock",
    color: "Heather Gray",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeStock: [
      { size: "S", quantity: 1, sku: "MA-D001-HOOD-GRYBACK-S" },
      { size: "M", quantity: 2, sku: "MA-D001-HOOD-GRYBACK-M" },
      { size: "L", quantity: 2, sku: "MA-D001-HOOD-GRYBACK-L" },
      { size: "XL", quantity: 1, sku: "MA-D001-HOOD-GRYBACK-XL" },
      { size: "XXL", quantity: 0, sku: "MA-D001-HOOD-GRYBACK-XXL" },
    ],
    description:
      "Heather gray hoodie with oversized rear crown mark and black sleeve stars.",
    details: ["14 oz heavyweight fleece", "Large back print", "Sleeve star print", "Pouch pocket"],
    material: "80% cotton / 20% polyester heavyweight fleece",
    care: ["Wash cold inside out", "Tumble dry low", "Do not iron print"],
    fit: "Boxy, slightly cropped",
    inventory: 6,
    weightOz: 28,
    photos: [
      photo("/brand/products/hoodie-gray-back.png", "Gray Monarc Archive hoodie back"),
      photo("/brand/products/hoodie-gray-front.png", "Gray Monarc Archive hoodie front"),
    ],
    image: "/brand/products/hoodie-gray-back.png",
    palette: "linear-gradient(135deg, #111827 0%, #374151 60%, #9ca3af 100%)",
    imageTone: "bg-[#252932]",
  },
  {
    slug: "after-hours-cap",
    name: "Archive Crown Snapback - White",
    sku: "MA-AH-HAT-WHT",
    category: "Headwear",
    collection: "After Hours",
    price: 40,
    status: "live",
    color: "White",
    sizes: ["OS"],
    sizeStock: [{ size: "OS", quantity: 28, sku: "MA-AH-HAT-WHT-OS" }],
    description:
      "White snapback with embroidered crown mark and red star detail.",
    details: ["Structured crown", "Flat brim", "Embroidered front", "Adjustable snapback"],
    material: "Cotton twill with embroidered logo",
    care: ["Spot clean only", "Air dry", "Do not machine wash"],
    fit: "Adjustable one size",
    inventory: 28,
    weightOz: 7,
    photos: [photo("/brand/products/hats.png", "White Monarc Archive snapback")],
    image: "/brand/products/hats.png",
    palette: "linear-gradient(135deg, #020617 0%, #1f2937 62%, #ef4444 100%)",
    imageTone: "bg-[#0f172a]",
  },
];

export const collections = [
  {
    name: "Drop 001",
    slug: "drop-001",
    summary: "The opening capsule: heavyweight fleece, clean graphics, and daily rotation pieces.",
  },
  {
    name: "Essentials",
    slug: "essentials",
    summary: "Always-available blanks, tees, and layering pieces that keep the store selling between drops.",
  },
  {
    name: "Utility",
    slug: "utility",
    summary: "Fleece bottoms and functional silhouettes for the streetwear side of the archive.",
  },
  {
    name: "After Hours",
    slug: "after-hours",
    summary: "Ink, crimson, varsity details, and late-night pieces built for the next fit post.",
  },
  {
    name: "Accessories",
    slug: "accessories",
    summary: "Caps and add-ons built to round out an order.",
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCollection(collection: string) {
  return products.filter((product) => product.collection === collection);
}
