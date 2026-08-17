import type { Metadata } from "next";
import "./globals.css";

const title = "SoriTTS — 내 PC에서 만드는 한국어 음성";
const description =
  "인터넷 연결과 로그인 없이 Windows PC에서 바로 사용하는 무료 오프라인 한국어 TTS 앱입니다.";
const repository =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "sori.tts";
const siteUrl = `https://lahuman.github.io/${repository}/`;
const socialImage = `${siteUrl}og-v2.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    images: [
      {
        url: socialImage,
        width: 1792,
        height: 896,
        alt: "SoriTTS 오프라인 한국어 TTS",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

