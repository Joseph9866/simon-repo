import { Link } from 'react-router-dom';
import { Palette, Layers, Smartphone, FileText, Package, Zap, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Brand Identity Design',
      description: 'Complete brand identity packages including logo design, color palette, typography, and brand guidelines.',
      features: [
        'Custom logo design',
        'Brand style guide',
        'Color palette development',
        'Typography selection',
        'Business card design',
        'Stationery design',
      ],
      pricing: 'Starting at $2,500',
    },
    {
      icon: Layers,
      title: 'Graphic Design',
      description: 'Eye-catching visual content for print and digital media that captures attention and communicates effectively.',
      features: [
        'Poster design',
        'Flyer design',
        'Brochure design',
        'Infographics',
        'Presentation design',
        'Marketing materials',
      ],
      pricing: 'Starting at $500',
    },
    {
      icon: Smartphone,
      title: 'Social Media Graphics',
      description: 'Scroll-stopping social media content designed to boost engagement and build your online presence.',
      features: [
        'Instagram posts',
        'Facebook graphics',
        'LinkedIn banners',
        'Twitter headers',
        'Story templates',
        'Content calendars',
      ],
      pricing: 'Starting at $800/month',
    },
    {
      icon: FileText,
      title: 'UI/UX Design',
      description: 'Intuitive and beautiful user interfaces that deliver seamless experiences across all devices.',
      features: [
        'Website mockups',
        'Mobile app design',
        'Wireframing',
        'Prototyping',
        'User flow design',
        'Design systems',
      ],
      pricing: 'Starting at $3,000',
    },
    {
      icon: Package,
      title: 'Packaging Design',
      description: 'Product packaging that stands out on shelves and creates memorable unboxing experiences.',
      features: [
        'Product labels',
        'Box design',
        'Bag design',
        'Bottle design',
        'Dieline creation',
        '3D mockups',
      ],
      pricing: 'Starting at $1,500',
    },
    {
      icon: Zap,
      title: 'Brand Refresh',
      description: 'Modernize your existing brand to stay relevant and connect with today\'s audiences.',
      features: [
        'Logo redesign',
        'Brand audit',
        'Visual system update',
        'Style guide revision',
        'Collateral redesign',
        'Implementation support',
      ],
      pricing: 'Starting at $2,000',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive design solutions tailored to your needs, from initial concept to final delivery
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-2xl p-8 hover:bg-orange-600 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-orange-600 group-hover:bg-white rounded-xl flex items-center justify-center transition-colors">
                      <Icon className="text-white group-hover:text-orange-600 transition-colors" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-300 mb-6 leading-relaxed transition-colors">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 text-gray-700 group-hover:text-gray-200 transition-colors"
                          >
                            <CheckCircle size={18} className="flex-shrink-0 text-orange-600 group-hover:text-white" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors">
                        {service.pricing}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Discovery & Consultation</h3>
                <p className="text-gray-700 leading-relaxed">
                  We start with a detailed discussion about your project goals, target audience, brand values, and creative vision. This helps me understand your needs and create a tailored strategy.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Research & Concept Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  I dive deep into your industry, competitors, and target market. Then, I develop multiple creative concepts that align with your objectives and brand identity.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Design & Refinement</h3>
                <p className="text-gray-700 leading-relaxed">
                  You'll receive initial designs for review. Based on your feedback, I'll refine and perfect the chosen direction until it exceeds your expectations.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Delivery & Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Final files are delivered in all necessary formats, along with usage guidelines. I also provide ongoing support to ensure successful implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-orange-50 leading-relaxed">
            Let's discuss your project and create something amazing together. Get in touch for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-lg font-medium hover:bg-orange-50 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
