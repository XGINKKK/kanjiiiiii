import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AreaMembros from "./pages/AreaMembros";
import MetodoJapones from "./pages/MetodoJapones";
import GuiaPais from "./pages/GuiaPais";
import Upsell from "./pages/Upsell";
import UpsellAnalisador from "./pages/UpsellAnalisador";
import FormularioPlano from "./pages/FormularioPlano";
import Gerador from "./pages/Gerador";
import NotFound from "./pages/NotFound";

// CRÍTICO: QueryClient DEVE ser criado fora do componente
// Se criado dentro, será recriado a cada render causando re-renders em cascata
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutos
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/membros" element={<AreaMembros />} />
          <Route path="/japones" element={<MetodoJapones />} />
          <Route path="/pais" element={<GuiaPais />} />
          <Route path="/upsell" element={<Upsell />} />
          <Route path="/analisador" element={<UpsellAnalisador />} />
          <Route path="/formulario" element={<FormularioPlano />} />
          <Route path="/gerador" element={<Gerador />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
