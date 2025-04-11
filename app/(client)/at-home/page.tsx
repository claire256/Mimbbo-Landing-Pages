import { Suspense } from "react";
import Home from "./at-home-home";

export default function HomePage(){
  return(
    <Suspense fallback={<div>Loading...</div>}>
          <Home/>
    </Suspense>
  )
}