"use client";
import { Input } from "@/components/ui/input";
import TopBar from "@/components/top-bar";
import Welcome from "@/components/welcome";
import Stacks from "@/components/stacks";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import About from "@/components/about";
export default function MainFrame() {
  return (
    <>
      <TopBar />
      <Welcome />
      <Stacks />
      <Projects />
      <About />
      <Footer />
    </>
  );
}
