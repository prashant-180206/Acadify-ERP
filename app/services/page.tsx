import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  GraduationCap,
  Building2,
  CalendarCheck,
  FilePen,
  Clock,
  FileText,
  BadgeDollarSign,
  BookOpen,
  BarChart3,
  Shield,
  Headphones,
  Smartphone,
  Cloud,
  Settings,
  CheckCircle,
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      title: "Student Management System",
      description:
        "Comprehensive student lifecycle management from admission to graduation",
      icon: Users,
      features: [
        "Student Registration & Profiles",
        "Attendance Tracking",
        "Grade Management",
        "Progress Monitoring",
        "Parent Communication",
      ],
      category: "Core",
    },
    {
      title: "Faculty Management",
      description: "Complete teacher and staff administration tools",
      icon: GraduationCap,
      features: [
        "Staff Profiles & Credentials",
        "Schedule Management",
        "Performance Evaluation",
        "Professional Development",
        "Payroll Integration",
      ],
      category: "Core",
    },
    {
      title: "Academic Planning",
      description: "Curriculum and course management solutions",
      icon: BookOpen,
      features: [
        "Course Catalog Management",
        "Curriculum Planning",
        "Timetable Scheduling",
        "Resource Allocation",
        "Academic Calendar",
      ],
      category: "Academic",
    },
    {
      title: "Assessment & Grading",
      description: "Streamlined examination and evaluation processes",
      icon: FileText,
      features: [
        "Online Examinations",
        "Automated Grading",
        "Report Card Generation",
        "Performance Analytics",
        "Feedback Management",
      ],
      category: "Academic",
    },
    {
      title: "Financial Management",
      description: "Complete fee collection and financial tracking",
      icon: BadgeDollarSign,
      features: [
        "Fee Structure Management",
        "Online Payment Gateway",
        "Financial Reporting",
        "Scholarship Management",
        "Budget Planning",
      ],
      category: "Financial",
    },
    {
      title: "Attendance System",
      description: "Advanced attendance tracking with real-time monitoring",
      icon: CalendarCheck,
      features: [
        "Biometric Integration",
        "Mobile Attendance",
        "Real-time Notifications",
        "Attendance Reports",
        "Leave Management",
      ],
      category: "Operations",
    },
    {
      title: "Communication Hub",
      description: "Integrated communication platform for all stakeholders",
      icon: Smartphone,
      features: [
        "SMS & Email Notifications",
        "Parent-Teacher Communication",
        "Announcement System",
        "Discussion Forums",
        "Mobile App Integration",
      ],
      category: "Communication",
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive data analytics and business intelligence",
      icon: BarChart3,
      features: [
        "Performance Dashboards",
        "Custom Report Builder",
        "Predictive Analytics",
        "Data Visualization",
        "Compliance Reporting",
      ],
      category: "Analytics",
    },
  ];

  const additionalServices = [
    {
      title: "Cloud Infrastructure",
      description: "Secure, scalable cloud hosting with 99.9% uptime guarantee",
      icon: Cloud,
    },
    {
      title: "24/7 Technical Support",
      description: "Round-the-clock technical assistance and customer support",
      icon: Headphones,
    },
    {
      title: "Custom Integration",
      description:
        "Seamless integration with existing systems and third-party applications",
      icon: Settings,
    },
    {
      title: "Data Security",
      description:
        "Enterprise-grade security with encryption and compliance standards",
      icon: Shield,
    },
  ];

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small institutions",
      price: "$99",
      period: "/month",
      features: [
        "Up to 500 students",
        "Basic student management",
        "Attendance tracking",
        "Grade management",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing institutions",
      price: "$299",
      period: "/month",
      features: [
        "Up to 2,000 students",
        "Advanced analytics",
        "Financial management",
        "Mobile app access",
        "Priority support",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large educational institutions",
      price: "Custom",
      period: "pricing",
      features: [
        "Unlimited students",
        "Full feature access",
        "Dedicated support team",
        "Custom development",
        "On-premise deployment",
        "SLA guarantees",
      ],
      popular: false,
    },
  ];

  return (
    <main className="bg-bg min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-main to-main-dark text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive ERP Solutions for Modern Educational Institutions
          </p>
          <div className="flex justify-center">
            <Building2 className="w-16 h-16" />
          </div>
        </div>
      </div>

      {/* Core Services */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-txt mb-6">
              Core Services
            </h2>
            <p className="text-xl text-txt-muted max-w-3xl mx-auto">
              Everything you need to manage your educational institution
              efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="bg-bg-dark hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-main/10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-main" />
                      </div>
                      <Badge variant="outline">{service.category}</Badge>
                    </div>
                    <CardTitle className="text-xl text-txt mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-txt-muted text-sm">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-txt-muted"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-bg-dark py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-txt mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-txt-muted max-w-3xl mx-auto">
              Extended support and infrastructure services to ensure seamless
              operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="bg-bg text-center p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-br from-main to-main-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-txt mb-4">
                    {service.title}
                  </CardTitle>
                  <p className="text-txt-muted text-sm">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-txt mb-6">
              Pricing Plans
            </h2>
            <p className="text-xl text-txt-muted max-w-3xl mx-auto">
              Choose the perfect plan for your institution's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-bg-dark p-8 text-center ${
                  plan.popular ? "border-2 border-main" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-main text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl text-txt mb-2">
                    {plan.name}
                  </CardTitle>
                  <p className="text-txt-muted mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-txt">
                      {plan.price}
                    </span>
                    <span className="text-txt-muted">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-txt-muted"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-full font-semibold transition-colors ${
                      plan.popular
                        ? "bg-main text-white hover:bg-main-dark"
                        : "bg-bg border-2 border-main text-main hover:bg-main hover:text-white"
                    }`}
                  >
                    {plan.name === "Enterprise"
                      ? "Contact Sales"
                      : "Get Started"}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-main to-main-dark text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your educational institution with our comprehensive ERP
            solution. Contact us today for a personalized demo.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-main px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Request Demo
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-main transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
