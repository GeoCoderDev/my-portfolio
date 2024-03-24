import emailIcon from "./../../../public/images/svg/email-icon.svg";
import whatsappIcon from "./../../../public/images/svg/whatsapp-icon.svg";
import copyIcon from "./../../../public/images/svg/CopiarIcon.svg";
import { ChangeEvent, useEffect, useState } from "react";

const ContactSectionBackground = () => {
  return (
    <svg
      className="w-full h-full absolute top-0 left-0"
      preserveAspectRatio="none"
      width="1728"
      height="1230"
      viewBox="0 0 1728 1230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_506_612)">
        <path
          d="M0 22L247.68 54L493.44 48L741.12 30L986.88 0L1234.56 38L1480.32 44L1728 29V188H0V22Z"
          fill="#CAD1F7"
        />
        <path
          d="M0 116L247.68 80L493.44 100L741.12 77L986.88 63L1234.56 52L1480.32 101.5L1728 76V188H0V116Z"
          fill="#939CCC"
        />
        <path
          d="M0 188.422V131L247.5 106L493.5 150L741 110L987 153L1235 107L1479.5 145.5H1728V188.422V1230H0V188.422Z"
          fill="url(#paint0_linear_506_612)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_506_612"
          x1="864"
          y1="188.422"
          x2="864"
          y2="1230"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4156C9" />
          <stop offset="0.8" stopColor="#4F5BD0" />
          <stop offset="1" stopColor="#655FBF" />
        </linearGradient>
        <clipPath id="clip0_506_612">
          <rect width="1728" height="1230" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

interface EmailData {
  Authorization: string;
  message: string;
  fromEmail: string;
  toEmail: string;
  nameOrigin: string;
}

const initialEmail: EmailData = {
  Authorization: "re_Jmt7LiYM_3wumjHArZFA5QMQcPUhU7va1",
  message: "",
  fromEmail: "",
  toEmail: "juanchavezsaldana1@gmail.com",
  nameOrigin: "",
};

const ContactSection = () => {
  const [contactElementsHeight, setContactElementsHeight] = useState(200);

  const [emailData, setEmailData] = useState(initialEmail);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmailData((initValue) => {
      return { ...initValue, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    const contactElementsContainer = document.getElementById(
      "contact-elements-container"
    );

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setContactElementsHeight(entry.contentRect.height);
      });
    });

    resizeObserver.observe(contactElementsContainer!);

    return () => resizeObserver.unobserve(contactElementsContainer!);
  }, []);

  return (
    <>
      <section id="contact-section" className="relative w-full max-w-screen-xl">
        <ContactSectionBackground />

        <h1 className="-border-2 text-white relative max-sm:text-3xl text-4xl after:content-[''] after:h-[0.37rem] after:w-[40%] after:bg-white after:absolute after:bottom-[-35%] after:rounded-full after:-translate-x-1/2 after:left-1/2">
          Contacto
        </h1>

        <div
          id="contact-elements-container"
          className="z-[12] flex flex-wrap gap-y-10 gap-x-[10%] -border-2 w-[90%] justify-center"
        >
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              try {
                const resJSON = await fetch("https://api.resend.com/emails", {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${emailData.Authorization}`,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    cc: [],
                    to: [emailData.toEmail],
                    bcc: [],
                    from: "onboarding@resend.dev",
                    html: '<p>Congrats on sending your <strong>first email</strong>!</p><hr /><p style="color:#898989;font-size:12px;">2261 Market Street #5039 - San Francisco, CA 94114</p>',
                    tags: [],
                    text: emailData.message,
                    subject: `Message from ${emailData.fromEmail}`,
                  }),
                });

                if (!resJSON.ok)
                  throw new Error(
                    `Server responded with status ${resJSON.status}`
                  );
              } catch (error) {
                console.log(error);
              } finally {
                setEmailData(initialEmail);
              }
            }}
            className="flex flex-col items-center flex-wrap gap-y-3 sxs:w-[80%] md:w-[50%] lg:w-[30%] text-white"
          >
            <p className="text-2xl text-center text-[1.3rem] italic">
              ¡Contáctame desde aqui para empezar a trabajar juntos!
            </p>

            <label
              htmlFor="nameR"
              className="text-xl w-[90%] flex flex-wrap gap-y-2"
            >
              Nombre:
              <input
                id="nameR"
                className="w-full text-black outline-none text-sm py-1 px-2  rounded-md"
                type="text"
                name="nameOrigin"
                onChange={handleChange}
                required
                value={emailData.nameOrigin}
              />
            </label>

            <label
              htmlFor="correoR"
              className="text-xl w-[90%] flex flex-wrap gap-y-2"
            >
              Tu Correo:
              <input
                id="correoR"
                className="w-full text-black outline-none text-sm py-1 px-2  rounded-md"
                name="fromEmail"
                required
                onChange={handleChange}
                type="email"
                value={emailData.fromEmail}
              />
            </label>

            <label
              htmlFor="mensajeR"
              className="text-xl w-[90%] flex flex-wrap gap-y-2"
            >
              Mensaje:
              <textarea
                id="mensajeR"
                rows={6}
                required
                name="message"
                maxLength={300}
                onResize={() => false}
                onChange={handleChange}
                value={emailData.message}
                className="text-black w-full resize-none outline-none text-sm py-1 px-2 rounded-md"
              ></textarea>
            </label>

            <button className="bg-[#FF9900] mt-[0.5rem] text-[1.2rem] px-10 py-[0.1rem] rounded-md">
              Enviar
            </button>
          </form>

          <div className="flex flex-col flex-wrap items-center justify-center gap-y-12">
            <div className="flex flex-col items-center justify-center gap-y-4">
              <div className="shadow-xl bg-white aspect-square rounded-[50%] p-3 ">
                <img src={emailIcon} className="w-9 " alt="Icono de  Email" />
              </div>

              <button
                onClick={() => {
                  const copiarCont = document.getElementById(
                    "copiar-icon"
                  ) as HTMLImageElement;

                  const range = document.createRange();
                  range.selectNodeContents(
                    copiarCont.parentElement!.firstChild!
                  );
                  const selection = window.getSelection();
                  selection?.removeAllRanges();
                  selection?.addRange(range);
                  document.execCommand("copy");
                  selection?.removeAllRanges();

                  copiarCont.src = "/public/images/svg/copiedIcon.svg";
                  setTimeout(() => {
                    copiarCont.src = "/public/images/svg/CopiarIcon.svg";
                  }, 2000);
                }}
                className="shadow-xl flex flex-wrap items-center justify-center gap-x-3 bg-white px-3 py-2 rounded-md"
              >
                juanchavezsaldana1@gmail.com
                <img
                  id="copiar-icon"
                  title="Copiar"
                  className="w-6 transition-all "
                  src={copyIcon}
                  alt="icono de copiar"
                />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-4">
              <div className="shadow-xl bg-white aspect-square rounded-[50%] p-3 ">
                <img
                  src={whatsappIcon}
                  className="w-9"
                  alt="Icono de WhatsApp"
                />
              </div>

              <a href="https://api.whatsapp.com/send?phone=51961863783">
                <button className="shadow-xl flex items-center justify-center gap-x-3 bg-white px-3 py-1 rounded-md">
                  Contactar
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <style>{`

        #contact-section{
          height: ${contactElementsHeight * 1.45}px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: ${contactElementsHeight * 1.5 * 0.12}px;
          padding-bottom: ${contactElementsHeight * 1.5 * 0.02}px;
          row-gap: 2.5rem;
          align-items:center;                   
        }

        @keyframes copied{
          from{}
          to{}
        }

      `}</style>
    </>
  );
};

export default ContactSection;
