import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react';

export default function About() {
  const skills = [
    'Brand Identity Design',
    'Logo Design',
    'Typography',
    'Color Theory',
    'Layout Design',
    'Print Design',
    'Digital Design',
    'UI/UX Design',
    'Motion Graphics',
    'Illustration',
    'Photo Editing',
    'Art Direction',
  ];

  const tools = [
    { name: 'Adobe Photoshop', level: 95 },
    { name: 'Adobe Illustrator', level: 98 },
    { name: 'Adobe InDesign', level: 90 },
    { name: 'Figma', level: 92 },
    { name: 'Adobe After Effects', level: 85 },
    { name: 'Sketch', level: 88 },
  ];

  const experience = [
    {
      role: 'Senior Graphic Designer',
      company: 'Creative Studio Inc.',
      period: '2021 - Present',
      description: 'Leading design projects for major brands, managing a team of junior designers, and developing comprehensive brand identities.',
    },
    {
      role: 'Graphic Designer',
      company: 'Design Agency Co.',
      period: '2018 - 2021',
      description: 'Created visual content for diverse clients across multiple industries, specializing in brand development and digital marketing.',
    },
    {
      role: 'Junior Designer',
      company: 'StartUp Design Lab',
      period: '2016 - 2018',
      description: 'Collaborated on various design projects, from logo creation to full brand packages, while developing core design skills.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                About Me
              </h1>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Hi! I'm Simon Mburu, a passionate graphic designer with over 8 years of experience creating visual stories that connect brands with their audiences.
                </p>
                <p>
                  My journey in design began with a fascination for how color, typography, and composition can evoke emotion and drive action. Today, I specialize in crafting cohesive brand identities and compelling visual content that helps businesses stand out in crowded markets.
                </p>
                <p>
                  I believe great design is more than aesthetics—it's about solving problems, communicating messages clearly, and creating experiences that resonate. Every project is an opportunity to blend creativity with strategy, and I approach each one with fresh eyes and genuine enthusiasm.
                </p>
                <p>
                  When I'm not designing, you'll find me exploring art galleries, sketching in coffee shops, or experimenting with new design techniques and trends.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="bg-black rounded-2xl overflow-hidden max-w-md w-full">
                <img
                  src="/simonpic.jpeg"
                  alt="Simon Mburu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Core Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-gray-50 rounded-lg text-center font-medium text-gray-800 hover:bg-orange-600 hover:text-white transition-all duration-300 hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Design Tools</h2>
          <div className="space-y-8">
            {tools.map((tool, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900">{tool.name}</span>
                  <span className="text-gray-600">{tool.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tool.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-gray-900" size={36} />
            <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-600 rounded-full" />
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-lg text-gray-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                </div>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Award className="mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-orange-100">Awards Won</div>
            </div>
            <div>
              <Heart className="mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-orange-100">Happy Clients</div>
            </div>
            <div>
              <GraduationCap className="mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold mb-2">8+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
