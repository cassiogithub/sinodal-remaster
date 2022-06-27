import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Container } from "./components/shared/Container";
import { Video } from "./components/Video";

export function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Video />
        <Footer />
      </Container>
    </div>
  )
}
