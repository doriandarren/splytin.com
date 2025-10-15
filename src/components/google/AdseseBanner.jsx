import { useEffect } from "react";

export default function AdsenseBanner({
  slot = "TU_SLOT_ID",
  style = { display: "block" },
  format = "auto",
  responsive = "true",
}) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-6307307077846876"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    />
  );
}
