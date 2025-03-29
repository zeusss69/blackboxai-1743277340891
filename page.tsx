import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, LineChart, CheckCircle, Code, Smartphone, Cloud, Search, Zap } from "lucide-react"
import CodingBackground from "@/components/coding-background"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen pt-16 relative">
      <CodingBackground />

      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-background/80 to-muted/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Domain Expertise (DomEx) offers a comprehensive range of digital services to help businesses thrive in the
              digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the page content remains the same */}
      {/* Services Tabs Section */}
      <section className="relative py-12 px-6 md:px-12 lg:px-20 bg-background/80 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="grid grid-cols-2 md:grid-cols-7 gap-4">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  All Projects
                </TabsTrigger>
                <TabsTrigger
                  value="web"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Web
                </TabsTrigger>
                <TabsTrigger
                  value="app"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Mobile
                </TabsTrigger>
                <TabsTrigger
                  value="cloud"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Cloud
                </TabsTrigger>
                <TabsTrigger
                  value="database"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Database
                </TabsTrigger>
                <TabsTrigger
                  value="seo"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  SEO
                </TabsTrigger>
                <TabsTrigger
                  value="server"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Server
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab content remains the same */}
            {/* Web Services Tab */}
            <TabsContent value="web" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Web Development & Design</h2>
                  <p className="text-muted-foreground mb-6">
                    Our expert web development team creates stunning, responsive websites that engage visitors and drive
                    conversions. We combine cutting-edge technology with beautiful design to deliver exceptional web
                    experiences.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Custom website development",
                      "E-commerce solutions",
                      "Content management systems",
                      "Progressive web applications",
                      "UI/UX design and optimization",
                      "Web performance optimization",
                      "Accessibility compliance",
                      "Responsive design for all devices",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted/30 p-8 rounded-xl border border-border/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 z-0"></div>
                  <div className="relative z-10">
                    <Code className="h-12 w-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Web Technologies We Use</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        "React",
                        "Next.js",
                        "Vue.js",
                        "Angular",
                        "Node.js",
                        "PHP",
                        "Python",
                        "Ruby on Rails",
                        "WordPress",
                        "Shopify",
                        "Webflow",
                        "Wix",
                      ].map((tech, index) => (
                        <Badge key={index} variant="secondary" className="justify-center py-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle>Web Builder Services</CardTitle>
                    <CardDescription>Quick and efficient website creation using popular platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "WordPress development",
                        "Shopify store setup",
                        "Wix website design",
                        "Webflow development",
                        "Squarespace customization",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle>Custom Web Development</CardTitle>
                    <CardDescription>Tailored web solutions built from the ground up</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Full-stack web applications",
                        "E-commerce platforms",
                        "SaaS product development",
                        "Enterprise web solutions",
                        "API development & integration",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle>Web Maintenance</CardTitle>
                    <CardDescription>Keep your website secure, updated, and performing optimally</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Regular updates & security patches",
                        "Performance monitoring",
                        "Content updates",
                        "Backup & recovery",
                        "Technical support",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* App Development Tab */}
            <TabsContent value="app" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 bg-muted/30 p-8 rounded-xl border border-border/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 z-0"></div>
                  <div className="relative z-10">
                    <Smartphone className="h-12 w-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-4">App Development Platforms</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        "iOS",
                        "Android",
                        "React Native",
                        "Flutter",
                        "Xamarin",
                        "Ionic",
                        "PWA",
                        "Unity",
                        "Swift",
                        "Kotlin",
                        "Java",
                        "Objective-C",
                      ].map((tech, index) => (
                        <Badge key={index} variant="secondary" className="justify-center py-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold mb-4">Mobile App Development</h2>
                  <p className="text-muted-foreground mb-6">
                    We build powerful, feature-rich mobile applications that provide seamless user experiences across
                    all devices. Our app development services cover the entire development lifecycle from concept to
                    deployment.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Native iOS app development",
                      "Native Android app development",
                      "Cross-platform app development",
                      "Progressive Web Apps (PWAs)",
                      "App UI/UX design",
                      "App testing and quality assurance",
                      "App store optimization",
                      "Ongoing maintenance and support",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle>Front-End Development</CardTitle>
                    <CardDescription>Creating beautiful, intuitive user interfaces</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "UI component development",
                        "Animation & transitions",
                        "Responsive layouts",
                        "Cross-device compatibility",
                        "Accessibility implementation",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle>Back-End Development</CardTitle>
                    <CardDescription>Building robust server-side architecture</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "API development",
                        "Database design",
                        "Authentication systems",
                        "Server configuration",
                        "Performance optimization",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle>App Testing & QA</CardTitle>
                    <CardDescription>Ensuring your app works flawlessly</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Functional testing",
                        "UI/UX testing",
                        "Performance testing",
                        "Security testing",
                        "Automated testing",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Cloud & Infrastructure Tab */}
            <TabsContent value="cloud" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Cloud & Infrastructure Solutions</h2>
                  <p className="text-muted-foreground mb-6">
                    Our cloud and infrastructure services help businesses leverage the power of cloud computing to
                    improve scalability, reduce costs, and enhance security. We provide end-to-end cloud solutions
                    tailored to your specific needs.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Cloud migration & strategy",
                      "Infrastructure as Code (IaC)",
                      "DevOps implementation",
                      "Containerization & orchestration",
                      "Serverless architecture",
                      "Cloud security & compliance",
                      "Disaster recovery planning",
                      "24/7 monitoring & support",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted/30 p-8 rounded-xl border border-border/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 z-0"></div>
                  <div className="relative z-10">
                    <Cloud className="h-12 w-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Cloud Platforms We Work With</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        "AWS",
                        "Azure",
                        "Google Cloud",
                        "DigitalOcean",
                        "Heroku",
                        "Vercel",
                        "Netlify",
                        "Firebase",
                        "Kubernetes",
                        "Docker",
                        "Terraform",
                        "Cloudflare",
                      ].map((tech, index) => (
                        <Badge key={index} variant="secondary" className="justify-center py-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle>Database Services</CardTitle>
                    <CardDescription>Optimized database solutions for your data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Database design & architecture",
                        "SQL & NoSQL implementations",
                        "Data migration & integration",
                        "Performance optimization",
                        "Backup & recovery solutions",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle>Server Management</CardTitle>
                    <CardDescription>Professional server administration services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Server setup & configuration",
                        "Performance monitoring",
                        "Security hardening",
                        "Load balancing",
                        "Automated scaling",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle>DevOps Services</CardTitle>
                    <CardDescription>Streamline your development workflow</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "CI/CD pipeline setup",
                        "Infrastructure automation",
                        "Containerization",
                        "Monitoring & logging",
                        "Incident response",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Digital Marketing Tab */}
            <TabsContent value="marketing" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 bg-muted/30 p-8 rounded-xl border border-border/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 z-0"></div>
                  <div className="relative z-10">
                    <Search className="h-12 w-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Digital Marketing Tools</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        "Google Analytics",
                        "SEMrush",
                        "Ahrefs",
                        "Moz",
                        "Google Ads",
                        "Facebook Ads",
                        "HubSpot",
                        "Mailchimp",
                        "Hootsuite",
                        "Buffer",
                        "Canva",
                        "Adobe Creative Suite",
                      ].map((tech, index) => (
                        <Badge key={index} variant="secondary" className="justify-center py-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold mb-4">Digital Marketing & SEO</h2>
                  <p className="text-muted-foreground mb-6">
                    Our digital marketing and SEO services help businesses increase their online visibility, attract
                    more qualified leads, and drive conversions. We develop comprehensive strategies tailored to your
                    business goals.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Search Engine Optimization (SEO)",
                      "Pay-Per-Click (PPC) advertising",
                      "Social media marketing",
                      "Content marketing",
                      "Email marketing",
                      "Conversion rate optimization",
                      "Analytics & reporting",
                      "Local SEO & business listings",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle>Search Engine Optimization</CardTitle>
                    <CardDescription>Improve your visibility in search results</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Keyword research & strategy",
                        "On-page SEO optimization",
                        "Technical SEO audits",
                        "Link building",
                        "Local SEO optimization",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle>Content Marketing</CardTitle>
                    <CardDescription>Engage your audience with valuable content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Content strategy development",
                        "Blog writing & management",
                        "Copywriting services",
                        "Content distribution",
                        "Content performance analysis",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle>Social Media Marketing</CardTitle>
                    <CardDescription>Build your brand presence on social platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Social media strategy",
                        "Content creation & scheduling",
                        "Community management",
                        "Paid social campaigns",
                        "Performance analytics",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-muted/50 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to deliver exceptional results for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business goals, target audience, and project requirements.",
                icon: <Search className="h-10 w-10" />,
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a comprehensive strategy and roadmap tailored to your specific needs.",
                icon: <LineChart className="h-10 w-10" />,
              },
              {
                step: "03",
                title: "Implementation",
                description: "Our expert team brings your project to life with precision and attention to detail.",
                icon: <Code className="h-10 w-10" />,
              },
              {
                step: "04",
                title: "Optimization",
                description: "We continuously monitor, test, and refine to ensure optimal performance.",
                icon: <Zap className="h-10 w-10" />,
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 h-full">
                  <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {process.step}
                  </div>
                  <div className="pt-6">
                    <div className="mb-4 text-primary">{process.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-primary/20 to-purple-500/20 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our services can help your business grow in the digital landscape.
          </p>
          <Link href="/get-started">
            <Button size="lg" className="group font-bold">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

