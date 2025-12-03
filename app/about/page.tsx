import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  Building2,
  Target,
  Eye,
  Heart,
  Award,
  TrendingUp,
  Globe,
  Shield,
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { label: "Students Managed", value: "10,000+", icon: Users },
    { label: "Educational Institutions", value: "50+", icon: Building2 },
    { label: "Years of Experience", value: "5+", icon: Award },
    { label: "Success Rate", value: "98%", icon: TrendingUp },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "Continuously evolving with cutting-edge technology to enhance educational management.",
      icon: TrendingUp,
    },
    {
      title: "Accessibility",
      description:
        "Making education management accessible to institutions of all sizes worldwide.",
      icon: Globe,
    },
    {
      title: "Security",
      description:
        "Ensuring data privacy and security with industry-standard protection measures.",
      icon: Shield,
    },
    {
      title: "Excellence",
      description:
        "Committed to delivering exceptional service and support to our educational partners.",
      icon: Award,
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Executive Officer",
      experience: "15+ years in Educational Technology",
      specialty: "Strategic Leadership & Innovation",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      experience: "12+ years in Software Development",
      specialty: "System Architecture & Security",
    },
    {
      name: "Prof. Emily Davis",
      role: "Head of Academic Relations",
      experience: "20+ years in Higher Education",
      specialty: "Academic Process Optimization",
    },
    {
      name: "James Wilson",
      role: "Head of Customer Success",
      experience: "10+ years in Client Relations",
      specialty: "Implementation & Support",
    },
  ];

  return (
    <main className="bg-bg min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-main to-main-dark text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Acadify</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transforming Education Management Through Innovation and Excellence
          </p>
          <div className="flex justify-center">
            <GraduationCap className="w-16 h-16" />
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="bg-bg-dark p-8">
              <CardHeader className="flex flex-row items-center gap-4 pb-6">
                <Target className="w-8 h-8 text-main" />
                <CardTitle className="text-2xl text-txt">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-txt-muted text-lg leading-relaxed">
                  To revolutionize educational administration by providing
                  comprehensive, user-friendly, and scalable ERP solutions that
                  empower institutions to focus on what matters most - quality
                  education and student success.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-bg-dark p-8">
              <CardHeader className="flex flex-row items-center gap-4 pb-6">
                <Eye className="w-8 h-8 text-main" />
                <CardTitle className="text-2xl text-txt">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-txt-muted text-lg leading-relaxed">
                  To be the global leader in educational technology solutions,
                  creating a connected ecosystem where students, teachers, and
                  administrators can collaborate seamlessly for enhanced
                  learning outcomes.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-main to-main-dark text-white text-center p-6"
                >
                  <Icon className="w-8 h-8 mx-auto mb-4" />
                  <CardTitle className="text-3xl font-bold mb-2">
                    {stat.value}
                  </CardTitle>
                  <p className="text-sm opacity-90">{stat.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-bg-dark py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-txt mb-6">
              Our Story
            </h2>
            <p className="text-xl text-txt-muted max-w-3xl mx-auto leading-relaxed">
              Founded in 2020, Acadify emerged from a simple observation:
              educational institutions needed better tools to manage their
              complex operations. What started as a small team of educators and
              technologists has grown into a comprehensive platform serving
              thousands of students and hundreds of institutions worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-bg p-6">
              <CardHeader>
                <CardTitle className="text-xl text-txt flex items-center gap-3">
                  <Heart className="w-6 h-6 text-main" />
                  The Beginning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-txt-muted">
                  Started with a passion to solve real problems faced by
                  educational institutions in managing student data, attendance,
                  and academic records.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-bg p-6">
              <CardHeader>
                <CardTitle className="text-xl text-txt flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-main" />
                  Growth & Evolution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-txt-muted">
                  Expanded our platform to include comprehensive features for
                  students, teachers, and administrators, always keeping user
                  experience at the forefront.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-bg p-6">
              <CardHeader>
                <CardTitle className="text-xl text-txt flex items-center gap-3">
                  <Globe className="w-6 h-6 text-main" />
                  Global Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-txt-muted">
                  Today, we're proud to serve educational institutions across
                  multiple countries, helping them streamline operations and
                  improve student outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-txt mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-txt-muted max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-bg-dark p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="bg-main/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-main" />
                  </div>
                  <CardTitle className="text-xl text-txt mb-3">
                    {value.title}
                  </CardTitle>
                  <p className="text-txt-muted text-sm">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-bg-dark py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-txt mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-txt-muted max-w-2xl mx-auto">
              Meet the experts driving innovation in educational technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-bg p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-main to-main-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-txt mb-2">
                  {member.name}
                </CardTitle>
                <Badge variant="outline" className="mb-3">
                  {member.role}
                </Badge>
                <p className="text-txt-muted text-sm mb-2">
                  {member.experience}
                </p>
                <p className="text-txt-muted text-xs">{member.specialty}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-main to-main-dark text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of educational institutions worldwide that trust
            Acadify for their management needs.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-main px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Contact Sales
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-main transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
