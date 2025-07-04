import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/up.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Introduction</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          👋 Hey there! I'm a <span className="font-extrabold">full stack developer</span> based in <span className="font-extrabold">Toronto, Canada</span> with a <span className="font-extrabold">Bachelors and Master's in Computer Science</span> and  <span className="font-extrabold">15+ years of experience</span> building high-performance, scalable, and reliable software - basically, digital skyscrapers(if I am not being too humble 😃) that don't fall over. I am currently working at <span className="font-extrabold">ACV Auctions since March 2023</span>.
        </p>
        <p>
          Over the years, I've worn many hats: <span className="font-extrabold">system-designer, coder, team lead</span>, and ocassionaly as the guy who ends up fixing that one mysterious bug at 2 AM. I've successfully led tight-knit teams (3-5 devs). Worked at mega-scale players like <span className="font-extrabold">Bank of America and JPMorgan</span>(where the coffee budget was bigger than the dev team...sometimes), (more than)scrappy startups - <span className="font-extrabold">SecurityScorecard</span> and ambitious scaleups.
        </p>
        <p>
          My go-to stack? <span className="font-extrabold">Python</span>, <span className="font-extrabold">React</span>, <span className="font-extrabold">TypeScript</span> and <span className="font-extrabold">NodeJS</span>. But if the job calls for <span className="font-extrabold">C#</span>, <span className="font-extrabold">Java</span>, <span className="font-extrabold">C++</span>, or deciphering ancient code left behind by developers of yore—I'm game. I'm a quick learner, endlessly curious, and have dabbled in <span className="font-extrabold">AI</span> projects (some of which actually worked! 🎉).
        </p>
        <p>
          When I'm not coding 👨🏻‍💻, you'll probably find me reading(learning) or getting way too competitive in a friendly game of volleyball🏐.
        </p>
      </div>
    </section>
  );
}
