"use client";
import React from "react";
import { CInfiniteScroll } from "@/components/display";
import { useCart } from "@/providers/provider-cart";
import { fetchProducts } from "@/services/https";
import { IProduct } from "@/interface/product";
import { CProduct, CSkeletonProduct } from "@/components/card";
import { CFilter } from "@/components/display/c-filter";
import getUnique from "@/utils/unique";

export default function Index() {
  const { products, setProducts } = useCart();
  const [fetching, setFetching] = React.useState<boolean>(false);

  React.useEffect(() => {
    const getProducts = async () => {
      setFetching(true);
      try {
        const response = await fetchProducts();
        setProducts(response);
      } catch (err) {}
      setFetching(false);
    };

    getProducts();
  }, []);
  return (
    <React.Fragment>
      {fetching ? (
        <>
          <CFilter category={[]} isSkeleton={true} />
          <CInfiniteScroll
            items={new Array(20).fill({} as IProduct)}
            renderItems={({ item }: { item: IProduct }) => (
              <CSkeletonProduct props={item} />
            )}
          />
        </>
      ) : (
        <>
          <CFilter category={getUnique(products.map((cat) => cat.category))} />
          <CInfiniteScroll
            items={products}
            renderItems={({ item }: { item: IProduct }) => (
              <CProduct props={item} />
            )}
          />
        </>
      )}
    </React.Fragment>
  );
}
