import FormProduct from "@components/FormProduct";
import { getProduct } from "@services/api/products.api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Edit() {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getProduct(id)
        .then((data) => setProduct(data))
        .catch(() => router.back());
    }
  }, [id, router]);

  return <FormProduct product={product} />;
}
