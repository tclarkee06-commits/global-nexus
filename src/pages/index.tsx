import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe, TrendingUp, Users, Shield, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { OrganizationSchema } from '@/components/StructuredData';

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Global Business Consulting & International Trade Solutions"
        description="IGP Ventures provides expert consulting services in international trade, market entry strategies, and global business development. Transform your business with our proven expertise across 50+ countries."
        keywords="international trade consulting, global business development, market entry strategy, business consulting, international expansion, trade solutions"
      />
      <OrganizationSchema 
        name="IGP Ventures"
        description="International business consulting firm specializing in market entry strategies, global trade facilitation, and strategic partnerships across 50+ countries."
        url="https://igp-ventures.com"
        contactEmail="info@igp-ventures.com"
        sameAs={[
          'https://www.linkedin.com/company/igp-ventures',
          'https://twitter.com/igpventures'
        ]}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Globe className="h-4 w-4" />
              Expanding North American Businesses Globally
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Grow Your Business Into{' '}
              <span className="text-primary">New International Markets</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We help North American and Canadian manufacturers expand globally with expert shipping, logistics, and market entry strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Trusted by Leading Manufacturers
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            {[
              { name: 'Fortune 500', text: 'Fortune 500 Companies' },
              { name: 'SME', text: 'Growing SMEs' },
              { name: 'Startups', text: 'Innovative Startups' },
              { name: 'Family', text: 'Family Businesses' },
            ].map((client, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-foreground">{client.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Proven Track Record of <span className="text-primary">Global Success</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Numbers that demonstrate our commitment to your international growth
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '50+', label: 'Countries Served', icon: Globe, description: 'Global reach across 6 continents' },
                { value: '400+', label: 'Distribution Partners', icon: TrendingUp, description: 'Global network supporting manufacturers' },
                { value: '15+', label: 'Years Experience', icon: Shield, description: 'Industry expertise and knowledge' },
                { value: '98%', label: 'Client Satisfaction', icon: Target, description: 'Consistently exceeding expectations' },
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2 group">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm md:text-base text-foreground font-semibold">{stat.label}</div>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Expansion Focus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Gateway to <span className="text-primary">Global Markets</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We specialize in helping North American and Canadian manufacturers break into international markets with confidence and success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Globe,
                title: 'International Market Entry',
                description: 'Navigate complex international markets with expert guidance on regulations, customs, and local business practices.',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
              },
              {
                icon: TrendingUp,
                title: 'Strategic Growth Planning',
                description: 'Develop comprehensive expansion strategies tailored to your products, target markets, and business goals.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
              },
              {
                icon: Users,
                title: 'Partner Network Development',
                description: 'Connect with reliable distributors, logistics partners, and local experts in your target markets.',
                image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
              },
              {
                icon: Shield,
                title: 'Risk Management & Compliance',
                description: 'Ensure compliance with international trade regulations, customs requirements, and quality standards.',
                image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/50">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                  <service.icon className="absolute bottom-4 left-4 h-10 w-10 text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why North American Manufacturers <span className="text-primary">Choose Us</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We understand the unique challenges of expanding from North America into global markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Globe,
                title: 'Global Network',
                description: 'Established partnerships in 50+ countries with proven track records in international logistics and market entry.',
              },
              {
                icon: Shield,
                title: 'Regulatory Expertise',
                description: 'Deep knowledge of international trade regulations, customs procedures, and compliance requirements across markets.',
              },
              {
                icon: TrendingUp,
                title: 'Proven Success',
                description: '400+ distribution partners worldwide supporting North American manufacturers across diverse industries.',
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                description: 'Multilingual team providing personalized guidance throughout your entire international expansion journey.',
              },
              {
                icon: Target,
                title: 'Market Intelligence',
                description: 'In-depth market research and competitive analysis to identify the best opportunities for your products.',
              },
              {
                icon: CheckCircle,
                title: 'End-to-End Solutions',
                description: 'Comprehensive services from market research to shipping logistics, partner sourcing, and ongoing support.',
              },
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                <CardContent className="p-6 space-y-4">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialized expertise in helping manufacturers across key industries expand globally.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              'Consumer Electronics',
              'Industrial Equipment',
              'Automotive Parts',
              'Food & Beverage',
              'Textiles & Apparel',
              'Home & Garden',
              'Sporting Goods',
              'Building Materials',
            ].map((industry, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold group-hover:text-primary transition-colors">
                    {industry}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/industries">
                View All Industries <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Expand Your Business Globally?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's discuss how we can help you successfully enter new international markets and grow your business worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30">
                <Link to="/services">Learn More About Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
