import { Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css";


export const Navbar = () => {
  return (
    <div className={styles.navBox}>
      <div>
      <Link to="/"><Text className={styles.logo} size={"lg"}>QuickBlogger</Text></Link>
      </div>
      <div className={styles.links}>
      <Link to="/">Home</Link>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/blogs">CreateBlogs</Link>
      <Link to="/about">About</Link>
      </div>
    </div>
  )
}
