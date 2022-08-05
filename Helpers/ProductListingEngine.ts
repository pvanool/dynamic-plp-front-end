import {buildProductListingEngine} from "@coveo/headless/product-listing";


export const productListingsEngine = buildProductListingEngine({
    configuration: {
      organizationId: process.env.ORG_ID || "",
      accessToken: process.env.API_KEY || "",
      platformUrl: 'http://localhost:8100',
    }
  });
