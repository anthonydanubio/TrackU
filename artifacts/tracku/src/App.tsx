import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Landing from "@/pages/landing";
import Login from "@/pages/login";
import Register from "@/pages/register";
import Onboarding from "@/pages/onboarding";
import Dashboard from "@/pages/dashboard";
import Assignments from "@/pages/assignments";
import Study from "@/pages/study";
import Internships from "@/pages/internships";
import Reading from "@/pages/reading";
import Events from "@/pages/events";
import Community from "@/pages/community";
import Settings from "@/pages/settings";
import Performance from "@/pages/performance";
import NotFound from "@/pages/not-found";

import { AuthProvider } from "@/hooks/use-auth";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/onboarding" component={Onboarding} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/assignments" component={Assignments} />
      <Route path="/study" component={Study} />
      <Route path="/internships" component={Internships} />
      <Route path="/reading" component={Reading} />
      <Route path="/events" component={Events} />
      <Route path="/community" component={Community} />
      <Route path="/settings" component={Settings} />
      <Route path="/performance" component={Performance} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
