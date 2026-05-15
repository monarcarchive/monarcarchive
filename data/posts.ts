export type JournalPost = {
  slug: string;
  title: string;
  eyebrow: string;
  date: string;
  excerpt: string;
  readTime: string;
  palette: string;
  image: string;
  imagePosition?: string;
  body: string[];
};

export const posts: JournalPost[] = [
  {
    slug: "drop-001-uniform",
    title: "Drop 001: The Everyday Uniform",
    eyebrow: "Drop notes",
    date: "May 2026",
    excerpt:
      "The first Monarc Archive drop is built around weight, shape, and pieces that can carry a full week of fits.",
    readTime: "3 min read",
    palette: "linear-gradient(135deg, #11100e 0%, #3f352c 55%, #ff3038 100%)",
    image: "/brand/products/hero-hoodie.png",
    imagePosition: "center top",
    body: [
      "Drop 001 starts with the pieces that matter most: a heavy hoodie, a structured tee, cargos with real pockets, and accessories that finish the fit without shouting over it.",
      "The goal is simple. Make the kind of clothing you can wear hard, style fast, and keep in rotation after the first photo.",
      "Expect boxier tops, practical bottoms, washed textures, and a tight color story built around black, bone, olive, crimson, and worn neutrals.",
    ],
  },
  {
    slug: "how-to-style-heavyweight-fleece",
    title: "How to Style Heavyweight Fleece",
    eyebrow: "Style guide",
    date: "May 2026",
    excerpt:
      "A heavyweight hoodie works best when the rest of the fit gives it space: straight pants, clean shoes, and one sharp accessory.",
    readTime: "2 min read",
    palette: "linear-gradient(135deg, #0f172a 0%, #27272a 58%, #e7d8c6 100%)",
    image: "/brand/products/hoodie-black-back.png",
    imagePosition: "center 28%",
    body: [
      "Start with proportion. A boxy hoodie pairs naturally with straight cargos, mesh shorts, or a cropped overshirt layered open.",
      "Keep the color story controlled. Washed black and bone can carry olive, tobacco, or crimson without the outfit getting loud.",
      "Finish with one signal piece: a beanie, cap, duffle, or sock hit that repeats a color already in the fit.",
    ],
  },
  {
    slug: "content-plan-for-launch-week",
    title: "Launch Week Content Plan",
    eyebrow: "Social",
    date: "May 2026",
    excerpt:
      "A simple posting rhythm for getting eyes on the brand: product detail, fit check, packing orders, story poll, repeat.",
    readTime: "4 min read",
    palette: "linear-gradient(135deg, #450a0a 0%, #991b1b 55%, #f8f1e6 100%)",
    image: "/brand/products/set-look.png",
    imagePosition: "center",
    body: [
      "Launch content should make people feel the product before they buy it. Show fabric weight, close-up labels, on-body proportions, and the way pieces move.",
      "A strong week can be simple: Monday product detail, Tuesday fit check, Wednesday behind-the-scenes, Thursday customer question, Friday drop reminder, weekend recap.",
      "Every post should point somewhere. Send viewers to the shop, a specific product, or the Journal story that explains the drop.",
    ],
  },
  {
    slug: "the-meaning-behind-the-crown",
    title: "The Meaning Behind the Crown",
    eyebrow: "Brand",
    date: "May 2026",
    excerpt:
      "The crown mark is built to feel like a symbol you remember fast: simple, sharp, and made to hold weight on every piece.",
    readTime: "3 min read",
    palette: "linear-gradient(135deg, #050505 0%, #1f1f1f 56%, #ff1f2d 100%)",
    image: "/brand/monarcharchive-logo.png",
    imagePosition: "center",
    body: [
      "A good mark has to work small on a chest print, loud across a hoodie back, and clean on a hat. The Monarc Archive crown is built for that range.",
      "The three red stars give the pieces a signal from across the room without turning every item into a loud graphic. They carry the same energy whether they sit above the crown, run down a sleeve, or hit the side of a cap.",
      "The mark is not meant to be over-explained. It is a stamp. A flag. A way to make every piece feel like it belongs to the same archive.",
    ],
  },
  {
    slug: "black-white-red-uniform",
    title: "Why Black, White, and Red",
    eyebrow: "Design notes",
    date: "May 2026",
    excerpt:
      "The first palette keeps the brand direct: black for the base, white for the mark, red for the signal.",
    readTime: "2 min read",
    palette: "linear-gradient(135deg, #000000 0%, #f7f7f7 48%, #ff1f2d 100%)",
    image: "/brand/products/tee-black-back.png",
    imagePosition: "center 30%",
    body: [
      "The first drop is intentionally narrow. Black makes the pieces easy to wear. White gives the crown contrast. Red gives the whole collection its pulse.",
      "A tight palette also makes styling easier. You can stack the hoodie with black pants, gray fleece, denim, or cargos and the mark still feels intentional.",
      "Future drops can move into new colors, but the first archive needs a foundation people can recognize immediately.",
    ],
  },
  {
    slug: "how-to-shoot-your-fit",
    title: "How to Shoot Your Fit",
    eyebrow: "Social",
    date: "May 2026",
    excerpt:
      "Simple ways to make fit pics hit harder: low light, clean framing, concrete textures, and one clear product moment.",
    readTime: "3 min read",
    palette: "linear-gradient(135deg, #111111 0%, #2b2b2b 55%, #737373 100%)",
    image: "/brand/products/jacket.png",
    imagePosition: "center",
    body: [
      "Start with the background. Concrete walls, parking structures, night streets, garage lighting, and plain industrial spaces all fit the Monarc Archive mood.",
      "Frame the product clearly. If the back graphic is the point, shoot from behind. If the chest mark is the point, crop higher and keep the rest of the fit quiet.",
      "Post one clean full-body shot, one close-up detail, and one motion clip. That gives people enough to understand the product without making the post feel like a catalog page.",
    ],
  },
  {
    slug: "care-guide-heavy-fleece",
    title: "Care Guide: Heavy Fleece",
    eyebrow: "Care",
    date: "May 2026",
    excerpt:
      "Keep heavyweight hoodies and sweatpants looking sharp with cold washing, low heat, and no rough drying.",
    readTime: "2 min read",
    palette: "linear-gradient(135deg, #0b0b0b 0%, #313131 60%, #bdbdbd 100%)",
    image: "/brand/products/hoodie-gray-front.png",
    imagePosition: "center 24%",
    body: [
      "Wash fleece cold and inside out. It helps protect the print, keeps the surface cleaner, and slows down fading over time.",
      "Avoid high heat. Tumble dry low or hang dry when you can. Heavy fleece can shrink and rough up if it gets blasted with heat every wash.",
      "Do not over-wash pieces that are not dirty. Airing out a hoodie between wears keeps the shape better and makes the garment last longer.",
    ],
  },
  {
    slug: "from-drop-to-archive",
    title: "From Drop to Archive",
    eyebrow: "Drop notes",
    date: "May 2026",
    excerpt:
      "Every release should feel like a chapter: a tight set of pieces, one clear mood, and a reason to remember it.",
    readTime: "3 min read",
    palette: "linear-gradient(135deg, #1a0507 0%, #111111 50%, #f8f8f8 100%)",
    image: "/brand/products/tee-white-front.png",
    imagePosition: "center 28%",
    body: [
      "A drop is more than putting products online. It is a moment with a visual language, a small set of ideas, and enough restraint that people know what they are looking at.",
      "Drop 001 is about the uniform: tee, hoodie, sweatpant, hat, jacket. Pieces that can stand alone but make more sense together.",
      "Once the drop sells through, it becomes part of the archive. The next release should build on it instead of repeating it.",
    ],
  },
  {
    slug: "three-fits-from-drop-001",
    title: "Three Fits from Drop 001",
    eyebrow: "Style guide",
    date: "May 2026",
    excerpt:
      "Three easy outfit formulas using the black hoodie, archive tee, sweatpants, hat, and varsity jacket.",
    readTime: "4 min read",
    palette: "linear-gradient(135deg, #000000 0%, #242424 50%, #ff1f2d 100%)",
    image: "/brand/products/sweatpants.png",
    imagePosition: "center",
    body: [
      "Fit one: black archive hoodie, black sweatpants, white sneakers, and the black cap. Simple, direct, and made for everyday wear.",
      "Fit two: white archive tee, varsity jacket, black pants, and a clean shoe. This lets the back graphic and jacket carry the outfit.",
      "Fit three: black tee, gray hoodie, relaxed denim, and a cap. The mix of black, gray, and white keeps the palette connected without feeling too matched.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
