import React from 'react';

export default function FadeInSection(props: any) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    });
    if (domRef.current) observer.observe(domRef.current);
  }, []);
  return (
    <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      {props.children}
    </div>
  );
}
