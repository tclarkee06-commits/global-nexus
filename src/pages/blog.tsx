import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    id: 1,
    title: 'Navigating USMCA Trade Regulations for Canadian Manufacturers',
    excerpt: 'Understanding the United States-Mexico-Canada Agreement and how it impacts your cross-border operations.',
    category: 'Trade Regulations',
    date: 'November 15, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    content: `
      <h2>Understanding USMCA for Canadian Manufacturers</h2>
      <p>The United States-Mexico-Canada Agreement (USMCA) replaced NAFTA in 2020, bringing significant changes for manufacturers operating across North American borders. This comprehensive guide will help you navigate the key provisions and leverage opportunities.</p>
      
      <h3>Key Changes from NAFTA</h3>
      <p>USMCA introduced stricter rules of origin, particularly for automotive and textile sectors. The agreement requires 75% of automotive content to be manufactured in North America (up from 62.5% under NAFTA) to qualify for duty-free treatment.</p>
      
      <h3>Benefits for Canadian Manufacturers</h3>
      <ul>
        <li><strong>Reduced Tariffs:</strong> Continued duty-free access to US and Mexican markets for qualifying goods</li>
        <li><strong>Modernized Customs Procedures:</strong> Streamlined paperwork and faster border clearance</li>
        <li><strong>Enhanced IP Protection:</strong> Stronger intellectual property rights across all three countries</li>
        <li><strong>Digital Trade Provisions:</strong> New rules supporting e-commerce and data flows</li>
      </ul>
      
      <h3>Compliance Requirements</h3>
      <p>To benefit from USMCA preferences, manufacturers must:</p>
      <ol>
        <li>Maintain detailed records of product origin and manufacturing processes</li>
        <li>Complete proper certification of origin documentation</li>
        <li>Ensure suppliers comply with rules of origin requirements</li>
        <li>Stay updated on sector-specific provisions</li>
      </ol>
      
      <h3>Common Challenges and Solutions</h3>
      <p><strong>Challenge:</strong> Complex rules of origin calculations<br>
      <strong>Solution:</strong> Implement robust tracking systems and work with trade compliance experts</p>
      
      <p><strong>Challenge:</strong> Increased labor value content requirements<br>
      <strong>Solution:</strong> Review supply chains and consider strategic partnerships in qualifying regions</p>
      
      <h3>Next Steps for Your Business</h3>
      <p>We recommend conducting a comprehensive USMCA compliance audit to identify opportunities and ensure your operations are optimized for cross-border trade. Our team can help you navigate these regulations and maximize your competitive advantage.</p>
    `
  },
  {
    id: 2,
    title: 'Top 5 European Markets for North American Manufacturers in 2025',
    excerpt: 'Discover the most promising European markets for expansion and what makes them attractive for manufacturers.',
    category: 'Market Insights',
    date: 'November 10, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
    content: `
      <h2>Top European Markets for North American Manufacturers</h2>
      <p>Europe remains one of the most attractive regions for North American manufacturers looking to expand internationally. With a combined GDP of over $17 trillion and 450 million consumers, the European market offers tremendous opportunities.</p>
      
      <h3>1. Germany - The Manufacturing Powerhouse</h3>
      <p><strong>Why Germany?</strong> Europe's largest economy and a global leader in advanced manufacturing, Germany offers:</p>
      <ul>
        <li>Highly skilled workforce with strong engineering expertise</li>
        <li>Excellent infrastructure and logistics networks</li>
        <li>Strong demand for high-quality manufactured goods</li>
        <li>Central location for distribution across Europe</li>
      </ul>
      <p><strong>Key Sectors:</strong> Automotive, machinery, chemicals, electronics</p>
      <p><strong>Market Entry Tip:</strong> Partner with local distributors who understand the German preference for quality and precision.</p>
      
      <h3>2. United Kingdom - Post-Brexit Opportunities</h3>
      <p><strong>Why the UK?</strong> Despite Brexit, the UK remains a major market with unique advantages:</p>
      <ul>
        <li>English-speaking business environment</li>
        <li>Strong financial services sector</li>
        <li>New trade agreements creating opportunities</li>
        <li>Gateway to Commonwealth markets</li>
      </ul>
      <p><strong>Key Sectors:</strong> Aerospace, pharmaceuticals, food processing, technology</p>
      <p><strong>Market Entry Tip:</strong> Leverage the UK-Canada Trade Continuity Agreement for preferential access.</p>
      
      <h3>3. Poland - The Rising Star</h3>
      <p><strong>Why Poland?</strong> Central Europe's fastest-growing economy offers:</p>
      <ul>
        <li>Competitive labor costs with skilled workforce</li>
        <li>Strategic location between Western and Eastern Europe</li>
        <li>Growing consumer market of 38 million people</li>
        <li>EU membership benefits with lower operational costs</li>
      </ul>
      <p><strong>Key Sectors:</strong> Automotive components, electronics, furniture, food processing</p>
      <p><strong>Market Entry Tip:</strong> Consider Poland as a manufacturing base to serve broader European markets.</p>
      
      <h3>4. Netherlands - The Logistics Hub</h3>
      <p><strong>Why the Netherlands?</strong> Europe's gateway for international trade:</p>
      <ul>
        <li>Rotterdam - Europe's largest port</li>
        <li>Excellent transportation infrastructure</li>
        <li>Business-friendly environment</li>
        <li>Highly educated, multilingual workforce</li>
      </ul>
      <p><strong>Key Sectors:</strong> Food & beverage, chemicals, high-tech equipment</p>
      <p><strong>Market Entry Tip:</strong> Use the Netherlands as your European distribution center.</p>
      
      <h3>5. Spain - The Mediterranean Gateway</h3>
      <p><strong>Why Spain?</strong> Southern Europe's largest economy provides:</p>
      <ul>
        <li>Access to Spanish-speaking markets globally</li>
        <li>Growing manufacturing sector</li>
        <li>Strong renewable energy industry</li>
        <li>Competitive costs compared to Northern Europe</li>
      </ul>
      <p><strong>Key Sectors:</strong> Automotive, renewable energy, food & beverage, textiles</p>
      <p><strong>Market Entry Tip:</strong> Leverage Spain's connections to Latin American markets.</p>
      
      <h3>Conclusion</h3>
      <p>Each of these markets offers unique advantages for North American manufacturers. The key to success is understanding local business culture, regulatory requirements, and consumer preferences. Our team can help you evaluate which market is the best fit for your products and develop a tailored market entry strategy.</p>
    `
  },
  {
    id: 3,
    title: 'Supply Chain Optimization for International Shipping',
    excerpt: 'Learn how to reduce costs and improve efficiency in your international logistics operations.',
    category: 'Logistics',
    date: 'November 5, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    content: `
      <h2>Optimizing Your International Supply Chain</h2>
      <p>In today's global marketplace, an efficient supply chain is crucial for competitive advantage. This guide will help you optimize your international shipping operations and reduce costs while maintaining reliability.</p>
      
      <h3>Understanding Your Supply Chain</h3>
      <p>Before optimization, map your entire supply chain:</p>
      <ul>
        <li>Identify all suppliers and their locations</li>
        <li>Document transportation routes and methods</li>
        <li>Track inventory levels at each stage</li>
        <li>Measure lead times and variability</li>
        <li>Calculate total landed costs</li>
      </ul>
      
      <h3>Key Optimization Strategies</h3>
      
      <h4>1. Consolidate Shipments</h4>
      <p>Combining multiple smaller shipments into larger ones can significantly reduce per-unit shipping costs. Consider:</p>
      <ul>
        <li>Full Container Load (FCL) vs Less than Container Load (LCL)</li>
        <li>Multi-country consolidation centers</li>
        <li>Coordinating with other shippers for shared containers</li>
      </ul>
      
      <h4>2. Choose the Right Shipping Mode</h4>
      <p>Balance cost, speed, and reliability:</p>
      <ul>
        <li><strong>Ocean Freight:</strong> Most cost-effective for large volumes, 20-45 days transit</li>
        <li><strong>Air Freight:</strong> Fast but expensive, 3-7 days transit</li>
        <li><strong>Rail Freight:</strong> Good middle ground for certain routes</li>
        <li><strong>Intermodal:</strong> Combine modes for optimal cost/speed balance</li>
      </ul>
      
      <h4>3. Optimize Inventory Management</h4>
      <p>Reduce carrying costs while maintaining service levels:</p>
      <ul>
        <li>Implement just-in-time (JIT) principles where appropriate</li>
        <li>Use demand forecasting to optimize stock levels</li>
        <li>Consider regional distribution centers</li>
        <li>Implement safety stock calculations</li>
      </ul>
      
      <h4>4. Leverage Technology</h4>
      <p>Modern supply chain management tools provide:</p>
      <ul>
        <li>Real-time shipment tracking</li>
        <li>Automated documentation</li>
        <li>Predictive analytics for demand planning</li>
        <li>Integration with suppliers and customers</li>
      </ul>
      
      <h3>Cost Reduction Tactics</h3>
      
      <h4>Negotiate Better Rates</h4>
      <ul>
        <li>Consolidate volume with fewer carriers</li>
        <li>Commit to annual contracts for better rates</li>
        <li>Use freight forwarders for better negotiating power</li>
        <li>Review and renegotiate contracts annually</li>
      </ul>
      
      <h4>Reduce Customs Delays</h4>
      <ul>
        <li>Ensure accurate documentation</li>
        <li>Use harmonized tariff codes correctly</li>
        <li>Consider free trade agreements</li>
        <li>Work with experienced customs brokers</li>
      </ul>
      
      <h3>Risk Management</h3>
      <p>Protect your supply chain from disruptions:</p>
      <ul>
        <li>Diversify suppliers and routes</li>
        <li>Maintain safety stock for critical items</li>
        <li>Purchase cargo insurance</li>
        <li>Monitor geopolitical risks</li>
        <li>Have contingency plans for major disruptions</li>
      </ul>
      
      <h3>Measuring Success</h3>
      <p>Track these key performance indicators:</p>
      <ul>
        <li>On-time delivery rate</li>
        <li>Total landed cost per unit</li>
        <li>Inventory turnover ratio</li>
        <li>Order accuracy rate</li>
        <li>Supply chain cycle time</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>Supply chain optimization is an ongoing process. Start with a comprehensive audit of your current operations, identify the biggest pain points, and implement changes incrementally. Our team can help you analyze your supply chain and develop a customized optimization strategy.</p>
    `
  },
  {
    id: 4,
    title: 'Understanding Import Duties and Tariffs: A Complete Guide',
    excerpt: 'Navigate the complex world of import duties, tariffs, and how to minimize your costs legally.',
    category: 'Compliance',
    date: 'October 28, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    content: `
      <h2>Complete Guide to Import Duties and Tariffs</h2>
      <p>Understanding import duties and tariffs is essential for any manufacturer engaged in international trade. This comprehensive guide will help you navigate the complexities and minimize your costs.</p>
      
      <h3>What Are Import Duties and Tariffs?</h3>
      <p><strong>Import Duties:</strong> Taxes imposed by a government on goods imported into the country. These are typically calculated as a percentage of the declared value of goods.</p>
      <p><strong>Tariffs:</strong> Specific types of duties, often used interchangeably with import duties. Can be ad valorem (percentage of value) or specific (fixed amount per unit).</p>
      
      <h3>Types of Duties</h3>
      
      <h4>1. Ad Valorem Duties</h4>
      <p>Calculated as a percentage of the product's value:</p>
      <ul>
        <li>Most common type of duty</li>
        <li>Example: 5% duty on $10,000 shipment = $500</li>
        <li>Varies by product classification (HS code)</li>
      </ul>
      
      <h4>2. Specific Duties</h4>
      <p>Fixed amount per unit of measurement:</p>
      <ul>
        <li>Based on weight, volume, or quantity</li>
        <li>Example: $2 per kilogram</li>
        <li>Common for agricultural products</li>
      </ul>
      
      <h4>3. Compound Duties</h4>
      <p>Combination of ad valorem and specific duties:</p>
      <ul>
        <li>Example: 5% + $1 per unit</li>
        <li>Less common but important to recognize</li>
      </ul>
      
      <h4>4. Anti-Dumping Duties</h4>
      <p>Additional duties to protect domestic industries:</p>
      <ul>
        <li>Imposed when products are sold below fair market value</li>
        <li>Can be substantial (50%+ in some cases)</li>
        <li>Country and product-specific</li>
      </ul>
      
      <h3>How Duties Are Calculated</h3>
      
      <h4>Step 1: Product Classification</h4>
      <p>Every product is assigned a Harmonized System (HS) code:</p>
      <ul>
        <li>6-10 digit code depending on country</li>
        <li>Determines applicable duty rate</li>
        <li>Must be accurate to avoid penalties</li>
      </ul>
      
      <h4>Step 2: Determine Value</h4>
      <p>Customs value typically includes:</p>
      <ul>
        <li>Product cost (FOB price)</li>
        <li>International shipping costs</li>
        <li>Insurance</li>
        <li>May include assists, royalties, or commissions</li>
      </ul>
      
      <h4>Step 3: Apply Duty Rate</h4>
      <p>Duty rate depends on:</p>
      <ul>
        <li>Product HS code</li>
        <li>Country of origin</li>
        <li>Applicable trade agreements</li>
        <li>Any special programs or exemptions</li>
      </ul>
      
      <h3>Strategies to Minimize Duties</h3>
      
      <h4>1. Leverage Free Trade Agreements</h4>
      <p>Take advantage of preferential rates:</p>
      <ul>
        <li>USMCA for North American trade</li>
        <li>CETA (Canada-EU Trade Agreement)</li>
        <li>CPTPP (Comprehensive and Progressive Agreement for Trans-Pacific Partnership)</li>
        <li>Requires proper documentation and rules of origin compliance</li>
      </ul>
      
      <h4>2. Optimize Product Classification</h4>
      <ul>
        <li>Work with customs brokers to ensure accurate HS codes</li>
        <li>Some products may qualify under multiple codes</li>
        <li>Choose classification with lowest duty rate when legitimate</li>
        <li>Request binding rulings for certainty</li>
      </ul>
      
      <h4>3. Consider Duty Drawback Programs</h4>
      <ul>
        <li>Recover duties on imported materials used in exported products</li>
        <li>Can recover up to 99% of duties paid</li>
        <li>Requires detailed record-keeping</li>
        <li>Available in most countries</li>
      </ul>
      
      <h4>4. Use Foreign Trade Zones (FTZs)</h4>
      <ul>
        <li>Defer, reduce, or eliminate duties</li>
        <li>Store goods duty-free until entering commerce</li>
        <li>Manufacture products with duty only on finished goods</li>
        <li>Available in major ports and cities</li>
      </ul>
      
      <h4>5. Explore Temporary Import Programs</h4>
      <ul>
        <li>ATA Carnet for temporary imports (samples, equipment)</li>
        <li>Temporary Import Bond (TIB)</li>
        <li>Duty-free for goods that will be re-exported</li>
      </ul>
      
      <h3>Compliance Best Practices</h3>
      
      <h4>Documentation Requirements</h4>
      <ul>
        <li>Commercial invoice</li>
        <li>Packing list</li>
        <li>Bill of lading or airway bill</li>
        <li>Certificate of origin (for FTA claims)</li>
        <li>Import permits (if required)</li>
      </ul>
      
      <h4>Record Keeping</h4>
      <ul>
        <li>Maintain records for 5-7 years (varies by country)</li>
        <li>Document basis for HS code classification</li>
        <li>Keep proof of origin for FTA claims</li>
        <li>Retain all correspondence with customs</li>
      </ul>
      
      <h4>Avoid Common Mistakes</h4>
      <ul>
        <li>Incorrect HS code classification</li>
        <li>Undervaluing goods</li>
        <li>Missing documentation</li>
        <li>Failing to declare all costs</li>
        <li>Not claiming available exemptions</li>
      </ul>
      
      <h3>Working with Customs Brokers</h3>
      <p>Professional customs brokers can:</p>
      <ul>
        <li>Ensure accurate classification and valuation</li>
        <li>Handle documentation and filing</li>
        <li>Identify duty-saving opportunities</li>
        <li>Manage compliance and audits</li>
        <li>Provide guidance on regulations</li>
      </ul>
      
      <h3>Staying Current</h3>
      <p>Duty rates and regulations change frequently:</p>
      <ul>
        <li>Monitor trade policy developments</li>
        <li>Subscribe to customs agency updates</li>
        <li>Review classifications annually</li>
        <li>Conduct periodic compliance audits</li>
      </ul>
      
      <h3>Get Expert Help</h3>
      <p>Navigating import duties and tariffs can be complex. Our team of trade compliance experts can help you minimize costs while ensuring full compliance with all regulations. Contact us for a comprehensive duty analysis and optimization strategy.</p>
    `
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-background">
        {/* Article Header */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-background border-b">
          <div className="container mx-auto px-4 py-12">
            <Button
              variant="ghost"
              onClick={() => setSelectedPost(null)}
              className="mb-6"
            >
              ← Back to Blog
            </Button>
            
            <div className="max-w-4xl">
              <Badge className="mb-4">{selectedPost.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{selectedPost.title}</h1>
              
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Image */}
        <div className="container mx-auto px-4 -mt-8">
          <div className="max-w-4xl">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl prose prose-lg max-w-none">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              style={{
                lineHeight: '1.8',
              }}
            />
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mt-12 p-8 bg-primary/5 rounded-lg border">
            <h3 className="text-2xl font-bold mb-4">Need Help With International Expansion?</h3>
            <p className="text-muted-foreground mb-6">
              Our team of experts can help you navigate the complexities of international trade and expand your business globally.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-background border-b">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4">Resources & Insights</Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              International Trade <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert insights, guides, and updates on international trade, logistics, and market expansion for North American manufacturers.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredPosts.map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge>{post.category}</Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-background border-t">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Expand Your Business Internationally?
            </h2>
            <p className="text-xl text-muted-foreground">
              Get expert guidance on market entry, logistics, and compliance for your international expansion.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}