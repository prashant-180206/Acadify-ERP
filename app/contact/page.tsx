import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  Globe,
  Building2,
  Users,
} from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      title: "General Inquiries",
      icon: Mail,
      details: [
        { label: "Email", value: "info@acadify.com" },
        { label: "Phone", value: "+1 (555) 123-4567" },
        { label: "Hours", value: "Mon-Fri, 9:00 AM - 6:00 PM EST" },
      ],
    },
    {
      title: "Technical Support",
      icon: Headphones,
      details: [
        { label: "Email", value: "support@acadify.com" },
        { label: "Phone", value: "+1 (555) 123-4568" },
        { label: "Hours", value: "24/7 Support Available" },
      ],
    },
    {
      title: "Sales Team",
      icon: Building2,
      details: [
        { label: "Email", value: "sales@acadify.com" },
        { label: "Phone", value: "+1 (555) 123-4569" },
        { label: "Hours", value: "Mon-Fri, 8:00 AM - 8:00 PM EST" },
      ],
    },
  ];

  const offices = [
    {
      city: "New York (Headquarters)",
      address: "123 Education Avenue, Suite 500",
      zipCode: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@acadify.com",
    },
    {
      city: "San Francisco",
      address: "456 Tech Boulevard, Floor 12",
      zipCode: "San Francisco, CA 94102",
      phone: "+1 (555) 987-6543",
      email: "sf@acadify.com",
    },
    {
      city: "London",
      address: "789 Education Lane, Suite 200",
      zipCode: "London, UK EC1A 1BB",
      phone: "+44 20 7123 4567",
      email: "london@acadify.com",
    },
    {
      city: "Singapore",
      address: "321 Innovation Street, Level 15",
      zipCode: "Singapore 018989",
      phone: "+65 6123 4567",
      email: "singapore@acadify.com",
    },
  ];

  const faqs = [
    {
      question: "How do I get started with Acadify?",
      answer:
        "Simply contact our sales team for a personalized demo. We'll assess your institution's needs and recommend the best plan for you.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer 24/7 technical support, comprehensive training, implementation assistance, and ongoing maintenance to ensure smooth operations.",
    },
    {
      question: "Can Acadify integrate with our existing systems?",
      answer:
        "Yes, Acadify supports integration with most popular educational and administrative systems. Our technical team will help with seamless integration.",
    },
    {
      question: "Is my data secure with Acadify?",
      answer:
        "Absolutely. We use enterprise-grade security measures, encryption, and comply with international data protection standards including GDPR and FERPA.",
    },
    {
      question: "Do you offer training for our staff?",
      answer:
        "Yes, we provide comprehensive training programs for administrators, teachers, and staff to ensure everyone can effectively use the platform.",
    },
  ];

  return (
    <main className="bg-bg min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-main to-main-dark text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get in touch with our team of experts. We're here to help you
            transform your educational institution.
          </p>
          <div className="flex justify-center">
            <MessageCircle className="w-16 h-16" />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-txt mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-txt-muted max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card key={index} className="bg-bg-dark text-center p-8">
                  <div className="bg-main/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-main" />
                  </div>
                  <CardTitle className="text-xl text-txt mb-6">
                    {contact.title}
                  </CardTitle>
                  <div className="space-y-4">
                    {contact.details.map((detail, idx) => (
                      <div key={idx}>
                        <p className="text-sm text-txt-muted font-medium">
                          {detail.label}
                        </p>
                        <p className="text-txt">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-bg-dark p-8">
              <CardHeader className="text-center mb-8">
                <CardTitle className="text-2xl text-txt flex items-center justify-center gap-3">
                  <Send className="w-6 h-6 text-main" />
                  Send Us a Message
                </CardTitle>
                <p className="text-txt-muted">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </CardHeader>
              <CardContent>
                <form className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-txt font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg bg-bg border border-gray-600 text-txt focus:border-main focus:outline-none"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-txt font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg bg-bg border border-gray-600 text-txt focus:border-main focus:outline-none"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div>
                    <label className="block text-txt font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 rounded-lg bg-bg border border-gray-600 text-txt focus:border-main focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-txt font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full p-3 rounded-lg bg-bg border border-gray-600 text-txt focus:border-main focus:outline-none"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-txt font-medium mb-2">
                      Institution Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg bg-bg border border-gray-600 text-txt focus:border-main focus:outline-none"
                      placeholder="Enter institution name"
                    />
                  </div>
                  <div>
                    <label className="block text-txt font-medium mb-2">
                      Institution Type
                    </label>
                    <select className="w-full p-3 rounded-lg bg-bg border border-gray-600 text-txt focus:border-main focus:outline-none">
                      <option value="">Select type</option>
                      <option value="school">School</option>
                      <option value="college">College</option>
                      <option value="university">University</option>
                      <option value="training">Training Center</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-txt font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg bg-bg border border-gray-600 text-txt focus:border-main focus:outline-none"
                      placeholder="What can we help you with?"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-txt font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={6}
                      className="w-full p-3 rounded-lg bg-bg border border-gray-600 text-txt focus:border-main focus:outline-none resize-vertical"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>
                  <div className="md:col-span-2 flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="agree"
                      className="w-4 h-4 text-main"
                    />
                    <label htmlFor="agree" className="text-txt-muted text-sm">
                      I agree to receive communications from Acadify and
                      understand that I can unsubscribe at any time.
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-main text-white py-3 rounded-lg font-semibold hover:bg-main-dark transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="bg-bg-dark py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-txt mb-6">
              Our Global Offices
            </h2>
            <p className="text-xl text-txt-muted max-w-3xl mx-auto">
              We have offices worldwide to better serve our global customer base
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="bg-bg p-6">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-main" />
                    <CardTitle className="text-lg text-txt">
                      {office.city}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-txt-muted text-sm">{office.address}</p>
                    <p className="text-txt-muted text-sm">{office.zipCode}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-main" />
                    <p className="text-txt text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-main" />
                    <p className="text-txt text-sm">{office.email}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-txt mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-txt-muted max-w-3xl mx-auto">
              Find answers to common questions about our platform and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-bg-dark">
                <CardHeader>
                  <CardTitle className="text-lg text-txt">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-txt-muted">{faq.answer}</p>
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
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you find the perfect solution
            for your institution.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-main px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Us Now
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-main transition-colors flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
