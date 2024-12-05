
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const getProducts = asyncHandler(async (req, res) => {
    // Fetch products data
    try {
        const  response = await fetch('https://dummyjson.com/products?limit=12');
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          // Parse the JSON response body
          const products = await response.json();
          return res
          .status(200)
          .json(new ApiResponse(
              200,
              products,
              "Products fetched successfully"
           ))
        } catch (error) {
            // Handle errors (network issues, invalid JSON, etc.)
            console.error('Error fetching data:', error);
        }
})

const getChannelStats = asyncHandler(async (req, res) => {
    // TODO: Get the channel stats like total video views, total subscribers, total videos, total likes etc.
})

const getChannelVideos = asyncHandler(async (req, res) => {
    // TODO: Get all the videos uploaded by the channel
})

export {
    getProducts,
    getChannelStats, 
    getChannelVideos
    }