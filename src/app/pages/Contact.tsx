import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import contactHeroImage from '../../assets/contact/contact.jpg';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo - in production, this would send your inquiry to the temple.');
  };

  return ( 
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={contactHeroImage}
            alt="Temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Contact Us
          </h1>
          <p className="text-xl opacity-90">We're Here to Help You</p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl md:text-5xl mb-8 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                Get in Touch
              </h2>
              <p className="text-gray-700 leading-relaxed mb-12">
                Whether you have questions about temple timings, want to organize a special puja, 
                or simply wish to learn more about our activities, we're here to assist you.
              </p>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A00] to-[#8B0000] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                      Temple Address
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sri Ramalayam Temple<br />
                      Main Street, Yenugupalli Village<br />
                      Andhra Pradesh, India<br />
                      PIN: 533240
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A00] to-[#8B0000] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                      Phone
                    </h3>
                    <p className="text-gray-600">
                      +91 9XXXXXXXXX<br />
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A00] to-[#8B0000] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                      Email
                    </h3>
                    <p className="text-gray-600">
                      ramalayamkyp@gmail.com
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A00] to-[#8B0000] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                      Temple Timings
                    </h3>
                    <p className="text-gray-600">
                      Morning: 6:00 AM - 12:00 PM<br />
                      Evening: 4:00 PM - 8:00 PM<br />
                      <span className="text-sm">(Open all days of the week)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-[#F8F8F8] rounded-3xl p-8 md:p-12">
                <h3 className="text-3xl mb-6 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Send us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#222222]">
                      Your Name *
                    </label>
                    <Input
                      required
                      placeholder="Enter your full name"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#222222]">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#222222]">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#222222]">
                      Subject *
                    </label>
                    <Input
                      required
                      placeholder="What is this regarding?"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#222222]">
                      Message *
                    </label>
                    <Textarea
                      required
                      placeholder="Tell us how we can help you..."
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-[#FF7A00] to-[#8B0000] hover:from-[#FF7A00]/90 hover:to-[#8B0000]/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
              Find Us
            </h2>
            <p className="text-gray-600 text-lg">
              Located in the heart of Yenugupalli Village
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-[16/9]">
              <iframe
                src="https://maps.google.com/maps?q=16.547111,81.899167&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Ramalayam Temple Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#F8F8F8] p-6 rounded-xl">
              <h3 className="text-xl mb-3 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                What are the temple visiting hours?
              </h3>
              <p className="text-gray-600">
                The temple is open daily from 6:00 AM to 12:00 PM in the morning and 4:00 PM to 8:00 PM in the evening.
              </p>
            </div>

            <div className="bg-[#F8F8F8] p-6 rounded-xl">
              <h3 className="text-xl mb-3 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                Is there any entry fee?
              </h3>
              <p className="text-gray-600">
                No, there is no entry fee. The temple welcomes all devotees. However, donations are welcome and help in temple maintenance.
              </p>
            </div>

            <div className="bg-[#F8F8F8] p-6 rounded-xl">
              <h3 className="text-xl mb-3 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                Can I arrange special pujas?
              </h3>
              <p className="text-gray-600">
                Yes, you can arrange special pujas by contacting the temple office. Please call or email us with your requirements and preferred dates.
              </p>
            </div>

            <div className="bg-[#F8F8F8] p-6 rounded-xl">
              <h3 className="text-xl mb-3 text-[#222222]" style={{ fontFamily: 'var(--font-heading)' }}>
                Are there facilities for prasadam?
              </h3>
              <p className="text-gray-600">
                Yes, prasadam is distributed daily after the morning and evening aartis. Special prasadam is also available during festivals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}