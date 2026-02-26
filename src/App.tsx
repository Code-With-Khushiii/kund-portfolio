import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X, Database, Brain, BarChart3 } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Data Scientist with 3+ years delivering analytics, machine learning, and data engineering solutions using Python, SQL, Spark, Snowflake, Databricks, Tableau, and AWS across high-volume enterprise and product datasets. At NYU IT, automated 18+ Tableau/OBIEE dashboards on Snowflake, improving data accuracy by 30%, reducing decision time by 20%, and optimizing ETL for 7+ global reports to cut data errors by 45%. Built predictive models on 100K+ records to improve recommendations and lift engagement by 18%, analyzed 50K+ sessions to increase funnel completion by 12%, and validated risk models achieving ROC-AUC 0.91 and AUROC 0.82 on large-scale academic projects.";

  const experience = [
    {
      company: "New York University - IT",
      role: "Business Analyst",
      location: "New York, USA",
      dates: "Apr. 2025 – Present",
      highlights: [
        "Optimized and validated enterprise ETL pipelines for 7+ global reports, processing 1M+ records/month, and reducing manual reporting effort by 40% through SLA tracking and quality checks.",
        "Automated 18+ Tableau and Oracle OBIEE dashboards on Snowflake using SQL and Python, reducing reporting turnaround time by 20%.",
        "Executed root-cause analysis across QA-to-production datasets, strengthening data controls and reducing recurring material reporting issues by ~30%.",
        "Prepared experiment-ready datasets and A/B test summaries, translating analytical findings into executive dashboards and Jira user stories to accelerate Agile delivery cycles by 35%."
      ]
    },
    {
      company: "Six Ladders",
      role: "Data Science Intern",
      location: "Mumbai, India",
      dates: "Jan. 2023 – Nov. 2023",
      highlights: [
        "Built predictive matching models on 100K+ student and job-posting records to score job–candidate fit using skills, experience, and engagement signals, increasing recommendation relevance and improving student engagement by 18%.",
        "Analyzed 50K+ user sessions with Python and SQL to identify application-funnel drop-offs, delivering data-backed product recommendations that increased completion rates by 12%.",
        "Measured ranking and recommendation changes via A/B analysis, increasing job-posting click-through rate (CTR) by 14% through model-driven experiments.",
        "Defined KPIs and automated Power BI reporting for a product launch, tracking conversion, engagement, and campaign effectiveness to support cross-functional execution and iteration."
      ]
    },
    {
      company: "Cavis InfoTech",
      role: "Data Engineering Intern",
      location: "Mumbai, India",
      dates: "Apr. 2022 – Dec. 2022",
      highlights: [
        "Deployed and optimized ETL pipelines ingesting data from 10+ IoT devices, REST APIs, and cloud platforms, processing 5–8 GB/day of structured and semi-structured data using SQL and Python.",
        "Designed data models, schema validations, and data quality checks across multi-source pipelines, reducing data inconsistencies by ~30% and improving reliability of downstream analytics and operational reporting.",
        "Automated batch ingestion, transformation, and validation workflows using scheduled jobs and SQL procedures, cutting manual data preparation time by ~35% and improving pipeline execution stability across client projects."
      ]
    }
  ];

  const projects = [
    {
      title: "Commercial Loan Probability of Default (PD) Model",
      subtitle: "Risk Modeling & Predictive Analytics",
      category: "Machine Learning",
      introduction: "Developed an interpretable 1-year Probability of Default model using L2-regularized logistic regression and tree-based baselines to support underwriting and early-warning decisions.",
      problem: "Financial institutions need accurate, interpretable credit risk models to assess loan default probability while maintaining regulatory compliance and transparency.",
      objective: "Build a robust PD model with strong predictive performance and interpretability, achieving industry-standard metrics for risk assessment.",
      methodology: [
        "Engineered 10+ financial ratios and removed multicollinearity via correlation and VIF analysis.",
        "Developed L2-regularized logistic regression and tree-based baseline models.",
        "Benchmarked performance with walk-forward testing and 5-fold cross-validation."
      ],
      results: [
        "Achieved ROC-AUC up to 0.91, KS up to 0.69, and Brier score as low as 0.002.",
        "Delivered interpretable model outputs suitable for underwriting decisions.",
        "Validated model stability through rigorous cross-validation and walk-forward testing."
      ],
      conclusion: "Demonstrated expertise in financial risk modeling, combining statistical rigor with practical business applications for credit decision-making."
    },
    {
      title: "RateMyProfessor Student Evaluation Bias Analysis",
      subtitle: "Statistical Analysis & NLP",
      category: "Data Science",
      introduction: "Analyzed 90K+ instructor reviews using non-parametric statistical testing and machine learning to identify and quantify rating biases in student evaluations.",
      problem: "Student evaluations may contain unconscious biases affecting instructor ratings, potentially impacting academic careers and teaching assignments.",
      objective: "Identify statistically significant rating biases and build predictive models to understand factors driving student evaluation scores.",
      methodology: [
        "Applied non-parametric statistical testing (Mann–Whitney U, KS), Cohen's d, and bootstrapping to 90K+ reviews.",
        "Built interpretable regression and classification models with imbalance and multicollinearity controls.",
        "Analyzed effect sizes and practical significance of identified biases."
      ],
      results: [
        "Identified statistically significant but practically small rating bias (d ≈ 0.05).",
        "Achieved R² 0.72 for rating prediction and AUROC 0.82 for 'pepper' classification.",
        "Provided data-backed insights on evaluation fairness and bias mitigation."
      ],
      conclusion: "Showcased advanced statistical analysis skills and ability to derive actionable insights from large-scale educational data."
    },
    {
      title: "Chell – Context-Aware Query-Driven Debugging",
      subtitle: "LLM Research & Debugging AI",
      category: "AI/ML Research",
      introduction: "Developed Chell, a CAAM-based query-driven debugging method using Transformers and attention analysis to target logical-error correction in small language models.",
      problem: "Small language models struggle with logical error correction in code, limiting their utility for programming assistance and debugging tasks.",
      objective: "Improve logical error correction quality in small LLMs through context-aware debugging prompts and attention-based analysis.",
      methodology: [
        "Developed CAAM-based query-driven debugging method using Transformers and attention analysis.",
        "Generated context-aware debugging prompts and corrective outputs.",
        "Tested across 4 LLMs: TinyLlama, StarCoder, Qwen-Coder, and Phi-2."
      ],
      results: [
        "Improved human-rated logical error correction quality across 4 different LLMs.",
        "Demonstrated effectiveness of attention-based context awareness in debugging.",
        "Contributed to advancing debugging capabilities in resource-constrained language models."
      ],
      conclusion: "Combined deep learning research with practical debugging applications, advancing the state of error correction in small language models."
    }
  ];

  const skillCategories = [
    {
      icon: Brain,
      title: 'Programming & Querying',
      skills: ['Python', 'R', 'SQL', 'PySpark']
    },
    {
      icon: Database,
      title: 'Data Engineering',
      skills: ['ETL/ELT', 'Snowflake', 'Databricks', 'Apache Spark', 'AWS', 'Hive', 'Hadoop', 'Docker']
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      skills: ['Tableau', 'Power BI', 'Oracle OBIEE', 'Excel', 'A/B Testing', 'Causal Inference']
    },
    {
      icon: Target,
      title: 'Data Science',
      skills: ['Machine Learning', 'Statistical Modeling', 'Hypothesis Testing', 'Classification', 'Regression', 'Experiment Design']
    }
  ];

  const additionalSkills = [
    'Databases: PostgreSQL, MySQL, MongoDB, SSMS, NoSQL',
    'Data Management: Data Warehousing, Data Modeling, Data Wrangling, Data Governance',
    'Business: KPIs, Business Intelligence, Agile/Scrum, Project Management, Jira, SAP',
    'Compliance: Ethics, Data Privacy, Regulatory Standards'
  ];

  const education = [
    {
      school: "New York University",
      degree: "Master of Science, Data Science",
      location: "New York, USA",
      dates: "May 2026"
    },
    {
      school: "Mumbai University",
      degree: "Bachelor of Technology, Electronics Engineering",
      location: "Mumbai, India",
      dates: "Jun. 2024"
    },
    {
      school: "IBM – Data Analytics Specialization",
      degree: "Data Analytics Specialization (Extra-Credited Program & Electronic Badge)",
      location: "Mumbai, India",
      dates: "June 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display text-black tracking-wide">KUND NILESH MEGHANI</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-12">
              <img 
                src="images/image.png"
                alt="Kund Meghani"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              KUND NILESH MEGHANI
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Data Scientist | Analytics, Machine Learning & Data Engineering
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              Brooklyn, NY, USA · Python, SQL, Spark, AWS
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📊 VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'DASHBOARDS AUTOMATED', value: '18+', detail: 'Tableau/OBIEE on Snowflake' },
              { label: 'DATA PROCESSED', value: '1M+', detail: 'Records per month' },
              { label: 'MODEL PERFORMANCE', value: '0.91', detail: 'ROC-AUC Achieved' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Delivering data-driven solutions across the full analytics stack—from engineering pipelines to predictive modeling.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Database,
                title: 'Data Engineering',
                detail: 'Built and optimized ETL pipelines processing millions of records, reducing manual effort by 35-40% through automation and quality controls.'
              },
              {
                icon: Brain,
                title: 'Machine Learning',
                detail: 'Developed predictive models on 100K+ records achieving ROC-AUC 0.91, improving recommendations and driving 18% engagement lift.'
              },
              {
                icon: BarChart3,
                title: 'Analytics & BI',
                detail: 'Automated 18+ enterprise dashboards, reducing decision time by 20% and improving data accuracy by 30% through robust visualization.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Progressive experience across enterprise analytics, predictive modeling, and data engineering.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              End-to-end data science projects spanning risk modeling, statistical analysis, and AI research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                <div className="mt-4 flex items-center text-brown hover:text-black transition-colors">
                  <span className="text-sm font-light">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Comprehensive toolkit spanning programming, data engineering, analytics, and machine learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-6 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-4 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
            <h3 className="text-xl font-display text-black mb-6 text-center tracking-wide">ADDITIONAL EXPERTISE</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalSkills.map((skill, index) => (
                <div key={index} className="flex items-center text-brown font-light">
                  <span className="w-2 h-2 bg-brown rounded-full mr-3"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss how data science can drive value for your organization.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-6 max-w-md mx-auto">
            <div className="flex items-center w-full bg-white/10 p-4 rounded-sm">
              <Phone className="w-6 h-6 text-brown mr-4" />
              <a 
                href="tel:+17182008572"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (718)-200-8572
              </a>
            </div>
            <div className="flex items-center w-full bg-white/10 p-4 rounded-sm">
              <Linkedin className="w-6 h-6 text-brown mr-4" />
              <a 
                href="https://www.linkedin.com/in/kundmeghani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center w-full bg-white/10 p-4 rounded-sm">
              <Mail className="w-6 h-6 text-brown mr-4" />
              <a 
                href="mailto:meghanikund29@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                meghanikund29@gmail.com
              </a>
            </div>
            <div className="flex items-center w-full bg-white/10 p-4 rounded-sm">
              <Target className="w-6 h-6 text-brown mr-4" />
              <span className="text-white/80 font-light">Brooklyn, NY, USA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Kund Nilesh Meghani · Data Scientist
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;