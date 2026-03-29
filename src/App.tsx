import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/Landing";
import Letter from "./pages/Letter";
import Playlist from "./pages/Playlist";
import Surprise from "./pages/Surprise";
import March31Password from "./pages/March31Password";
import March31Letter from "./pages/March31Letter";
import March31Videos from "./pages/March31Videos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/surprise" element={<Surprise />} />
        <Route path="/march31-password" element={<March31Password />} />
        <Route path="/march31-letter" element={<March31Letter />} />
        <Route path="/march31-videos" element={<March31Videos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
