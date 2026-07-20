import Image from "next/image";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "We had five apps open just to run one product launch. Now it's one dashboard, and nothing falls through the cracks.",
    name: "Priya Nair",
    role: "Head of Product, Loomstack",
    img: "https://i.pravatar.cc/80?img=32",
  },
  {
    quote:
      "Setting a goal for every group changed how we run meetings. Progress is visible, so status updates basically write themselves.",
    name: "Marcus Webb",
    role: "Ops Lead, Fieldnote",
    img: "https://i.pravatar.cc/80?img=15",
  },
  {
    quote:
      "Our support team lives in WhatsApp and email. Nook finally put both in the same place our managers actually look.",
    name: "Elena Cho",
    role: "Customer Ops, Harbor & Co.",
    img: "https://i.pravatar.cc/80?img=48",
  },
];

export default function Testimonials() {
  return (
    <section className="pad" id="testimonials">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot"></span>Stories
          </div>
          <h2>Teams that found their rhythm</h2>
          <p>A few of the groups running their week through Nook.</p>
        </Reveal>

        <div className="test-grid">
          {testimonials.map((t) => (
            <Reveal className="test-card" key={t.name}>
              <p className="test-quote">&quot;{t.quote}&quot;</p>
              <div className="test-who">
                <Image
                  className="avatar"
                  src={t.img}
                  alt={t.name}
                  width={42}
                  height={42}
                />
                <div>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
