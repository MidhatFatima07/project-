import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          d={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
          bg="transparent"
          _hover={{ bg: "transparent" }}
          position="fixed"
          top="1rem"
          right="1rem"
        />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="xl" overflow="hidden">
          <ModalHeader
            fontSize="2xl"
            fontFamily="Work Sans"
            fontWeight="bold"
            bg="blue.500"
            color="white"
            p="4"
            textAlign="center"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton color="gray.700" />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
            p="6"
          >
            <Box
              borderRadius="full"
              overflow="hidden"
              boxSize="150px"
              bg="gray.200"
            >
              <Image
                borderRadius="full"
                boxSize="100%"
                src={user.pic}
                alt={user.name}
              />
            </Box>
            <Text fontSize="lg" fontFamily="Work Sans" mt="4">
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter justifyContent="center" bg="gray.100" p="4">
            <Button onClick={onClose} colorScheme="blue">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
