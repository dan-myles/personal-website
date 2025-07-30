import Link from "next/link";

export default function Home() {
  return (
    <main className="px-18 py-10 md:px-48 md:py-24 w-full text-white relative z-10" style={{ fontFamily: '"Fira Code", monospace' }}>
      <section className="grid grid-cols-[20vw_1fr] gap-10">
        <p className="font-semibold text-right">DANIEL MYLES AGUILERA</p>
        <div>
          <p>EXPERIENCED SOFTWARE ENGINEER</p>
          <p>MULTI-DISCIPLINARY CREATIVE</p>
          <p>LOVING DOG FATHER</p>
        </div>

        <p className="font-semibold text-right">CURRENT</p>
        <div>
          <p>
            FULL STACK DEVELOPER
            <span className="text-sm"> - ALCOVE RIDGE CONSULTING</span>
          </p>
        </div>

        <p className="font-semibold text-right">PAST</p>
        <div>
          <p>
            SOFTWARE ENGINEER INTERN
            <span className="text-sm"> - ALCOVE RIDGE CONSULTING</span>
          </p>
          <p>
            SOFTWARE ENGINEER INTERN
            <span className="text-sm"> - ASU</span>
          </p>
        </div>

        <p className="font-semibold text-right">AWARDS</p>
        <div>
          <p>
            ASU STUDENT EMPLOYEE OF THE YEAR
          </p>
          <p>
            ASU TECHNOLOGY AND INNOVATION AWARD
          </p>
        </div>

        <p className="font-semibold text-right">EDUCATION</p>
        <div>
          <p>
            B.S. COMPUTER SCIENCE
            <span className="text-sm"> - ASU</span>
          </p>
        </div>

        <p className="font-semibold text-right">CONTACT</p>
        <div className="flex flex-col">
          <Link href="mailto:me@danmyles.com" target="_blank">
            ME@DANMYLES.COM
          </Link>
          <Link href="https://linkedin.com/in/dan-myles" target="_blank">
            LINKEDIN
          </Link>
          <Link href="https://github.com/dan-myles" target="_blank">
            GITHUB
          </Link>
          <Link href="https://x.com/danmyles_" target="_blank">
            TWITTER
          </Link>
          <Link href="https://www.instagram.com/danmyles" target="_blank">
            INSTAGRAM
          </Link>
        </div>
      </section>
    </main>
  );
}
