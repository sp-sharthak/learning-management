import Loading from "@/components/Loading";
import { useUser } from "@clerk/nextjs";
import React from "react";

const CheckoutWizard = () => {
  const { isLoaded } = useUser();

  if (!isLoaded) return <Loading />;

  return <div>CheckoutWizard</div>;
};
