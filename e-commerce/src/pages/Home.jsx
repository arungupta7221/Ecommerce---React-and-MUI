import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from '@mui/material'
import { Container, width } from '@mui/system'
import { useTheme } from '@emotion/react'
import React from 'react'
import { useState, useEffect } from 'react'
import ShoppingCartSharp from '@mui/icons-material/ShoppingCartSharp'
function Home() {
  const theme = useTheme()
  const [products, setProducts] = useState([])
  async function fetchAllProducts() {
    const res = await fetch('https://fakestoreapi.com/products')

    const result = await res.json()
    console.log(result)
    setProducts(result)
  }

  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {products.map(({ title, id, price, description, rating, image }) => (
          <Grid item key={id} xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                sx={{
                  alignSelf: 'center',
                  width: theme.spacing(30),
                  height: theme.spacing(30),
                  objectFit: 'contain',
                  pt: theme.spacing(),
                }}
                image={image}
                alt={title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis', // change to .....
                    display: '-webkit-box',
                    '-webkit-line-clamp': '1',
                    '-webkit-box-orient': 'vertical',
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  color="text.secondary"
                  paragraph
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis', // change to .....
                    display: '-webkit-box',
                    '-webkit-line-clamp': '2',
                    '-webkit-box-orient': 'vertical',
                  }}
                >
                  {description}
                </Typography>
                <Typography paragraph fontSize="large">
                  {price}
                </Typography>
                <Rating readOnly precision={0.5} value={rating.rate}></Rating>
              </CardContent>
              <CardActions>
                <Button variant="contained">
                  <ShoppingCartSharp />
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
