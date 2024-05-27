import { FC, ReactNode, useEffect, useRef, RefObject } from "react";
import "./Animations.css"; // CSS file to handle different animations

interface AnimationProps {
  children: ReactNode;
  animationClass: string; // CSS class to specify the animation
}

const AnimationContent: FC<AnimationProps> = ({ children, animationClass }) => {
  const wrapper: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (wrapper.current) {
      const element = wrapper.current;
      const observerOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      };

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('appear');
              observer.unobserve(entry.target);
            }
          });
        },
        observerOptions
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }
  }, []);

  return (
    <div className={`card ${animationClass}`} ref={wrapper}>
      {children}
    </div>
  );
};

export default AnimationContent;
