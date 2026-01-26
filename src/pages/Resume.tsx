import { Download, Briefcase, GraduationCap, Award, Mail, Phone, MapPin } from 'lucide-react';

export default function Resume() {
  const experience = [
    {
      role: 'Senior Graphic Designer',
      company: 'Creative Studio Inc.',
      location: 'Nairobi, KE',
      period: '2021 - Present',
      responsibilities: [
        'Lead design projects for Fortune 500 companies and emerging startups',
        'Manage and mentor a team of 3 junior designers',
        'Develop comprehensive brand identities and visual systems',
        'Collaborate with marketing and product teams on strategic initiatives',
        'Increased client retention rate by 35% through exceptional design quality',
      ],
    },
    {
      role: 'Graphic Designer',
      company: 'Design Agency Co.',
      location: 'Nairobi, KE',
      period: '2018 - 2021',
      responsibilities: [
        'Created visual content for 50+ clients across various industries',
        'Specialized in brand development and digital marketing materials',
        'Designed social media campaigns that increased engagement by 200%',
        'Collaborated with cross-functional teams on integrated campaigns',
        'Won 3 industry awards for outstanding design work',
      ],
    },
    {
      role: 'Junior Designer',
      company: 'StartUp Design Lab',
      location: 'Nairobi, KE',
      period: '2016 - 2018',
      responsibilities: [
        'Assisted in various design projects from concept to completion',
        'Created logos, business cards, and marketing collateral',
        'Supported senior designers on major client projects',
        'Developed proficiency in Adobe Creative Suite',
        'Participated in brainstorming sessions and creative reviews',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Fine Arts in Graphic Design',
      school: 'School of Visual Arts',
      location: 'Nairobi, KE',
      period: '2012 - 2016',
      achievements: [
        'Graduated Summa Cum Laude (GPA: 3.9/4.0)',
        'Recipient of the Outstanding Design Student Award',
        'President of the Graphic Design Student Association',
      ],
    },
  ];

  const awards = [
    { year: '2023', title: 'Gold Award - Best Brand Identity', organization: 'American Design Awards' },
    { year: '2022', title: 'Silver Award - Logo Design', organization: 'International Design Excellence' },
    { year: '2022', title: 'Certificate of Excellence', organization: 'Communication Arts' },
    { year: '2021', title: 'Best in Show - Poster Design', organization: 'AIGA Design Competition' },
    { year: '2020', title: 'Rising Star Designer', organization: 'Creative Industry Awards' },
  ];

  const skills = {
    design: ['Brand Identity', 'Logo Design', 'Typography', 'Layout Design', 'Print Design', 'Digital Design'],
    software: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Sketch', 'After Effects'],
    other: ['Art Direction', 'Project Management', 'Client Relations', 'Team Leadership', 'Creative Strategy'],
  };

  return (
    <div className="pt-20">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">SIMON MBURU</h1>
                <p className="text-xl text-gray-600">Senior Graphic Designer</p>
              </div>
              <button className="group px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all duration-300 hover:shadow-lg flex items-center gap-2">
                <Download size={20} className="group-hover:animate-bounce" />
                Download PDF
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-12 pb-12 border-b border-gray-200">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={20} className="text-gray-500" />
                <a href="mailto:mburusimonchege@gmail.com" className="hover:text-gray-900 transition-colors">
                  mburusimonchege@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={20} className="text-gray-500" />
                <a href="tel:+254701249067" className="hover:text-gray-900 transition-colors">
                  +254 701 249067
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin size={20} className="text-gray-500" />
                <span>Nairobi, KE</span>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Creative and results-driven Senior Graphic Designer with 8+ years of experience crafting compelling
                visual narratives for diverse clients. Expert in brand identity development, digital design, and
                strategic creative direction. Proven track record of delivering innovative solutions that drive
                engagement and achieve business objectives. Passionate about mentoring emerging talent and staying
                at the forefront of design trends.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-gray-900" size={28} />
                <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
              </div>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gray-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-600 rounded-full" />
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                      <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500">
                        {exp.location} | {exp.period}
                      </p>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-gray-900" size={28} />
                <h2 className="text-3xl font-bold text-gray-900">Education</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gray-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-600 rounded-full" />
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-lg text-gray-700 font-medium">{edu.school}</p>
                      <p className="text-sm text-gray-500">
                        {edu.location} | {edu.period}
                      </p>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Design Skills</h3>
                  <ul className="space-y-2">
                    {skills.design.map((skill, index) => (
                      <li key={index} className="text-gray-700">• {skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Software</h3>
                  <ul className="space-y-2">
                    {skills.software.map((skill, index) => (
                      <li key={index} className="text-gray-700">• {skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Other Skills</h3>
                  <ul className="space-y-2">
                    {skills.other.map((skill, index) => (
                      <li key={index} className="text-gray-700">• {skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-gray-900" size={28} />
                <h2 className="text-3xl font-bold text-gray-900">Awards & Recognition</h2>
              </div>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="flex-shrink-0 font-bold text-gray-900 w-16">{award.year}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{award.title}</p>
                      <p className="text-gray-600">{award.organization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
