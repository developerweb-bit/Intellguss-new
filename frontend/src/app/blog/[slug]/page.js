"use client";
import React from "react";
import { useParams } from "next/navigation";
// import Header from "../../components/Header/Header";
// import TiaFooter from "../../components/TiaFooter/page";
import "../../globals.css";
import "./page.scss";

const blogPosts = {
  "top-5-trading-strategies-2025": {
    title: "Top 5 Trading Strategies for 2025",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
    date: "October 15, 2024",
    author: "Atin Agrawal",
    content: `
      <p>As we enter 2025, the trading landscape continues to evolve with new opportunities and challenges. Based on extensive market analysis and real trading results from our community, here are the top 5 trading strategies that are proving most effective this year.</p>
      
      <h2>1. Momentum Trading with AI Confirmation</h2>
      <p>This strategy combines traditional momentum indicators with AI-powered market sentiment analysis. We've seen consistent 15-20% monthly returns using this approach.</p>
      
      <h2>2. Options Selling in High IV Environment</h2>
      <p>With increased market volatility, option premiums have become attractive for sellers. This strategy focuses on selling out-of-money options during high implied volatility periods.</p>
      
      <h2>3. Sector Rotation Strategy</h2>
      <p>Understanding which sectors are in favor and rotating capital accordingly has shown remarkable results. Our analysis shows this strategy outperformed the market by 25% in 2024.</p>
      
      <h2>4. Algorithmic Scalping</h2>
      <p>For those comfortable with technology, algorithmic scalping in liquid stocks has proven highly profitable with proper risk management.</p>
      
      <h2>5. Event-Driven Trading</h2>
      <p>Trading around earnings, policy announcements, and other market events using data-driven approaches has consistently generated alpha.</p>
      
      <h2>Risk Management is Key</h2>
      <p>Remember, all these strategies require strict risk management. Never risk more than 2% of your capital on any single trade, and always have a predefined exit strategy.</p>
    `
  },
  "understanding-market-psychology": {
    title: "Understanding Market Psychology",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1200&auto=format&fit=crop",
    date: "September 28, 2024",
    author: "Atin Agrawal",
    content: `
      <p>Market psychology plays a crucial role in trading success. Understanding how emotions drive market movements can give you a significant edge over other traders.</p>
      
      <h2>The Role of Fear and Greed</h2>
      <p>Fear and greed are the two primary emotions that drive market behavior. Learning to recognize these emotions in yourself and the market can help you make better trading decisions.</p>
      
      <h2>Herd Mentality</h2>
      <p>Most retail traders follow the crowd, which often leads to buying at tops and selling at bottoms. Successful traders learn to think independently and often go against the crowd.</p>
      
      <h2>Cognitive Biases in Trading</h2>
      <p>Common biases like confirmation bias, anchoring, and loss aversion can significantly impact your trading performance. Here's how to overcome them:</p>
      
      <ul>
        <li><strong>Confirmation Bias:</strong> Always look for evidence that contradicts your thesis</li>
        <li><strong>Anchoring:</strong> Don't get stuck on your entry price</li>
        <li><strong>Loss Aversion:</strong> Accept losses quickly and let profits run</li>
      </ul>
      
      <h2>Building Mental Discipline</h2>
      <p>Developing the right mindset is crucial for long-term trading success. This includes having a trading plan, following your rules, and maintaining emotional control.</p>
    `
  },
  "fundamental-analysis-beginners": {
    title: "Fundamental Analysis for Beginners",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop",
    date: "September 14, 2024",
    author: "Atin Agrawal",
    content: `
      <p>Fundamental analysis is the cornerstone of long-term investing and swing trading. This comprehensive guide will teach you how to analyze companies and make informed investment decisions.</p>
      
      <h2>Understanding Financial Statements</h2>
      <p>The three main financial statements you need to understand are:</p>
      
      <h3>1. Income Statement</h3>
      <p>Shows the company's revenue, expenses, and profit over a specific period. Key metrics include revenue growth, profit margins, and earnings per share (EPS).</p>
      
      <h3>2. Balance Sheet</h3>
      <p>Provides a snapshot of the company's assets, liabilities, and equity at a specific point in time. Focus on debt-to-equity ratio and working capital.</p>
      
      <h3>3. Cash Flow Statement</h3>
      <p>Shows how much cash the company generates and uses. Operating cash flow is particularly important for assessing business quality.</p>
      
      <h2>Key Financial Ratios</h2>
      <ul>
        <li><strong>P/E Ratio:</strong> Price to Earnings - measures valuation</li>
        <li><strong>ROE:</strong> Return on Equity - measures profitability</li>
        <li><strong>Current Ratio:</strong> Measures liquidity</li>
        <li><strong>Debt-to-Equity:</strong> Measures financial leverage</li>
      </ul>
      
      <h2>Industry and Sector Analysis</h2>
      <p>Understanding the industry dynamics, competitive landscape, and growth prospects is crucial for fundamental analysis.</p>
    `
  },
  "technical-analysis-masterclass": {
    title: "Technical Analysis Masterclass",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop",
    date: "August 25, 2024",
    author: "Atin Agrawal",
    content: `
      <p>Technical analysis is the art and science of reading price charts to predict future price movements. This masterclass covers advanced concepts used by professional traders.</p>
      
      <h2>Advanced Chart Patterns</h2>
      
      <h3>Head and Shoulders</h3>
      <p>This reversal pattern is one of the most reliable indicators of trend change. Learn to identify both regular and inverse head and shoulders patterns.</p>
      
      <h3>Cup and Handle</h3>
      <p>A bullish continuation pattern that often leads to significant breakouts. The pattern typically takes 7 weeks to 65 weeks to complete.</p>
      
      <h2>Professional Indicators</h2>
      
      <h3>Volume Profile</h3>
      <p>Understanding where volume occurred at different price levels helps identify support and resistance zones.</p>
      
      <h3>Market Profile</h3>
      <p>This advanced tool shows the distribution of trading activity across different price levels and time periods.</p>
      
      <h2>Multiple Timeframe Analysis</h2>
      <p>Professional traders always analyze multiple timeframes before making trading decisions. Here's the approach:</p>
      
      <ul>
        <li>Monthly/Weekly: Determine overall trend</li>
        <li>Daily: Identify entry zones</li>
        <li>Hourly/15min: Fine-tune entry and exit points</li>
      </ul>
    `
  },
  "risk-management-essentials": {
    title: "Risk Management Essentials for Traders",
    image: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?q=80&w=1200&auto=format&fit=crop",
    date: "August 10, 2024",
    author: "Atin Agrawal",
    content: `
      <p>Risk management is the most important aspect of trading. It's what separates profitable traders from those who blow up their accounts. Here are the essential principles every trader must follow.</p>
      
      <h2>The 2% Rule</h2>
      <p>Never risk more than 2% of your total capital on any single trade. This ensures that even a series of losses won't significantly damage your account.</p>
      
      <h2>Position Sizing</h2>
      <p>Calculate your position size based on your stop loss and risk per trade. Use this formula:</p>
      <p><strong>Position Size = (Account Risk ÷ Trade Risk) × Account Balance</strong></p>
      
      <h2>Stop Loss Strategies</h2>
      
      <h3>Technical Stop Loss</h3>
      <p>Place stops beyond key support/resistance levels or recent swing highs/lows.</p>
      
      <h3>Percentage Stop Loss</h3>
      <p>Set a fixed percentage loss from your entry price (typically 1-3%).</p>
      
      <h3>ATR-Based Stops</h3>
      <p>Use Average True Range to set dynamic stops that adapt to market volatility.</p>
      
      <h2>Portfolio Risk Management</h2>
      <ul>
        <li>Diversify across different sectors and strategies</li>
        <li>Limit exposure to any single stock or sector</li>
        <li>Use correlation analysis to avoid overexposure</li>
        <li>Regular portfolio review and rebalancing</li>
      </ul>
      
      <h2>Psychological Risk Management</h2>
      <p>Managing your emotions is just as important as managing your money. Keep a trading journal, have predefined rules, and stick to your plan regardless of emotions.</p>
    `
  },
  "building-trading-routine": {
    title: "Building Your Trading Routine: From Amateur to Professional",
    image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?q=80&w=1200&auto=format&fit=crop",
    date: "July 28, 2024",
    author: "Atin Agrawal",
    content: `
      <p>Developing a consistent trading routine is what separates professional traders from amateurs. A well-structured routine helps you stay disciplined, focused, and continuously improve your trading performance.</p>
      
      <h2>Pre-Market Routine</h2>
      
      <h3>Market Analysis (30 minutes)</h3>
      <ul>
        <li>Review overnight news and global market movements</li>
        <li>Check economic calendar for important events</li>
        <li>Analyze key indices and sector rotation</li>
        <li>Identify potential trading opportunities</li>
      </ul>
      
      <h3>Watchlist Preparation (15 minutes)</h3>
      <ul>
        <li>Update your watchlist based on analysis</li>
        <li>Set alerts for key levels</li>
        <li>Plan potential entries and exits</li>
      </ul>
      
      <h2>During Market Hours</h2>
      
      <h3>First Hour Strategy</h3>
      <p>The first hour often sets the tone for the day. Focus on high-volume, high-momentum plays while avoiding FOMO.</p>
      
      <h3>Mid-Day Review</h3>
      <p>Take a 15-minute break to review your trades, assess market conditions, and adjust your strategy if needed.</p>
      
      <h2>Post-Market Routine</h2>
      
      <h3>Trade Review (20 minutes)</h3>
      <ul>
        <li>Review all trades taken during the day</li>
        <li>Analyze what worked and what didn't</li>
        <li>Update your trading journal</li>
        <li>Calculate daily P&L and statistics</li>
      </ul>
      
      <h3>Planning for Tomorrow (10 minutes)</h3>
      <ul>
        <li>Prepare watchlist for next day</li>
        <li>Check economic calendar</li>
        <li>Set any overnight alerts</li>
      </ul>
      
      <h2>Weekly and Monthly Reviews</h2>
      <p>Conduct deeper analysis of your performance, identify patterns in your trading, and continuously refine your strategy based on results.</p>
    `
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;
  console.log("Current slug:", slug);
  console.log("Available posts:", Object.keys(blogPosts));

  const post = blogPosts[slug];

  if (!post) {
    return (
      <>
     
        <main className="blog-post-container">
          <div className="content-wrapper">
            <h1>Blog Post Not Found</h1>
            <p>The requested blog post could not be found.</p>
            <p>URL slug: {slug}</p>
          </div>
        </main>
       
      </>
    );
  }

  return (
    <>
      {/* <Header /> */}
      <main className="blog-post-container  mt-10">
        <article className="blog-post">
          <div className="hero-image">
            <img src={post.image} alt={post.title} />
            <div className="hero-overlay">
              <div className="hero-content">
                <h1>{post.title}</h1>
                <div className="meta-info">
                  <span className="author">By {post.author}</span>
                  <span className="date">{post.date}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-wrapper">
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="cta-section">
              <h3>Ready to Start Your Trading Journey?</h3>
              <p>Join our mentorship program and learn from experienced traders</p>
              <a href="/contact" className="cta-button">Get Started Today</a>
            </div>
          </div>
        </article>
      </main>
      {/* <TiaFooter /> */}
    </>
  );
}
