import { useEffect, useState } from "react";
import { Navigation } from "../components/layout/navigation";
import { HeroSection } from "../components/sections/hero";
import { AboutSection } from "../components/sections/about";
import { SkillsSection } from "../components/sections/skills";
import { ProjectsSection } from "../components/sections/projects";
import { ResumeSection } from "../components/sections/resume";
import { ContactSection } from "../components/sections/contact";
import { analytics } from "../lib/firebase";
import {
  getPortfolioData,
  incrementViews,
  initializePortfolioData,
  type PortfolioData,
} from "../lib/firestore";

export default function Index() {
  const [isDark, setIsDark] = useState(true);
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Initialize Firebase Analytics
    if (analytics) {
      console.log(
        "Firebase Analytics initialized with project: sankarportfolio",
      );
    }

    // Set initial theme
    document.documentElement.classList.toggle("light", !isDark);

    // Initialize Firestore data and increment views
    const initializeFirestore = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        console.log("Initializing Firebase integration...");

        // Initialize portfolio data if needed
        const initSuccess = await initializePortfolioData();

        if (initSuccess) {
          // Get current portfolio data
          const data = await getPortfolioData();

          if (data) {
            setPortfolioData(data);
            console.log("Portfolio data loaded:", data);

            // Increment view count in background
            incrementViews().then((success) => {
              if (success) {
                // Fetch updated data after incrementing
                getPortfolioData().then((updatedData) => {
                  if (updatedData) {
                    setPortfolioData(updatedData);
                  }
                });
              }
            });
          } else {
            throw new Error("Failed to load portfolio data");
          }
        } else {
          throw new Error("Failed to initialize portfolio data");
        }

        console.log("Firestore integration successful");
      } catch (error) {
        console.error("Error initializing Firestore:", error);
        setHasError(true);
        // Set fallback data
        setPortfolioData({
          description: "portfolio data (offline)",
          views: 0,
          name: "Kosuri Gowry Sankar",
          title: "B.Tech CSE | Web Dev | Cybersecurity & AI Enthusiast",
          email: "23jr1a05b3@gmail.com",
        });
      } finally {
        setIsLoading(false);
      }
    };

    initializeFirestore();
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      document.documentElement.classList.toggle("light", !newTheme);
      return newTheme;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Kosuri Gowry Sankar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with React, TypeScript, and TailwindCSS | Powered by Firebase
          </p>
          {isLoading ? (
            <p className="text-xs text-muted-foreground mt-2">
              Loading portfolio data...
            </p>
          ) : portfolioData ? (
            <div className="text-xs text-muted-foreground mt-2">
              <p>Portfolio Views: {portfolioData.views.toLocaleString()}</p>
              {hasError && (
                <p className="text-yellow-400">⚠ Running in offline mode</p>
              )}
              {portfolioData.lastUpdated && (
                <p className="mt-1">
                  Last updated:{" "}
                  {new Date(portfolioData.lastUpdated).toLocaleDateString()}
                </p>
              )}
            </div>
          ) : (
            <p className="text-xs text-red-400 mt-2">
              ⚠ Unable to load portfolio data
            </p>
          )}
        </div>
      </footer>
    </div>
  );
}
