import React from 'react';
import { BookOpen, Users, Target, Award } from 'lucide-react';

function AboutUs() {
  const stats = [
    { label: 'Active Students', value: '500+', icon: Users },
    { label: 'Courses', value: '50+', icon: BookOpen },
    { label: 'Success Rate', value: '95%', icon: Target },
    { label: 'Expert Mentors', value: '20+', icon: Award },
  ];

  const values = [
    {
      title: 'Quality Education',
      description: 'We are committed to providing high-quality, up-to-date content that aligns with industry standards and academic requirements.'
    },
    {
      title: 'Student Success',
      description: 'Our primary focus is on student achievement, providing personalized support and guidance throughout their learning journey.'
    },
    {
      title: 'Innovation',
      description: 'We continuously evolve our platform and content to incorporate the latest technologies and teaching methodologies.'
    },
    {
      title: 'Community',
      description: 'We foster a collaborative learning environment where students can connect, share knowledge, and grow together.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            About <span className="text-blue-600">SkillUp</span>
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            SkillUp is IIIT Bhagalpur's premier learning platform, dedicated to empowering students 
            with the skills and knowledge they need to excel in their academic and professional journeys.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To provide accessible, high-quality education that prepares students for success in their chosen fields,
              through innovative learning approaches and comprehensive support systems.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <a 
            href="mailto:support@skillup.iiitbh.ac.in"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;