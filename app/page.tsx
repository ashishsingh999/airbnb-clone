import Header from './components/Header';
import FilterBar from './components/FilterBar';
import PropertyCard from './components/PropertyCard';
import Footer from './components/Footer';
import { properties } from './data/properties';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Header />
      <FilterBar />
      
      <div className="flex-grow container mx-auto px-4 py-8 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
