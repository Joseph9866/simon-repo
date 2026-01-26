import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { supabase, Testimonial } from '../lib/supabase';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={20}
            className={index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="pt-20">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Testimonials</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Kind words from clients and collaborators who trusted me with their vision
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No testimonials yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
                >
                  <Quote className="absolute top-6 right-6 text-gray-200" size={48} />

                  <div className="relative z-10">
                    <div className="mb-4">{renderStars(testimonial.rating)}</div>

                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-4">
                      {testimonial.avatar_url ? (
                        <img
                          src={testimonial.avatar_url}
                          alt={testimonial.client_name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-lg">
                          {testimonial.client_name.charAt(0)}
                        </div>
                      )}

                      <div>
                        <div className="font-bold text-gray-900">{testimonial.client_name}</div>
                        {testimonial.client_role && (
                          <div className="text-sm text-gray-600">
                            {testimonial.client_role}
                            {testimonial.client_company && ` at ${testimonial.client_company}`}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-12 text-center shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Want to Work Together?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Join the growing list of satisfied clients who have elevated their brands through thoughtful design.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-orange-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">350+</div>
              <div className="text-orange-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-orange-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-orange-100">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
