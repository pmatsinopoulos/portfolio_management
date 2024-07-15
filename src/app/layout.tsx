"use client";

import { Col, Container, Row } from "react-bootstrap";
import useSystemColorMode from "@/customHooks/useSystemColorMode";
import "bootstrap/dist/css/bootstrap.min.css";

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
            <Col>{children}</Col>
          </Row>
        </Container>
      </body>
    </html>
  );
}
