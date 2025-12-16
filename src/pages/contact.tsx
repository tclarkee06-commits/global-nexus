import { useState, FormEvent } from 'react';
import { Send, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SEO } from '@/components/SEO';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        e.currentTarget.reset();
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Failed to send message' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: 'What services does IGP Ventures provide?',
      answer: 'IGP Ventures offers comprehensive international business consulting services including market research & analysis, business strategy & planning, partner search & networking, regulatory & compliance guidance, cross-cultural training, and financial planning & analysis. We help businesses successfully expand into international markets.'
    },
    {
      question: 'Which countries and regions do you serve?',
      answer: 'We have expertise across 50+ countries worldwide, with particular strength in North America, Europe, Asia-Pacific, Middle East, and Latin America. Our multilingual team and global network enable us to support market entry and expansion in virtually any region.'
    },
    {
      question: 'How long does a typical consulting engagement last?',
      answer: 'Engagement duration varies based on project scope and complexity. Market research projects typically take 4-8 weeks, while comprehensive market entry strategies can span 3-6 months. We offer both project-based and ongoing retainer arrangements to suit your needs.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We serve clients across multiple industries including Technology & Software, Manufacturing & Industrial, Financial Services, Retail & E-commerce, Healthcare & Life Sciences, Professional Services, Energy & Utilities, and Real Estate & Construction. Our consultants have deep expertise in each sector.'
    },
    {
      question: 'How do you charge for your services?',
      answer: 'We offer flexible pricing models including project-based fees, hourly rates, and monthly retainers. Pricing depends on project scope, complexity, and duration. We provide detailed proposals with transparent pricing before any engagement begins. Contact us for a customized quote.'
    },
    {
      question: 'Do you provide support after market entry?',
      answer: 'Yes, we offer ongoing support services including market monitoring, partnership management, compliance updates, and strategic advisory. Many clients engage us on a retainer basis for continued guidance as they scale their international operations.'
    },
    {
      question: 'What makes IGP Ventures different from other consultancies?',
      answer: 'Our key differentiators include: 8+ years of proven international expertise, multilingual team with local market knowledge, data-driven approach with actionable insights, end-to-end support from research to execution, and a track record of successful market entries across 50+ countries.'
    },
    {
      question: 'How do I get started with IGP Ventures?',
      answer: 'Getting started is easy! Simply fill out the contact form on this page or email us directly. We\'ll schedule an initial consultation to understand your goals, assess your needs, and propose a tailored solution. The initial consultation is complimentary.'
    },
    {
      question: 'Can you help with regulatory compliance in multiple countries?',
      answer: 'Absolutely. Regulatory compliance is one of our core services. We help navigate complex regulations across multiple jurisdictions, coordinate with local authorities, prepare compliance documentation, and establish ongoing monitoring systems to ensure continued compliance.'
    },
    {
      question: 'Do you offer training for our internal teams?',
      answer: 'Yes, we provide comprehensive cross-cultural training programs including cultural intelligence workshops, communication skills training, negotiation strategies, and market-specific business etiquette. Training can be customized for your team\'s specific needs and target markets.'
    }
  ];



  return (
    <>
      <SEO 
        title="Contact Us - IGP Ventures"
        description="Get in touch with IGP Ventures for international business consulting, market entry strategy, and global trade facilitation. Schedule a consultation with our expert team today."
        keywords="contact IGP Ventures, international business consulting, consultation request, global trade services, business inquiry"
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Get in Touch</Badge>
            <h1 className="text-5xl font-bold mb-6">Contact Us & FAQs</h1>
            <p className="text-xl text-white/90 mb-8">
              Have questions about international expansion? We're here to help. Find answers to common questions or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Find answers to the most common questions about our services
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Still have questions? We're here to help!
              </p>
              <Button size="lg" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Form */}
      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" placeholder="john.doe@company.com" required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <Input id="company" name="company" placeholder="Your Company" required />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-3 py-2 rounded-lg border border-input bg-background"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="market-research">Market Research & Analysis</option>
                      <option value="business-strategy">Business Strategy & Planning</option>
                      <option value="partner-search">Partner Search & Networking</option>
                      <option value="regulatory">Regulatory & Compliance</option>
                      <option value="training">Cross-Cultural Training</option>
                      <option value="financial">Financial Planning & Analysis</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your international expansion goals..."
                      rows={6}
                      required
                    />
                  </div>

                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                    <Send className="h-5 w-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


    </div>
    </>
  );
}
