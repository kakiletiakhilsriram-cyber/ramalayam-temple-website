import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ramaImage from '../../assets/Deities/ramaImage.png';
import sitaImage from '../../assets/Deities/sitaImage.png';
import lakshmanaImage from '../../assets/Deities/lakshmanaImage.png';
import hanumanImage from '../../assets/Deities/hanumanImage.png'; 

export function Deities() {
  const deities = [
    {
      name: 'Lord Rama',
      title: 'The Seventh Avatar of Vishnu',
      description: 'Lord Rama is the embodiment of dharma (righteousness) and the ideal king. His life as depicted in the Ramayana serves as a moral compass for millions. He represents truth, virtue, and unwavering devotion to duty.',
      image: ramaImage,
      attributes: ['Righteousness', 'Compassion', 'Wisdom', 'Valor'],
    },
    {
      name: 'Goddess Sita',
      title: 'The Divine Consort',
      description: 'Goddess Sita is revered as the epitome of purity, devotion, and virtue. Her unwavering faith in Lord Rama and her strength during trials make her a symbol of feminine power and grace.',
      image: sitaImage,
      attributes: ['Purity', 'Devotion', 'Strength', 'Grace'],
    },
    {
      name: 'Lakshmana',
      title: 'The Devoted Brother',
      description: 'Lakshmana exemplifies the ideal of selfless service and brotherly love. His unwavering loyalty to Lord Rama and his sacrifice during the exile period serve as inspiration for devotion and duty.',
      image: lakshmanaImage,
      attributes: ['Loyalty', 'Service', 'Discipline', 'Courage'],
    },
    {
      name: 'Lord Hanuman',
      title: 'The Ultimate Devotee',
      description: 'Lord Hanuman is celebrated as the greatest devotee of Lord Rama. His extraordinary strength, intelligence, and unwavering devotion make him one of the most beloved deities in Hinduism.',
      image: hanumanImage,
      attributes: ['Devotion', 'Strength', 'Wisdom', 'Humility'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://substackcdn.com/image/fetch/$s_!vrgi!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8866edf8-2d94-4702-b9a1-6e08197fdba1_1038x576.jpeg"
            alt="Temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Divine Deities
          </h1>
          <p className="text-xl opacity-90">Seek Blessings from the Divine Presence</p>
        </div>
      </section>

      {/* Deities Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {deities.map((deity, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="mb-4">
                  <span className="text-[#FF7A00] font-medium">Deity {index + 1}</span>
                </div>
                <h2 className="text-4xl md:text-5xl mb-3 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {deity.name}
                </h2>
                <p className="text-xl text-[#CFAF4A] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  {deity.title}
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {deity.description}
                </p>
                
                <div>
                  <h3 className="text-lg font-medium mb-4 text-[#222222]">Divine Attributes</h3>
                  <div className="flex flex-wrap gap-3">
                    {deity.attributes.map((attr, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-[#FF7A00]/10 to-[#8B0000]/10 text-[#8B0000] rounded-full text-sm font-medium"
                      >
                        {attr}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={deity.image}
                    alt={deity.name}
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#FF7A00] to-[#8B0000] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Visit Us for Darshan
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the divine presence and seek blessings at Sri Ramalayam Temple
          </p>
          <div className="text-lg opacity-90">
            <p className="mb-2">Morning: 6:00 AM - 12:00 PM</p>
            <p>Evening: 4:00 PM - 8:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
}