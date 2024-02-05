import CoffeesDisplay from "@/components/CoffeesDisplay";
import { firstTimeVisitor } from "@/helpers/localstorage/firstTimeVisitor";
import { Button } from "@mui/material";
import Image from "next/image";
import LandingPage from "@/components/landing/LandingPage";
export default function Home() {

  // const checkIfFirstTime = localStorage.getItem("firstTime")

  return (
    <div>
      <LandingPage />
    </div>
  );
}
