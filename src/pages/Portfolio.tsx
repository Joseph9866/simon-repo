import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { supabase, PortfolioItem } from '../lib/supabase';

export default function Portfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Logo Design', 'Branding', 'Posters', 'Social Media', 'UI Mockups'];

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  async function fetchPortfolioItems() {
    try {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

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

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No portfolio items yet. Check back soon!</p>
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
