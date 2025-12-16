import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  Target, 
  Users, 
  Shield, 
  Globe, 
  Lightbulb,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export default function Services() {
  const services = [
    {
      title: 'Shipping & Logistics Solutions',
      icon: Globe,
      description: 'Our core expertise in international shipping and logistics ensures your products reach global markets efficiently and cost-effectively. We handle everything from freight forwarding to customs clearance.',
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg',
      features: [
        'International freight forwarding (air, sea, land)',
        'Customs clearance and documentation',
        'Warehousing and distribution management',
        'Supply chain optimization',
        'Real-time shipment tracking',
        'Last-mile delivery coordination'
      ]
    },
    {
      title: 'Market Research & Analysis',
      icon: TrendingUp,
      description: 'Comprehensive market intelligence to identify opportunities and mitigate risks in target markets.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      features: [
        'Market size and growth potential analysis',
        'Competitive landscape assessment',
        'Consumer behavior and preferences research',
        'Regulatory and trade barrier analysis',
        'Market entry feasibility studies',
        'Industry trend forecasting'
      ]
    },
    {
      title: 'Business Strategy & Planning',
      icon: Target,
      description: 'Strategic guidance for successful market entry, expansion, and sustainable international growth.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      features: [
        'Market entry strategy development',
        'Business model optimization',
        'Go-to-market planning',
        'Competitive positioning strategy',
        'Growth roadmap creation',
        'Risk management frameworks'
      ]
    },
    {
      title: 'Partner Search & Networking',
      icon: Users,
      description: 'Connect with qualified distributors, agents, and strategic partners to expand your global reach.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      features: [
        'Distributor and agent identification',
        'Strategic partner sourcing',
        'Due diligence and vetting',
        'Partnership negotiation support',
        'Joint venture facilitation',
        'Network introductions and matchmaking'
      ]
    },
    {
      title: 'Regulatory & Compliance',
      icon: Shield,
      description: 'Navigate complex international regulations, customs, and legal requirements with confidence.',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg',
      features: [
        'Import/export compliance guidance',
        'Customs and tariff optimization',
        'Product certification support',
        'Legal and regulatory research',
        'Trade agreement navigation',
        'Documentation and licensing assistance'
      ]
    },
    {
      title: 'Cross-Cultural Training',
      icon: Globe,
      description: 'Develop cultural intelligence and communication skills for effective international business relationships.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      features: [
        'Cultural awareness workshops',
        'Business etiquette training',
        'Negotiation style adaptation',
        'Communication skills development',
        'Team cultural integration',
        'Country-specific briefings'
      ]
    },
    {
      title: 'Financial Planning & Analysis',
      icon: Lightbulb,
      description: 'Strategic financial guidance for international expansion, risk management, and sustainable growth.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
      features: [
        'International expansion budgeting',
        'Currency risk management',
        'Financial modeling and forecasting',
        'Investment analysis and ROI',
        'Pricing strategy optimization',
        'Cost structure analysis'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We begin by understanding your business goals, current capabilities, and target markets through in-depth consultation.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Our experts develop a customized strategy tailored to your specific needs and market opportunities.'
    },
    {
      step: '03',
      title: 'Implementation Support',
      description: 'We provide hands-on support throughout the execution phase, ensuring smooth implementation of strategies.'
    },
    {
      step: '04',
      title: 'Ongoing Optimization',
      description: 'Continuous monitoring and optimization to ensure sustained success and adapt to market changes.'
    }
  ];

  const industries = [
    'Manufacturing & Industrial',
    'Technology & Electronics',
    'Consumer Goods & Retail',
    'Healthcare & Medical Devices',
    'Automotive & Parts',
    'Food & Beverage'
  ];

  return (
    <>
      <SEO 
        title="Our Services - IGP Ventures"
        description="Comprehensive international business services including shipping & logistics, market entry strategy, trade facilitation, business development, strategic partnerships, and investment advisory."
        keywords="international business services, shipping logistics, market entry strategy, trade facilitation, business development, strategic partnerships, investment advisory"
      />
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-2">
              For North American & Canadian Manufacturers
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mx-auto">
              End-to-end international business consulting and logistics services designed to help 
              manufacturers expand globally and maximize international market success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A proven methodology that ensures successful outcomes for every client engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {process.map((item, index) => (
              <Card key={index} className="relative border-2 hover:border-primary/20 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Deep expertise across diverse sectors, enabling us to provide specialized guidance 
              tailored to your industry's unique challenges and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg border-2 hover:border-primary/20 hover:shadow-lg transition-all bg-card text-center"
              >
                <p className="font-semibold text-lg">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-50 leading-relaxed">
              Let's discuss which services are right for your business and create a customized 
              plan for your international expansion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg px-8 py-6 h-auto">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                <Link to="/case-studies">
                  View Success Stories <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
