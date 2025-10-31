import React, { useState, useEffect } from "react";

type Props = {
  videoId: string;
  title?: string;
  width?: number | string;
  height?: number | string;
  autoplay?: boolean;
  privacy?: boolean;
  subtle?: boolean;
};

export default function YouTubeEmbed({
  videoId,
  title = "Video",
  width = "100%",
  height = "100%",
  autoplay = false,
  privacy = true,
  subtle = true,
}: Props) {
  const [playing, setPlaying] = useState(Boolean(autoplay));
  useEffect(() => {
    if (autoplay) setPlaying(true);
  }, [autoplay]);

  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const domain = privacy ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    controls: "1",
    showinfo: "0",
    ...(autoplay ? { autoplay: "1", mute: "1" } : {}),
  }).toString();
  const src = `${domain}/embed/${videoId}?${params}`;

  return (
    <div style={{ width, height, position: "relative", overflow: "hidden", borderRadius: 8 }} aria-label={title}>
      {playing ? (
        <iframe
          title={title}
          width="100%"
          height="100%"
          src={src}
          frameBorder="0"
          loading="eager"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: "block", width: "100%", height: "100%", border: 0 }}
        />
      ) : (
        <button onClick={() => setPlaying(true)} aria-label={`Play ${title}`} style={{ width: "100%", height: "100%", padding: 0, border: 0, background: "transparent" }}>
          <img src={thumb} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: subtle ? "grayscale(20%) contrast(90%)" : undefined }} />
        </button>
      )}
    </div>
  );
}
