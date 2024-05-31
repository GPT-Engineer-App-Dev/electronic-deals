import { Container, Text, VStack, SimpleGrid, Box, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    image: "https://via.placeholder.com/150",
    price: "$299",
  },
  {
    id: 2,
    name: "Laptop",
    image: "https://via.placeholder.com/150",
    price: "$799",
  },
  {
    id: 3,
    name: "Smartwatch",
    image: "https://via.placeholder.com/150",
    price: "$199",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          Welcome to Electronics Store
        </Text>
        <Text fontSize="xl" textAlign="center">
          Discover the latest in electronic gadgets and accessories.
        </Text>
        <SimpleGrid columns={[1, 2, 3]} spacing={10} mt={8}>
          {sampleProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Text fontWeight="bold" fontSize="xl">
                  {product.name}
                </Text>
                <Text mt={2}>{product.price}</Text>
                <Link as={RouterLink} to={`/products/${product.id}`} color="teal.500" mt={4} display="block">
                  View Details
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;