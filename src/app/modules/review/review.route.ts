import { Router } from 'express';
import { ReviewControllers } from './review.controller';

const router = Router();

router.get('/', ReviewControllers.getAllReview);
router.post('/add-review/:slug', ReviewControllers.addReview);
router.get('/get-review-by-id/:productId', ReviewControllers.getReviewById);
router.put(
  '/update-review-by-id/:productId',
  ReviewControllers.updateReviewById,
);
router.delete(
  '/delete-review-by-id/:productId',
  ReviewControllers.deleteReviewById,
);

export const ReviewRoutes = router;
