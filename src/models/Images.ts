import {z} from "zod"

const BasicImageSchema = z.object({
    page: z.number(),
    per_page : z.number(),
    prev_page : z.string().optional(),
    next_page : z.string().optional(),
    total_results : z.number(),
})

const PhotosSchema= z.object(
    {
      id: z.number(),
      width: z.number(),
      height: z.number(),
      url: z.string(),
      
      src:z.object( {
          large: z.string(),
        }),
      alt: z.string(),
      blurredDataUrl : z.string().optional()
    }
) 

export const ImagesSchemaWithPhotos = BasicImageSchema.extend({
    photos: z.array(PhotosSchema),
})
export type Photo = z.infer<typeof PhotosSchema>
export type ImagesResults = z.infer<typeof ImagesSchemaWithPhotos>
