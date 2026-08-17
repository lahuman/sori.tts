import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "SoriTTS — 내 PC에서 만드는 한국어 음성";
const description =
  "인터넷 연결과 로그인 없이 Windows PC에서 바로 사용하는 무료 오프라인 한국어 TTS 앱입니다.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");
  const image = host
    ? new URL("/og-v2.png", `${protocol}://${host}`)
    : new URL("https://lahuman.github.io/sori-tts-web/og-v2.png");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image, width: 1792, height: 896, alt: "SoriTTS 오프라인 한국어 TTS" }],
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

