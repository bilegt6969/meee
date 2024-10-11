import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <section className="relative">
        <Image
          width={1920}
          height={1080}
          src="/bg.jpg"
          alt="Background image"
          className="relative h-screen -top-16 w-full object-cover brightness-50"
        />
        <div className="absolute top-1/3 left-5 md:left-[10%] text-left">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-4 text-white uppercase">
            Careers
          </h1>
          <p className="font-thin max-w-[85%] md:max-w-[70%] lg:max-w-[40%] text-base md:text-lg text-white leading-relaxed">
            We invest heavily in learning and development opportunities and
            believe in supporting and growing our people in their professional
            development, ensuring they have industry-leading standards of
            training and competence.
          </p>
        </div>
      </section>

      <section className="bg-[#f0f0f0] mt-[-4rem] text-black py-16 md:py-32 px-4 space-y-16">
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="flex flex-col md:flex-row w-full justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="text-left flex flex-col items-center md:items-start md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-extrabold">
                Employment <br />{" "}
                <span className="text-blue-800">Policies</span>
              </h1>
            </div>

            <div className="text-base md:text-lg text-left md:w-1/2">
              <p>
                We ensure fair and transparent recruitment practices. All
                applicants are provided with equal opportunities. Our
                recruitment process begins with a position being identified and
                defined. Positions are announced on our website under{" "}
                <Link
                  className="underline"
                  href="https://onsite.dcm.mn/hr/vacancy"
                >
                  https://onsite.dcm.mn/hr/vacancy
                </Link>
                .
              </p>
              <p className="mt-4">
                Dayan does not use headhunters to select candidates and never
                charges a fee for the submission of an application.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="text-left flex flex-col items-center md:items-start md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-extrabold">
                False Recruitment <br />{" "}
                <span className="text-blue-800">Offers</span>
              </h1>
            </div>

            <div className="text-base md:text-lg text-left md:w-1/2">
              <p>
                Please be aware that Dayan Contract Mining LLC does not employ
                or work with any mediating individuals to recruit our employees
                and contractors. If approached by an individual who claims they
                can help you get a job with Dayan for a fee, do not trust and do
                not use their service. There is no fee or payment involved when
                you apply for a job with Dayan.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="text-left flex flex-col items-center md:items-start md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-extrabold">
                Current <br />{" "}
                <span className="text-blue-800">Vacancies</span>
              </h1>
            </div>

            <div className="text-base md:text-lg text-left md:w-1/2">
              <p>
                For Dayan Contract Mining LLC’s current vacancies for Mongolian
                nationals, please follow the link below.{" "}
                <Link
                  className="underline"
                  href="https://onsite.dcm.mn/hr/vacancy"
                >
                  https://onsite.dcm.mn/hr/vacancy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[10vh] bg-white w-full"></div> {/* Fixed bg-white */}
    </div>
  );
}
