import { Box ,Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../styles/Footer.module.css"
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
        <Box>
            <Box className={styles.logo}>
                <Text>QuickBlogger</Text>
            </Box>
            <Box className={styles.foot}>
                <Link to="#">Terms</Link>
                <Link to="#">Privacy</Link>
                <Link to="#">Help</Link>
            </Box>
            <Box className={styles.copy}> © All Rights Reserved</Box>
        </Box>
  )
}
