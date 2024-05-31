import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold" color="white">
          Electronics Store
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" color="white" mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/products" color="white" mx={2}>
            Products
          </Link>
          <Link as={RouterLink} to="/contact" color="white" mx={2}>
            Contact Us
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;