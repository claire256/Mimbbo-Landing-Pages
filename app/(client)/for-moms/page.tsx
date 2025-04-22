import { Suspense } from "react";
import Home from "./for-moms-home";

export default function HomePage(){
  return(
    <Suspense fallback={<div>Loading...</div>}>
          <Home/>
    </Suspense>
  )
}