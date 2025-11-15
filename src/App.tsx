import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import { useEffect } from "react";
import { initGA, trackPageView } from "@/utils/analytics";

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
    // Track initial page view
    trackPageView(window.location.pathname);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Toaster />
          <Home />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;