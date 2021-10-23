import Link from "next/link";
import ReactStars from "react-rating-stars-component";

type Props = {
  review: Review;
};

const ReviewListItem: React.FC<Props> = ({ review }) => {
  return (
    <Link href="/reviews/[id]" as={`/reviews/${review.id}`}>
      <a>
        <article className="bg-pink-100 border-gray-400 rounded-lg p-6 m-4 transition duration-300 ease-in-out transform hover:-translate-y-2 ">
          <div className="text-center md:text-left">
            <span className="text-lg">{review.title}</span>
            <ReactStars
              count={5}
              isHalf={true}
              value={review.rating}
              edit={false}
              size={26}
              activeColor="#ffd700"
            />
            <p className="text-purple-500">{review.description}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export { ReviewListItem };