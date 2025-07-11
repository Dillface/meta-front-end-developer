import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import assetImage from "../assets/Asset 16@4x.png"; // Adjust the relative path accordingly
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link} from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faWhatsapp,
    url: "https://www.whatsapp.com",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com",
  },
  {
    icon: faTwitter,
    url: "https://x.com",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com",
  },
];

const Header = () => {

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="orange"
      zIndex="1000" 
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <a href="/">
          <img
            src={assetImage}
            alt="header logo"
            style={{
              width: "150px",
              objectFit: "contain",
            }}
          />
          </a>
          <nav>
              <ul>
              <HStack spacing={8}>
                {socials.map((social, index) => (
                  <Link key={index} href={social.url} isExternal>
                    <FontAwesomeIcon icon={social.icon} size="1x" />
                  </Link>
                ))}
              </HStack>
              </ul>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/Menu">Menu</a>
              <a href="/Reserve">Reserve a Table</a>
              <a href="/Bookings">Bookings</a>
              <a href="/About">About</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;