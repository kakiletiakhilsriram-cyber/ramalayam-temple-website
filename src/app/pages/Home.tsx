import image from "../../assets/Home/temple_2.png";
import templeHeroImage from "../../assets/Home/templeHeroImage.png";
import templeArch2 from '../../assets/gallery/templeArch2.png';
import templeArch3 from '../../assets/gallery/templeArch3.png';
import templeInterior1 from '../../assets/gallery/templeInterior1.png';
import templeInterior2 from '../../assets/gallery/templeInterior2.png';
import templeInterior3 from '../../assets/gallery/templeInterior3.png';
import festival1 from '../../assets/gallery/festival1.png';
import lakshmanaImage from "../../assets/Home/lakshmana.jpg";
import ramanamavi_image from '../../assets/Home/temple_2.png';
import anniversary_Celebrations from '../../assets/Home/templeHeroImage.png';
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar } from "lucide-react";

export function Home() {
  const deities = [
    {
      name: "Lord Rama",
      description:
        "The seventh avatar of Vishnu, embodiment of dharma and righteousness.",
      image:
        "https://d3ehumack2xlu4.cloudfront.net/uploads/products/1737528546.Ramar%20Pattabhishekam%20Photo%20Frame.jpg",
    },
    {
      name: "Goddess Sita",
      description:
        "The divine consort of Lord Rama, symbol of purity and devotion.",
      image:
        "https://i.pinimg.com/474x/5c/fa/5a/5cfa5ad47ea68bc67a94047cde6ad4b2.jpg",
    },
    {
      name: "Lakshmana",
      description:
        "The devoted brother of Rama, epitome of loyalty and service.",
      image:
        lakshmanaImage,
    },
    {
      name: "Lord Hanuman",
      description:
        "The ultimate devotee, symbol of strength and unwavering faith.",
      image:
        "https://t3.ftcdn.net/jpg/13/98/33/96/360_F_1398339672_myfUYPdopTzVJHfCjNOM0qKjDje4e8FU.jpg",
    },
  ];

  const galleryImages = [
    templeArch2,
    templeArch3,
    templeInterior1,
    templeInterior2,
    templeInterior3,
    festival1,
  ];

  const events = [
    {
      name: "Sri Rama Navami",
      date: "March 27, 2026",
      description:
        "A grand celebration marking the birth of Lord Rama with special abhishekam, Ramayana recitation, and cultural programs.",
      image:
        ramanamavi_image,
    },
    {
      name: "Hanuman Jayanti",
      date: "April 2, 2026",
      description:
        "Celebrating the birth of Lord Hanuman with special prayers, Hanuman Chalisa recitation, and special offerings.",
      image:
        "https://t3.ftcdn.net/jpg/13/98/33/96/360_F_1398339672_myfUYPdopTzVJHfCjNOM0qKjDje4e8FU.jpg",
    },
    {
      name: "Temple Anniversary",
      date: "April 27, 2026",
      description:
        "వైశాఖ మాసము వసంత ఋతువు శుద్ధ ఏకాదశి, Annual celebration commemorating the temple establishment with special pujas, religious discourses, and cultural performances.",
      image:
       anniversary_Celebrations,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={templeHeroImage}
            alt="Sri Ramalayam Temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h4
            className="mb-6 text-[68px] text-[#b50104] italic rounded-[0px]"
            style={{
              fontFamily: "var(--font-heading)",
              padding: "0px 0.5px 0px 0.5px",
            }}
          >
            <span className="italic">
              Sree Seethaaramachandra Swamy శ్రీ సీతా రామచంద్ర
              స్వామి
            </span>
          </h4>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Yenugupalli Village
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-80 max-w-2xl mx-auto">
            A sacred place of devotion and peace
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button
                size="lg"
                className="bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white px-8 py-6 text-lg"
              >
                Explore Temple
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Temple Story Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2
                className="text-4xl md:text-5xl mb-6 text-[#222222]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Sacred Heritage
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Sri Ramalayam Temple stands as a beacon of
                  spiritual devotion in Yenugupalli Village,
                  dedicated to Lord Rama and his divine family.
                  For generations, this sacred space has been
                  the heart of our community's spiritual life.
                </p>
                <p>
                  Built with devotion and maintained through the
                  collective faith of countless devotees, our
                  temple continues to serve as a place of
                  worship, meditation, and cultural
                  preservation. The temple conducts daily pujas,
                  special festivals, and religious ceremonies
                  that bring the community together in devotion.
                </p>
                <p className="text-left">
                  We invite you to experience the divine grace
                  and peaceful atmosphere that has made Sri
                  Ramalayam a cherished spiritual destination
                  for devotees from near and far. 1966 లో
                  స్థాపించబడిన పవిత్ర ప్రార్థనా స్థలం మరియు
                  సమాజం అయిన ఏనుగుపల్లిలోని రామాలయానికి స్వాగతం.
                  60 సంవత్సరాలకు పైగా, విశ్వాసం మరియు భక్తికి
                  ప్రతీకగా, అన్ని హిందూ పండుగలను, ముఖ్యంగా
                  శ్రీరామనవమి మరియు ముక్కోటి ఏకాదశిలను గొప్ప
                  ఉత్సాహంతో జరుపుకుంటున్నారు
                </p>
              </div>
              <Link to="/about">
                <Button className="mt-8 bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={image}
                  alt="Temple Architecture"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deities Section */}
      <section className="py-24 px-4 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl mb-4 text-[#222222]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Divine Deities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Worship and seek blessings from the divine
              presence at our temple
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deities.map((deity, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={deity.image}
                    alt={deity.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl mb-3 text-[#222222]"
                    style={{
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {deity.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {deity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/deities">
              <Button
                variant="outline"
                className="border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white"
              >
                View All Deities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl mb-4 text-[#222222]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Temple Gallery
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Glimpses of divine moments and sacred celebrations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {
            galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button className="bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 px-4 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl mb-4 text-[#222222]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Upcoming Events
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join us in celebrating sacred festivals and
              special occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#FF7A00] mb-3">
                    <Calendar size={18} />
                    <span className="text-sm font-medium">
                      {event.date}
                    </span>
                  </div>
                  <h3
                    className="text-xl mb-3 text-[#222222]"
                    style={{
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {event.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/events">
              <Button
                variant="outline"
                className="border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white"
              >
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}