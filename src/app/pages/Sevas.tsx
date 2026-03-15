import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { ExternalLink } from "lucide-react";
import templeInterior2 from '../../assets/gallery/templeInterior2.png';
import Rama_prathishta from '../../assets/sevas/Rama_prathishta.jpg';

interface Seva {
  name: string;
  nameInTelugu?: string;
  description: string;
  driveLink: string;
  thumbnail: string;
}

export function Sevas() {
  const sevas: Seva[] = [
    {
      name: "Sri Rama Navami",
      nameInTelugu: "శ్రీరామనవమి",
      description:
        "A celebration of the birth of Lord Rama celebrated with special poojas and rituals.",
      driveLink:
        "https://drive.google.com/drive/folders/1jR4VuTwpZmIAXc9u9ocHbx3Mt9ADdGXS",
      thumbnail:
        templeInterior2,
    },
    {
      name: "Mukkoti Ekadasi",
      nameInTelugu: "ముక్కోటి ఏకాదశి",
      description:
        "A sacred day in the Vaishnavite tradition marked by special temple ceremonies and fasting.",
      driveLink:
        "https://drive.google.com/drive/folders/1kAweJCPkwHZoYm2ByjOFxrjqqYPCuoaW",
      thumbnail:
        "https://oktelugu.com/wp-content/uploads/2020/12/lord-vishnu-1573694532.jpg",
    },
    {
      name: "Krishnastami",
      nameInTelugu: "కృష్ణాష్టమి",
      description:
        "Celebration of Lord Krishna's birth with devotional events and decorations.",
      driveLink:
        "https://drive.google.com/drive/folders/1KamzGKvT93CqRQeSo_uchHOcSOVxZT5g",
      thumbnail:
        "https://img.freepik.com/free-vector/wishes-card-krishna-janmashtami-festival-with-matki-vector_1017-45591.jpg?semt=ais_rp_50_assets&w=740&q=80",
    },
    {
      name: "Ramalayam Pratista",
      nameInTelugu: "రామాలయం ప్రతిష్ఠ",
      description:
        "Annual commemoration of the temple consecration with grand celebrations.",
      driveLink:
        "https://drive.google.com/drive/folders/1iPSvGiatQbU7mEGNuHRiDWePm8Bm1E5W",
      thumbnail:
        Rama_prathishta,
    },
    {
      name: "Nitya Archana",
      nameInTelugu: "నిత్య అర్చన",
      description:
        "Daily worship services with special prayers and offerings to the deities.",
      driveLink:
        "https://drive.google.com/drive/folders/example-nityaarchana",
      thumbnail:
        "https://news.tirumala.org/wp-content/uploads/2025/01/ARCHANA.jpg",
    },
    {
      name: "Ayodhya Ram Prana Pratishtha",
      nameInTelugu: "అయోధ్య రామ ప్రాణ ప్రతిష్ఠ",
      description:
        "Sacred food offering ceremony honoring Lord Rama with community feasts.",
      driveLink:
        "https://drive.google.com/drive/folders/1Y4r8QAyLt6tAqNkvItvXWdVjH0ojToWb",
      thumbnail:
        "https://www.hindustantimes.com/ht-img/img/2025/06/05/400x225/PTI01-23-2025-000455A-0_1744082899398_1749091260760.jpg",
    },
    {
      name: "Kartikamasam Deepotsavam",
      nameInTelugu: "కార్తీకమాసం దీపోత్సవం",
      description:
        "Month-long celebration of lights during Kartika month with special lamp offerings.",
      driveLink:
        "https://drive.google.com/drive/folders/1KDguz3dslcKXV7IKBMzPYeqtr3l7vWhA",
      thumbnail:
        "https://asset.gecdesigns.com/img/wallpapers/adiyogi-wallpaper-shiva-the-cosmic-dancer-lord-shiva-with-fire-background-sr20062413-cover.webp",
    },
    {
      name: "Vanabojanalu",
      nameInTelugu: "వనభోజనాలు",
      description:
        "Spring festival celebrating the season with floral decorations and special rituals.",
      driveLink:
        "https://drive.google.com/drive/folders/1AHbdw2aBSzOKz04FuhouJZB8msEUjevx",
      thumbnail:
        "https://hindutone.com/wp-content/uploads/2025/10/Karthika-Masam-and-Vanabhojanalu.jpg",
    },
    {
      name: "Varshikotsavam",
      nameInTelugu: "వార్షికోత్సవం",
      description:
        "Traditional ceremony involving sacred forest flowers and special worship.",
      driveLink:
        "https://drive.google.com/drive/folders/1Sf58H8H1tULyPF2nm67QYYfHyRXc0OM6",
      thumbnail:
        "https://templesofkerala.org/alappuzhafest/alappuzha/varshikotsavamchengannurmahadevartemple/1.jpg",
    },
    {
      name: "Vijayadashami (Seemi Puja)",
      nameInTelugu: "విజయదశమి (సెమీ పూజ)",
      description:
        "Victory festival celebrating the triumph of good over evil with tool worship.",
      driveLink:
        "https://drive.google.com/drive/folders/11dqb1YeFa_sTYrusUvxnYHp-LPvihLUk",
      thumbnail:
        "https://img.freepik.com/free-vector/elegant-happy-dussehra-cultural-indian-traditional-festival-greeting-card_1055-22010.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Ugadi",
      nameInTelugu: "ఉగాది",
      description:
        "It is believed to be the day Lord Brahma created the universe. It is a time for renewal, setting new goals, and welcoming prosperity.",
      driveLink:
        "https://drive.google.com/drive/folders/1NWQ4e1mxls6lprnSrnGJ_dXsd2WjH814",
      thumbnail:
        "https://media.istockphoto.com/id/2107255581/vector/happy-ugadi-poster-template-design-including-kalash-banana-leaf-green-mango-flowers-rangoli.jpg?s=612x612&w=0&k=20&c=dPvYwVg-srhK3O4DKX2bUx34ZSZC5FY5UeJv1Zs8WuI=",
    },
    {
      name: "Ksheerabdhi dwadasi",
      nameInTelugu: "క్షీరాబ్ధి ద్వాదశి",
      description:
        "The main highlight is the ceremonial marriage of the Tulsi plant (considered a manifestation of Goddess Lakshmi) to Lord Vishnu/Krishna (in the form of Shaligram).",
      driveLink:
        "https://drive.google.com/drive/folders/1UJOBg9ksXfRyE3I77O1bcczf_vm4IecZ",
      thumbnail:
        "https://telugu.hindutone.com/wp-content/uploads/2025/11/Ksheerabdi-Dwadashi-%E2%80%93-The-Divine-Union-of-Lakshmi-Narayana.jpg",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth Apple-like feel
      },
    },
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://www.shutterstock.com/image-photo/south-indian-temple-mural-style-260nw-2700894111.jpg"
            alt="Lord Rama Coronation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1
            className="text-6xl md:text-7xl lg:text-8xl mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Sevas
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Explore the sacred rituals and celebrations of our
            temple
          </p>
        </motion.div>
      </motion.section>

      {/* Sevas Grid Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {sevas.map((seva, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={seva.thumbnail}
                      alt={seva.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Overlay Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3
                        className="text-2xl md:text-3xl text-white mb-1"
                        style={{
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {seva.name}
                      </h3>
                      {seva.nameInTelugu && (
                        <p className="text-[#CFAF4A] text-lg">
                          {seva.nameInTelugu}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {seva.description}
                    </p>

                    <a
                      href={seva.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="w-full bg-gradient-to-r from-[#FF7A00] to-[#8B0000] hover:from-[#FF7A00]/90 hover:to-[#8B0000]/90 text-white group/btn"
                        size="lg"
                      >
                        <span className="flex items-center gap-2 justify-center">
                          View Photos & Videos
                          <ExternalLink
                            size={18}
                            className="group-hover/btn:translate-x-1 transition-transform duration-300"
                          />
                        </span>
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-24 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/10 to-[#8B0000]/10" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#222222]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Participate in Temple Sevas
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us in celebrating these sacred events and be
              part of our spiritual community. For more
              information about upcoming sevas, please contact
              the temple.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}