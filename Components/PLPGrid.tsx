
import {Grid} from "@mui/material";
import {ProductRecommendation} from "@coveo/headless/product-listing";
import { ProductItem } from "./ProductItem";


export function PLPGrid({products}: {products: ProductRecommendation[]}) {
    return( 
        <Grid className={'CoveoResultList'} container spacing={4}>
            {products.map(product => (
                <ProductItem product={product} key={product.permanentid}/>
            ))}
        </Grid>
    );
}
