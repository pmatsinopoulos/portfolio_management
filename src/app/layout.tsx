"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { Col, Container, Row } from "react-bootstrap";
import useSystemColorMode from "@/customHooks/useSystemColorMode";
import "bootstrap/dist/css/bootstrap.min.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const colorMode = useSystemColorMode();

  return (
    <html lang="en" data-bs-theme={colorMode}>
      <body>
        <Container>
          <Row>
            <Col>
              <Providers>{children}</Providers>
            </Col>
          </Row>
        </Container>
      </body>
    </html>
  );
}
