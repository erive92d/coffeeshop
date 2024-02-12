import CoffeesDisplay from "@/components/CoffeesDisplay";
import { firstTimeVisitor } from "@/helpers/localstorage/firstTimeVisitor";
import { Button } from "@mui/material";
import Image from "next/image";
import LandingPage from "@/components/landing/LandingPage";
export default function Home() {

  return (
    <div className="min-h-screen px-8 py-6">
      <LandingPage />
    </div>
  );
}
