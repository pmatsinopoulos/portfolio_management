import { Metadata } from "next";
import { Col, Container, Row } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Manage your Blockchain Assets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

import "bootstrap/dist/css/bootstrap.min.css";
