import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import TestData from "../components/Navbar/TestData";
import Partnered from "../components/Partnered/Partnered";

export default function Home() {
  return (
    <div>
      <Navbar />
      <TestData />
      <Partnered />
      <TestData />
    </div>
  );
}
