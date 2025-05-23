import Image from 'next/image';

const iconData = [
  {
    img: '/images/best-quality.png',
    title: 'BEST QUALITY',
    desc: 'Your one-stop online marketplace for fresh, quality products delivered to your door.',
  },
  {
    img: '/images/online-payment.png',
    title: 'ONLINE PAYMENT',
    desc: 'Seamlessly pay for your products with our secure and convenient online payment system.',
  },
  {
    img: '/images/fast-delivery.png',
    title: 'FAST DELIVERY',
    desc: 'Fresh products delivered fast to your doorstep—shop conveniently online!',
  },
];

export default function ThreeIconsSection() {
  return (
    <div className="pb-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center block-3icon">
      {iconData.map((info, i) => (
        <div key={i}>
          <div className="mx-auto w-36 h-36 bg-white border border-orange-500 rounded-full flex items-center justify-center text-orange-600 text-3xl uppercase">
            <Image src={info.img} alt={info.title} width={80} height={80} />
          </div>
          <h3 className="font-bold mt-2 mb-2 text-black">{info.title}</h3>
          <p className="text-sm text-gray-700">{info.desc}</p>
        </div>
      ))}
    </div>
  );
}
