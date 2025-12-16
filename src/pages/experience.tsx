import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Globe, Award, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export default function ExperiencePage() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Our Experience - 15+ Years of Global Business Success"
        description="Proven track record with 400+ distribution partners, 50+ countries served, and 98% client satisfaction. Discover our expertise in international trade and market expansion."
        keywords="international business experience, global trade expertise, market entry success stories, distribution network, business consulting track record"
      />
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.gettyimages.com/id/1335295276/photo/global-connection.jpg?b=1&s=2048x2048&w=0&k=20&c=25ciUAkWXTsWNok3krLgMrE9j7cQlonfE9bSAvmZzdo="
            alt="Global business experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Experience
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Proven expertise delivering results across the globe
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Track Record</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that demonstrate our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">8+</div>
              <div className="text-lg text-muted-foreground">Years of Excellence</div>
              <p className="text-sm text-muted-foreground mt-2">Established in 2016</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">50+</div>
              <div className="text-lg text-muted-foreground">Countries Served</div>
              <p className="text-sm text-muted-foreground mt-2">Across 6 continents</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">400+</div>
              <div className="text-lg text-muted-foreground">Distribution Partners</div>
              <p className="text-sm text-muted-foreground mt-2">Global network</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">15+</div>
              <div className="text-lg text-muted-foreground">Languages Spoken</div>
              <p className="text-sm text-muted-foreground mt-2">Native speakers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose IGP Ventures</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our expertise and commitment set us apart in the international business landscape
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Industry Expertise</h3>
                <p className="text-muted-foreground mb-6">
                  Deep knowledge across multiple sectors including technology, manufacturing, finance, retail, healthcare, and professional services.
                </p>
                <ul className="space-y-2 text-muted-foreground text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Sector-specific strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Market trend analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Competitive intelligence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Dedicated Support</h3>
                <p className="text-muted-foreground mb-6">
                  Personalized attention with dedicated consultants guiding you through every step of your international expansion journey.
                </p>
                <ul className="space-y-2 text-muted-foreground text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Single point of contact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>24/7 availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Proactive communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Global Network</h3>
                <p className="text-muted-foreground mb-6">
                  Extensive partnerships and connections to facilitate your international growth and market penetration worldwide.
                </p>
                <ul className="space-y-2 text-muted-foreground text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Verified partner network</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Local market access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Strategic introductions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Client Success Metrics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable results that matter
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-muted p-8 rounded-lg text-center">
              <div className="text-5xl font-bold text-primary mb-3">95%</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Client Satisfaction</h3>
              <p className="text-muted-foreground">
                Consistently high ratings from our clients across all service areas
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg text-center">
              <div className="text-5xl font-bold text-primary mb-3">40%</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Average Revenue Growth</h3>
              <p className="text-muted-foreground">
                Clients see significant revenue increases within first year of expansion
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg text-center">
              <div className="text-5xl font-bold text-primary mb-3">85%</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Long-term Partnerships</h3>
              <p className="text-muted-foreground">
                Clients continue working with us beyond initial project scope
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Tech SaaS Expansion</h3>
                    <p className="text-sm text-muted-foreground">Software Company</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Helped a US-based SaaS company successfully enter 12 European markets within 18 months, achieving 250% revenue growth.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Markets Entered</span>
                    <span className="font-bold text-foreground">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Revenue Growth</span>
                    <span className="font-bold text-primary">250%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Timeline</span>
                    <span className="font-bold text-foreground">18 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Manufacturing Partnership</h3>
                    <p className="text-sm text-muted-foreground">Industrial Equipment</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Connected a German manufacturer with strategic partners in Asia, resulting in 40% cost reduction and expanded market reach.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Partners Found</span>
                    <span className="font-bold text-foreground">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Cost Reduction</span>
                    <span className="font-bold text-primary">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Timeline</span>
                    <span className="font-bold text-foreground">12 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <Globe className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Retail Market Entry</h3>
                    <p className="text-sm text-muted-foreground">E-commerce Brand</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Guided an Australian e-commerce brand into North American markets, achieving $5M in first-year revenue.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Markets Entered</span>
                    <span className="font-bold text-foreground">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">First Year Revenue</span>
                    <span className="font-bold text-primary">$5M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Timeline</span>
                    <span className="font-bold text-foreground">10 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Financial Services Growth</h3>
                    <p className="text-sm text-muted-foreground">Fintech Startup</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Supported a UK fintech in securing regulatory approvals and partnerships across 8 countries in Southeast Asia.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Regulatory Approvals</span>
                    <span className="font-bold text-foreground">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">User Growth</span>
                    <span className="font-bold text-primary">300%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Timeline</span>
                    <span className="font-bold text-foreground">24 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our proven experience can help your business achieve similar results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" variant="secondary">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
