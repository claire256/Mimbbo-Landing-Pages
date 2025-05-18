import { Suspense } from "react";
import HomeGrowth from "./home-growth";

export default function HomePage(){
  return(
    <Suspense fallback={<div>Loading...</div>}>
          <HomeGrowth/>
    </Suspense>
  )
}