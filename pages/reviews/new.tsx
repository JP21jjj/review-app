import { EditReviewForm } from "../../components/EditReviewForm";
import { useRouter } from "next/router";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type NewReviewFormData = {
  title: string;
  description: string;
};

async function sendData(data: NewReviewFormData) {
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  
    const body = await res.json();
    if (!res.ok) {
      throw new Error(body.data.error.message);
    }
  }

function AddNewPage() {
  const router = useRouter();
  async function onFormSubmit(data: NewReviewFormData) {
    const notifySucesso = (msg) => toast.success(msg);
    const notifyError = (msg) => toast.error(msg)

    try {
      sendData(data);
      //alert("Review created successfully!");
      notifySucesso("Avaliação criada com sucesso");
      router.replace(`/reviews`);
    } catch (error) {
      //alert("Something went wrong :/");
      notifyError("Algo deu errado");
    }
  }

  return (
    <section className="m-4">
      <EditReviewForm onSubmit={onFormSubmit} />
    </section>
  );
}

export default AddNewPage;





