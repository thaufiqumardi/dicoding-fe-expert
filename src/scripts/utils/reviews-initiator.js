import { createReviewsItemTemplate } from '../views/template-creator';

const ReviewsInitiator = {
  async init({ reviewsContainer, review }) {
    this._reviewsContainer = reviewsContainer;
    this._review = review;
    await this.renderReviews();
  },

  async renderReviews() {
    this._review.forEach((item) => {
      this._reviewsContainer.innerHTML += createReviewsItemTemplate(item);
    });
  },
};

export default ReviewsInitiator;
