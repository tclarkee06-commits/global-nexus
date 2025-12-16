import { Button } from '@/components/ui/button';
import { Globe, Languages, Award, Target, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="About Us - Global Business Consulting Experts"
        description="Learn about IGP Ventures' mission to connect businesses globally. With expertise across 50+ countries and 15+ years of experience, we're your trusted partner for international expansion."
        keywords="about IGP Ventures, global consulting firm, international business experts, company history, business consulting team"
      />
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.gettyimages.com/id/2220160472/photo/business-colleagues-discussing-global-strategies-in-modern-office.jpg?b=1&s=2048x2048&w=0&k=20&c=lDUNh4zXaCopW0tYEp01yxNFQUyJJzIWBz2OQZuvAcI="
            alt="Global Nexus team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About IGP Ventures
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            8+ Years of Excellence in International Business Consultancy
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founded with a vision to help North American and Canadian manufacturers expand globally, IGP Ventures has grown into a trusted partner for manufacturing companies seeking to grow their international markets. For over 8 years, we've been helping manufacturers navigate the complexities of international trade and logistics with confidence and success.
              </p>
              <p>
                Our journey began with a simple belief: that every manufacturer, regardless of size, deserves access to world-class international business expertise and logistics solutions. Today, we've helped over 200 North American manufacturers successfully enter new markets, establish distribution networks, and achieve sustainable global growth.
              </p>
              <p>
                What sets us apart is our commitment to understanding each client's unique challenges and goals. We don't believe in one-size-fits-all solutions. Instead, we craft customized strategies that align with your vision, resources, and market realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our unique combination of expertise, reach, and dedication
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Global Reach</h3>
              <p className="text-muted-foreground mb-4">
                Operating across 50+ countries with deep local market knowledge and established networks in every major business hub worldwide.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Presence in 6 continents</li>
                <li>• Local expertise in key markets</li>
                <li>• Established partner networks</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Languages className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Multilingual Team</h3>
              <p className="text-muted-foreground mb-4">
                Our diverse team speaks 15+ languages, ensuring seamless communication and cultural understanding across all markets.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Native speakers on staff</li>
                <li>• Cultural expertise</li>
                <li>• No language barriers</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Proven Track Record</h3>
              <p className="text-muted-foreground mb-4">
                400+ distribution partners worldwide with measurable business impact and long-term client relationships built on trust and results.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 95% client satisfaction rate</li>
                <li>• Average 40% revenue growth</li>
                <li>• Long-term partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower businesses of all sizes to successfully navigate and thrive in the global marketplace by providing expert guidance, strategic partnerships, and unwavering support.
              </p>
              <p className="text-muted-foreground">
                We believe that international expansion should be accessible, strategic, and successful. Our mission is to remove barriers, minimize risks, and maximize opportunities for every client we serve.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Excellence</h3>
                  <p className="text-muted-foreground">We deliver exceptional results through expertise, dedication, and attention to detail.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Integrity</h3>
                  <p className="text-muted-foreground">We operate with transparency, honesty, and ethical practices in every interaction.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Partnership</h3>
                  <p className="text-muted-foreground">We view our clients as partners, invested in their long-term success.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Innovation</h3>
                  <p className="text-muted-foreground">We continuously evolve our strategies to stay ahead of global market trends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">8+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Countries Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">400+</div>
              <div className="text-lg opacity-90">Distribution Partners</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Languages Spoken</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep expertise across multiple sectors
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Technology</h3>
              <p className="text-muted-foreground">Software, SaaS, hardware, and tech services</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Manufacturing</h3>
              <p className="text-muted-foreground">Industrial, consumer goods, and supply chain</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Finance</h3>
              <p className="text-muted-foreground">Banking, fintech, and financial services</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Retail</h3>
              <p className="text-muted-foreground">E-commerce, brick-and-mortar, and omnichannel</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Healthcare</h3>
              <p className="text-muted-foreground">Medical devices, pharma, and health services</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Professional Services</h3>
              <p className="text-muted-foreground">Consulting, legal, and business services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how Global Nexus can help your business succeed internationally
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" variant="outline">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
