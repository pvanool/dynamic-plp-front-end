import getConfig from 'next/config';
import {productListingsEngine} from "../../Helpers/ProductListingEngine";

import React, {useEffect, useState} from "react";
import Head from 'next/head';
import {Grid} from "@mui/material";
import {buildProductListing} from "@coveo/headless/product-listing";
import {useRouter} from "next/router";
import { ProductItem } from '../../Components/ProductItem';
import { PLPGrid } from '../../Components/PLPGrid';

const BASE_PATH = "http://mystore.com";

const controller = buildProductListing(productListingsEngine, {options: {url: BASE_PATH}});

function PLPPage() {
  const [products, setProducts] = useState(controller.state.products);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    controller.setUrl(BASE_PATH + router.asPath);
    controller.setRouting({
      rootUrl: `${BASE_PATH}/sales`,
      slug: {
        segmentField0: "ec_brand",
        segmentField1: "ec_brand",
        segmentField2: "ec_brand",
      }
    })
    controller.refresh();
  }, [router.isReady, router.asPath]);

  useEffect(() => {
    const unsubscribe = controller.subscribe(() => {
      setProducts(controller.state.products);
    });
    return () => unsubscribe();
  }, []);

  return (
      <>
        <Head>
          <title>Product Listings | Automatic Demo</title>
          <meta property="og:title" content="Product Listings" key="title" />
        </Head>
            <PLPGrid products={products} />
        </>
    );
}

export default PLPPage;
