import { useState } from 'react';
import { X } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail_url: string;
  problem?: string;
  process?: string;
  solution?: string;
  tools_used?: string[];
  images?: string[];
}

const portfolioItems: PortfolioItem[] = [
  // Logo Designs
  {
    id: '1',
    title: 'Prime Properties Logo',
    category: 'Logo Design',
    description: 'Modern and professional real estate branding logo design that conveys trust and reliability.',
    thumbnail_url: '/portfolio/LOGOS/PRIME PROPERTIES.png',
    problem: 'Real estate company needed a distinctive logo that represents growth, trust, and property excellence.',
    solution: 'Created a sleek geometric logo combining house and growth symbolism with modern typography.',
    tools_used: ['Adobe Illustrator', 'Adobe Photoshop'],
  },
  {
    id: '2',
    title: 'CalJay Logo Design',
    category: 'Logo Design',
    description: 'Creative and vibrant logo design for a dynamic brand.',
    thumbnail_url: '/portfolio/LOGOS/CALJAY LOGO 2.jpg',
    problem: 'Brand needed a unique and memorable visual identity.',
    solution: 'Developed a distinctive logo that captures the brand\'s energy and appeal.',
    tools_used: ['Adobe Illustrator'],
  },
  {
    id: '3',
    title: 'Professional Brand Logo',
    category: 'Logo Design',
    description: 'Corporate identity logo design combining modern aesthetics with professional appeal.',
    thumbnail_url: '/portfolio/LOGOS/LOGO SAMPLE 1.jpg',
    tools_used: ['Adobe Illustrator', 'Adobe InDesign'],
  },

  // Branding - Packaging
  {
    id: '4',
    title: 'Product Packaging Suite',
    category: 'Branding',
    description: 'Comprehensive packaging design for food product line with cohesive branding.',
    thumbnail_url: '/portfolio/PACKAGING DESIGNS/DOVE PACKAGE.jpg',
    problem: 'Food products needed premium packaging that stands out on retail shelves.',
    solution: 'Created elegant and functional packaging designs with consistent brand identity across products.',
    tools_used: ['Adobe InDesign', 'Adobe Illustrator', 'Photoshop'],
  },
  {
    id: '5',
    title: 'Fortified Flour Packaging',
    category: 'Branding',
    description: 'Modern packaging design for fortified flour product with clear messaging.',
    thumbnail_url: '/portfolio/PACKAGING DESIGNS/FORTIFIED ATTA FLOUR MOCK UP.jpg',
    tools_used: ['Adobe InDesign'],
  },
  {
    id: '6',
    title: 'Maize Flour Packaging',
    category: 'Branding',
    description: 'Clean and appealing packaging design for maize flour product line.',
    thumbnail_url: '/portfolio/PACKAGING DESIGNS/MAIZE FLOUR PRE-MIX MOCK UP.jpg',
    tools_used: ['Adobe InDesign'],
  },

  // Posters
  {
    id: '7',
    title: 'Sports Event Poster - Mbape',
    category: 'Posters',
    description: 'Dynamic sports event poster featuring professional athlete with eye-catching design.',
    thumbnail_url: '/portfolio/POSTERS/MBAPE POSTER.jpg',
    problem: 'Event needed promotional material that would attract sports enthusiasts.',
    solution: 'Created vibrant poster with bold typography and compelling imagery.',
    tools_used: ['Adobe Photoshop', 'Adobe Illustrator'],
  },
  {
    id: '8',
    title: 'Graduation Poster Design',
    category: 'Posters',
    description: 'Elegant graduation announcement poster with professional layout.',
    thumbnail_url: '/portfolio/POSTERS/CATHERINE GRADUATION POSTER.jpg',
    tools_used: ['Adobe Photoshop'],
  },
  {
    id: '9',
    title: 'Church Event Poster',
    category: 'Posters',
    description: 'Community event poster with spiritual and inclusive messaging.',
    thumbnail_url: '/portfolio/POSTERS/Church walk poster.jpg',
    tools_used: ['Adobe Photoshop'],
  },

  // Social Media Posts
  {
    id: '10',
    title: 'Real Estate Social Campaign',
    category: 'Social Media',
    description: 'Professional real estate social media graphics designed to drive engagement and inquiries.',
    thumbnail_url: '/portfolio/SOCIAL MEDIA POSTS/REAL ESTATE POST 1.jpg',
    problem: 'Real estate business needed consistent social media content to showcase properties.',
    solution: 'Created a series of visually appealing posts with property highlights and call-to-actions.',
    tools_used: ['Figma', 'Adobe Photoshop'],
  },
  {
    id: '11',
    title: 'Travel & Tourism Social Posts',
    category: 'Social Media',
    description: 'Engaging travel content for social media platforms promoting destinations and experiences.',
    thumbnail_url: '/portfolio/SOCIAL MEDIA POSTS/TRAVEL POST 1.jpg',
    tools_used: ['Figma'],
  },
  {
    id: '12',
    title: 'Food & Lifestyle Posts',
    category: 'Social Media',
    description: 'Appetizing food photography and lifestyle content for social engagement.',
    thumbnail_url: '/portfolio/SOCIAL MEDIA POSTS/Food poster 2.jpg',
    tools_used: ['Adobe Photoshop'],
  },

  // Banners
  {
    id: '13',
    title: 'Real Estate Web Banner',
    category: 'UI Mockups',
    description: 'Professional web banner for real estate marketing campaigns.',
    thumbnail_url: '/portfolio/BANNERS/WEB BANNERS/Real estate banner 1.jpg',
    problem: 'Website needed attention-grabbing banner to promote property listings.',
    solution: 'Designed high-converting banner with clear messaging and strong visual hierarchy.',
    tools_used: ['Adobe Photoshop', 'HTML/CSS'],
  },
  {
    id: '14',
    title: 'Travel Web Banner',
    category: 'UI Mockups',
    description: 'Stunning travel destination banner for tourism website.',
    thumbnail_url: '/portfolio/BANNERS/WEB BANNERS/Travel Web banner 1.jpg',
    tools_used: ['Adobe Photoshop'],
  },
  {
    id: '15',
    title: 'Creative Agency Banner',
    category: 'UI Mockups',
    description: 'Professional creative services banner showcasing agency capabilities.',
    thumbnail_url: '/portfolio/BANNERS/WEB BANNERS/CREATIVE AGENCY BANNER.jpg',
    tools_used: ['Adobe Photoshop'],
  },

  // Flyers
  {
    id: '16',
    title: 'Real Estate Flyer Series',
    category: 'Social Media',
    description: 'Professional real estate marketing flyers with property highlights.',
    thumbnail_url: '/portfolio/FLYERS/REAL ESTATE FLYER 1.jpg',
    problem: 'Real estate agent needed effective print marketing materials.',
    solution: 'Created eye-catching flyers with property details and contact information.',
    tools_used: ['Adobe InDesign', 'Adobe Photoshop'],
  },
  {
    id: '17',
    title: 'Cake Shop Promotional Flyer',
    category: 'Social Media',
    description: 'Delicious bakery flyer design promoting special cake offerings.',
    thumbnail_url: '/portfolio/FLYERS/CAKE FLYER 1.jpg',
    tools_used: ['Adobe InDesign'],
  },
  {
    id: '18',
    title: 'Crossover Event Flyer',
    category: 'Social Media',
    description: 'Event promotion flyer with bold design and clear event details.',
    thumbnail_url: '/portfolio/POSTERS/CROSSOVER FLYER.jpg',
    tools_used: ['Adobe Photoshop'],
  },

  // Brochures
  {
    id: '19',
    title: 'Travel Brochure Design',
    category: 'Branding',
    description: 'Comprehensive tri-fold brochure for travel and tourism services.',
    thumbnail_url: '/portfolio/BROCHURES/WANDERWAY TRAVELS BROCHURE FRONT CPY.jpg',
    problem: 'Travel agency needed professional collateral to showcase destinations.',
    solution: 'Created comprehensive brochure with beautiful imagery and compelling copy.',
    tools_used: ['Adobe InDesign', 'Adobe Photoshop'],
  },
  {
    id: '20',
    title: 'Tech Company Brochure',
    category: 'Branding',
    description: 'Modern technology services brochure with professional layout.',
    thumbnail_url: '/portfolio/BROCHURES/TECH BROCHURE PAGE 1 AND 2.jpg',
    tools_used: ['Adobe InDesign'],
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Logo Design', 'Branding', 'Posters', 'Social Media', 'UI Mockups'];

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-20">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Portfolio</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              A collection of my favorite projects, each with its own story and creative journey
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No portfolio items in this category.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden mb-4 relative">
                    <img
                      src={item.thumbnail_url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white font-medium">View Case Study</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm text-gray-500 font-medium">{item.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h2>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                  {selectedItem.category}
                </span>
              </div>

              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src={selectedItem.thumbnail_url}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">{selectedItem.description}</p>
              </div>

              {selectedItem.problem && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Problem</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedItem.problem}</p>
                </div>
              )}

              {selectedItem.process && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Process</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedItem.process}</p>
                </div>
              )}

              {selectedItem.solution && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Solution</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedItem.solution}</p>
                </div>
              )}

              {selectedItem.tools_used && selectedItem.tools_used.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tools_used.map((tool, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedItem.images && Array.isArray(selectedItem.images) && selectedItem.images.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Additional Images</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedItem.images.map((image, index) => (
                      <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${selectedItem.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
