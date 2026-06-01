import RegistryClient from "@/app/components/registry/RegistryClient";
import { getRegistryCompanies } from "@/app/lib/data/registry";
import RegistryIntelligenceSummary from "@/app/components/registry/RegistryIntelligenceSummary";

export default async function RegistryPage() {
  const companies = await getRegistryCompanies();

  return (
    <main className="min-h-screen bg-black text-white">
      <RegistryClient companies={companies} />
    </main>
  );
}