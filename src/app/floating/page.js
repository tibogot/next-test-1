import {
  Floating1,
  Floating2,
  Floating3,
  Floating4,
  Floating5,
  Floating6,
  Floating7,
  Floating8,
} from "@/data";
import Image from "next/image";

export default function Floating() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-white">
      {/* Plane 1 */}
      <div className="plane absolute inset-0">
        <Image
          alt="image"
          src={Floating1}
          width={300}
          className="absolute [top:10%] [left:5%]"
        />
        <Image
          alt="image"
          src={Floating2}
          width={300}
          className="absolute [top:30%] [left:40%]"
        />
        <Image
          alt="image"
          src={Floating7}
          width={225}
          className="absolute [top:60%] [left:80%]"
        />
      </div>

      {/* Plane 2 */}
      <div className="plane absolute inset-0">
        <Image
          alt="image"
          src={Floating4}
          width={250}
          className="absolute [top:15%] [left:70%]"
        />
        <Image
          alt="image"
          src={Floating6}
          width={200}
          className="absolute [top:50%] [left:20%]"
        />
        <Image
          alt="image"
          src={Floating8}
          width={225}
          className="absolute [top:75%] [left:50%]"
        />
      </div>

      {/* Plane 3 */}
      <div className="plane absolute inset-0">
        <Image
          alt="image"
          src={Floating3}
          width={150}
          className="absolute [top:20%] [left:30%]"
        />
        <Image
          alt="image"
          src={Floating5}
          width={200}
          className="absolute [top:65%] [left:10%]"
        />
      </div>
    </main>
  );
}
