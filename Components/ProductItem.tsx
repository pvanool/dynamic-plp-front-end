import Price from "./Price";
import {Grid, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {ProductRecommendation} from "@coveo/headless/product-listing";


export function ProductItem({product}: {product: ProductRecommendation}) {
    return (<Grid className={'CoveoResult'} item xs={6} md={4} lg={3}>
      <Card className="card-product">
        <CardMedia className={"card__media"} image={product.ec_thumbnails ? product.ec_thumbnails[0] : "" } />
        <CardContent className="card__body">
          <Typography className="CoveoResultLink">
            {product.ec_name}
          </Typography>
          <div className="card__price">
            <Price product={product as any} />
          </div>
        </CardContent>
      </Card>
    </Grid>
    );
}
