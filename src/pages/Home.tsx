import React from "react";
import { Container } from "@chakra-ui/react";

// Components
import Hero from "../components/Hero.tsx";

const HomePage: React.FC = () => {
  return (
    <>
      <Container>
        <Hero />
      </Container>
    </>
  );
};

export default HomePage;
