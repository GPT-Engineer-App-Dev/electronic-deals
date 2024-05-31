import { Box, Text, VStack, Input, Textarea, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Contact = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">
          Contact Us
        </Text>
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button colorScheme="teal">Send Message</Button>
      </VStack>
      <Box mt={4}>
        <Link as={RouterLink} to="/" color="teal.500">
          Back to Home
        </Link>
      </Box>
    </Box>
  );
};

export default Contact;