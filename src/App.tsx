import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path="/videos" element={<Index />} />
          <Route path="/videos/:category" element={<Index />} />
          <Route path="/videos/:category/:project" element={<Index />} />
          <Route path="/photos" element={<Index />} />
          <Route path="/photos/:category" element={<Index />} />
          <Route path="/about" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          {/* Permanent redirects for old /work routes */}
          <Route path="/work" element={<Navigate to="/videos" replace />} />
          <Route path="/work/:category" element={<Navigate to="/videos/:category" replace />} />
          <Route path="/work/:category/:project" element={<Navigate to="/videos/:category/:project" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
