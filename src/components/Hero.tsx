import React from "react";
import { Box, Flex, Image, Stack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { useMenu } from "../hooks/MenuContext"; // Import useMenu hook for context
import ArtImage from "../assets/images/features_3.svg";

// const StyledLink = styled.a`
//   color: gray !important; /* Force color to be white */
//   text-decoration: none; /* Remove underline */

//   &:visited {
//     color: gray !important; /* Ensure visited links stay white */
//   }
// `;

const Hero: React.FC = () => {
  const { isMenuOpen } = useMenu(); // Access menu state from context
  console.log("isMenuOpen in Hero:", isMenuOpen); // Debugging log

  return (
    <Box
      alignContent="center"
      as="section"
      p={isMobile ? "8vh" : "10vh"}
      minH="100vh"
      position="relative" // Required for absolute positioning of the banner
    >
      {/* Main Hero Content */}
      <Box
        // ml={"5%"}
        // p={isMobile ? "10vw" : "5vw"}
        ml={isMobile ? 0 : "15%"}
        flex={1}
        gap={20}
        className="container"
        mt={isMobile ? "50%" : "120px"}
      >
        <Box className="row align-items-center justify-content-center" >
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" width="full">
            <Box className="col-md" w={isMobile ? "85vw" : "auto"}>
              <Stack spacing={0}>
                <Heading
                  fontSize={{
                    base: "3xl",
                    md: "4xl",
                    lg: "5xl",
                  }}
                >
                  <Text as="span">
                    Unruggable tokens
                  </Text>
                  <br />
                  <Box>
                  <Text as="span">on </Text>
                  <Text color="#f8bd45" as="span">
                    Binance Smart Chain
                  </Text>
                  </Box>
                </Heading>

                <HStack minW={100} ml={isMobile ? 10 : 0} justify={{ base: "center", md: "flex-start" }}>
                  <a href="https://exchange.oikos.cash" onClick={() => gaEventTracker("read_announcement")} target="_blank">
                    <Button p={15} minW={"140px"} fontWeight={600} background="black" color="#f8bd45" h={70} border={"1px solid gray"} ml={isMobile?-20:0}>
                      Go to <br />dApp
                    </Button>
                  </a>
                  &nbsp;
                  <a href="https://docs.oikos.cash/"  target="_blank">
                    <Button p={15} minW={150} fontWeight={600} background="black" color="#f8bd45" h={70} border={"1px solid gray"}>
                      Read the <br />docs
                    </Button>
                  </a>
                </HStack>
              </Stack>
            </Box>
            <Box width={isMobile ? "0" : "35%"} textAlign="center" mr={"10%"}>
              <Image
                height="380px"
                objectFit="cover"
                src={ArtImage}
                visibility={isMobile ? "hidden" : "initial"}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
