import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index.tsx"));
const DebrisRemoval = lazy(() => import("./pages/DebrisRemoval.tsx"));
const DemolitionWaste = lazy(() => import("./pages/DemolitionWaste.tsx"));
const ConstructionDebris = lazy(() => import("./pages/ConstructionDebris.tsx"));
const Tata407Transport = lazy(() => import("./pages/Tata407Transport.tsx"));
const SandTransport = lazy(() => import("./pages/SandTransport.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Velachery = lazy(() => import("./pages/areas/Velachery.tsx"));
const Perungudi = lazy(() => import("./pages/areas/Perungudi.tsx"));
const Medavakkam = lazy(() => import("./pages/areas/Medavakkam.tsx"));
const Tambaram = lazy(() => import("./pages/areas/Tambaram.tsx"));
const Thoraipakkam = lazy(() => import("./pages/areas/Thoraipakkam.tsx"));
const Sholinganallur = lazy(() => import("./pages/areas/Sholinganallur.tsx"));
const Guindy = lazy(() => import("./pages/areas/Guindy.tsx"));
const Pallikaranai = lazy(() => import("./pages/areas/Pallikaranai.tsx"));
const Navalur = lazy(() => import("./pages/areas/Navalur.tsx"));
const Siruseri = lazy(() => import("./pages/areas/Siruseri.tsx"));
const Kelambakkam = lazy(() => import("./pages/areas/Kelambakkam.tsx"));
const ECR = lazy(() => import("./pages/areas/ECR.tsx"));
const Taramani = lazy(() => import("./pages/areas/Taramani.tsx"));
const Chromepet = lazy(() => import("./pages/areas/Chromepet.tsx"));
const Pallavaram = lazy(() => import("./pages/areas/Pallavaram.tsx"));
const Madipakkam = lazy(() => import("./pages/areas/Madipakkam.tsx"));
const Saidapet = lazy(() => import("./pages/areas/Saidapet.tsx"));
const TNagar = lazy(() => import("./pages/areas/TNagar.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/debris-removal-chennai" element={<DebrisRemoval />} />
            <Route path="/demolition-waste-removal-chennai" element={<DemolitionWaste />} />
            <Route path="/construction-debris-removal-chennai" element={<ConstructionDebris />} />
            <Route path="/tata-407-transport-chennai" element={<Tata407Transport />} />
            <Route path="/m-sand-p-sand-transport-chennai" element={<SandTransport />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Local Area Routes */}
            <Route path="/debris-removal-velachery" element={<Velachery />} />
            <Route path="/debris-removal-perungudi" element={<Perungudi />} />
            <Route path="/debris-removal-medavakkam" element={<Medavakkam />} />
            <Route path="/debris-removal-tambaram" element={<Tambaram />} />
            <Route path="/debris-removal-thoraipakkam" element={<Thoraipakkam />} />
            <Route path="/debris-removal-sholinganallur" element={<Sholinganallur />} />
            <Route path="/debris-removal-guindy" element={<Guindy />} />
            <Route path="/debris-removal-pallikaranai" element={<Pallikaranai />} />
            <Route path="/debris-removal-navalur" element={<Navalur />} />
            <Route path="/debris-removal-siruseri" element={<Siruseri />} />
            <Route path="/debris-removal-kelambakkam" element={<Kelambakkam />} />
            <Route path="/debris-removal-ecr" element={<ECR />} />
            <Route path="/debris-removal-taramani" element={<Taramani />} />
            <Route path="/debris-removal-chromepet" element={<Chromepet />} />
            <Route path="/debris-removal-pallavaram" element={<Pallavaram />} />
            <Route path="/debris-removal-madipakkam" element={<Madipakkam />} />
            <Route path="/debris-removal-saidapet" element={<Saidapet />} />
            <Route path="/debris-removal-tnagar" element={<TNagar />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
