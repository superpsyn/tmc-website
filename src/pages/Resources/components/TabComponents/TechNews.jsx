import React from 'react';
import { FaNewspaper } from 'react-icons/fa';

const TechNews = () => {
  // Mock data for Tech News articles with a link property
  const techNewsData = [
    {
      id: 1,
      category: "CyberSecurity",
      title: "Hackers Exploit Snail Mail to Launch Cyber Threats",
      description:
        "Hackers are exploiting snail mail to distribute printed QR codes in phishing attacks, as warned by the Swiss National Cyber Security Center. These fake letters, mimicking trusted agencies like MeteoSwiss, prompt users to scan the QR code, downloading malware designed to steal sensitive data.",
      link: "https://example.com/news/hackers-exploit-snail-mail",
    },
    {
      id: 2,
      category: "CyberSecurity",
      title: "Ghost Tap: Exploiting Google Pay and Apple Pay for Global Fraud",
      description:
        "Threat actors are exploiting a new technique to misuse NFC payments like Google Pay and Apple Pay, enabling fraudulent transactions globally without physical cards or devices. This scalable tactic bypasses anti-fraud measures, posing significant challenges for financial institutions and retailers.",
      link: "https://example.com/news/ghost-tap-exploit",
    },
    {
      id: 3,
      category: "CyberSecurity",
      title: "Revolutionizing Windows Security and Recovery with Advanced Features",
      description:
        "Microsoft is introducing new security and recovery features, including Quick Machine Recovery for remote fixes on unbootable PCs and Hotpatch, which applies critical updates without restarts. Enhanced admin protections, Zero Trust DNS, and expanded encryption options further strengthen Windows security and privacy.",
      link: "https://example.com/news/windows-security-advanced",
    },
    {
      id: 4,
      category: "CyberSecurity",
      title: "RIIG, a Risk Intelligence Startup, Raises $3 Million in Funding",
      description:
        "A risk intelligence startup has raised $3 million in seed funding to accelerate the development of its AI-driven Zero Trust solutions. The funding will help expand customer support, sales, and marketing efforts while enhancing their cybersecurity offerings for various sectors.",
      link: "https://example.com/news/riig-raises-3m",
    },
    {
      id: 5,
      category: "CyberSecurity",
      title: "Liminal Panda: China-Linked Cyber Espionage Group Targets Telecoms for Intelligence Gathering",
      description:
        "A China-linked cyber espionage group, dubbed Liminal Panda by CrowdStrike, has been behind a series of targeted attacks on telecommunications companies in South Asia and Africa since 2020, aiming to collect intelligence. The group uses custom malware and protocols like GSM to facilitate data exfiltration and remote access to telecom systems.",
      link: "https://example.com/news/liminal-panda-targets-telecoms",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-black mb-6">Tech News</h1>
      <div className="space-y-6">
        {techNewsData.map((news) => (
          <a
            key={news.id}
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2 mb-2">
                <FaNewspaper className="text-gray-500" size={20} />
                <p className="text-sm text-gray-500">{news.category}</p>
              </div>
              <h2 className="text-2xl font-semibold text-black mb-2">{news.title}</h2>
              <p className="text-gray-700">{news.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TechNews;
