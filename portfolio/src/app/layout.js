import "./index.scss";

export const metadata = {
  title: "My Page",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
