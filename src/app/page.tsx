//  "use client";

import Slider from "@/components/Slider"
import ProductList from "@/components/ProductList"
import CategoryList from "@/components/CategoryList"
import { WixClientContext } from "@/context/wixContext";
import Skeleton from "@/components/Skeleton";
// import { useContext, useEffect } from "react";
// import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense, useContext, useEffect } from "react";


const HomePage = async () => {


    // TEST (FETCHING ON THE CLIENT COMPONENT)

  // const wixClient = useWixClient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();

  //     console.log(res)
  //   };

  //   getProducts();
  // }, [wixClient]);
  

  // TEST (FETCHING ON THE SERVER COMPONENT)

  // const wixClient = await wixClientServer();

  // const res = await wixClient.products.queryProducts().find();

  // console.log(res);


  return (
    <div className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
       <h1 className="text-2xl"> A LA UNE</h1>
       <Suspense fallback={<Skeleton/>}>
       <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
       </Suspense>
        
      </div>

      <div className="mt-24">
       <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12"> Catégories</h1>
       <Suspense fallback={<Skeleton/>}>
          <CategoryList />
        </Suspense>
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
       <h1 className="text-2xl"> Nouveaux Produits</h1>
      
       <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
      </div>
      
    </div>
  )
}

export default HomePage