import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react';
import styles from "../styles/About.module.css";
import blog from "../images/blog.jpg";
export const About = () => {
  return (
    <SimpleGrid columns={[1,null,2]} className={styles.aboutBox}>
        <Box className={styles.Box1}>
            <Text>
            The best ideas can change who we are. QuickBlogger is where those ideas take shape, take off, and spark powerful conversations.
            We’re an open platform where over 100 million readers come to find insightful and dynamic thinking.
            Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface.
            Our purpose is to spread these ideas and deepen understanding of the world.
            </Text>
            <br/>
            <Text>
                We’re creating a new model for digital publishing.
                One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising.
                It’s an environment that’s open to everyone but promotes substance and authenticity.
                And it’s where deeper connections forged between readers and writers can lead to discovery and growth.
                Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.
            </Text>
        </Box>
        <Box className={styles.Box2}>
            <Image className={styles.img} src={blog} alt="blog image" />
        </Box>
    </SimpleGrid>
  )
}
