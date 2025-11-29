import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/Home";

function TransformerStub() {
  return <div className="py-20">Transformer app (pendiente)</div>;
}

export default function App() {
  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto px-6">
        <Navbar />
        <main className="pt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps/transformer" element={<TransformerStub />} />
            <Route
              path="/apps/dto-visualizer"
              element={<div className="py-20">DTO Visualizer (pendiente)</div>}
            />
          </Routes>
        </main>
      </div>
    </Layout>
  );
}
