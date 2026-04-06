"use client";
import TopBar from "@/components/top-bar";
import Welcome from "@/components/welcome";
import Stacks from "@/components/stacks";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function MainFrame() {
  return (
    <>
      <TopBar />
      <Welcome />
      <Stacks />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
