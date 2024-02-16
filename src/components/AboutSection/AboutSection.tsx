const Fondo = () => (
  <svg
    className="w-[100%] h-[100%] absolute left-0 top-0 "
    width="1728"
    height="909"
    viewBox="0 0 1728 909"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M863 132L0 1V908L863 799.5L1728 908V1L863 132Z"
      fill="url(#paint0_linear_37_2)"
      stroke="#4057CC"
    />
    <defs>
      <linearGradient
        id="paint0_linear_37_2"
        x1="863.75"
        y1="1"
        x2="863.75"
        y2="908"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3A55CC" />
        <stop offset="1" stopColor="#4036AD" stopOpacity="0.79" />
      </linearGradient>
    </defs>
  </svg>
);

const AboutSection = () => {
  return (
    <section className="w-[100%] h-[100vh] relative top-[-14.6vh]">
      <Fondo />
    </section>
  );
};

export default AboutSection;
