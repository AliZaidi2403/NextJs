import { url } from "inspector";
import Image from "next/image";
export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-slate-500 rounded-full mx-auto mt-8"
        src="/images/Ronny.webp"
        width="200"
        height="200"
        alt="my Name"
        priority={true}
      />
    </section>
  );
}
