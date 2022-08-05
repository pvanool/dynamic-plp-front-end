import {productListingsEngine} from "../Helpers/ProductListingEngine";

import React, {useEffect, useState} from "react";
import Head from 'next/head';
import {buildProductListing} from "@coveo/headless/product-listing";
import { PLPGrid } from './PLPGrid';
import { Slug } from '@coveo/headless/dist/definitions/features/product-listing/product-listing-state';

const BASE_PATH = "http://mystore.com";

const controller = buildProductListing(productListingsEngine, {options: {url: BASE_PATH}});

type plpPageProps = {
  routerPath: string;
  pageSlug:string;
  slugDef: Slug;
}

function PLPPage({
  routerPath,
  pageSlug,
  slugDef
}: plpPageProps ) {
  const [products, setProducts] = useState(controller.state.products);

  useEffect(() => {
    controller.setUrl(`${BASE_PATH} + ${routerPath}`);
    controller.setRouting({
      rootUrl: `${BASE_PATH}/${pageSlug}`,
      slug: slugDef,
    })
    controller.refresh();
  }, [pageSlug, routerPath, slugDef]);

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
