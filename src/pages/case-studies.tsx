import { ArrowRight, TrendingUp, Globe2, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Electronics Manufacturer Enters Asian Markets',
      client: 'Mid-sized Electronics Company, Ontario',
      industry: 'Electronics & Technology',
      challenge: 'A Canadian electronics manufacturer wanted to expand into Southeast Asian markets but faced regulatory hurdles, complex shipping logistics, and cultural barriers.',
      solution: 'Conducted comprehensive market research, identified optimal distribution partners in Singapore and Malaysia, navigated regulatory compliance, and established efficient shipping routes.',
      results: [
        'Successfully entered 3 new markets within 6 months',
        'Reduced shipping costs by 28% through optimized logistics',
        'Established partnerships with 5 regional distributors',
        'Achieved 150% ROI in first year'
      ],
      metrics: {
        timeframe: '6 months',
        markets: '3 countries',
        growth: '150% ROI'
      }
    },
    {
      title: 'Automotive Parts Supplier Expands to Europe',
      client: 'Automotive Components Manufacturer, Michigan',
      industry: 'Automotive',
      challenge: 'A US-based automotive parts supplier needed to meet European quality standards and establish reliable shipping channels to serve European automakers.',
      solution: 'Guided through EU regulatory compliance, connected with European logistics partners, and facilitated introductions to tier-1 automotive suppliers.',
      results: [
        'Achieved EU certification within 4 months',
        'Secured contracts with 2 major European automakers',
        'Established just-in-time delivery system',
        'Increased annual revenue by $3.2M'
      ],
      metrics: {
        timeframe: '4 months',
        markets: '5 countries',
        growth: '$3.2M revenue'
      }
    },
    {
      title: 'Food & Beverage Brand Launches in Latin America',
      client: 'Specialty Food Producer, California',
      industry: 'Food & Beverage',
      challenge: 'A specialty food producer wanted to export to Latin American markets but lacked knowledge of import regulations, distribution networks, and cultural preferences.',
      solution: 'Conducted market analysis, identified target markets, navigated food safety regulations, and connected with regional distributors and retailers.',
      results: [
        'Launched in 4 Latin American countries',
        'Established partnerships with 12 retail chains',
        'Adapted product packaging for local preferences',
        'Generated $1.8M in first-year sales'
      ],
      metrics: {
        timeframe: '8 months',
        markets: '4 countries',
        growth: '$1.8M sales'
      }
    },
    {
      title: 'Industrial Equipment Manufacturer Enters Middle East',
      client: 'Heavy Machinery Company, Illinois',
      industry: 'Industrial Equipment',
      challenge: 'An industrial equipment manufacturer sought to enter Middle Eastern markets but faced complex customs procedures, shipping challenges for oversized cargo, and need for local service partners.',
      solution: 'Developed comprehensive market entry strategy, established relationships with freight forwarders specializing in heavy cargo, and identified qualified service partners.',
      results: [
        'Successfully shipped first equipment within 3 months',
        'Established service network in 6 countries',
        'Secured $4.5M in initial contracts',
        'Reduced shipping time by 40%'
      ],
      metrics: {
        timeframe: '3 months',
        markets: '6 countries',
        growth: '$4.5M contracts'
      }
    },
    {
      title: 'Consumer Goods Brand Scales Across North America',
      client: 'Home Goods Manufacturer, Quebec',
      industry: 'Consumer Goods',
      challenge: 'A Quebec-based manufacturer wanted to expand distribution across Canada and into the US market, requiring cross-border logistics expertise and retail partnerships.',
      solution: 'Optimized cross-border shipping processes, negotiated with major retailers, and established fulfillment centers in strategic locations.',
      results: [
        'Expanded to 10 provinces and 15 US states',
        'Secured shelf space in 400+ retail locations',
        'Reduced cross-border shipping time by 50%',
        'Doubled annual revenue within 18 months'
      ],
      metrics: {
        timeframe: '18 months',
        markets: '25 regions',
        growth: '100% revenue'
      }
    },
    {
      title: 'Textile Manufacturer Diversifies Export Markets',
      client: 'Textile & Apparel Company, North Carolina',
      industry: 'Textiles & Apparel',
      challenge: 'A textile manufacturer relied heavily on one export market and needed to diversify to reduce risk, requiring new market identification and logistics optimization.',
      solution: 'Identified emerging markets in Eastern Europe and Africa, established new shipping routes, and connected with regional buyers and distributors.',
      results: [
        'Diversified into 8 new export markets',
        'Reduced dependency on single market from 70% to 25%',
        'Increased overall export volume by 85%',
        'Improved supply chain resilience'
      ],
      metrics: {
        timeframe: '12 months',
        markets: '8 countries',
        growth: '85% volume'
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Case Studies - Real Success Stories in Global Expansion"
        description="Explore how we've helped businesses achieve 300% revenue growth, enter new markets, and build successful distribution networks. Real results from real clients."
        keywords="business case studies, international expansion success, market entry results, global trade examples, distribution success stories"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4">Real Projects, Real Results</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore how we've helped North American manufacturers successfully expand into international markets through strategic planning, logistics optimization, and market expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Left Column - Overview */}
                    <div className="md:col-span-1 space-y-4">
                      <Badge variant="outline">{study.industry}</Badge>
                      <h3 className="text-2xl font-bold text-foreground">
                        {study.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{study.client}</p>
                      
                      {/* Metrics */}
                      <div className="space-y-3 pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{study.metrics.growth}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe2 className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{study.metrics.markets}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{study.metrics.timeframe}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="md:col-span-2 space-y-6">
                      {/* Challenge */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Our Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Results Achieved</h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Proven Track Record
              </h2>
              <p className="text-lg text-muted-foreground">
                Our case studies represent just a fraction of the successful projects we've delivered
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">400+</div>
                <div className="text-sm text-muted-foreground">Distribution Partners</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">$50M+</div>
                <div className="text-sm text-muted-foreground">Client Revenue Generated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg opacity-90">
              Let's discuss how we can help your manufacturing business expand into international markets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="/contact">Get Started Today</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="/services">View Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
