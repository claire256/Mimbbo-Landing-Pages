import { Suspense } from "react";
import HomeBusiness from "./home-business";

export default function HomePage(){
  return(
    <Suspense fallback={<div>Loading...</div>}>
          <HomeBusiness/>
    </Suspense>
  )
}