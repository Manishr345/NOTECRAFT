import { AnimatedTestimonials } from "../support/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovativehjhljhlkjhlhlh.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The attention to detail and innovativehjhljhlkjhlhlh.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The attention to detail and innovativehjhljhlkjhlhlh.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.pexels.com/photos/4559555/pexels-photo-4559555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote:
        "The attention to detail and innovativehjhljhlkjhlhlh.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.pexels.com/photos/5717845/pexels-photo-5717845.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      quote:
        "The attention to detail and innovativehjhljhlkjhlhlh.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.pexels.com/photos/6016352/pexels-photo-6016352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
