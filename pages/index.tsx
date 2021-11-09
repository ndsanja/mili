import type { NextPage } from "next";
import IndexGalery from "../components/Galery";
import WeddingPreweddingGalery from "../components/Galery/WeddingPrewedding";
import Hero from "../components/Header/Hero";
import Nav from "../components/Header/Nav";
import IndexPrewedding from "../components/PreWedding";
import IndexWedding from "../components/Wedding";

const Home: NextPage = () => {
  return (
    <div className="container">
      <div className="h-full flex flex-col justify-center lg:px-8 pb-14">
        <Nav />
        <Hero />
        <IndexGalery />
        <div className="h-8 border-b border-black"></div>
        <IndexWedding />
        <IndexPrewedding />
        <WeddingPreweddingGalery />
      </div>
    </div>
  );
};

export default Home;
