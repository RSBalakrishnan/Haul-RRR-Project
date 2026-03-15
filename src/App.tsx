import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import DebrisRemoval from "./pages/DebrisRemoval.tsx";
import DemolitionWaste from "./pages/DemolitionWaste.tsx";
import ConstructionDebris from "./pages/ConstructionDebris.tsx";
import Tata407Transport from "./pages/Tata407Transport.tsx";
import SandTransport from "./pages/SandTransport.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/debris-removal-chennai" element={<DebrisRemoval />} />
          <Route path="/demolition-waste-removal-chennai" element={<DemolitionWaste />} />
          <Route path="/construction-debris-removal-chennai" element={<ConstructionDebris />} />
          <Route path="/tata-407-transport-chennai" element={<Tata407Transport />} />
          <Route path="/m-sand-p-sand-transport-chennai" element={<SandTransport />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
