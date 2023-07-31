import "./globals.css";

type Props = {
  children: JSX.Element;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div>🔥Common layout for the whole APP🔥</div>
          {children}
        </div>
      </body>
    </html>
  );
}
