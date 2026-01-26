import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Sparkles, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900">
                SIMON MBURU
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-light tracking-wide">
                Graphic Designer & Visual Storyteller
              </p>
            </div>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-700 leading-relaxed">
              Transforming ideas into compelling visual narratives that resonate, engage, and inspire action.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                to="/portfolio"
                className="group px-8 py-4 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-lg font-medium hover:bg-orange-600 hover:text-white transition-all duration-300 hover:shadow-xl"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Crafting distinctive visual identities and design solutions for brands that want to make an impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-orange-600 transition-all duration-300 hover:shadow-2xl">
              <div className="w-14 h-14 bg-orange-600 group-hover:bg-white rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Palette className="text-white group-hover:text-orange-600 transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors">
                Brand Identity
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">
                Creating cohesive visual systems that capture your brand's essence and communicate your unique value.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-orange-600 transition-all duration-300 hover:shadow-2xl">
              <div className="w-14 h-14 bg-orange-600 group-hover:bg-white rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Sparkles className="text-white group-hover:text-orange-600 transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors">
                Creative Design
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">
                Producing eye-catching graphics, posters, and social media content that stops the scroll and drives engagement.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-orange-600 transition-all duration-300 hover:shadow-2xl">
              <div className="w-14 h-14 bg-orange-600 group-hover:bg-white rounded-xl flex items-center justify-center mb-6 transition-colors">
                <TrendingUp className="text-white group-hover:text-orange-600 transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors">
                UI/UX Design
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">
                Designing intuitive interfaces and user experiences that delight users and achieve business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold">Ready to Start Your Project?</h2>
          <p className="text-xl text-orange-50 leading-relaxed">
            Let's collaborate to bring your vision to life with design that stands out and delivers results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-lg font-medium hover:bg-orange-50 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Start a Conversation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
