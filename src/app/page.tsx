"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CInfiniteScroll } from "@/components/display";
import { fetchProducts } from "@/services/https";
import { IProduct } from "@/interface/product";
import { CProduct, CSkeletonProduct } from "@/components/card";
import { CFilter } from "@/components/display/c-filter";
import getUnique from "@/utils/unique";
import { useProduct } from "@/providers/provider-product";
import { useCart } from "@/providers/provider-cart";

export default function Index() {
  const router = useRouter();
  const { products, setProducts, filter } = useProduct();
  const { increaseCart } = useCart();
  const [fetching, setFetching] = React.useState<boolean>(true);

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
            className="grid grid-cols-1 gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 "
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
            className="grid grid-cols-1 gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 "
            items={products.filter((e) => e.category.includes(filter))}
            renderItems={({ item, idx }: { item: IProduct; idx: number }) => (
              <CProduct
                props={item}
                addCart={(e: Event) => {
                  e?.stopPropagation();
                  increaseCart(item);
                }}
                navigation={() => router.push(`/product/${idx + 1}`)}
              />
            )}
          />
        </>
      )}
    </React.Fragment>
  );
}
