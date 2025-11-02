import { useState, useMemo, memo } from "react";

type Props = {
  videoId: string;
  title?: string;
  width?: number | string;
  height?: number | string;
  autoplay?: boolean;
  privacy?: boolean;
  subtle?: boolean;
};

const YouTubeEmbed = memo(({
  videoId,
  title = "Video",
  width = "100%",
  height = "100%",
  autoplay = false,
  privacy = true,
  subtle = true,
}: Props) => {
  const [hasClicked, setHasClicked] = useState(false);
  const shouldShowVideo = autoplay || hasClicked;

  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const domain = privacy ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";

  const src = useMemo(() => {
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      controls: "1",
      showinfo: "0",
      loop: "0",
      playsinline: "1",
      fs: "1",
      enablejsapi: "1",
      ...(autoplay ? { autoplay: "1", mute: "1" } : {}),
    }).toString();
    return `${domain}/embed/${videoId}?${params}`;
  }, [domain, videoId, autoplay]);

  return (
    <div style={{ width, height, position: "relative", overflow: "hidden", borderRadius: 8 }} aria-label={title}>
      {shouldShowVideo ? (
        <iframe
          title={title}
          width="100%"
          height="100%"
          src={src}
          loading="eager"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: "block", width: "100%", height: "100%", border: 0 }}
        />
      ) : (
        <button onClick={() => setHasClicked(true)} aria-label={`Play ${title}`} style={{ width: "100%", height: "100%", padding: 0, border: 0, background: "transparent", cursor: "pointer" }}>
          <img src={thumb} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: subtle ? "grayscale(20%) contrast(90%)" : undefined }} />
        </button>
      )}
    </div>
  );
});

YouTubeEmbed.displayName = "YouTubeEmbed";

export default YouTubeEmbed;
