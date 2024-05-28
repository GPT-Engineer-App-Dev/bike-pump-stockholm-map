import { Container, Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 59.3293, lng: 18.0686 },
      zoom: 13,
    });

    const bikePumpStations = [
      { id: 1, name: "Pump Station 1", position: { lat: 59.3293, lng: 18.0686 } },
      { id: 2, name: "Pump Station 2", position: { lat: 59.3325, lng: 18.0649 } },
      { id: 3, name: "Pump Station 3", position: { lat: 59.3340, lng: 18.0700 } },
    ];

    bikePumpStations.forEach((station) => {
      const marker = new window.google.maps.Marker({
        position: station.position,
        map: map,
        title: station.name,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: station.name,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }, []);

  return (
    <Container maxW="100vw" p={0}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="teal.500"
        color="white"
      >
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Stockholm Bike Pump Stations
        </Heading>
      </Flex>
      <Box id="map" height="calc(100vh - 80px)" />
    </Container>
  );
};

export default Index;