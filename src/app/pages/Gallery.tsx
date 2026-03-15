import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { X } from 'lucide-react';
import trusteeImage1 from '../../assets/gallery/trusteeImage1.png';
import trusteeImage2 from '../../assets/gallery/trusteeImage2.png';
import templeArch1 from '../../assets/gallery/templeArch1.png';
import templeArch2 from '../../assets/gallery/templeArch2.png';
import templeArch3 from '../../assets/gallery/templeArch3.png';
import templeInterior1 from '../../assets/gallery/templeInterior1.png';
import templeInterior2 from '../../assets/gallery/templeInterior2.png';
import templeInterior3 from '../../assets/gallery/templeInterior3.png';
import festival1 from '../../assets/gallery/festival1.png';
import festival2 from '../../assets/gallery/festival2.png';
import festival3 from '../../assets/gallery/festival3.png';
export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryCategories = [
    {
      title: 'Temple Architecture',
      images: [
        templeArch1,
        templeArch2,
        templeArch3,
      ],
    },
    {
      title: 'Temple Interior',
      images: [
        templeInterior1,
        templeInterior2,
        templeInterior3,
      ],
    },
    {
      title: 'Festivals & Celebrations',
      images: [
        festival1,
        festival2,
        festival3,
      ],
    },
    {
      title: 'Trustee & Devotees',
      images: [
        trusteeImage1,
        trusteeImage2,
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://www.deccanchronicle.com/h-upload/2025/07/06/1935439-gqwvv2pboaay47x.webp"
            alt="Temple Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Temple Gallery
          </h1>
          <p className="text-xl opacity-90">Glimpses of Divine Moments</p>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {galleryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-3xl md:text-4xl mb-12 text-[#222222] text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                {category.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    onClick={() => setSelectedImage(image)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${category.title} ${imageIndex + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#FF7A00] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Visit CTA */}
      <section className="py-16 px-4 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl mb-4 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
            Experience the Divine
          </h3>
          <p className="text-gray-600 text-lg">
            Visit Sri Ramalayam Temple to witness these beautiful moments in person
          </p>
        </div>
      </section>
    </div>
  );
}