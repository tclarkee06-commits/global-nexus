import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Last Updated: December 10, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-foreground">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service ("Terms") govern your access to and use of IGP Ventures' website, services, and products (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
                </p>
              </div>

              {/* Services Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  IGP Ventures provides international business consulting services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Market entry strategy and planning</li>
                  <li>International trade facilitation</li>
                  <li>Supply chain optimization</li>
                  <li>Cross-border partnership development</li>
                  <li>Regulatory compliance consulting</li>
                  <li>Business development and growth strategies</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time without prior notice.
                </p>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                <h3 className="text-xl font-semibold mb-3">3.1 Eligibility</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You must be at least 18 years old and have the legal capacity to enter into binding contracts to use our Services. By using our Services, you represent and warrant that you meet these requirements.
                </p>

                <h3 className="text-xl font-semibold mb-3">3.2 Account Security</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you create an account with us, you are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                  <li>Providing accurate and complete information</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">3.3 Prohibited Activities</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use our Services for any illegal or unauthorized purpose</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit viruses, malware, or harmful code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our Services</li>
                  <li>Impersonate any person or entity</li>
                  <li>Collect or harvest user information without consent</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold mb-4">4. Intellectual Property Rights</h2>
                <h3 className="text-xl font-semibold mb-3">4.1 Our Content</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content, features, and functionality of our Services, including but not limited to text, graphics, logos, images, software, and design, are owned by IGP Ventures or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-xl font-semibold mb-3">4.2 Limited License</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your personal or business purposes, subject to these Terms.
                </p>

                <h3 className="text-xl font-semibold mb-3">4.3 User Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You retain ownership of any content you submit to us. By submitting content, you grant us a worldwide, royalty-free license to use, reproduce, modify, and display such content in connection with providing our Services.
                </p>
              </div>

              {/* Service Terms */}
              <div>
                <h2 className="text-2xl font-bold mb-4">5. Consulting Services Terms</h2>
                <h3 className="text-xl font-semibold mb-3">5.1 Engagement</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Specific consulting engagements will be governed by separate written agreements that supplement these Terms. In case of conflict, the specific engagement agreement will prevail.
                </p>

                <h3 className="text-xl font-semibold mb-3">5.2 Fees and Payment</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Fees for our Services will be specified in your engagement agreement. Payment terms include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Fees are due as specified in the engagement agreement</li>
                  <li>Late payments may incur interest charges</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>You are responsible for all applicable taxes</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">5.3 Confidentiality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to maintain the confidentiality of proprietary information shared during the engagement, subject to the terms of any separate confidentiality agreement.
                </p>
              </div>

              {/* Disclaimers */}
              <div>
                <h2 className="text-2xl font-bold mb-4">6. Disclaimers and Warranties</h2>
                <h3 className="text-xl font-semibold mb-3">6.1 "As Is" Basis</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>

                <h3 className="text-xl font-semibold mb-3">6.2 No Guarantee of Results</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  While we strive to provide high-quality consulting services, we do not guarantee specific results or outcomes. Business success depends on many factors beyond our control.
                </p>

                <h3 className="text-xl font-semibold mb-3">6.3 Third-Party Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are not responsible for the accuracy, reliability, or legality of third-party content, websites, or services linked from our Services.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To the maximum extent permitted by law, IGP Ventures and its officers, directors, employees, and agents shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Service interruptions or errors</li>
                  <li>Unauthorized access to your data</li>
                  <li>Third-party actions or content</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
                </p>
              </div>

              {/* Indemnification */}
              <div>
                <h2 className="text-2xl font-bold mb-4">8. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless IGP Ventures and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our Services, violation of these Terms, or infringement of any third-party rights.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
                <h3 className="text-xl font-semibold mb-3">9.1 By You</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may stop using our Services at any time. If you have an active engagement, termination terms will be governed by your engagement agreement.
                </p>

                <h3 className="text-xl font-semibold mb-3">9.2 By Us</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right to suspend or terminate your access to our Services at any time, with or without cause or notice, including for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Violation of these Terms</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Non-payment of fees</li>
                  <li>Harm to our business or reputation</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">9.3 Effect of Termination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Upon termination, your right to use our Services will immediately cease. Provisions that by their nature should survive termination will remain in effect, including intellectual property rights, disclaimers, and limitations of liability.
                </p>
              </div>

              {/* Dispute Resolution */}
              <div>
                <h2 className="text-2xl font-bold mb-4">10. Dispute Resolution</h2>
                <h3 className="text-xl font-semibold mb-3">10.1 Informal Resolution</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Before filing a claim, you agree to contact us at info@igp-ventures.com to attempt to resolve the dispute informally.
                </p>

                <h3 className="text-xl font-semibold mb-3">10.2 Arbitration</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Any disputes that cannot be resolved informally shall be resolved through binding arbitration in accordance with applicable arbitration rules, rather than in court.
                </p>

                <h3 className="text-xl font-semibold mb-3">10.3 Class Action Waiver</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to resolve disputes on an individual basis only, and waive any right to participate in class actions or class-wide arbitration.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where IGP Ventures is headquartered, without regard to conflict of law principles.
                </p>
              </div>

              {/* General Provisions */}
              <div>
                <h2 className="text-2xl font-bold mb-4">12. General Provisions</h2>
                <h3 className="text-xl font-semibold mb-3">12.1 Entire Agreement</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These Terms, together with any engagement agreements and our Privacy Policy, constitute the entire agreement between you and IGP Ventures.
                </p>

                <h3 className="text-xl font-semibold mb-3">12.2 Modifications</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website. Your continued use of our Services after changes constitutes acceptance.
                </p>

                <h3 className="text-xl font-semibold mb-3">12.3 Severability</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                </p>

                <h3 className="text-xl font-semibold mb-3">12.4 Waiver</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>

                <h3 className="text-xl font-semibold mb-3">12.5 Assignment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-muted/30 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>IGP Ventures</strong></p>
                  <p>Email: info@igp-ventures.com</p>
                  <p>Website: www.igp-ventures.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
