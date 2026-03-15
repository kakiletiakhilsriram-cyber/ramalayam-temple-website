import templeHeroImage from "../../assets/Home/templeHeroImage.png";
import image from "../../assets/Home/temple_2.png";
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Clock, MapPin, Users, Heart } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Clock,
      title: 'Temple Timings',
      description: 'Morning: 6:00 AM - 12:00 PM\nEvening: 4:00 PM - 8:00 PM',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Yenugupalli Village, Andhra Pradesh, India',
    },
    {
      icon: Users,
      title: 'Community Service',
      description: 'Serving devotees and the community for generations',
    },
    {
      icon: Heart,
      title: 'Daily Pujas',
      description: 'Regular worship services and special ceremonies',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2018/07/AP-Dindi_Feature.jpg"
            alt="Temple Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            About Our Temple
          </h1>
          <p className="text-xl opacity-90">A Sacred Heritage of Devotion</p>
        </div>
      </section>

      {/* Temple History */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                Our History
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  The Sri Ramalayam Temple has been a cornerstone of spiritual life in Yenugupalli 
                  Village for many generations. Established with deep devotion to Lord Rama, the 
                  temple has witnessed countless moments of faith, prayer, and divine grace.
                </p>
                <p>
                  Through the ages, the temple has been lovingly maintained by generations of 
                  devotees who have dedicated their lives to preserving this sacred space. The 
                  architecture reflects traditional South Indian temple design, creating an 
                  atmosphere that inspires reverence and spiritual contemplation.
                </p>
                <p>
                  Today, the temple continues to serve as a spiritual beacon, hosting daily worship 
                  services, annual festivals, and community gatherings that strengthen the bonds of 
                  faith and tradition.
                </p>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={templeHeroImage}
                alt="Temple Exterior"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F8F8F8] p-8 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF7A00] to-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl mb-3 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Temple Mission */}
      <section className="py-24 px-4 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <ImageWithFallback
                src={image}
                alt="Temple Interior"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl mb-6 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                Our Mission
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Our mission is to preserve and promote the spiritual teachings of Lord Rama, 
                  providing a sacred space where devotees can connect with the divine and find 
                  peace, guidance, and spiritual fulfillment.
                </p>
                <p>
                  We are committed to:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF7A00] mt-1">•</span>
                    <span>Maintaining the temple as a center of spiritual excellence and devotion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF7A00] mt-1">•</span>
                    <span>Conducting daily pujas and special ceremonies with authenticity and reverence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF7A00] mt-1">•</span>
                    <span>Organizing cultural and religious festivals that celebrate our heritage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF7A00] mt-1">•</span>
                    <span>Serving the community through charitable activities and social services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF7A00] mt-1">•</span>
                    <span>Preserving traditional values while welcoming devotees from all backgrounds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temple Activities */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
              Temple Activities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Regular worship services and spiritual programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#FF7A00] transition-colors">
              <h3 className="text-2xl mb-4 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                Daily Pujas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Morning and evening aartis performed with traditional rituals, including 
                Abhishekam, Alankaram, and Naivedyam offerings to the deities.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#FF7A00] transition-colors">
              <h3 className="text-2xl mb-4 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                Special Ceremonies
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Conducting special pujas for devotees on auspicious occasions, festivals, 
                and personal celebrations with proper Vedic procedures.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#FF7A00] transition-colors">
              <h3 className="text-2xl mb-4 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                Religious Discourses
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Regular spiritual talks and bhajan sessions sharing the teachings from 
                Ramayana and other sacred texts to inspire devotion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
