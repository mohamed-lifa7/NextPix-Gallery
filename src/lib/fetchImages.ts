import { ImagesResults } from "@/models/Images";
import { ImagesSchemaWithPhotos } from "@/models/Images";
import env from "./env";


/**
 * Fetch images from a specified URL.
 *
 * @param {string} url - The URL from which to fetch images.
 * @returns {Promise<ImagesResults | undefined>} A promise that resolves with parsed image data or undefined on failure.
 */
export async function fetchImages(url:string):Promise<ImagesResults | undefined>{
    try {
        // Send a GET request to the provided URL with an Authorization header containing an API key
        const res = await fetch(url, {
            headers:{
                Authorization:env.PEXELS_API_KEY
            }
        })

        // Check if the response status is not okay (HTTP status code >= 400)
        if(!res.ok){
            console.log('Failed to fetch Images!\n')
            throw new Error('Failed to fetch Images!\n');
        }

        // Parse the JSON response into an ImagesResults object
        const imagesResults: ImagesResults = await res.json();
        
        // Parse the data using a Zod schema (ImagesSchemaWithPhotos)
        const parsedData = ImagesSchemaWithPhotos.parse(imagesResults)

        // Check if there are no results, and return undefined in that case
        if(parsedData.total_results === 0){
            return undefined;
        }

        // Return the parsed data
        return parsedData
    } catch (error) {
        // Handle any errors that occur during the execution of the function
        if(error instanceof Error)
        console.log(error.stack)
    }
}