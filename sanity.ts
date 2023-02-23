import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

// config for the Sanity client
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2023-02-21",
  useCdn: process.env.NODE_ENV === "production",
};

// set up a client for fetching data in the getStaticProps function
export const sanityClient = createClient(config);

// image builder function for easily creating urls for your Sanity images
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
