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
import { motion } from "framer-motion";
import getShuffled from "@/utils/shuffled";

export default function Index() {
  const router = useRouter();
  const { products, setProducts, filter } = useProduct();
  const { increaseCart } = useCart();
  const [fetching, setFetching] = React.useState<boolean>(true);
  const [category, setCategory] = React.useState<any>([]);
  React.useEffect(() => {
    const getProducts = async () => {
      setFetching(true);
      try {
        const response = await fetchProducts();
        setProducts(getShuffled(response));
        setCategory(response);
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
          <CFilter
            category={getUnique(category.map((cat: IProduct) => cat.category))}
          />
          <CInfiniteScroll
            className="grid grid-cols-1 gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 "
            items={products.filter((e) => e.category.includes(filter))}
            renderItems={({ item, idx }: { item: IProduct; idx: number }) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                exit={{ opacity: 0 }}
                key={item.id}
              >
                <CProduct
                  props={item}
                  addCart={(e: Event) => {
                    e?.stopPropagation();
                    increaseCart(item);
                  }}
                  navigation={() => router.push(`/product/${item.id}`)}
                />
              </motion.div>
            )}
          />
        </>
      )}
    </React.Fragment>
  );
}
