import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React from 'react';
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import ReactStars from "react-rating-stars-component";
 import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<{ props: { review: Review; }; }> {
  const { id } = context.params;

  const res = await fetch(process.env.REVIEW_API_URL + `/${id}`);
  const { title, rating, description, id: reviewId } = (await res.json()) as NetworkReview;
  const review: Review = { title, rating, description, id: reviewId };
  return {
    props: { review }
  };
}

async function deleteReview(id: number) {
  const res = await fetch(`/api/reviews/${id}`, {
    method: "DELETE"
  });
  if (!res.ok) {
    const body = await res.json();
    throw new Error(body.data.error.message);
  }
}

export default function ReviewDetailPage({
    review
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //const postObj = JSON.parse(review) as Review;
  const router = useRouter();

  const confirmDelete = (id: number) => {
    confirmAlert({
      title: 'Confirmar exclusão',
      message: 'Tem certeza que quer excluir essa avaliação?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => handleDeleteButtonClick(true, id)
        },
        {
          label: 'Não',
          onClick: () => handleDeleteButtonClick(false, id)
        }
      ]
    });
  };

  async function handleDeleteButtonClick(answer: boolean, id: number) {
    if (!answer) return;

    const notifyError = (msg) => toast.error(msg);
    const notifySuccess = (msg) => toast.success(msg);
    try {
      await deleteReview(id);
      //alert("Review deleted successfully!");
      notifySuccess("Avaliação deletada com sucesso");
      router.replace("/reviews");
    } catch (error) {
      //alert("Something went wrong :/");
      notifyError("Avaliação Não deletada")
    }
  }
  return (
    <section className="m-4">
      <h1 className="m-4 text-center text-3xl text-red-400">{review.title}</h1>
          <ReactStars
          count={5}
          size={39}
          edit={false}
          value={review.rating}
          activeColor="#ffd700"
        />
      <p className="">{review.description}</p>
      <div className="mt-20 flex flex-col md:flex-row md:justify-end">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block flex-grow md:inline md:flex-grow-0">
          <a href={`/reviews/${review.id}/edit`}>Edit</a>
        </button>
        <button
          onClick={() => confirmDelete(review.id)}
          className="bg-red-500 text-red font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block flex-grow mt-2 md:inline md:flex-grow-0 md:m-0 md:ml-1"
        >
          Delete
        </button>
      </div>
    </section>
  );
}
