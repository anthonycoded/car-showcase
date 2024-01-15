import Image from "next/image";
import Filters from "../components/Filters";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-w-fit w-full" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like.</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <Filters />
            <Filters />
          </div>
        </div>
      </div>
    </main>
  );
}
