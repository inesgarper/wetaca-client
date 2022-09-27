import { client } from "../../graphql";
import { GET_REVIEWS } from "./queries/review.queries";
import { getReviewsQuery } from "./queries/__generated__/getReviewsQuery";

class ReviewService {

    async getReviews(mealID: string): Promise<getReviewsQuery["getReviews"]> {

        try {
            const response = await client.query({
                query: GET_REVIEWS,
                variables: { mealID }
            })

            if (!response || !response.data) throw new Error("Cannot get reviews")

            return response.data.getReviews

        } catch (err) {
            throw (err)
        }
    }
}

export default new ReviewService()