import {Divider} from "@nextui-org/react";
import InputouptutLink from "@/components/InputoutputLink";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col">
      <div>
        <h1 className="text-3xl w-4/5 md:text-5xl md:w-2/5 font-black text-center mx-auto mt-20">Empower Your Influence with <span className="text-cyan-700">Every Link</span></h1>
        <p className="text-lg w-4/5 md:text-xl mdw-2/5 mx-auto mt-5 md:mt-10 text-center">Welcome to linkshortner app – Where Every Link Tells a Story</p>

        <Divider className="my-10 w-3/5 mx-auto" />

        <InputouptutLink />
      </div>
      <div className="mt-auto">
        <Divider className="W-full bg-gray-200" />
        <p className="text-center text-gray-300 my-5">api projects By Lentzy R. Philias</p>
      </div>
    </main>
  )
}
