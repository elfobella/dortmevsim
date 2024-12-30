import { Mail, Map, MapPin, Phone } from "lucide-react";
import GoogleMap from "./GoogleMap";

export default function Contact() {
  return (
    <section id="contact">
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex p-4 flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <GoogleMap
              lat={40.76685930984557}
              lng={29.905802731524748}
              zoom={19}
            />
          </div>
          <div className="flex flex-col ">
            <h3 className="text-3xl mb-4 font-bold">
              Bizimle İletişime Geçin:
            </h3>
            <div className="flex text-lg flex-col gap-2 w-1/2">
              <div className="border-b border-black pb-1">
                <MapPin className="w-5 h-5 text-[#be6c30]" />
                <p>
                  Zabıtan, istanbul karayolu cad, E5 ÜSTÜ No92/2.b, 41100
                  İzmit/Kocaeli
                </p>
              </div>
              <div className="border-b border-black pb-1">
                <Phone className="w-5 h-5 text-[#be6c30]" />
                <p>0552 008 31 37</p>
              </div>
              <div className="border-b border-black pb-1">
                <Mail className="w-5 h-5 text-[#be6c30]" />
                <p>dortmevsimakumarket@gmail.com</p>
              </div>
              <div className="border-b border-black pb-1">
                <Map className="w-5 h-5 text-[#be6c30]" />
                <a href="https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14cb455ee2edd8a5:0x15dd8203e8d684af">
                  KONUMDA AÇ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
