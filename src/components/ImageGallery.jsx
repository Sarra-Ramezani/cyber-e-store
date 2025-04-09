import ps5 from "../assets/images/banner3-ps5.png";

export default function ImageGallery() {
  const products = [
    {
      images: [ps5, ps5, ps5, ps5],
      name: "Apple iPhone 14 Pro Max",
      orgPrice: 1499,
      discountedPrice: 1399,
      color: "black",
      ram: "16GB",
      screenSize: "6.7",
      CPU: "Apple A16 Bionic",
      numOfCores: 6,
      mainCam: "48-12-12 MP",
      frontCam: "12 MP",
      batteryCapacity: "4323 mAh",
      shortDescription:
        "Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...",
      details:
        "Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.",
      resolution: "2796x1290",
      refreshRate: "120 Hz",
      pixelDensity: "460 ppi",
      screenType: "OLED",
      additions:
        "Dynamic IslandAlways-On displayHDR displayTrue ToneWide color (P3)",

      rating: 4.8,
    },
    {
      images: [ps5, ps5, ps5, ps5],
      name: "PS5",
      orgPrice: 1499,
      discountedPrice: 1399,
      color: "white",
      ram: "32GB",
      screenSize: "6.7&#34",
    },
  ];
  //   const product = {
  //     images: [ps5, ps5, ps5, ps5],
  //     name: "Apple iPhone 14 Pro Max",
  //     orgPrice: 1499,
  //     discountedPrice: 1399,
  //     color: "black",
  //     ram: "16GB",
  //     screenSize: "6.7",
  //   };
  return (
    <>
      {/* selected pic */}
      <div></div>
      {/* gallery pics */}
      <div></div>
    </>
  );
}
