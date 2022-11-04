import { Box, Button, Input,Text } from '@chakra-ui/react'
import React from 'react';
import { Link } from "react-router-dom";
import styles from "../styles/Signin.module.css";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

export const Signin = () => {
  return (
        <Box className={styles.signinform}>
          <Text 
            fontSize={"2rem"}
            fontWeight={700}
          >
            Sign in
          </Text>
          <Input
            variant={"filled"}
            type="text"
            size="lg" 
            w="25rem"
            mb={"1rem"}
            mt={'1rem'}
            placeholder='enter username' 
          />
          <br />
          <Input
            variant={"filled"}
            type="password"
            size="lg" 
            w="25rem"
            mb={"1rem"}
            placeholder='enter password' 
          />
          <br />
          <Button 
            variant={"solid"}
            size={"lg"}
            colorScheme={"red"}
            w="25rem"
          >
            SIGN IN
          </Button>
          <Text fontSize={"1.2rem"} mt="0.5rem">or sign in with</Text>
          <Box className={styles.options}>
            <Button 
              leftIcon={<FcGoogle />}
              variant="outline"
            >
              Google
            </Button>
            <Button 
              leftIcon={<ImGithub />}
              variant="outline"
            >
              GitHub
            </Button>
          </Box>
          <span 
            className={styles.signup}
          >New User?
          <Link to="/sign-up" >  Sign Up</Link></span>
        </Box>
  )
}
