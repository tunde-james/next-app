import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from '@react-email/components';
import { CSSProperties } from 'react';

function WelcomeTemplate({ name }: { name: string }) {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body style={body} className="bg-white">
          <Container>
            <Text style={heading} className="font-bold text-3xl">
              Hello {name}
            </Text>
            <Link href="https://www.codewithmosh.com">
              www.codewithmosh.com
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

const body: CSSProperties = {
  backgroundColor: '#fff',
};

const heading: CSSProperties = {
  fontSize: '32px',
};

export default WelcomeTemplate;
