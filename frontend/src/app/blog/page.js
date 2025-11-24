"use client";
import React, { useState } from "react";
import Link from "next/link";

import "./page.scss";
import ConsultationForm from "../components/ConsultationForm/ConsultationForm";

export default function BlogPage() {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [open, setOpen] = useState(false);
  const posts = [
    {
      id: 1,
      title: "Top 5 Trading Strategies for 2025",
      summary:
        "Discover the best trading approaches proven this year with detailed analysis and case studies from successful traders.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
      slug: "top-5-trading-strategies-2025",
    },
    {
      id: 2,
      title: "Understanding Market Psychology",
      summary:
        "Learn how emotions drive market movements and how to maintain discipline during volatile trading periods.",
      image:
        "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=800&auto=format&fit=crop",
      slug: "understanding-market-psychology",
    },
    {
      id: 3,
      title: "Fundamental Analysis for Beginners",
      summary:
        "A complete guide to understanding company financials and how they impact stock prices.",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
      slug: "fundamental-analysis-beginners",
    },
    {
      id: 4,
      title: "Technical Analysis Masterclass",
      summary:
        "Advanced chart patterns and indicators that professional traders use every day.",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
      slug: "technical-analysis-masterclass",
    },
    {
      id: 5,
      title: "Risk Management Essentials for Traders",
      summary:
        "Learn the essential risk management strategies that keep professional traders profitable over the long term.",
      image:
        "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?q=80&w=800&auto=format&fit=crop",
      slug: "risk-management-essentials",
    },
    {
      id: 6,
      title: "Building Your Trading Routine: From Amateur to Professional",
      summary:
        "How to develop a consistent trading schedule and review process that leads to continuous improvement.",
      image:
        "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?q=80&w=800&auto=format&fit=crop",
      slug: "building-trading-routine",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  // Blog posts data from blog page
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Trading Strategies for 2025",
      excerpt:
        "Discover the best trading approaches proven this year with detailed analysis and case studies from successful traders.",
      date: "Oct 15, 2024",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&auto=format&fit=crop&q=80",
      category: "blog",
      link: "/blog/top-5-trading-strategies-2025",
    },
    {
      id: 2,
      title: "Understanding Market Psychology",
      excerpt:
        "Learn how emotions drive market movements and how to maintain discipline during volatile trading periods.",
      date: "Sep 28, 2024",
      image:
        "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=400&auto=format&fit=crop&q=80",
      category: "blog",
      link: "/blog/understanding-market-psychology",
    },
    {
      id: 3,
      title: "Fundamental Analysis for Beginners",
      excerpt:
        "A complete guide to understanding company financials and how they impact stock prices.",
      date: "Sep 14, 2024",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&auto=format&fit=crop&q=80",
      category: "blog",
      link: "/blog/fundamental-analysis-beginners",
    },
    {
      id: 4,
      title: "Technical Analysis Masterclass",
      excerpt:
        "Advanced chart patterns and indicators that professional traders use every day.",
      date: "Aug 25, 2024",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80",
      category: "blog",
      link: "/blog/technical-analysis-masterclass",
    },
    {
      id: 5,
      title: "Risk Management Essentials for Traders",
      excerpt:
        "Learn the essential risk management strategies that keep professional traders profitable over the long term.",
      date: "Aug 10, 2024",
      image:
        "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?w=400&auto=format&fit=crop&q=80",
      category: "blog",
      link: "/blog/risk-management-essentials",
    },
    {
      id: 6,
      title: "Building Your Trading Routine: From Amateur to Professional",
      excerpt:
        "How to develop a consistent trading schedule and review process that leads to continuous improvement.",
      date: "July 28, 2024",
      image:
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&auto=format&fit=crop&q=80",
      category: "blog",
      link: "/blog/building-trading-routine",
    },
  ];

  // Case studies data from case-studies page
  const caseStudies = [
    {
      id: 1,
      title: "How Rahul Turned ₹50,000 into ₹5 Lakhs in 6 Months",
      excerpt:
        "A detailed analysis of how a mechanical engineer used our strategies to achieve 10x returns through disciplined trading.",
      client: "Rahul M.",
      image:
        "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&auto=format&fit=crop&q=80",
      category: "case-study",
      metrics: {
        initialInvestment: "₹50,000",
        finalValue: "₹5,00,000",
        timeframe: "6 months",
        roi: "900%",
      },
      link: "/case-studies/rahul-trading-success",
    },
    {
      id: 2,
      title: "Breaking Free from the 9-5: Priya's Trading Journey",
      excerpt:
        "How a former bank employee replaced her income with consistent options trading strategies learned from our mentorship program.",
      client: "Priya K.",
      image:
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&auto=format&fit=crop&q=80",
      category: "case-study",
      metrics: {
        initialInvestment: "₹2,00,000",
        monthlyIncome: "₹75,000+",
        timeframe: "12 months",
        winRate: "68%",
      },
      link: "/case-studies/priya-trading-journey",
    },
    {
      id: 3,
      title: "Institutional Trading Techniques for Retail Traders",
      excerpt:
        "How our student Vikram implemented institutional-grade risk management and achieved consistent profitability using algorithmic approaches.",
      client: "Vikram S.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80",
      category: "case-study",
      metrics: {
        initialInvestment: "₹10,00,000",
        annualReturn: "42%",
        timeframe: "2 years",
        drawdown: "Only 8%",
      },
      link: "/case-studies/vikram-algo-trading",
    },
    {
      id: 4,
      title: "From Consistent Losses to Consistent Profits",
      excerpt:
        "Kiran was losing money for 3 years before joining our program. Learn how she turned her trading around with proper mentorship.",
      client: "Kiran D.",
      image:
        "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=400&auto=format&fit=crop&q=80",
      category: "case-study",
      metrics: {
        previousLosses: "₹3,50,000",
        currentMonthlyProfit: "₹45,000+",
        timeToBreakeven: "5 months",
        improvementFactor: "180%",
      },
      link: "/case-studies/kiran-trading-transformation",
    },
    {
      id: 5,
      title: "From Consistent Losses to Consistent Profits",
      excerpt:
        "Kiran was losing money for 3 years before joining our program. Learn how she turned her trading around with proper mentorship.",
      client: "Kiran D.",
      image:
        "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=400&auto=format&fit=crop&q=80",
      category: "Resource",
      metrics: {
        previousLosses: "₹3,50,000",
        currentMonthlyProfit: "₹45,000+",
        timeToBreakeven: "5 months",
        improvementFactor: "180%",
      },
      link: "/case-studies/kiran-trading-transformation",
    },
    {
      id: 6,
      title: "From Consistent Losses to Consistent Profits",
      excerpt:
        "Kiran was losing money for 3 years before joining our program. Learn how she turned her trading around with proper mentorship.",
      client: "Kiran D.",
      image:
        "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=400&auto=format&fit=crop&q=80",
      category: "Resource",
      metrics: {
        previousLosses: "₹3,50,000",
        currentMonthlyProfit: "₹45,000+",
        timeToBreakeven: "5 months",
        improvementFactor: "180%",
      },
      link: "/case-studies/kiran-trading-transformation",
    },
  ];

  const allItems = [...blogPosts, ...caseStudies];

  const filteredItems =
    activeTab === "all"
      ? allItems
      : allItems.filter((item) => item.category === activeTab);

  return (
    <>
      {/* <Header /> */}
      <div className="knowledge-center">
        <div className="container">
          <h3 className="head">Knowledge Center</h3>
          <p className="subtitle">
            Explore our latest insights and success stories
          </p>

          <div className="filter-tabs">
            <button
              className={activeTab === "all" ? "active" : ""}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={activeTab === "blog" ? "active" : ""}
              onClick={() => setActiveTab("blog")}
            >
              Blog Posts
            </button>
            <button
              className={activeTab === "case-study" ? "active" : ""}
              onClick={() => setActiveTab("case-study")}
            >
              Case Studies
            </button>
            <button
              className={activeTab === "Resource" ? "active" : ""}
              onClick={() => setActiveTab("Resource")}
            >
              Resources
            </button>
          </div>

          <div className="knowledge-grid">
            {filteredItems.map((item) => (
              <div key={item.id + item.category} className="knowledge-card">
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                  <span className="category-badge text-white-900">
                    {item.category === "blog" ? "Blog Post" : "Case Study"}
                  </span>
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  {item.date && <span className="date">{item.date}</span>}
                  {item.client && (
                    <span className="client">Client: {item.client}</span>
                  )}
                  {item.metrics && (
                    <div className="metrics-summary">
                      {Object.entries(item.metrics)
                        .slice(0, 2)
                        .map(([key, value], idx) => (
                          <span key={idx} className="metric">
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                            : <strong>{value}</strong>
                          </span>
                        ))}
                    </div>
                  )}
                  <a href={item.link} className="read-more text-white">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          <section className="cta-section" data-aos="fade-up">
            <h2>
              Grow your business sustainably with accounting,bookkeeping, and
              tax services with Intellgus.
            </h2>
            <p>
              Streamline your finances with Intellgus’ accounting, bookkeeping,
              and tax services. Grow your business with clarity and confidence.
            </p>
            <div className="cta-buttons">
              <Link
                href="/contact"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enroll in Intellgus Programs
              </Link>
              <button
                className="cta-button secondary"
                onClick={() => setOpen(true)}
              >
                Book a Free Consultation
              </button>
             
              <ConsultationForm open={open} setOpen={setOpen} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
