import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, Clock, MapPin } from 'lucide-react';
import eventsHeroImage from '../../assets/Events/eventsHeroImage.png';
import ramanamavi_image from '../../assets/Home/temple_2.png';
import Diwali_Celebrations from '../../assets/gallery/templeArch2.png';
import anniversary_Celebrations from '../../assets/Home/templeHeroImage.png';
export function Events() {
  const upcomingEvents = [
    {
      name: 'Sri Rama Navami',
      date: 'March 27, 2026',
      time: '8:00 AM - 10:00 PM',
      description: 'A grand celebration marking the birth of Lord Rama. The day begins with special abhishekam at dawn, followed by continuous recitation of Ramayana. Devotees participate in bhajans, cultural programs depicting episodes from Ramayana, and receive special prasadam.',
      image: ramanamavi_image,
      highlights: ['Special Abhishekam', 'Ramayana Parayanam', 'Cultural Programs', 'Prasadam Distribution'],
    },
    {
      name: 'Hanuman Jayanti',
      date: 'April 2, 2026',
      time: '5:00 AM - 9:00 PM',
      description: 'Celebrating the birth of Lord Hanuman with special prayers and offerings. The temple conducts elaborate pujas, Hanuman Chalisa recitation, and special offerings of sindoor and oil. Devotees observe fasts and participate in mass chanting sessions.',
      image: 'https://cdn.shopify.com/s/files/1/0815/1000/7089/files/Hanuman-granted-immortality.jpg',
      highlights: ['Hanuman Chalisa Parayanam', 'Special Offerings', 'Mass Chanting', 'Free Meals'],
    },
    {
      name: 'Diwali Celebrations',
      date: 'November 8, 2026',
      time: '6:00 AM - 10:00 PM',
      description: 'The festival of lights is celebrated with grandeur at the temple. Thousands of oil lamps illuminate the temple premises. Special lakshmi puja, fireworks display, and distribution of sweets mark this joyous occasion.',
      image: Diwali_Celebrations,
      highlights: ['Temple Illumination', 'Lakshmi Puja', 'Cultural Programs', 'Sweet Distribution'],
    },
    {
      name: 'Temple Anniversary',
      date: 'April 27, 2026',
      time: '6:00 AM - 9:00 PM',
      description: 'వైశాఖ మాసము వసంత ఋతువు శుద్ధ ఏకాదశి Annual celebration commemorating the temple establishment. The day features special pujas, religious discourses by renowned scholars, classical music and dance performances, and community feast for all devotees.',
      image: anniversary_Celebrations,
      highlights: ['Special Pujas', 'Religious Discourses', 'Cultural Performances', 'Community Feast'],
    },
  ];

  const regularEvents = [
    {
      name: 'Ekadashi Fasting',
      frequency: 'Twice a month',
      description: 'Special prayers and fasting dedicated to Lord Vishnu on the 11th day of each lunar fortnight.',
    },
    {
      name: 'Full Moon Puja',
      frequency: 'Monthly',
      description: 'Evening puja and bhajan session conducted on every full moon night.',
    },
    {
      name: 'Sundara Kanda Parayanam',
      frequency: 'Weekly (Saturdays)',
      description: 'Recitation of Sundara Kanda from the Ramayana, particularly beneficial for devotees facing obstacles.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={eventsHeroImage}
            alt="Festival Celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Events & Festivals
          </h1>
          <p className="text-xl opacity-90">Celebrate Divine Occasions with Us</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
              Upcoming Festivals
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join us in celebrating sacred occasions and experience divine blessings
            </p>
          </div>

          <div className="space-y-16">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="mb-6 space-y-3">
                    <div className="flex items-center gap-3 text-[#FF7A00]">
                      <Calendar size={20} />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock size={20} />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl mb-4 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {event.name}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-medium mb-3 text-[#222222]">Event Highlights</h4>
                    <ul className="space-y-2">
                      {event.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[#FF7A00] mt-1">•</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.name}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Events */}
      <section className="py-24 px-4 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
              Regular Events
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ongoing spiritual activities and worship services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {regularEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-[#FF7A00] text-white rounded-full text-sm font-medium">
                    {event.frequency}
                  </span>
                </div>
                <h3 className="text-2xl mb-4 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {event.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Events */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#FF7A00] to-[#8B0000] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Plan Your Visit
          </h3>
          <p className="text-lg mb-6 opacity-90">
            For special event arrangements or group visits, please contact the temple office
          </p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <MapPin size={20} />
            <span>Sri Ramalayam Temple, Yenugupalli Village</span>
          </div>
        </div>
      </section>
    </div>
  ); 
}